// 封装一个评论项组件，此组件为渲染页面的无状态组件
import React from 'react'
// import inlineStyle from './smtItemStyle'
import commentitemStyle from '../../css/commentsItem.module.css'
// import '../../css/CommentsItem.css'

console.log(commentitemStyle);


export default function CommentItem(props) {

  // 样式优化1
  // const boxStyle= {border:'1px solid #ccc',margin:10,paddingLeft:10}
  // const userStyle = {color:'purple',fontSize:20}
  // const contentStyle = {color:'orange',fontSize:16}

  // 样式优化2
  //  const inlineStyle={
  //   boxStyle:{border:'1px solid #ccc',margin:10,paddingLeft:10},
  //   userStyle:{color:'purple',fontSize:20},
  //   contentStyle:{color:'orange',fontSize:16}
  // }

  // 这是行内样式
  // return <div key={props.i} style={inlineStyle.box}>
  //   <h1 style={inlineStyle.user}>评论人：{props.user}</h1>
  //   <h2  style={inlineStyle.content}>评论内容：{props.content}</h2>
  // </div>


  // 这是外部模块化的css 
  return <div key={props.i} className={commentitemStyle.box}>
    <h1 className={commentitemStyle.user}>评论人：{props.user}</h1>
    <h2 className={commentitemStyle.content}>评论内容：{props.content}</h2>
  </div>
}