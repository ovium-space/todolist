import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import TodoListBar from "./component/todolist_bar";
// import TodoListModal from './component/todolist_modal';
import Calendar from "./calendar/calendar.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Navbar/> 
      <TodoListBar/>
      <Calendar/>
      {/* <Test /> */}
      {/* <TodoListModal/> */}
    </div>
  );
}

export default App;
