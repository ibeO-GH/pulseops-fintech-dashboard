import { KpiCard } from "./KpiCard";
import { useDashboardMetrics } from "./useDashboardMetrics";
import { Skeleton } from "../../components/Skeleton";

export function Metrics() {
  const {
    totalIntakes,
    totalIntakesDelta,
    newIntakesToday,
    unreadCount,
    lastActivity,
    loading,
  } = useDashboardMetrics();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow-sm space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-20" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      data-tour="metrics"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <KpiCard
        label="Total Transactions"
        value={totalIntakes}
        delta={totalIntakesDelta}
        status={totalIntakesDelta > 0 ? "good" : "warning"}
        sub="All time"
      />
      <KpiCard
        label="Transactions Today"
        value={newIntakesToday}
        status={newIntakesToday > 0 ? "good" : "warning"}
      />
      <KpiCard
        label="Unresolved Alerts"
        value={unreadCount}
        status={unreadCount > 0 ? "critical" : "good"}
      />
      <KpiCard
        label="Last System Event"
        value={lastActivity}
        sub="Security / Ops"
      />
    </div>
  );
}
