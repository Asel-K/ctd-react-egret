import React, { useRef, useEffect} from 'react';
import style from "./InputWithLabel.module.css"

const InputWithLabel = ({ todoTitle, type = "text", handleTitleChange, children, hasFocus }) => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }
    );

    return (
        <>
            <label className={style.InputLabel} htmlFor="todoTitle">{children}</label>
            <input className={style.Input}
                id="todoTitle"
                type="text"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                ref={inputRef}
                placeholder="Add Task"
            />
        </>
    )
};


export default InputWithLabel;