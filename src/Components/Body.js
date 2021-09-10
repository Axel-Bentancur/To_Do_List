import React, { useState, useEffect } from "react";
import ToDoTask from "./ToDoTask";
import cat from "../cat.png";

export default function Body() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  function handleOnChange(e) {
    const { value } = e.target;
    setToDo(value);
  }

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      handleOnClick();
    }
  }

  function handleOnClick() {
    if (toDo !== "") {
      setToDoList([...toDoList, toDo]);
      setToDo("");
    }
  }

  const handleDeleteClick = (idx) => {
    toDoList.splice(idx, 1);
    setToDoList([...toDoList]);
  };

  useEffect(() => {}, [toDoList]);

  return (
    <div className="bodyContainer">
      <div className="cat-container">
        <h1 className="title">To-Do App</h1>
        <img src={cat} alt="cat-img" className="cat-img" />
      </div>
      <div className="input-container">
        <div className="content-input">
          <input
            name="input"
            type="text"
            placeholder="Description To-Do"
            className="toDoInput font"
            value={toDo}
            onChange={handleOnChange}
            onKeyUp={handleKeyUp}
            autoComplete="off"
          ></input>
          <button type="submit" className="addButton" onClick={handleOnClick}>
            ADD
          </button>
        </div>
        <div className="toDoContainer">
          {toDoList.map((e, idx) => (
            <ToDoTask
              task={e}
              key={idx}
              idx={idx}
              handleDelete={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
