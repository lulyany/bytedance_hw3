import { Switch, Route } from '@modern-js/runtime/router';

import './APP.css';

import React from 'react';
import TodoList from "./TodoList";
import TodoItem from './TodoList';

const App = () => (
  <section class="todoapp">
    <div>
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" />
      </header>
//header
      <body class="learn-bar">
        <section class="main">
          <input id="toggle-all" class="toggle-all" type="checkbox" />
          <label for="toggle-all">before</label>
          <ul class="todo-list">
            <li>
              <div class="view">
                <input class="toggle" type="checkbox"></input>
                <label>1</label>
                <button></button>
              </div>
              <input class="edit" value="3" spellCheck="false" />
            </li>

            <TodoItem
              content={item}
              index={index}
              deleteItem={this.handleItemDelte.bind(this)}
            />

          </ul>
        </section>
      </body>
//footer
      <footer class="footer">
        <span class="todo-count">
          <span>items</span>
          <span>left</span>
        </span>
        <ul class="filters">
          <li href="#/" class="selected">
            All
          </li>
          <span></span>
          <li>
            <a href="#/active">Active</a>
          </li>
          <span></span>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
      </footer>
    </div>
  </section>
);



export default App;
