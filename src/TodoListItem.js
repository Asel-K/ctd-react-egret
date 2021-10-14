import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <>
            <li>
                {todo.title}
                <button
                    onClick={() => onRemoveTodo(todo.id)}
                    type="button">
                    Remove
                </button>
            </li>
        </>
    );
};

export default TodoListItem;
