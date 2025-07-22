// Localização: src/components/Sidebar.tsx (ATUALIZADO)

"use client";
import { Home, ListChecks, Leaf, Users, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext"; // 1. Importa

export function Sidebar() {
  const { logout } = useAuth(); // 2. Pega a função de logout

  return (
    <aside className="h-screen w-16 md:w-20 bg-green-300 text-white flex flex-col items-center py-6 justify-between fixed left-0 top-0 z-50">
      <div className="flex items-center justify-center w-full h-16 bg-green-300">
        <Image
          src="/assets/Vector.svg"
          alt="Logo do projeto"
          width={40}
          height={40}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <Link href="/">
          <SidebarIcon icon={<Home size={24} />} label="Dashboard" />
        </Link>
        <SidebarIcon icon={<ListChecks size={24} />} label="Tarefas" />
        <Link href="/culturas">
          <SidebarIcon icon={<Leaf size={24} />} label="Cultivo" />
        </Link>
        <SidebarIcon icon={<Users size={24} />} label="Equipe" />
      </div>

      <div className="flex flex-col items-center gap-6 mb-6">
        <SidebarIcon icon={<Settings size={24} />} label="Configurações" />
        {/* 3. Adiciona o onClick para chamar a função de logout */}
        <div onClick={logout} className="cursor-pointer">
          <SidebarIcon icon={<LogOut size={24} />} label="Sair" />
        </div>
      </div>
    </aside>
  );
}

interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
}

function SidebarIcon({ icon, label }: SidebarIconProps) {
  return (
    <div
      className="group relative flex items-center justify-center h-12 w-12 hover:bg-white hover:text-black transition-colors rounded-md cursor-pointer"
      title={label}
    >
      {icon}
      <span className="absolute left-14 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  );
}
