import { Switch, Route } from '@modern-js/runtime/router';

import './MVC.css';

import React from 'react';
import { Input,Button,List } from "antd";
// import TodoList from './TodoList';

const App = () => (
  // <div id="edit">
  //   <Input placeholder='What needs to be done?'/>
  // </div>
<section class="todoapp">

  <div>
  <header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder='What needs to be done?'/>
  </header>
<body class="learn-bar">
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox"/>
    <label for="toggle-all">before</label>
    <ul class="todo-list">
      <li>
        <div class="view">
          <input class="toggle" type="checkbox"></input>
          <label>1</label>
          <button></button>
        </div>
        <input class="edit" value="3" spellCheck="false"/>
      </li>
    </ul>
  </section>

  </body>

  <footer class="footer">
    <span class="todo-count">
      <span>items</span>
      <span>left</span>
    </span>
    <ul class="filters">
      <li href="#/" class="selected">All</li>
      <span></span>
      <li><a href="#/active">Active</a></li>
      <span></span>
      <li><a href="#/completed">Completed</a></li>
    </ul>

  </footer>
  </div>
</section>




);

export default App;
