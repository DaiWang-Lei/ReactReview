import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/Hello.jsx'
import Hello2 from './components/Hello2.jsx'
// import ClassStudy from './class_study.js'
// import Class2 from './class_study2'

// 在React构造函数就是最基本的组件

const person = {
  name: '代罔',
  age: 18,
  address: '旅顺口区'
}




ReactDOM.render(<Hello2 {...person}></Hello2>, document.querySelector('#root'));

