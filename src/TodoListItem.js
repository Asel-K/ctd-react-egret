import React from 'react';
import TodoList from './TodoList';

const TodoListItem = (props) => {
    return (
        <li>{props.todo.title}</li>
    );
}

export default TodoListItem;
