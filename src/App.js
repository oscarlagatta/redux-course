import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { bindActionCreators } from "redux";
import { updateCurrent } from "./reducers/todo";

function App(props) {
  return (
    <div className="App">
      <div className="Todo-App">
        <TodoForm
          currentTodo={props.currentTodo}
          changeCurrent={props.updateCurrent}
        />
        <TodoList todos={props.todos} />
      </div>
    </div>
  );
}

// export default App;

export default connect(state => state, { updateCurrent })(App);
