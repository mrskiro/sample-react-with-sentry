import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";
import { init } from "./modules/sentry";
import { ErrorPage } from "./components/ErrorPage";
import { ErrorButton } from "./components/ErrorButton";

init();

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={ErrorPage}
      onError={(error, stack, id) => {
        console.log(error, stack, id);
      }}
    >
      <ErrorButton />
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
