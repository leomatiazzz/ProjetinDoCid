// Localização: src/app/page.tsx (ATUALIZADO)

"use client"; // Esta página agora precisa ser um Client Component para usar o hook de proteção

import DashboardLayout from "./dashboard-layout";
import { StatusCards } from "@/components/StatusCards";
import { Tasks } from "@/components/Tasks";
import { SensorChart } from "@/components/SensorChart";
import { useAuth } from "@/contexts/AuthContext"; // 1. Importa o hook de autenticação

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth(); // 2. Usa o hook

  // 3. Enquanto carrega ou se não estiver autenticado, não mostra nada
  if (isLoading || !isAuthenticated) {
    return <div className="flex h-screen w-full items-center justify-center">Carregando...</div>;
  }

  // 4. Se estiver autenticado, mostra a dashboard
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <StatusCards />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SensorChart />
          </div>
          <div>
            <Tasks />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
