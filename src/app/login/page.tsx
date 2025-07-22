// Localização: src/app/login/page.tsx (ATUALIZADO)

'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validação removida: não verifica mais os termos
    if (!username || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const success = await login(username, password);

    if (!success) {
      setError("Usuário ou senha inválidos. (Tente: admin/123)");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-200 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center p-10 bg-white">
          <Image
            src="/logo.png"
            alt="Logo do Projeto CID"
            width={120}
            height={120}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold text-center mb-2 text-green-900">
            Bem-vindo ao Projeto CID
          </h1>
          <p className="text-center text-gray-700 max-w-sm">
            Uma plataforma moderna, sustentável e segura para seus dados.
          </p>
        </div>
        <div className="flex flex-col justify-center p-10 bg-gray-50">
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border px-4 py-2 rounded text-gray-900 placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-4 py-2 rounded text-gray-900 placeholder-gray-500"
            />
            
            {/* REMOVIDO: Checkbox e legenda dos termos de uso */}

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Entrar
            </button>
            <p className="text-sm text-center text-gray-600">
              Ainda não tem conta?{" "}
              <Link href="/register" className="text-blue-700 underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
