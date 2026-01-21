import type { Step } from "react-joyride";

export const dashboardTourSteps: Step[] = [
  {
    target: '[data-tour="metrics"]',
    content:
      "These are your key performance indicators. They summarize what’s happening in your system.",
    disableBeacon: true,
  },
  {
    target: '[data-tour="activity"]',
    content:
      "This feed shows real-time activity such as new intakes and system events.",
  },
  {
    target: '[data-tour="insights"]',
    content: "Insights highlight what needs your attention right now.",
  },
];
