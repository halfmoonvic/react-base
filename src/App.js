import React, { Component } from 'react';

// 父组件
class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>父组件本身内容</h2>
        <SonComp text={'父组件传递的内容'}></SonComp>
      </div>
    )
  }
}

// 子组件
class SonComp extends Component {
  render() {
    return (
      <div className="son">
        {this.props.text}
      </div>
    )
  }
}


export default App
