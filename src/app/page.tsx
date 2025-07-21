import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { StatusCards } from "@/components/StatusCards";
import { FieldMap } from "@/components/FieldMap";
import { Tasks } from "@/components/Tasks";
import { SensorChart } from "@/components/SensorChart";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Sidebar />
      <TopBar />
      <StatusCards />
      <FieldMap />
      <Tasks />
      <SensorChart />
    </main>
  );
}
