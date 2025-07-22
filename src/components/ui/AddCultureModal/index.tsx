// Localização: src/components/ui/AddCultureModal/index.tsx

"use client";

import { useState, FormEvent } from 'react';

// Define o formato dos dados que o formulário vai gerar
export interface NewCultureData {
  cultureName: string;
  imageUrl: string;
}

// Define as propriedades que o nosso modal vai receber
interface AddCultureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCulture: (data: NewCultureData) => void;
}

const AddCultureModal: React.FC<AddCultureModalProps> = ({ isOpen, onClose, onAddCulture }) => {
  const [cultureName, setCultureName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!cultureName || !imageUrl) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onAddCulture({ cultureName, imageUrl });
    onClose();
  };

  return (
    // Fundo do modal (overlay)
    // ESTILO CORRIGIDO: Usando estilo inline com rgba para garantir a transparência.
    <div 
      className="fixed inset-0 z-50 flex justify-center items-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose} // Fecha o modal ao clicar no fundo
    >
      {/* Container do Modal */}
      <div 
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm" 
        onClick={(e) => e.stopPropagation()} // Impede que o clique no modal o feche
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Adicionar Nova Cultura</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo Nome da Cultura */}
          <div className="mb-4">
            <label htmlFor="cultureName" className="block text-gray-700 text-sm font-bold mb-2">
              Nome da Cultura
            </label>
            <input
              type="text"
              id="cultureName"
              value={cultureName}
              onChange={(e) => setCultureName(e.target.value)}
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          {/* Campo URL da Imagem */}
          <div className="mb-6">
            <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
              URL da Imagem
            </label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ex: /images/trigo.jpg"
              required
            />
          </div>
          {/* Botões de Ação */}
          <div className="flex items-center justify-end gap-4 mt-8">
            <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors">
              Cancelar
            </button>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Criar Cultura
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCultureModal;
