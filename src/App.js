import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import TodoListBar from './component/todolist_bar';
import TodoListModal from './component/todolist_modal';
import Calendar from "./calendar/calendar.js";

function App() {
  return (
    <div>
      <Navbar/> 
      <TodoListBar/>
      <Calendar/>
      {/* <TodoListModal/> */}
    </div>
      
  );
}

export default App;