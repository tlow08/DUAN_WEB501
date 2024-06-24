import { createContext, useEffect, useState } from "react";
import instance from "../axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          /*
                    Dung cach nay khi da co api/endpoint de kiem tra token
                    const {data} = await instance.get("/me",{
                    headers:{
                        Authorization : `Bearer ${token}`,
                    },
                    });
                    */
          //    Dung cach nay khi chua co api/endpoint de kiem tr token
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
      value={{ isAuthenticated, user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider ;