"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  passwordChangeRequest,
  newPasswordRequest,
} from "@/apis/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("user"));
    if (authUser) {
      setUser(authUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleUserUpdate = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signUp = async (user) => {
    setLoading(true);
    try {
      const res = await registerRequest(user);
      handleUserUpdate(res.data.payload);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error.response.data);
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (user) => {
    setLoading(true);
    try {
      const res = await loginRequest(user);
      handleUserUpdate(res.data.payload);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await logoutRequest();
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const passwordChange = async (data) => {
    setLoading(true);
    try {
      const res = await passwordChangeRequest(data);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
      return error?.response?.data;
    } finally {
      setLoading(false);
    }
  };

  const newPassword = async (tid, data) => {
    setLoading(true);
    try {
      const res = await newPasswordRequest(tid, data);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data);
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errors?.error?.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        user,
        loading,
        isAuthenticated,
        errors,
        logout,
        passwordChange,
        newPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;