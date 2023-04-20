import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorSnackbar from "./ErrorSnackbar";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("error: " + error);
    console.log("errorInfo: " + JSON.stringify(errorInfo));
    console.log("componentStack: " + errorInfo.componentStack);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorSnackbar message={"Something went wrong..."} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
