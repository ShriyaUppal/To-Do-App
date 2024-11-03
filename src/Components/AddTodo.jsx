import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo Here"
        />
      </div>
      <div className="col-4">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success kg-button1">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
