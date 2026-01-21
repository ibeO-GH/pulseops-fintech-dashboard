import { INDUSTRY } from "./industry";

const LABELS = {
  fintech: {
    intakes: "Transactions",
    activity: "Transaction Log",
    insights: "Risk Insights",
    metrics: {
      total: "Total Transactions",
      today: "Transactions Today",
      unread: "Fraud Alerts",
      last: "Last Transaction",
    },
  },

  health: {
    intakes: "Patient Records",
    activity: "Clinical Activity",
    insights: "Care Insights",
    metrics: {
      total: "Total Patients",
      today: "New Admissions",
      unread: "Critical Alerts",
      last: "Last Clinical Event",
    },
  },

  saas: {
    intakes: "User Events",
    activity: "Activity Feed",
    insights: "System Insights",
    metrics: {
      total: "Total Users",
      today: "New Signups",
      unread: "Unread Alerts",
      last: "Last Event",
    },
  },
};

export const labels = LABELS[INDUSTRY];
