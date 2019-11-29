import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="App">
      <Router>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <TodoList />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

// export default App;

export default App;
