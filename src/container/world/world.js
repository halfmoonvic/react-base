/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class World extends Component {
  handleClick() {
    console.log('world')
  }
  render() {
    const s = {'fontSize': '20px', 'color': 'blue'}
    const arr = ['aa', 'bb', 'cc']

    const el = React.createElement(
      "div",
      {className: "wrap", style: s},
      React.createElement(                      // 第一个子元素
        "button",
        {className: "son", onClick: this.handleClick.bind(this)},
        'button'
      ),
      React.createElement(                      // 第二个子元素
        "ul",
        {className: "list"},
        arr.map((item, index) => React.createElement(
          "li",
          {className: "list-item", key: index},
          item
        ))
      )
    )

    return (
      <div>{el}</div>
    )
  }
}

export default World
