import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import type { DashboardData } from "./types";
import { notificationsApi } from "../api/notifications.api";

const DashboardContext = createContext<DashboardData | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DashboardData>({
    metrics: [
      { label: "Active Users", value: 124 },
      { label: "Pending Intakes", value: 18 },
      { label: "System Alerts", value: 2 },
    ],
    activities: [],
  });

  // 🔒 Resilient live activity simulation
  useEffect(() => {
    let mounted = true;
    const interval = setInterval(async () => {
      try {
        await notificationsApi.push("New intake submitted");

        if (!mounted) return;

        setData((prev) => ({
          ...prev,
          activities: [
            {
              id: crypto.randomUUID(),
              message: "New intake submitted",
              time: new Date().toLocaleTimeString(),
            },
            ...prev.activities.slice(0, 4),
          ],
        }));
      } catch (err) {
        console.error("Dashboard activity simulation failed:", err);
      }
    }, 5000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  // ✅ KEY OPTIMIZATION
  const value = useMemo(() => data, [data]);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return ctx;
}
