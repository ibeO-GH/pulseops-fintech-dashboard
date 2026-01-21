import { ExportButton } from "./ExportButton";
import { useDashboardExport } from "./useDashboardExport";

export function ExportMetricsButton() {
  const { exportMetrics } = useDashboardExport();

  return <ExportButton label="Export metrics" onClick={exportMetrics} />;
}
