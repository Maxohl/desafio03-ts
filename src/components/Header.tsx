import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

export const Header = () => {
  const { isLoggedIn, logout } = useContext(AppContext); 
  const navigate = useNavigate();

  return (
    <Flex backgroundColor="orange" padding="5px">
      <Box>
        <Center>
          <Text fontSize="3xl">Dio Bank</Text>
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button
            colorScheme="red"
            onClick={() => logout()} // Calling logout from context
          >
            Sair
          </Button>
        </>
      )}
    </Flex>
  );
};
