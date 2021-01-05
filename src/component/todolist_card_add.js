import "./style/todolist_card_add.css";
import React from "react";

function TodoListCardAdd(props) {
  return (
    <div className="mt-2">
        <div className="box-add">
            <h3 className="title-todo-add">Title</h3>
            <h3 className="time-todo-add">00:00 AM</h3>
            <div className="p-05">
                <p className="des-add">Description...</p>
                <form className="p-05 pt-0 font-15">
                <div className="grid-checklist">
                    <div className="checkbox">
                    <label>
                        <input type="checkbox" />
                        <span className="text-checklist-card">Checklist</span>
                    </label>
                    </div>
                    <button type="button" className="btn-add-checklist">Add Checklist</button>
                </div>
                </form>
                <button type="button" className="btn-add-submit">	&#10004;</button>
            </div>
        </div>
      </div>
  );
}

export default TodoListCardAdd;
