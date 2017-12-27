import React, { Component } from 'react';

// 父组件
class App extends Component {
  componentDidMount() {
    const domEl = this.refs.domEl
    const compEl = this.refs.compEl

    console.log(domEl)
    console.log(compEl)
  }
  render() {
    return (
      <div className="app">
        <h2 ref="domEl">父组件本身内容</h2>
        <SonComp ref="compEl" text={'父组件传递的内容'}></SonComp>
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
