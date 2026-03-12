"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Definição da forma do contexto de autenticação
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider que envolve a aplicação e disponibiliza o estado de autenticação
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  // No mount, tentamos recuperar o token do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("auth_token");
    if (stored) {
      setToken(stored);
    }
  }, []);

  // Sempre que o token mudar, atualizamos o localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook utilitário para acessar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
