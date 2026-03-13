"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

// Componente que protege rotas verificando o token de autenticação
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simula verificação de token (pode ser chamada a uma API se necessário)
    if (!token) {
      // sem token, redireciona para /login
      router.replace("/login");
    } else {
      // usuário autenticado
      setLoading(false);
    }
  }, [token, router]);

  if (loading) {
    // estado de carregamento para evitar "piscar" da página protegida
    return <p>Carregando...</p>;
  }

  return <>{children}</>;
}
