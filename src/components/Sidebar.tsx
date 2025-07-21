"use client";
import { Home, ListChecks, Leaf, Users, Settings, LogOut } from "lucide-react";
import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="h-screen w-16 md:w-20 bg-green-300 text-white flex flex-col items-center py-6 justify-between fixed left-0 top-0 z-50">
      {/* Top logo */}
      <div className="flex items-center justify-center w-full h-16 bg-green-300">
        <Image
          src="/assets/Vector.svg"
          alt="Logo do projeto"
          width={40}
          height={40}
        />
      </div>

      {/* Middle nav icons */}
      <div className="flex flex-col items-center gap-6">
        <SidebarIcon icon={<Home size={24} />} label="Dashboard" />
        <SidebarIcon icon={<ListChecks size={24} />} label="Tarefas" />
        <SidebarIcon icon={<Leaf size={24} />} label="Cultivo" />
        <SidebarIcon icon={<Users size={24} />} label="Equipe" />
      </div>

      {/* Bottom settings */}
      <div className="flex flex-col items-center gap-6">
        <SidebarIcon icon={<Settings size={24} />} label="Configurações" />
        <SidebarIcon icon={<LogOut size={24} />} label="Sair" />
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
