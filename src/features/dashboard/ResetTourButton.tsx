import { useCallback } from "react";

export function ResetTourButton() {
  const resetTour = useCallback(() => {
    window.dispatchEvent(new CustomEvent("reset-dashboard-tour"));
  }, []);

  return (
    <button
      onClick={resetTour}
      className="text-xs text-blue-600 hover:underline"
    >
      Replay dashboard tour
    </button>
  );
}
