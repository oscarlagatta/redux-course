import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(props) {
  return (
    <div className="App">
      <div className="Todo-App">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

// export default App;

export default App;
