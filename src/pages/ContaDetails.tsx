import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { Center, Box, Spinner, Text, Flex } from "@chakra-ui/react"; // Assuming Chakra UI is used
import { api } from "../api"; // API mock

const ContaDetails = () => {
  const { isLoggedIn } = useContext(AppContext);
  const [accountData, setAccountData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Redirect if user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    // Fetch account details
    const fetchData = async () => {
      try {
        const data = await api;
        setAccountData(data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn, navigate]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  if (!accountData) {
    return (
      <Center height="100vh">
        <Text color="red.500">Erro ao carregar os dados da conta.</Text>
      </Center>
    );
  }

  return (
    <Flex justifyContent="center" paddingTop="80px">
      <Box
        width="400px"
        padding="20px"
        boxShadow="lg"
        borderRadius="md"
        backgroundColor="white"
      >
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Detalhes da Conta
        </Text>
        <Text><strong>Nome:</strong> {accountData.name}</Text>
        <Text><strong>Email:</strong> {accountData.email}</Text>
        <Text><strong>Saldo:</strong> R$ {accountData.balance.toFixed(2)}</Text>
      </Box>
    </Flex>
  );
};

export default ContaDetails;