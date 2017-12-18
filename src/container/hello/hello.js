/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class Hello extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="wrap">
        <span>你好啊， </span>
        <span>{this.props.name}！</span>
      </div>
    )
  }
}

export default Hello
