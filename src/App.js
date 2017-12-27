import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }

    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('this: ', this)

    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <div className="app">
        <div>{this.state.flag ? 'Good Morning' : 'Good Afternoon'}</div>
        <button onClick={this.handleClick}>更改 state.text</button>
      </div>
    )
  }
}

export default App;
