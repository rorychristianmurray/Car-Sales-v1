// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rooterReducer } from "./store/reducers";

// Components
import App from "./App";

// Stylings
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(rooterReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
