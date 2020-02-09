import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
export const actions = {
  increment,
  decrement
};
const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
});
export const store = configureStore({
  reducer: counter,
  preloadedState: 0
});
