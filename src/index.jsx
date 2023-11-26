import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider, ReactReduxContext } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { expenses } from "./reducers/expense/expense.reducer";
import WalletRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    expenses,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <BrowserRouter>
        <WalletRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
