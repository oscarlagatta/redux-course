import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(props) {
  return (
    <div className="App">      
      <div className="Todo-App">
        <TodoForm 
        currentTodo={props.currentTodo} 
        changeCurrent={props.changeCurrent}/>
        <TodoList todos={props.todos}/>
      </div>
    </div>
  ); 
}

export default App;
