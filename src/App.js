/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class App extends Component {
  componentDidMount() {
    const target = this.refs.target
    console.log(target)
    setTimeout(() => {
      target.style.color = 'red'
    }, 2000)
  }
  render() {
    return (
      <div>
        <h2 ref="target">被获取的元素</h2>
      </div>
    )
  }
}

export default App
