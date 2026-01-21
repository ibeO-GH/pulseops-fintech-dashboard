import { useEffect, useState, useMemo } from "react";
import { intakeApi } from "../api/intake.api";
import { notificationsApi } from "../api/notifications.api";

/**
 * Backend-ready adapter
 * ---------------------
 * Pure function:
 * - no hooks
 * - no side effects
 * - easy to swap when real backend arrives
 */
function adaptDashboardMetrics(intakes: any[], notifications: any[]) {
  return {
    totalIntakes: intakes.length,
    newIntakesToday: intakes.length > 0 ? 1 : 0,
    unreadCount: notifications.filter((n) => !n.read).length,
    lastActivity: notifications[0]?.createdAt ?? "No recent activity",
  };
}

export function useDashboardMetrics() {
  const [totalIntakes, setTotalIntakes] = useState(0);
  const [newIntakesToday, setNewIntakesToday] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastActivity, setLastActivity] = useState("No recent activity");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const intakes = await intakeApi.list();
        const notifications = await notificationsApi.list();

        if (!mounted) return;

        // ✅ SINGLE SOURCE OF TRUTH
        const metrics = adaptDashboardMetrics(intakes, notifications);

        setTotalIntakes(metrics.totalIntakes);
        setNewIntakesToday(metrics.newIntakesToday);
        setUnreadCount(metrics.unreadCount);
        setLastActivity(metrics.lastActivity);
      } catch (err) {
        console.error("Failed to load dashboard metrics:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  // ✅ MEMOIZED DERIVATION
  const derived = useMemo(
    () => ({
      totalIntakes,
      newIntakesToday,
      unreadCount,
    }),
    [totalIntakes, newIntakesToday, unreadCount]
  );

  return {
    ...derived,
    lastActivity,
    totalIntakesDelta: 5, // placeholder
    loading,
  };
}
