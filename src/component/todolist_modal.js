import './style/todolist_modal.css';

function TodoListModal2() {
    return ( 
        <div className="box-container">
            <div className="row">
                <div className="col">
                    <h1 className="title-modal">Title</h1>
                    <p className="description">
                        Description...
                    </p>
                </div>
                <div className="col">
                    <h3 className="time-modal">00:00 AM</h3>
                    <h3 className="time-modal">17 Oct. 2020</h3>
                </div>
            </div>
            
            
            <div className="row p-05">
                <div className="col">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" />
                        <span className="checkbox-rec">Checklist</span>
                    </label>
                    </div>
                </div>
                <div className="col">
                    <p className="deadline">Deadline : 00:00 AM</p>
                </div>
            </div>

            <div className="row p-05">
                <div className="col">
                    <div class="checkbox">
                    <label>
                        <input type="checkbox" />
                        <span className="checkbox-rec">Checklist</span>
                    </label>
                    </div>
                </div>
                <div className="col">
                    <p className="deadline">Deadline : 00:00 AM</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <button type="button" className="btn btn-blue">Edit</button>
                <button type="button" className="btn btn-red">Delete</button>
                <button type="button" className="btn btn-green">Done</button>
            </div>
            
            
        </div>

    )
  }

export default TodoListModal2;