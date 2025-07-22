// Localização: src/components/TopBar.tsx (ATUALIZADO)

"use client";
import { Bell, Search, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

// Dados de exemplo para busca e notificações
const searchItems = [
  { id: 1, name: "Dashboard", url: "/" },
  { id: 2, name: "Culturas", url: "/culturas" },
  { id: 3, name: "Tarefas", url: "/tarefas" },
  { id: 4, name: "Soja", url: "/culturas" },
  { id: 5, name: "Milho", url: "/culturas" },
];

const notifications = [
  {
    id: 1,
    text: "Nível de umidade baixo no campo de Soja.",
    time: "2 min atrás",
  },
  {
    id: 2,
    text: "Robô iniciou a rotina de fertilização.",
    time: "15 min atrás",
  },
  {
    id: 3,
    text: "Nova imagem da cultura de Milho adicionada.",
    time: "1 hora atrás",
  },
];

export function TopBar() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredItems = searchQuery
    ? searchItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="px-6 py-4 flex items-center justify-between bg-yellow-100 text-black shadow-sm sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold">
          Bom dia, {user || "Utilizador"}!
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* --- ÍCONE DE BUSCA --- */}
        <div className="relative">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            <Search size={20} />
          </button>
          {showSearch && (
            <div className="absolute top-12 right-0 w-64 bg-white rounded-lg shadow-lg p-4">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-gray-900"
              />
              {searchQuery && (
                <ul className="mt-2">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <li
                        key={item.id}
                        className="p-2 hover:bg-gray-100 rounded-md"
                      >
                        <a href={item.url}>{item.name}</a>
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">
                      Nenhum resultado encontrado.
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* --- ÍCONE DE NOTIFICAÇÕES --- */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            <Bell size={20} />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          {showNotifications && (
            <div className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold mb-2">Notificações</h3>
              <ul>
                {notifications.map((notif) => (
                  <li key={notif.id} className="border-b py-2">
                    <p className="text-sm">{notif.text}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* --- MODO CLARO/ESCURO --- */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-yellow-300 transition-colors"
          title="Alternar modo escuro"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* --- AVATAR DO USUÁRIO --- */}
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
