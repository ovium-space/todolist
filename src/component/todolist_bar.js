import "./style/todolist_bar.css";
import TodoListCard from "./todolist_card";
import TodoListModal from "./todolist_modal";
import TodoListCardAdd from "./todolist_card_add";
import React, { useState, useEffect } from "react";
import Test from "./test";

{/* <Button variant="primary" onClick={() => setModalShow(true)}>
Launch vertically centered modal
</Button> */}

function TodoListBar() {
  const [todolist, setlist] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  const components = todolist.map((todo, index) => {
    return <TodoListCard key={index} />;
  });

  function addTodo(event) {
    let newtodo = {
      "title" : "name",
      "desciption" : "des_name",
      "checklist" : [
        {
        "name" : "checklist1",
        "value" : false
        },
        {
          "name" : "checklist2",
          "value" : true
        }
      ]
    }

    setlist([...todolist, newtodo]);
    console.log(todolist);
  }

  return (
    <>
      <div className="paper">
        <h1 className="todo">TO DO LIST</h1>
        <button onClick={addTodo} className="btn-bar">
          <span className="text-btn-cir">+</span>
        </button>
          {components}
      </div>
      <Test
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </>
  );
}

export default TodoListBar;
