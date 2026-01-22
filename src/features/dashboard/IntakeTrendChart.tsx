import { memo } from "react";
import { useIntakeTrend } from "./useIntakeTrend";

export const IntakeTrendChart = memo(function IntakeTrendChart() {
  const { series = [], delta = 0, status } = useIntakeTrend();

  const statusStyles: Record<string, string> = {
    good: "text-green-600",
    warning: "text-yellow-600",
    critical: "text-red-600",
  };

  if (series.length < 2) {
    return (
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="text-sm font-semibold mb-2">Transaction Volume Trend</h3>
        <p className="text-sm text-gray-500">
          Not enough data to show intake trends yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Intake Trend</h3>
        <span
          className={`text-xs font-medium ${
            statusStyles[status] ?? "text-gray-500"
          }`}
        >
          {delta > 0 ? `▲ ${delta}%` : `▼ ${Math.abs(delta)}%`}
        </span>
      </div>

      <div className="flex gap-4 text-sm text-gray-600">
        {series.map((p) => (
          <div key={p.day}>
            <p className="text-xs">{p.day}</p>
            <p className="font-semibold">{p.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
