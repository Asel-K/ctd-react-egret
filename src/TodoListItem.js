import React from 'react';
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <>
            <li className={style.ListItem}>
                {todo.fields.Title}&nbsp;
                <button className={style.RemoveButton}
                    onClick={() => onRemoveTodo(todo.id)}
                    type="button">
                    Remove
                </button>
            </li>
        </>
    );
};

export default TodoListItem;
