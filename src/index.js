import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Calendar from "./calendar/calendar.js";
import reportWebVitals from "./reportWebVitals";
// import Navbar from './component/navbar';
// import TodoListBar from './component/todolist_bar';
// import TodoListModal from './component/todolist_modal';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar/> 
    <TodoListBar/> */}
    {/* <Calendar /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
