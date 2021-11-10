import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const initialTodoList = JSON.parse(localStorage.getItem('savedTodoList'));

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )

      .then((resp) => resp.json())
      .then((data) => {
        setTodoList(data.records);
        setIsLoading(false)
      })

  }, []);

  useEffect(() => {
    if (!isLoading)
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
    </Route>

    <Route path="/new">
      <h1>New Todo List</h1>
    </Route>
    </Switch>
    </BrowserRouter>
  );
  
}

export default App;
