// Localização: src/app/page.tsx (ATUALIZADO)

import DashboardLayout from "./dashboard-layout";
import { StatusCards } from "@/components/StatusCards";
import { Tasks } from "@/components/Tasks";
import { SensorChart } from "@/components/SensorChart";

export default function HomePage() {
  return (
    <DashboardLayout>
      {/* Container principal que organiza as seções verticalmente */}
      <div className="flex flex-col gap-8">
        
        {/* --- Seção 1: Status Cards (Ocupa a largura total no topo) --- */}
        <div>
          <StatusCards />
        </div>

        {/* --- Seção 2: Gráfico e Tarefas (Dividido em duas colunas) --- */}
        {/* Este grid garante que o Gráfico e as Tarefas comecem na mesma altura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Coluna do Gráfico */}
          <div>
            <SensorChart />
          </div>

          {/* Coluna das Tarefas */}
          <div>
            <Tasks />
          </div>
          
        </div>

      </div>
    </DashboardLayout>
  );
}
