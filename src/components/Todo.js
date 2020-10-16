import React from "react";
import Popup from "reactjs-popup";
const Todo = ({ text, todo, todos, setTodos, date }) => {
  //delete marking
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id != todo.id));
  };
  //complete marking
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={todo.completed ? "completed" : ""}>
        {text} ☛ {date}
      </li>

      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
