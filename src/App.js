import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(props) {
  return (
    <div className="App">
      <div className="Todo-App">
        <TodoForm
          currentTodo={props.currentTodo}
          changeCurrent={props.changeCurrent}
        />
        <TodoList todos={props.todos} />
      </div>
    </div>
  );
}

// export default App;

/**
 * MapStateToProps is a function that's going to accept the entire state
 * and return an object that represents the subset of the state we want
 * to pass into our component.
 * In this case, we want to pass the entire state, because it only consists
 * of our todos array and our current todo string at this point.
 */
const mapStateToProps = state => state;
/**
 * connected app component will receive our state properties as props, 
 * just like when we were passing them in manually, but now the Provider 
 * and the Connect function will work together to make that happen.
 */
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
