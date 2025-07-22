// Localização: src/app/culturas/page.tsx (ATUALIZADO)

"use client"; // Esta página também precisa de ser um Client Component

import DashboardLayout from "../dashboard-layout";
import { CultureDashboard } from "@/components/CultureDashboard";
import { useAuth } from "@/contexts/AuthContext"; // 1. Importa o hook de autenticação

export default function CulturasPage() {
  const { isAuthenticated, isLoading } = useAuth(); // 2. Usa o hook

  // 3. Enquanto carrega ou se não estiver autenticado, não mostra nada
  if (isLoading || !isAuthenticated) {
    return <div className="flex h-screen w-full items-center justify-center">Carregando...</div>;
  }

  // 4. Se estiver autenticado, mostra a página da galeria
  return (
    <DashboardLayout>
      <CultureDashboard />
    </DashboardLayout>
  );
}
