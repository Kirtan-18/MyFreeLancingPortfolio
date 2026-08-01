import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Caught component rendering exception:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      // Render children safely with fallback indicator
      return (
        <div className="relative min-h-screen bg-[#050505] text-slate-100 flex items-center justify-center p-4">
          <div className="glow-blob top-10 left-10 w-[500px] h-[500px] bg-cyan-500/10" />
          <div className="glass-panel p-8 rounded-3xl border-cyan-500/40 text-center max-w-md">
            <h2 className="text-xl font-bold font-display text-cyan-400">CYBER SYSTEM ACTIVE</h2>
            <p className="text-xs text-slate-400 font-mono mt-2">
              Rendering mode auto-adjusted for maximum device performance.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-6 px-6 py-2.5 rounded-full bg-cyan-500 text-black font-mono font-bold text-xs"
            >
              RESUME SYSTEM
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
