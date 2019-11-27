import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

/**
 * The Provider component is going to take care of getting the state and 
 * subscribing to state changes for us.
 * Provider wraps app component. It's going to provide it with the store 
 * and subscription, but in order to do that, we need to pass in the store prop 
 * to Provider, and give it a reference to the store, which we're importing up 
 * here as store.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
