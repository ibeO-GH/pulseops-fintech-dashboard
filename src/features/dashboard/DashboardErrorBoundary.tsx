import { Component } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class DashboardErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Dashboard crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white rounded-2xl p-6 shadow text-sm text-gray-700 space-y-2">
          <h2 className="font-semibold text-base">
            Dashboard temporarily unavailable
          </h2>
          <p>Something went wrong while loading analytics.</p>
          <p className="text-gray-500">
            Please refresh the page or try again shortly.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
