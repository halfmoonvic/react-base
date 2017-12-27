/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    }
    console.log('@init=0. constructor')
  }
  componentWillMount() {
    console.log('@init=1. componentWillMount')
  }
  componentDidMount() {
    console.log('@init=2. componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log('@change=1. componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('@change=2. shouldComponentUpdate', nextProps, nextState)
    return true
  }
  componentWillUpdate() {
    console.log('@change=3. componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('@change=4. componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    console.log('@render @render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            val: 'hehe'
          })
        }}>改变本地 state</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    }
  }
  render() {
    return (
      <div className="app">
        <button onClick={() => {
          this.setState({
            val: 'change'
          })
        }}>app组件主动更改穿过去的 props</button>
        <br/><br/>
        <Test name={this.state.val} ></Test>
      </div>
    )
  }
}

export default App
