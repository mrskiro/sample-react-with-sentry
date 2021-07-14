import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import * as Count from "./count";
import { Dispatch } from "redux";
import * as Sentry from "@sentry/react";

export type RootState = {
  count: Count.State;
};

const errorMiddleware: Middleware = (_) => (next) => (action) => {
  if ("error" in action) {
    const err = new Error(action.error.message);
    err.name = action.error.name;
    err.stack = action.payload.stack;
    Sentry.captureException(err, {
      contexts: {
        action: {
          ...action,
        },
      },
    });
  }
  next(action);
};

export const store = configureStore({
  reducer: combineReducers({ count: Count.reducer }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    errorMiddleware,
  ],
});

export type AppDispatch = typeof store.dispatch;

export type AsyncThunkConfig<T = unknown> = {
  state: RootState;
  dispatch: Dispatch;
  extra: any;
  rejectValue: T;
};

export default store;
