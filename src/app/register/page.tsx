"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario || !email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, email, senha }),
    });

    if (res.ok) {
      alert("Cadastro realizado com sucesso!");
      router.push("/login");
    } else {
      const data = await res.json();
      alert(`Erro ao registar: ${data.error || "Tente novamente."}`);
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
            Cadastre-se para acessar uma plataforma moderna, sustentável e
            segura.
          </p>
        </div>

        <div className="flex flex-col justify-center p-10 bg-gray-50">
          <form onSubmit={handleRegister} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="border px-4 py-2 rounded text-gray-900 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-4 py-2 rounded text-gray-900 placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border px-4 py-2 rounded text-gray-900 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition mb-2"
            >
              Cadastrar
            </button>

            <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
              <Link
                href="/login"
                className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Já tenho uma conta!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
