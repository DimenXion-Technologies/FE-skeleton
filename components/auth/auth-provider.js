"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Authentication error:", err);
        setError("Failed to authenticate. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const isAuthRoute = pathname.startsWith("/auth");
      const isDashboardRoute = [
        "/dashboard",
        "/blood-inventory",
        "/certificates",
        "/approvals",
        "/hospitals",
        "/patients",
        "/analytics",
        "/settings",
      ].some((route) => pathname.startsWith(route));

      if (!user && isDashboardRoute) {
        router.push("/auth/signin");
      } else if (user && isAuthRoute) {
        router.push("/dashboard");
      }
    }
  }, [user, isLoading, pathname, router]);

  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      const mockUser = {
        id: "user_1",
        name: "Dr. John Doe",
        email,
        role: "doctor",
        hospital: "Government General Hospital, Delhi",
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      router.push("/dashboard");
    } catch (err) {
      console.error("Sign in error:", err);
      setError("Sign-in failed. Please check your credentials.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth/signin");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
