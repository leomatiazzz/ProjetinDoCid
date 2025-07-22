// Localização: src/components/ui/CultureHistoryModal/index.tsx (CORRIGIDO)
"use client";

import { useState } from "react";
import Image from "next/image"; // 1. Importe o componente Image

// ... (interfaces continuam as mesmas)
export interface ImageHistory {
  url: string;
  date: string;
}
export interface Culture {
  id: number;
  name: string;
  images: ImageHistory[];
  status: "healthy" | "attention" | "critical";
}
interface CultureHistoryModalProps {
  culture: Culture | null;
  onClose: () => void;
}

const CultureHistoryModal: React.FC<CultureHistoryModalProps> = ({
  culture,
  onClose,
}) => {
  // ... (lógica do estado e funções continuam as mesmas)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  if (!culture) {
    return null;
  }
  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (culture && currentImageIndex !== null) {
      const nextIndex = (currentImageIndex + 1) % culture.images.length;
      setCurrentImageIndex(nextIndex);
    }
  };
  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (culture && currentImageIndex !== null) {
      const prevIndex =
        (currentImageIndex - 1 + culture.images.length) % culture.images.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex justify-center items-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-xl w-full max-w-7xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ... (cabeçalho do modal continua o mesmo) ... */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {" "}
              Histórico de Imagens:{" "}
              <span className="text-green-600">{culture.name}</span>{" "}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />{" "}
              </svg>{" "}
            </button>
          </div>

          <div className="overflow-y-auto flex-grow">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {culture.images.map((image, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm cursor-pointer group"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  {/* 2. Substitua <img> por <Image /> na galeria */}
                  <div className="relative w-full h-72">
                    <Image
                      src={image.url}
                      alt={`Imagem de ${culture.name} de ${image.date}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-gray-50">
                    <p className="text-base text-gray-600 text-center font-medium">
                      {image.date}
                    </p>
                  </div>
                </div>
              ))}
              {/* ... (código para "nenhuma imagem" continua o mesmo) ... */}
            </div>
          </div>
        </div>
      </div>

      {currentImageIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex justify-center items-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
          onClick={() => setCurrentImageIndex(null)}
        >
          {/* ... (botões de fechar e navegação continuam os mesmos) ... */}
          <button
            className="absolute top-4 right-5 text-white text-5xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={() => setCurrentImageIndex(null)}
          >
            {" "}
            &times;{" "}
          </button>
          <button
            className="absolute left-5 text-white p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-60 transition-colors"
            onClick={showPreviousImage}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>{" "}
          </button>

          {/* 3. Substitua <img> por <Image /> no visualizador */}
          <Image
            src={culture.images[currentImageIndex].url}
            alt="Imagem em tela cheia"
            width={1200} // Forneça dimensões para otimização
            height={800}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            className="rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-5 text-white p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-60 transition-colors"
            onClick={showNextImage}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default CultureHistoryModal;
