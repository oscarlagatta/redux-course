import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

const todoChangeHandler = (val) => store.dispatch({type:'CURRENT_UPDATE', payload: val})

const render = () => {
  /**
   * Here, we're using the store's getState method to get the global state
   * out of our store and we're passing it into our app component as props.
   * This happens once when the application loads.
   */
  const state = store.getState();

  ReactDOM.render(
    <App todos={state.todos} currentTodo={state.currentTodo} 
      changeCurrent={todoChangeHandler}
    />,
    document.getElementById("root")
  );
};

render();

/**
 * Now anytime there's an update to the state object in the store, subscribe is going to call
 * the render function and update our application.
 */
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
