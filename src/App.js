import React, { Component } from 'react';

// 父组件
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '父组件'
    }

    this.acceptValue = this.acceptValue.bind(this)
  }
  acceptValue(val) {
    this.setState({
      text: this.state.text + val
    })
  }
  render() {
    return (
      <div className="app">
        <h2>{this.state.text}</h2>
        <SonComp passValue={this.acceptValue}></SonComp>
      </div>
    )
  }
}

// 子组件
class SonComp extends Component {
  render() {
    return (
      <button onClick={() => this.props.passValue('from son')}>子→父传值</button>
    )
  }
}


export default App
