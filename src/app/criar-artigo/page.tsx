"use client";

import { ProtectedRoute } from "../../components/ProtectedRoute";

export default function CriarArtigoPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Criar Artigo</h1>
        <p>Aqui vai o formulário para criar um novo artigo.</p>
      </div>
    </ProtectedRoute>
  );
}
