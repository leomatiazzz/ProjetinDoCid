// Localização: src/app/configuracoes/page.tsx (FINALIZADO)

"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/app/dashboard-layout"; // Corrigido o caminho do import
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/Button";

// Tipos para os nossos dados estáticos
type Sector = {
  id: string;
  nome: string;
  cultura: string;
  statusRobo: "Ocioso" | "Sensoriando" | "Em movimento";
};

// Simulação de dados de usuários que estariam em um banco de dados
const usersData = [
  { usuario: "admin", email: "admin@example.com" },
  { usuario: "Igor", email: "igor@gmail.com" },
  { usuario: "Leo", email: "leo@teste.com" },
];

const culturasDisponiveis = ["Soja", "Milho", "Algodão", "Café", "Nenhuma"];

export default function ConfiguracoesPage() {
  const { user, isAuthenticated, isLoading } = useAuth();

  // Estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // Efeito para carregar os dados do usuário dinamicamente quando o componente montar
  useEffect(() => {
    if (user) {
      const currentUserData = usersData.find((u) => u.usuario === user);
      setNome(user);
      setEmail(
        currentUserData ? currentUserData.email : "email@naoencontrado.com"
      );
    }
  }, [user]); // Roda sempre que o 'user' do contexto mudar

  const [notificacoes, setNotificacoes] = useState({
    bateria: true,
    falhaSensor: true,
    umidadeBaixa: false,
  });

  const [setores, setSetores] = useState<Sector[]>([
    { id: "A", nome: "Setor A", cultura: "Soja", statusRobo: "Ocioso" },
    { id: "B", nome: "Setor B", cultura: "Milho", statusRobo: "Sensoriando" },
    { id: "C", nome: "Setor C", cultura: "Algodão", statusRobo: "Ocioso" },
    { id: "D", nome: "Setor D", cultura: "Nenhuma", statusRobo: "Ocioso" },
  ]);

  const handleNotificationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setNotificacoes((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSectorCultureChange = (sectorId: string, novaCultura: string) => {
    setSetores((setoresAtuais) =>
      setoresAtuais.map((setor) =>
        setor.id === sectorId ? { ...setor, cultura: novaCultura } : setor
      )
    );
  };

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Carregando...
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>

        {/* Seção: Perfil do Usuário */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Perfil do Usuário
          </h2>
          <form className="space-y-4">
            <div>
              {/* CORREÇÃO DA FONTE: Deixando o label mais escuro e em negrito */}
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-gray-800"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              {/* CORREÇÃO DA FONTE: Deixando o label mais escuro e em negrito */}
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="flex gap-4 pt-4">
              <Button>Salvar Alterações</Button>
              <button
                type="button"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-md transition-all"
              >
                Alterar Senha
              </button>
            </div>
          </form>
        </section>

        {/* Seção: Preferências de Notificação */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Preferências de Notificação
          </h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="bateria"
                name="bateria"
                checked={notificacoes.bateria}
                onChange={handleNotificationChange}
                className="h-4 w-4 rounded"
              />
              <label htmlFor="bateria" className="ml-3 text-gray-700">
                Alertas de bateria baixa (abaixo de 20%)
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="falhaSensor"
                name="falhaSensor"
                checked={notificacoes.falhaSensor}
                onChange={handleNotificationChange}
                className="h-4 w-4 rounded"
              />
              <label htmlFor="falhaSensor" className="ml-3 text-gray-700">
                Notificações sobre falhas nos sensores
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="umidadeBaixa"
                name="umidadeBaixa"
                checked={notificacoes.umidadeBaixa}
                onChange={handleNotificationChange}
                className="h-4 w-4 rounded"
              />
              <label htmlFor="umidadeBaixa" className="ml-3 text-gray-700">
                Alertas de umidade do solo abaixo de 30%
              </label>
            </div>
          </div>
        </section>

        {/* Seção: Gerenciamento de Setores */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Gerenciamento de Setores
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Localização atual do Robô CID:{" "}
            <span className="font-bold text-green-700">Base</span>
          </p>
          <div className="space-y-4">
            {setores.map((setor) => (
              <div
                key={setor.id}
                className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 p-3 border rounded-md"
              >
                <div className="font-semibold text-gray-800">{setor.nome}</div>
                <div>
                  {/* CORREÇÃO DA FONTE: Deixando o label mais escuro e em negrito */}
                  <label className="block text-xs font-semibold text-gray-800 mb-1">
                    Cultura Plantada
                  </label>
                  <select
                    value={setor.cultura}
                    onChange={(e) =>
                      handleSectorCultureChange(setor.id, e.target.value)
                    }
                    className="w-full p-2 border border-gray-600 rounded-md"
                  >
                    {culturasDisponiveis.map((cult) => (
                      <option key={cult} value={cult}>
                        {cult}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  {/* CORREÇÃO DA FONTE: Deixando o label mais escuro e em negrito */}
                  <label className="block text-xs font-semibold text-gray-800 mb-1">
                    Status do Robô
                  </label>
                  <p className="p-2 bg-gray-200 rounded-md text-gray-700">
                    {setor.statusRobo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção: Dispositivo CID */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Dispositivo CID
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Status:</strong>{" "}
              <span className="text-green-600 font-semibold">Online</span>
            </p>
            <p>
              <strong>Bateria:</strong> {`87%`}
            </p>
            <p>
              <strong>Nível de Conexão:</strong> {`4 de 4`}
            </p>
            <p>
              <strong>Setor Atual:</strong> {`"Base"`}
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
