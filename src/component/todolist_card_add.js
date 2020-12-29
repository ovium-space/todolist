import './style/todolist_card_add.css';
import React from 'react';

function TodoListCardAdd() {
    return (  
    <div className="mt-2">
        <div className="box-add">
            <h3 className="title-todo-add">Title</h3>
            <h3 className="time-todo-add">00:00 AM</h3>
            <div className="p-05">
                <p className="des-add">Description...</p>
                <form className="p-05 pt-0 font-15">
                  <div class="checkbox">
                    <label>
                        <input type="checkbox" />
                        <span className="text-checklist-card">Checklist</span>
                    </label>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>

    );
  }

export default TodoListCardAdd;