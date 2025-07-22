// Localização: src/app/culturas/page.tsx

import DashboardLayout from "../dashboard-layout";
import { CultureDashboard } from "@/components/CultureDashboard";

export default function CulturasPage() {
  return (
    <DashboardLayout>
      <CultureDashboard />
    </DashboardLayout>
  );
}
