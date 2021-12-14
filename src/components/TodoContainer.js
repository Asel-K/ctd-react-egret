import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import style from "./TodoContainer.module.css";
import PropTypes from 'prop-types';

function  TodoContainer ({tableName}) {
    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState (true)

    useEffect(() => {
        fetch(
            `https://api.airtable.com/v0/${
                process.env.REACT_APP_AIRTABLE_BASE_ID
            }/${encodeURIComponent(tableName)}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )

        .then((resp) => resp.json())
        .then((data) => {
            setTodoList(data.records)
            setIsLoading(false)
        })
    }, [tableName])

    const addTodo = (title) => {
        fetch (`https://api.airtable.com/v0/${
            process.env.REACT_APP_AIRTABLE_BASE_ID
        }/${encodeURIComponent(tableName)}`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                records: [
                    {
                        fields: {
                            Title: title,
                        },
                    },
                ],
        }),
} )
        .then((resp) => resp.json())
        .then((data) => {
            setTodoList([...todoList, ...data.records])
        })
    }

    const removeTodo = (id) => {
        fetch(
            `https://api.airtable.com/v0/${
                process.env.REACT_APP_AIRTABLE_BASE_ID
            }/${encodeURIComponent(tableName)}?records[]=${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )

        .then((resp) => resp.json())
        .then((data) => {
            setTodoList(todoList.filter((item) => item.id !==data.records[0].id))
        });
    }

    return (
            <div className={style.Container}>
                <h1>{tableName}</h1>

                <AddTodoForm title ="Todo List Form" onAddTodo={addTodo} />
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}
            </div>

    ) 
}
 
TodoContainer.propTypes = {
    tableName: PropTypes.string
}
export default TodoContainer;
