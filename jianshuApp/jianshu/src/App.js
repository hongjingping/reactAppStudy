import React from 'react';
import {Provider} from 'react-redux'
import {Globalstyle} from './style.js'
import { BrowserRouter, Route } from 'react-router-dom'
import {IconGlobalstyle} from './statics/iconfont/iconfont.js'
import Header from './common/header'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <div>
          <Globalstyle></Globalstyle>
          <IconGlobalstyle/>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' render={() => <div>Home</div>}></Route>
              <Route path='/detail' render={() => <div>Detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
