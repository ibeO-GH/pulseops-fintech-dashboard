import { useDashboard } from "../DashboardProvider";
import { useDashboardMetrics } from "../useDashboardMetrics";
import { exportToCsv } from "./exportToCsv";

export function useDashboardExport() {
  const { activities } = useDashboard();
  const metrics = useDashboardMetrics();

  const exportActivities = () => {
    exportToCsv("activity-feed.csv", activities);
  };

  const exportMetrics = () => {
    exportToCsv("dashboard-metrics.csv", [
      {
        totalIntakes: metrics.totalIntakes,
        newIntakesToday: metrics.newIntakesToday,
        unreadAlerts: metrics.unreadCount,
        lastActivity: metrics.lastActivity,
      },
    ]);
  };

  return {
    exportActivities,
    exportMetrics,
  };
}
