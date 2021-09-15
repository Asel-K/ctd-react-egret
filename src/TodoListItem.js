import React from 'react';
import TodoList from './TodoList';

const TodoListItem = ({todo}) => {
    return (
        <li>{todo.title}</li>
    );
}

export default TodoListItem;
