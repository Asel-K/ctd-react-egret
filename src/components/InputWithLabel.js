import React, { useRef, useEffect} from 'react';
import style from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
    children: PropTypes.string,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func
  }

export default InputWithLabel;