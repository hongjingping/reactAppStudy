import React from 'react';
import {Globalstyle} from './style.js'
import {IconGlobalstyle} from './statics/iconfont/iconfont.js'
import Header from './common/header'

function App() {
  return (
    <div className="App">
      <Globalstyle></Globalstyle>
      <IconGlobalstyle/>
      <Header/>
    </div>
  );
}

export default App;
