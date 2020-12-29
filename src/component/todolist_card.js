import './style/todolist_card.css';

function TodoListCard() {
    return (  
    <div className="mt-2">
        <div className="box">
            <h3 className="title-todo">Title</h3>
            <h3 className="time-todo">00:00 AM</h3>
            <div className="p-05">
                <p className="des">Description...</p>
                <form className="p-05 pt-0 font-15">
                  <div class="checkbox">
                    <label>
                        <input type="checkbox" />
                        <span className="text-checklist-card">Checklist</span>
                    </label>
                    </div>
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

export default TodoListCard;