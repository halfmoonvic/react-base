import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Link to="/about" className="route">关于</Link>
          <br/>
          <Link to="/mine" className="route">个人主页</Link>
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
