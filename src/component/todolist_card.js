import "./style/todolist_card.css";
import React from "react";

function TodoListCard(props) {
  let todoList = [
    {
      todolist_ID: "3",
      user_ID: "0",
      name: "Ei",
      description: "EIEI",
      state: 0,
      todolist_index: 3,
      expire_datetime: null,
      start_datetime: null,
      checklists: [
        {
          checklist_ID: "3",
          todolist_ID: "3",
          name: "0",
          state: 0,
          checklist_index: 2,
          expire_datetime: null,
          due_datetime: null,
          checklist_check: false,
        },
        {
          checklist_ID: "4",
          todolist_ID: "3",
          name: "1",
          state: 0,
          checklist_index: 3,
          expire_datetime: null,
          due_datetime: null,
          checklist_check: false,
        },
      ],
    },
  ];

  return (
    <div className="mt-2">
      <div className="box">
        {todoList.map((todo, index) => (
          <div key={index}>
            <h3 className="title-todo">{todo.name}</h3>
            <h3 className="time-todo">{todo.expire_datetime}</h3>
            <div className="p-05">
              <p className="des">{todo.description}</p>
              <form className="p-05 pt-0 font-15">
                {todo.checklists.map((checklist, index) => (
                  <div key={index} className="checkbox">
                    <label>
                      <input type="checkbox" />
                      <span className="text-checklist-card">
                        {checklist.name}
                      </span>
                    </label>
                  </div>
                ))}
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoListCard;
