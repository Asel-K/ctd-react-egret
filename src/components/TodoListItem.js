import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

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

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
}
export default TodoListItem;
