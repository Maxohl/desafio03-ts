import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage, setToLocalStorage, changeLocalStorage } from "../services/storage";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface IAppContext {
  user: string | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storage = getAllLocalStorage();
    
  
    if (storage) {
      const { login, user } = JSON.parse(storage);
      setIsLoggedIn(login);
      setUser(user || null);
  
      // Redirect only if the current path is "/"
      if (location.pathname === "/") {
        navigate("/conta/1");
      }
    }
  }, [navigate]);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const data: any = await api; 
      if (email === data.email && password === data.password) {
        setIsLoggedIn(true);
        setUser(data.name); 
        setToLocalStorage({ login: true, user: data.name });
        navigate("/conta/1"); // Redirect to account page after login
      } else {
        alert("Email ou Senha invalidos");
      }
    } catch (error) {
      console.error("Erro de login:", error);
      alert("Ocorreu um erro, por favor tente novamente.");
    }
  };

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    setUser(null);
    setToLocalStorage({ login: false, user: null });
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
