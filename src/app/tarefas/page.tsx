// Localização: src/app/tarefas/page.tsx

"use client";

import DashboardLayout from "../dashboard-layout";
import { Tasks } from "@/components/Tasks";
import { useAuth } from "@/contexts/AuthContext";

export default function TarefasPage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Carregando...
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Gerenciador de Tarefas do Robô
        </h1>
        {/* Podemos reutilizar o componente Tasks ou criar um mais elaborado aqui */}
        <Tasks />
      </div>
    </DashboardLayout>
  );
}
