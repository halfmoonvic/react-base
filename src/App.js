/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateChange: ''
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
    console.log('   render    ')
    return (
      <div>
        <h2 onClick={() => {
          this.setState({
            stateChange: 'changeState'
          })
        }}>改变本地 state</h2>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propChange: ''
    }
  }
  render() {
    return (
      <div>
        <h2 onClick={() => {
          this.setState({
            propChange: 'changeProps'
          })
        }}>app组件主动更改穿过去的 props</h2>
        <Test passedAppValue={this.state.propChange} ></Test>
      </div>
    )
  }
}

export default App
