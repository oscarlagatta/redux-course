import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">      
      <div className="Todo-App">
        <form>
          <input type="text" />
        </form>
        <div className="Todo-List">
          <ul>
            {props.todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete} />
                {todo.name}
              </li>
            ) )}
          </ul>
        </div>
      </div>
    </div>
  ); 
}

// const App = ({todos}) => {
//   return (
//     <div className="App">      
//       <div className="Todo-App">
//         <form>
//           <input type="text" />
//         </form>
//         <div className="Todo-List">
//           <ul>
//             {todos.map(todo => (
//               <li key={todo.id}>
//                 <input type="checkbox" defaultChecked={todo.isComplete} />
//                 {todo.name}
//               </li>
//             ) )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };



export default App;
