// Localização: src/app/dashboard-layout.tsx

import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

// Este componente servirá como o "molde" para as nossas páginas da dashboard.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar />
      {/* A <main> agora envolve todo o conteúdo à direita da sidebar */}
      <main className="ml-16 md:ml-20">
        <TopBar />
        {/* O conteúdo da página (children) será inserido aqui com um padding */}
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
