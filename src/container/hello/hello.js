/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class Hello extends Component {
  render() {
    return (
      <div className="wrap">
        <button onClick={() => this.props.passval('我是来自 Hello 组件啊')}>传值啊</button>
      </div>
    )
  }
}

export default Hello

