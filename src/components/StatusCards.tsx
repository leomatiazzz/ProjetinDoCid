"use client";

import { Droplet, Thermometer, Wind, Sun } from "lucide-react";
import React from "react";

interface StatusCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  bgColor: string;
  timestamp: string;
}

function StatusCard({
  icon,
  title,
  value,
  status,
  bgColor,
  timestamp,
}: StatusCardProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-4 rounded-lg shadow-md w-full max-w-[200px] ${bgColor}`}
    >
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-3xl font-bold text-gray-800 mt-1">{value}</div>
      <div className="text-xs text-gray-600">{status}</div>

      <div className="mt-3 pt-2 border-t border-black/10 text-xs text-gray-500">
        <span>{timestamp}</span>
      </div>
    </div>
  );
}

export function StatusCards() {
  return (
    <section className="flex justify-start flex-wrap gap-4 w-full">
      <StatusCard
        icon={<Droplet size={16} />}
        title="Umidade do solo"
        value="72%"
        status="Alto"
        bgColor="bg-green-200"
        timestamp="21/07 às 22:00"
      />
      <StatusCard
        icon={<Thermometer size={16} />}
        title="Temperatura do ar"
        value="24 °C"
        status="Normal"
        bgColor="bg-lime-200"
        timestamp="21/07 às 22:00"
      />
      <StatusCard
        icon={<Wind size={16} />}
        title="Velocidade do vento"
        value="3km/h"
        status="Normal"
        bgColor="bg-blue-200"
        timestamp="21/07 às 21:55"
      />
      {/**/}
      <StatusCard
        icon={<Sun size={16} />}
        title="Luminosidade"
        value="85%"
        status="Ideal"
        bgColor="bg-yellow-200"
        timestamp="21/07 às 22:00"
      />
    </section>
  );
}
