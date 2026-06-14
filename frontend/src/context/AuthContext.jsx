import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create Context
export const AuthContext = createContext(null);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/auth/refresh", {
          withCredentials: true,
        });

        setAuth({
          accessToken: res.data.accessToken,
          role: res.data.role,
        });
      } catch (error) {
        console.error("Auth check failed:", error);
        setAuth(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};