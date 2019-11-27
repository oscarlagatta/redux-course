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

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCurrent
    },
    dispatch
  );
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
