import './style/todolist_bar.css';
import TodoListCard from './todolist_card';
import TodoListModal from './todolist_modal';



function TodoListBar() {
    return (
    <div className="paper">
        <h1 className="todo">TO DO LIST</h1>
        <button className="btn-bar" onClick={TodoListModal}><span className="text-btn-cir">+</span></button>
        <TodoListCard/>
        
    </div>
    );
  }

export default TodoListBar;