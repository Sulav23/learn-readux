import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterAction = counterSlice.actions;
