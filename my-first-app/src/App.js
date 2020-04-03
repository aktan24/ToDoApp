import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className = "main">
      <div className = "mainTodo">
        <h2 className = "mainTodo__title">To-Do-List</h2>
        <input className="mainTodo__input" type="text" placeholder="Input Task"></input>
        <button className = "mainTodo__Butn" onClick="post()">Add</button>
      </div>
    </div>
  );
}

export default App;
