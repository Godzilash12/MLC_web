import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  message: string;
};

export class AppErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: ""
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      message: error.message
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("MLC render error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg px-6 py-20 text-text">
          <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Runtime Error</p>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-white">Page failed while rendering</h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary">{this.state.message || "Unknown React error"}</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
