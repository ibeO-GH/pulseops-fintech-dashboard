export type Metric = {
  label: string;
  value: number;
  delta?: number; // % change
};

export type Activity = {
  id: string;
  message: string;
  time: string;
};

export type DashboardData = {
  metrics: Metric[];
  activities: Activity[];
};
