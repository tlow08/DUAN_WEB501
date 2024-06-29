import { createContext, useEffect, useState } from "react";
import instance from "../axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const { data } = await instance.get("/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          setIsAuthenticated(true);
        } catch (error) {
          console.log(error);
          setIsAuthenticated(false);
          setUser(null);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await instance.post("/login", { email, password });
      localStorage.setItem("token", data.accessToken);
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };
  const register = async (email, password, confirmPass) => {
    try {

      const existingUser = await instance.get(`/users?email=${email}`);
      if(existingUser.data.length > 0){
        alert("Email already exists");
        return;
      }
      const { data } = await instance.post("/register", { email, password, confirmPass });
      localStorage.setItem("token", data.accessToken);
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, register, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider ;