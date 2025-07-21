"use client";
import { Droplet, Thermometer, Wind } from "lucide-react";

interface StatusCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  color: string;
}

function StatusCard({ icon, title, value, status, color }: StatusCardProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-4 rounded-md shadow-md bg-${color}-100 w-full max-w-[180px]`}
    >
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
      <div className="text-xs text-gray-600">{status}</div>
    </div>
  );
}

export function StatusCards() {
  return (
    <section className="ml-16 md:ml-20 px-6 mt-6 flex gap-4 flex-wrap">
      <StatusCard
        icon={<Droplet size={16} />}
        title="Umidade do solo"
        value="72%"
        status="Alto"
        color="verde"
      />
      <StatusCard
        icon={<Thermometer size={16} />}
        title="Temperatura do ar"
        value="24 °C"
        status="Normal"
        color="amarelo"
      />
      <StatusCard
        icon={<Wind size={16} />}
        title="Velocidade do vento"
        value="3km/h"
        status="Normal"
        color="azul"
      />
    </section>
  );
}
