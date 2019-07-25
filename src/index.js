// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rooterReducer } from "./store/reducers";
import { store } from "./store";

// Components
import App from "./App";

// Stylings
import "bulma/css/bulma.css";
import "./styles.scss";

const AppWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(AppWithProvider, rootElement);
