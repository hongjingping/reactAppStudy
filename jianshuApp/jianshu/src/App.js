import React from 'react';
import {Provider} from 'react-redux'
import {Globalstyle} from './style.js'
import {IconGlobalstyle} from './statics/iconfont/iconfont.js'
import Header from './common/header'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Globalstyle></Globalstyle>
        <IconGlobalstyle/>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
