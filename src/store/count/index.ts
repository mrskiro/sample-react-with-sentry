import * as ReduxToolkit from "@reduxjs/toolkit";
import { RootState, AsyncThunkConfig } from "..";

export type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const fetchCount = ReduxToolkit.createAsyncThunk<
  number,
  undefined,
  AsyncThunkConfig
>("count/fetch", async (_, thunkAPI) => {
  try {
    const res = await 200;
    throw new Error("fetch count error");
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const slice = ReduxToolkit.createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCount.fulfilled, (state, action) => {
      state.count = action.payload;
    });
  },
});

export const { reducer, actions } = slice;

const stateSelecter = (state: RootState) => state.count;

export const countSelector = ReduxToolkit.createSelector(
  stateSelecter,
  (state) => state.count
);
