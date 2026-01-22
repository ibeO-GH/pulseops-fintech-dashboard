import { useDashboard } from "./DashboardProvider";
import { Skeleton } from "../../components/Skeleton";
import { useRole } from "../auth/RoleProvider";
import { ExportButton } from "./exports/ExportButton";
import { useDashboardExport } from "./exports/useDashboardExport";

type Activity = {
  id?: string;
  message?: string;
  time?: string;
};

export default function ActivityFeed() {
  // Safe defaults
  let role = "user";
  let activities: Activity[] = [];
  let exportActivities = () => {};

  // 🔒 Defensive hook access
  try {
    role = useRole().role;
    activities = useDashboard().activities ?? [];
    exportActivities = useDashboardExport().exportActivities;
  } catch (err) {
    console.error("ActivityFeed failed safely:", err);
  }

  // Role gate
  if (role !== "admin") return null;

  return (
    <div data-tour="activity" className="bg-white p-4 rounded-2xl shadow mt-1">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">System Activity</h3>
        <ExportButton label="Export CSV" onClick={exportActivities} />
      </div>

      {activities.length === 0 ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-16" />
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {activities.map((a, idx) => (
            <li
              key={a.id ?? idx}
              className="flex justify-between text-gray-600"
            >
              <span>{a.message ?? "Unknown event"}</span>
              <span>{a.time ?? "--"}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
