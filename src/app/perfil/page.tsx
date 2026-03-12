"use client";

import { ProtectedRoute } from "../../components/ProtectedRoute";

export default function PerfilPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Meu Perfil</h1>
        <p>Informações do usuário autenticado.</p>
      </div>
    </ProtectedRoute>
  );
}
