import React from 'react';

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = React.useState(''); 
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        console.log (event);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({title : todoTitle, id:Date.now()}); //new todo
        setTodoTitle('');
    };
    return (
        <form onSubmit={handleAddTodo}> 
            <label htmlFor="todoTitle">Title: </label>
            <input 
                id="todoTitle" 
                type="text" 
                name="title" 
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>   
    );
}

export default AddTodoForm;