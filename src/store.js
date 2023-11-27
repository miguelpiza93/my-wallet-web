import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { expenses } from "./redux/expense/expense.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore(
  {
    reducer: {
      expenses,
    },
  },
  composedEnhancer
);

export default store;
