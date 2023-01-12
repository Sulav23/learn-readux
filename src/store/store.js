import { createStore } from "redux";

const storeReducer = (state = { counter: 0 }, action) => {
  // for increment
  if (action.type === "increment") {
    return {
      counter: state.counter + 1
    };
  }

  // for decrement
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1
    };
  }

  return state;
};

const store = createStore(storeReducer);

export default store;
