import * as React from 'react';

let todoList = [
  {
    id: '1',
    title: 'Read the first chapter of the book and view videos',
  },
  {
    id: '2',
    title: 'Complete the assignment',
  },
  {
    id: '3',
    title: 'Submit the assignment',
  },
]
 
function App() {
 
  return (
    <div>
      <h1>Todo List</h1>

      <ul>
      {todoList.map(function (item) {
          return (
            <li key={item.id}>
              
              <span>{item.title}</span>
            
            </li>
          );
      })}

      </ul>
    </div>
  );
}
 
export default App;
