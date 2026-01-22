import { themeClasses } from "../../config/themeClasses";

type Props = {
  label: string;
  value: string | number;
  sub?: string;
  delta?: number;
  status?: "good" | "warning" | "critical";
};

export function KpiCard({ label, value, sub, delta, status = "good" }: Props) {
  return (
    <div className={`bg-white p-4 shadow-sm ${themeClasses.card}`}>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>

      {(delta !== undefined || sub) && (
        <div className="mt-1 flex items-center gap-2 text-xs">
          {delta !== undefined && (
            <span className={themeClasses.kpi[status]}>
              {delta > 0 ? `▲ ${delta}%` : `▼ ${Math.abs(delta)}%`}
            </span>
          )}
          {sub && <span className="text-gray-400">{sub}</span>}
        </div>
      )}
    </div>
  );
}
