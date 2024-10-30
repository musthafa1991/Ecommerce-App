import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user")
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user?.token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [user, isAuthenticated]);

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error.response.data);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      let { token } = response.data.user;
      setUser(response.data.user);
      setIsAuthenticated(true);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response.data);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
