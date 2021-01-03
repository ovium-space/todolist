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
      expire_datetime: "null",
      start_datetime: null,
      checklists: [
        {
          checklist_ID: "3",
          todolist_ID: "3",
          name: "0",
          state: 0,
          checklist_index: 1,
          expire_datetime: null,
          due_datetime: null,
          checklist_check: false,
        },
        {
          checklist_ID: "4",
          todolist_ID: "3",
          name: "1",
          state: 0,
          checklist_index: 2,
          expire_datetime: null,
          due_datetime: null,
          checklist_check: false,
        },
      ],
    },
  ];

  return (
    <div className="mt-2">
      <div className="box pointer">
        {todoList.map((todo, index) => (
          <form>
            <div key={index}>
              <h3 className="title-todo">{todo.name}</h3>
              <h3 className="time-todo">{todo.expire_datetime}</h3>
              <div className="des">
                <p>{todo.description}</p>
              </div>
              <div className="form-group">
                {todo.checklists.map((checklist, i) => (
                  <div class="form-check m-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value={checklist.checklist_index}
                      id={checklist.checklist_ID}
                    />
                    <label class="form-check-label ml-3" for={checklist.checklist_ID}>
                      Default checkbox
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}

export default TodoListCard;
