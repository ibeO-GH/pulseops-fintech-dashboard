import Joyride, { STATUS } from "react-joyride";
import type { CallBackProps } from "react-joyride";
import { useEffect, useState } from "react";
import { dashboardTourSteps } from "./dashboardTourSteps";

const TOUR_KEY = "dashboard_tour_completed";
const RESET_EVENT = "reset-dashboard-tour";

export function DashboardTour() {
  const [run, setRun] = useState(false);

  // 🔹 Decide whether to run tour on mount
  useEffect(() => {
    const completed = localStorage.getItem(TOUR_KEY);
    if (!completed) {
      setRun(true);
    }
  }, []);

  useEffect(() => {
    const reset = (event: Event) => {
      if (event instanceof CustomEvent) {
        localStorage.removeItem(TOUR_KEY);
        setRun(true);
      }
    };

    window.addEventListener(RESET_EVENT, reset as EventListener);

    return () => {
      window.removeEventListener(RESET_EVENT, reset as EventListener);
    };
  }, []);

  const handleCallback = (data: CallBackProps) => {
    const finished =
      data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED;

    if (finished) {
      localStorage.setItem(TOUR_KEY, "true");
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={dashboardTourSteps}
      run={run}
      continuous
      showProgress
      disableOverlayClose
      showSkipButton
      callback={handleCallback}
      styles={{
        options: {
          primaryColor: "#2563eb",
          zIndex: 1000,
        },
      }}
    />
  );
}
