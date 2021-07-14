import * as React from "react";
import * as Sentry from "@sentry/react";

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(err: Error, _: React.ErrorInfo) {
    console.error(err);
    Sentry.captureException(err);
  }

  render() {
    if (this.state.hasError) return <div>errrrrrr</div>;
    return this.props.children;
  }
}
