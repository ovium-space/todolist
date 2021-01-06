import Calendar from "../calendar/calendar";
import Navbar from "../component/navbar";
import TodoListBar from "../component/todolist_bar";

function Todo_Page() {
  return (
    <div>
      <Navbar />
      <TodoListBar />
      <Calendar />
    </div>
  );
}
export default Todo_Page;
