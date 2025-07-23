import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar />
      {/* */}
      <main className="ml-16 md:ml-20">
        <TopBar />
        {/* */}
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
