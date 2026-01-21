import { useDashboardMetrics } from "./useDashboardMetrics";
import { useRole } from "../auth/RoleProvider";

export function Insights() {
  const { role } = useRole();
  const { unreadCount, lastActivity, newIntakesToday } = useDashboardMetrics();

  if (role === "viewer") return null;

  return (
    <div
      data-tour="insights"
      className="bg-blue-950/80 p-4 rounded-2xl shadow-sm space-y-2 text-sm text-white border-1-4 border-blue-500"
    >
      {unreadCount > 0 ? (
        <p>🔔 You have {unreadCount} unread notifications</p>
      ) : (
        <p>✅ All notifications are read</p>
      )}

      {newIntakesToday > 0 ? (
        <p>📥 {newIntakesToday} new intake submitted today</p>
      ) : (
        <p>📭 No new intakes today</p>
      )}

      {unreadCount === 0 && newIntakesToday === 0 && (
        <p className="opacity-80">
          👀 Nothing urgent right now. You’re all caught up.
        </p>
      )}

      <p>🕒 Last activity: {lastActivity}</p>
    </div>
  );
}
