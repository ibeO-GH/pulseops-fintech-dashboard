import { fintechTheme } from "./theme";

export const themeClasses = {
  kpi: {
    good: `text-${fintechTheme.status.good}-600`,
    warning: `text-${fintechTheme.status.warning}-600`,
    critical: `text-${fintechTheme.status.critical}-600`,
  },

  page: `bg-${fintechTheme.surface.page}`,
  card: `bg-${fintechTheme.surface.card} border ${fintechTheme.surface.border}`,
};
