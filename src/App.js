/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/
import Hello from 'container/hello/hello'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }

    this.getSonsValue = this.getSonsValue.bind(this)
  }
  getSonsValue(val) {
    // console.log(val)
    this.setState({
      text: val
    })
  }
  render() {
    return (
      <div>
        <Hello passval={this.getSonsValue}></Hello>
        <br/><hr/><br/>
        <h2>App组件接受自Hello的值： <br/> {this.state.text}</h2>
      </div>
    )
  }
}

export default App
