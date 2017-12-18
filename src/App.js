/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import Hello from 'container/hello/hello'

class App extends Component {
  render() {
    const yourname = '格里高利'
    return (
      <div className="app">
        <Hello name={yourname}></Hello>
      </div>
    )
  }
}

export default App
