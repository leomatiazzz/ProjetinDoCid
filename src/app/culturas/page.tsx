"use client";

import DashboardLayout from "../dashboard-layout";
import { CultureDashboard } from "@/components/CultureDashboard";
import { useAuth } from "@/contexts/AuthContext";

export default function CulturasPage() {
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
      <CultureDashboard />
    </DashboardLayout>
  );
}
