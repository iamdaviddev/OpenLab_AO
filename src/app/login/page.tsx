"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { setToken } = useAuth();
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // aqui você faria a chamada de autenticação e
    // receberia um token real da API. Para demo, usamos o valor do input
    setToken(input);
    router.push("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="token..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
