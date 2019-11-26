import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

const render = () => {
  /**
   * Here, we're using the store's getState method to get the global state
   * out of our store and we're passing it into our app component as props.
   * This happens once when the application loads.
   */
  const state = store.getState();

  ReactDOM.render(<App {...state} />, document.getElementById("root"));
};

render();

/**
 * Now anytime there's an update to the state object in the store, subscribe is going to call 
 * the render function and update our application.
 */
store.subscribe(render);

/**
 * Now that we've subscribed to updates, let's trigger an update so we can see it in action. 
 * I'm just going to add some temporary code here so that we can dispatch an action and see 
 * our update take place. 
 * I'm just going to reference the store and I'm going to call dispatch. 
 * The dispatch method is going to call the reducer with the current state, and the action 
 * that we pass into dispatch, and that's going to trigger an update to our state, which 
 * will call render through the subscribe method.
 */
setTimeout( () => {
    store.dispatch({type:'TODO_ADD', payload: { id:5, name: 'NEW TODO', isComplete: true}})
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
