/**** React应用依赖组件 ****/
// core
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
/**** 当前组件的 子组件等 ***/

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/about">关于</Link>
          <br/>
          <Link to="/mine">个人主页</Link>
          <br/><hr/><br/>
          <Switch>
            <Redirect path='/' exact to='/about'></Redirect>
            <Route path="/about" component={About}></Route>
            <Route path="/mine" component={Mine}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

const About = (props) => <h1>关于页面</h1>
const Mine = (props) => <h1>个人主页页面</h1>
