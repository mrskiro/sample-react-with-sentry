import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import * as ReactRedux from "react-redux";
import App from "./App";
import { init } from "./modules/sentry";
import { ErrorPage } from "./components/ErrorPage";
import { ErrorButton } from "./components/Button";
import { store } from "./store";

init();

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={ErrorPage}
      onError={(error, stack, id) => {
        console.log(error, stack, id);
      }}
    >
      <ReactRedux.Provider store={store}>
        <ErrorButton />
        <App />
      </ReactRedux.Provider>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
