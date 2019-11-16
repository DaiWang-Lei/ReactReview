import React from 'react'
function Hello(props) {
  return <div>
    <h1>hello,组件</h1>
    <h1>姓名：{props.name}</h1>
    <h1>年龄：{props.age}</h1>
    <h1>地址：{props.address}</h1>
  </div>
}

export default Hello