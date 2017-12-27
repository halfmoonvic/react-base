import React, { Component } from 'react';

import TestComp from './comp.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <TestComp></TestComp>
        {/*<testcomp>啊哈哈哈</testcomp>*/}
      </div>
    )
  }
}

export default App;
