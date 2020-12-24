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
                  <input type="checkbox" />
                <label> Checklist</label><br/>
                <input type="checkbox"/>
                <label> Checklist</label><br/>
                <input type="checkbox" />
                <label> Checklist</label> <br/>
                </form>
            </div>
        </div>
    </div>

    );
  }

export default TodoListCard;