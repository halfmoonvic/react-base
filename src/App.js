/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import Hello from 'container/hello/hello'
import World from 'container/world/world'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello></Hello>
        <br/><hr/><br/>
        <World></World>
      </div>
    )
  }
}

export default App
