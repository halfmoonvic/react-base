/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '你好啊，格里高利'
    }

    this.changeText = this.changeText.bind(this)
  }
  changeText() {
    this.setState({
      text: '被改变啦'
    })
  }
  render() {
    return (
      <div className="app">
        <div>{this.state.text}</div>
        <button onClick={this.changeText}>setState 改变 state 值</button>
      </div>
    )
  }
}

export default App
