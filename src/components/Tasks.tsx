// src/components/Tasks.tsx (ATUALIZADO)
"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

interface Task {
  id: number;
  name: string;
  time: string;
  completed: boolean;
}

export function Tasks() {
  // Lista de tarefas expandida com mais exemplos
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      name: "Fertilizar campo de Soja (Setor A)",
      time: "Hoje - 08:00",
      completed: false,
    },
    {
      id: 2,
      name: "Inspecionar sensores de umidade",
      time: "Hoje - 14:00",
      completed: true,
    },
    {
      id: 3,
      name: "Verificar sistema de irrigação do Milho",
      time: "Amanhã - 09:30",
      completed: false,
    },
    {
      id: 4,
      name: "Monitorar pragas no campo de Algodão",
      time: "Hoje - 11:00",
      completed: false,
    },
    {
      id: 5,
      name: "Coletar amostras de solo (Setor B)",
      time: "Amanhã - 15:00",
      completed: false,
    },
    {
      id: 6,
      name: "Recalibrar câmera térmica",
      time: "Ontem - 17:00",
      completed: true,
    },
    {
      id: 7,
      name: "Aplicar herbicida seletivo no campo de Café",
      time: "24/07 - 10:00",
      completed: false,
    },
    {
      id: 8,
      name: "Verificar previsão do tempo para os próximos 3 dias",
      time: "Hoje - 07:00",
      completed: true,
    },
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleCreateRoutine = () => {
    alert("Funcionalidade para criar uma nova rotina a ser implementada!");
  };

  return (
    <section className="w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Rotina do Robô
      </h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 rounded-md shadow-sm border flex justify-between items-center transition-colors ${
              task.completed
                ? "bg-gray-100 text-gray-500 line-through"
                : "bg-white"
            }`}
          >
            <div>
              <p className="font-medium">{task.name}</p>
              <span className="text-sm text-gray-400">{task.time}</span>
            </div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="w-5 h-5 cursor-pointer"
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleCreateRoutine}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} />
          Criar nova rotina
        </button>
      </div>
    </section>
  );
}
