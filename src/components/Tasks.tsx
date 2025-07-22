"use client";

export function Tasks() {
  const tasks = [
    {
      id: 1,
      name: "Fertilizar campo A",
      time: "Hoje - 08:00",
      completed: false,
    },
    {
      id: 2,
      name: "Inspecionar sensores",
      time: "Hoje - 14:00",
      completed: true,
    },
    {
      id: 3,
      name: "Verificar irrigação",
      time: "Amanhã - 09:30",
      completed: false,
    },
  ];

  return (
    <section className="ml-16 md:ml-20 px-6 mt-10 max-w-xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Tarefas Pendentes
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
              readOnly
              className="w-5 h-5"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
