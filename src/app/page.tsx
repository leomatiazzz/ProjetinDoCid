// Localização: src/app/page.tsx (ATUALIZADO)

"use client";

import DashboardLayout from "./dashboard-layout";
import { StatusCards } from "@/components/StatusCards";
import { Tasks } from "@/components/Tasks";
import { SensorChart } from "@/components/SensorChart";
import { useAuth } from "@/contexts/AuthContext";

export default function HomePage() {
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
      {/* Container principal alterado para uma grade com 3 colunas em telas grandes.
        - A primeira parte (cards e gráfico) ocupará 2 colunas.
        - A segunda parte (tarefas) ocupará 1 coluna.
        - 'items-start' alinha os itens no topo da grade.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Coluna da Esquerda (ocupa 2 de 3 colunas) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <StatusCards />
          <SensorChart />
        </div>

        {/* Coluna da Direita (ocupa 1 de 3 colunas) */}
        <div className="lg:col-span-1">
          <Tasks />
        </div>
      </div>
    </DashboardLayout>
  );
}
