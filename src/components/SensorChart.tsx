// src/components/SensorChart.tsx
"use client";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Seg", temp: 22, moisture: 70, wind: 4 },
  { name: "Ter", temp: 23, moisture: 74, wind: 5 },
  { name: "Qua", temp: 24, moisture: 72, wind: 4 },
  { name: "Qui", temp: 26, moisture: 76, wind: 6 },
  { name: "Sex", temp: 25, moisture: 75, wind: 5 },
  { name: "Sáb", temp: 23, moisture: 71, wind: 3 },
  { name: "Dom", temp: 24, moisture: 73, wind: 4 },
];

export function SensorChart() {
  return (
    <section className="px-6 mt-10 max-w-6xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Atividade dos Sensores
        <span className="text-sm text-gray-500"> (Últimos 7 dias)</span>
      </h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="umidade"
              barSize={20}
              fill="#60a5fa"
              name="Umidade do Solo (%)"
            />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#f59e0b"
              strokeWidth={2}
              name="Temperatura do Ar (°C)"
            />
            <Line
              type="monotone"
              dataKey="wind"
              stroke="#10b981"
              strokeDasharray="5 5"
              name="Velocidade do Vento (km/h)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
