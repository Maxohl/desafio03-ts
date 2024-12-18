import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(""); // State for password
  const { isLoggedIn, login } = useContext(AppContext);
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/conta/1");
    return null;
  }

  const handleLogin = () => {
    if (email && password) {
      login(email, password); // Pass email and password to login function
      navigate("/conta/1");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <h1>Login</h1>
        </Center>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password" // Mask the input for password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Center>
          <DButton onClick={handleLogin} />
        </Center>
      </Card>
    </Box>
  );
};

export default Login;
