"use client";
import { Droplet, Thermometer, Wind } from "lucide-react";
import React from "react";

interface StatusCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  bgColor: string; // usar a classe do Tailwind completa
}

function StatusCard({ icon, title, value, status, bgColor }: StatusCardProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-4 rounded-md shadow-md w-full max-w-[180px] ${bgColor}`}
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
    <section className="flex justify-center flex-wrap gap-4 px-6 mt-6 w-full">
      <StatusCard
        icon={<Droplet size={16} />}
        title="Umidade do solo"
        value="72%"
        status="Alto"
        bgColor="bg-green-200"
      />
      <StatusCard
        icon={<Thermometer size={16} />}
        title="Temperatura do ar"
        value="24 °C"
        status="Normal"
        bgColor="bg-lime-200" // amarelo esverdeado
      />
      <StatusCard
        icon={<Wind size={16} />}
        title="Velocidade do vento"
        value="3km/h"
        status="Normal"
        bgColor="bg-blue-200"
      />
    </section>
  );
}
