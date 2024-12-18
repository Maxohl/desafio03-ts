import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";
import ContaDetails from "./pages/ContaDetails";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  console.log("isLoggedIn = ", isLoggedIn)

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/conta/:id/details" element={ <ContaDetails /> } />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/infoconta" element={<ContaInfo />} />
      
    </Routes>
  );
};

export default MainRoutes;
