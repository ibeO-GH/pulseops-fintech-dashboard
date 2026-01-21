import { useIntake } from "../intake/IntakeProvider";

export type TrendStatus = "good" | "warning" | "critical";

export function useIntakeTrend() {
  const { data } = useIntake();

  // --- Placeholder logic (replace when backend is ready)
  const todayCount = Object.keys(data || {}).length;
  const yesterdayCount = todayCount + 5; // simulate decline

  const delta =
    yesterdayCount === 0
      ? 0
      : Math.round(((todayCount - yesterdayCount) / yesterdayCount) * 100);

  let status: TrendStatus = "good";

  if (delta < -30) status = "critical";
  else if (delta < -10) status = "warning";

  return {
    series: [
      { day: "Yesterday", value: yesterdayCount },
      { day: "Today", value: todayCount },
    ],
    delta,
    status,
  };
}
