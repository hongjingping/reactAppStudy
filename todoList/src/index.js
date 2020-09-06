import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux'
import store from './store'

// Provider将store提供给每一个组件
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>

)
  
// JSX语法，必须引入react，如果我们要使用自己创建的组件，组件开头必须是大写字母11
ReactDOM.render(App, document.getElementById('root'));
