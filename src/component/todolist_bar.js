import "./style/todolist_bar.css";
import TodoListCard from "./todolist_card";
import TodoListModal from "./todolist_modal";
import TodoListCardAdd from "./todolist_card_add";
import React, { useState, useEffect } from "react";

function TodoListBar() {
  const [todolist, setlist] = useState(["test", "test", "n"]);

  const components = todolist.map((todo, index) => {
    return <TodoListCard key={index} />;
  });

  function addTodo(event) {
    setlist([...todolist, "n"]);
    console.log(todolist);
  }

  return (
    <div className="paper">
      <h1 className="todo">TO DO LIST</h1>
      <button onClick={addTodo} className="btn-bar">
        <span className="text-btn-cir">+</span>
      </button>
      {components}
      {/* {
          todolist.map(() => (
            <TodoListCard />
          ))
        } */}
    </div>
  );
}

export default TodoListBar;
