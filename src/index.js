// (-------------------default file set up---------------
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
// import './index.css';
// {default file set up}
// )

// -------------------All controller--------------------
import Homepage from "./pages/Homepage";
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
