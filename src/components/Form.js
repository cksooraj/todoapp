import React from "react";

const Form = ({
  setInputText,
  setInputDate,
  todos,
  setTodos,
  inputText,
  setStatus,
  inputDate,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const inputDateHandler = (e) => {
    setInputDate(e.target.value);
  };

  //validating inputy

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText == "") {
      alert("Empty todo");
    } else if (/[^a-z]/i.test(inputText)) {
      alert("Invalid todo");
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          date: inputDate,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
      setInputText("");
      setInputDate("");
    }
  };
  //setting status
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="List">
      <form>
        <label>TODO➼</label>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder={inputText}
        />
        <input
          value={inputDate}
          placeholder="Enter  date"
          onChange={inputDateHandler}
          type="date"
          className="todo-input date"
        />

        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
