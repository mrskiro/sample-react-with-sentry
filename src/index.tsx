import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import App from "./App";
import { init } from "./modules/sentry";
import { ErrorButton } from "./components/Button";
import { store } from "./store";
import { ErrorBoundary } from "./modules/ErrorBoundary";

init();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReactRedux.Provider store={store}>
        <ErrorButton />
        <App />
      </ReactRedux.Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
