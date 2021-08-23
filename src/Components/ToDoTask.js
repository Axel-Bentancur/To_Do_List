import React, { useState } from "react";

export default function ToDoTask({ task, idx, handleDelete }) {
  const [state, setState] = useState(false);
  function handleClick() {
    setState(true);
  }
  console.log(state);
  return (
    <div className="taskContainer">
      <div className="toDoTask" onClick={handleClick}>
        <span className={`checked-item ${state ? "checked" : null}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#37b24e94"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </span>
        <span className={`content font ${state ? "content-checked" : null}`}>
          {task}
        </span>
      </div>
      <button
        className={`btn btn-danger delete-button ${state ? "disabled" : null}`}
        data-bs-toggle="modal"
        data-bs-target={`#deleteModal${idx}`}
      >
        X
      </button>

      <div
        className="modal fade"
        id={`deleteModal${idx}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title font" id="exampleModalLabel">
                Are you sure you want to delete this task:
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body font">{task}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary cancel-button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary delete-button"
                onClick={() => handleDelete(idx)}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
