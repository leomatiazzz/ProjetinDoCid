"use client";
import { Bell, Search, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function TopBar() {
  const [darkMode, setDarkMode] = useState(false);

  // Aplica a classe "dark" no <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="px-6 py-4 flex items-center justify-between bg-yellow-100 text-black shadow-sm sticky top-0 z-40">
      <div className="text-xl font-semibold">Bom dia, Leo!</div>

      <div className="flex items-center gap-4">
        {/* Botão modo escuro/claro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-yellow-300 transition-colors"
          title="Alternar modo escuro"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="p-2 rounded-full hover:bg-yellow-300 transition-colors">
          <Search size={20} />
        </button>

        <button className="p-2 rounded-full hover:bg-yellow-300 transition-colors">
          <Bell size={20} />
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400">
          <Image
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
}
