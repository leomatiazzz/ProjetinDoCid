// Localização: src/components/ui/CultureCard/index.tsx

"use client";

interface CultureCardProps {
  cultureName: string;
  imageUrl: string;
  status: 'healthy' | 'attention' | 'critical';
  lastUpdate: string;
  onClick: () => void;
}

const CultureCard: React.FC<CultureCardProps> = ({
  cultureName,
  imageUrl,
  status,
  lastUpdate,
  onClick,
}) => {
  const statusStyles = {
    healthy: {
      dot: 'bg-green-500',
      text: 'text-green-800',
      background: 'bg-green-100',
    },
    attention: {
      dot: 'bg-yellow-500',
      text: 'text-yellow-800',
      background: 'bg-yellow-100',
    },
    critical: {
      dot: 'bg-red-500',
      text: 'text-red-800',
      background: 'bg-red-100',
    },
  };

  const styles = statusStyles[status];

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col w-full overflow-hidden rounded-xl shadow-md bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Seção da Imagem */}
      {/* A correção está aqui: adicionamos a classe "overflow-hidden" */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={`Foto da cultura de ${cultureName}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Seção de Conteúdo */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{cultureName}</h3>
          {/* Indicador de Status */}
          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-full ${styles.background}`}
          >
            <span className={`h-2.5 w-2.5 rounded-full ${styles.dot}`}></span>
            <span className={`text-xs font-semibold uppercase ${styles.text}`}>
              {status}
            </span>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-auto pt-2">
          <p className="text-sm text-gray-500">Última atualização:</p>
          <p className="text-sm font-medium text-gray-700">{lastUpdate}</p>
        </div>
      </div>
    </div>
  );
};

export default CultureCard;
