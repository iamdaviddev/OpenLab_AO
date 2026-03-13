"use client";

import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";

// Componente cliente que simplesmente envolve a árvore de componentes
// com o AuthProvider. Existe porque layouts server não podem importar
// hooks/contexts cliente diretamente.
export default function AuthProviderWrapper({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
