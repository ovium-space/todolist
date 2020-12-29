import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import TodoListBar from './component/todolist_bar';
import TodoListModal from './component/todolist_modal';

function App() {
  return (
    <div>
      <Navbar/> 
      <TodoListBar/>
      {/* <TodoListModal/> */}
    </div>
      
  );
}

export default App;
