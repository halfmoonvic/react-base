/**** React应用依赖组件 ****/
// core
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
/******* 第三方 组件库 *****/
/**** 本地公用变量 公用函数 **/
/******* 本地 公用组件 *****/
import 'common/css/index.scss'
/**** 当前组件的 子组件等 ***/
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
