"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode"; // import default, bukan { jwtDecode }

const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  user: null,
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove("access_token");
  };

  const validateToken = (storedToken) => {
    if (!storedToken) {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }

    try {
      const decoded = jwtDecode(storedToken);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decoded.exp < currentTime) {
        console.warn("Token expired, logging out...");
        logout();
      } else {
        setIsAuthenticated(true);
        setUser(decoded);

        // Auto logout saat token expired
        const timeout = (decoded.exp - currentTime) * 1000;
        setTimeout(() => {
          console.warn("Token expired, logging out...");
          logout();
        }, timeout);
      }
    } catch (error) {
      console.error("Invalid token:", error);
      logout();
    }
  };

  useEffect(() => {
    validateToken(token);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, user, logout, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
