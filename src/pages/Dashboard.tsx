import { DashboardProvider } from "../features/dashboard/DashboardProvider";
import { RoleProvider } from "../features/auth/RoleProvider";
import { RoleSwitcher } from "../features/auth/RoleSwitcher";
import { Metrics } from "../features/dashboard/Metrics";
import ActivityFeed from "../features/dashboard/ActivityFeed";
import { Insights } from "../features/dashboard/Insights";
import { IntakeTrendChart } from "../features/dashboard/IntakeTrendChart";
import { DashboardTour } from "../features/dashboard/DashboardTour";
import { ResetTourButton } from "../features/dashboard/ResetTourButton";
import { DashboardErrorBoundary } from "../features/dashboard/DashboardErrorBoundary";
import { ExportMetricsButton } from "../features/dashboard/exports/ExportMetricsButton";

export default function Dashboard() {
  return (
    <RoleProvider>
      <DashboardProvider>
        <DashboardTour />
        <DashboardErrorBoundary>
          <div className="space-y-6 bg-slate-100 min-h-screen p-6">
            <div className="flex justify-end gap-2">
              <ResetTourButton />
              <ExportMetricsButton />
            </div>
            <RoleSwitcher />
            {/* KPIs */}
            <Metrics />

            {/* Intelligence Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ActivityFeed />
                <IntakeTrendChart />
              </div>

              <Insights />
            </div>
          </div>
        </DashboardErrorBoundary>
      </DashboardProvider>
    </RoleProvider>
  );
}
