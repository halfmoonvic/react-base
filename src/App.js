import React, { Component } from 'react';

class App extends Component {
  render() {
    const m = React.createElement(
      'div',
      {className: 'createElement', title: 'createElement 模式'},
      React.createElement(
        'span',
        null,
        'createElement模式： '
      ),
      React.createElement(
        'span',
        null,
        '你好啊格里高利'
      )
    )
    return (
      <div className="app">
        <div className="normal" title="普通模式">
          <span>普通模式： </span>
          <span>你好啊格里高利</span>
        </div>
        <br/><hr/><br/>
        {m}
      </div>
    )
  }
}

export default App;
