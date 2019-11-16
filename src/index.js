import React from 'react';
import ReactDOM from 'react-dom';


import App from './App.jsx'
// 全局导入antd 的Css文件
// 一般，我们使用的第三方UI组件，它们的样式表文件，都是以.css结尾的，所以，我们最好不要为.css后缀名的文件
// 启用模块化
 /* 我们推荐自己不要直接手写.css文件，而是自己
 手写scss或者less文件，我们只需要为scss文件或less文件启用模块化就好了 */
// import 'antd/dist/antd.css';

ReactDOM.render(<div><App></App></div>, document.querySelector('#root'));

