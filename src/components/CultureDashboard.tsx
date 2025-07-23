"use client";

import { useState } from "react";
import CultureCard from "@/components/ui/CultureCard";
import AddCultureModal, {
  NewCultureData,
} from "@/components/ui/AddCultureModal";
import CultureHistoryModal, {
  Culture,
  ImageHistory,
} from "@/components/ui/CultureHistoryModal";

const initialCultures: Culture[] = [
  {
    id: 1,
    name: "Soja",
    status: "healthy",
    images: [
      { url: "/images/soja.jpg", date: "20 de Julho de 2025" },
      { url: "/images/soja-2.jpg", date: "15 de Julho de 2025" },
      { url: "/images/soja-3.jpg", date: "10 de Julho de 2025" },
    ],
  },

  {
    id: 2,
    name: "Milho",
    status: "attention",
    images: [
      { url: "/images/milho.jpg", date: "19 de Julho de 2025" },
      { url: "/images/milho-2.jpg", date: "14 de Julho de 2025" },
    ],
  },
  {
    id: 3,
    name: "Algodão",
    status: "critical",
    images: [{ url: "/images/algodao.jpg", date: "19 de Julho de 2025" }],
  },
  {
    id: 4,
    name: "Café",
    status: "healthy",
    images: [
      { url: "/images/cafe.jpg", date: "20 de Julho de 2025" },
      { url: "/images/cafe-2.jpg", date: "12 de Julho de 2025" },
      { url: "/images/cafe-3.jpg", date: "05 de Julho de 2025" },
    ],
  },
];

export function CultureDashboard() {
  const [cultures, setCultures] = useState<Culture[]>(initialCultures);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCulture, setSelectedCulture] = useState<Culture | null>(null);

  const handleAddCulture = (data: NewCultureData) => {
    const newImage: ImageHistory = {
      url: data.imageUrl,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    const newCulture: Culture = {
      id: cultures.length + 1,
      name: data.cultureName,
      images: [newImage],
      status: "healthy",
    };
    setCultures([...cultures, newCulture]);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Monitoramento de Culturas
          </h1>
        </div>
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Adicionar Cultura
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cultures.map((culture) => (
            <CultureCard
              key={culture.id}
              cultureName={culture.name}
              imageUrl={culture.images[0]?.url || ""}
              status={culture.status}
              lastUpdate={culture.images[0]?.date || "Nenhuma atualização"}
              onClick={() => setSelectedCulture(culture)}
            />
          ))}
        </div>
      </div>

      <AddCultureModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCulture={handleAddCulture}
      />

      <CultureHistoryModal
        culture={selectedCulture}
        onClose={() => setSelectedCulture(null)}
      />
    </>
  );
}
