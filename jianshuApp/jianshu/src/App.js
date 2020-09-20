import React from 'react';
import {Provider} from 'react-redux'
import {Globalstyle} from './style.js'
import { BrowserRouter, Route } from 'react-router-dom'
import {IconGlobalstyle} from './statics/iconfont/iconfont.js'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <div>
          <Globalstyle></Globalstyle>
          <IconGlobalstyle/>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
