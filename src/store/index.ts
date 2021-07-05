import { configureStore, combineReducers } from "@reduxjs/toolkit";
import * as Count from "./count";
import { Dispatch } from "redux";

export type RootState = {
  count: Count.State;
};

export const store = configureStore({
  reducer: combineReducers({ count: Count.reducer }),
  // middleware: (getDefaultMiddleware) => [],
});

export type AppDispatch = typeof store.dispatch;

export type AsyncThunkConfig<T = unknown> = {
  state: RootState;
  dispatch: Dispatch;
  extra: any;
  rejectValue: T;
};

export default store;
