"use client";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

export function TopBar() {
  return (
    <header className="ml-16 md:ml-20 px-6 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-40">
      <div className="text-xl font-semibold">Good Morning, Waugh!</div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
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
