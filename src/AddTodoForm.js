// import { style } from '@mui/system';
import React, { useState} from 'react';
import InputWithLabel from './InputWithLabel';
import style from "./AddTodoForm.module.css";

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState(''); 

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo (todoTitle);
        setTodoTitle('');
    };
    return (
        <div className={style.form}>
        <form className={style.formInputAdd} onSubmit={handleAddTodo}> 
            <InputWithLabel className={style.InputWithLabel}
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange} 
            >
                
            </InputWithLabel>
                
            <button className={style.AddButton} type="submit">Add</button>
        </form>   
        </div>
    );
}

export default AddTodoForm;