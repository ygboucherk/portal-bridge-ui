import { Typography } from "@material-ui/core";
import React from "react";

type ErrorState = {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Typography variant="h5" style={{ textAlign: "center", marginTop: 24 }}>
          An unexpected error has occurred. Please refresh the page.
        </Typography>
      );
    }

    return this.props.children;
  }
}
