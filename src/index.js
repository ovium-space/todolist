// (-------------------default file set up---------------
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import './index.css';
// {default file set up}
// )

// -------------------All controller--------------------
import Teambar from './assets/allteam';
// import TodoFeed from './assets/todoFeed';
// import RecentTeams from './assets/recentTeams';


 
ReactDOM.render(
  //     <Teambar />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <TodoFeed/>
  // <RecentTeams />
  <Teambar />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
