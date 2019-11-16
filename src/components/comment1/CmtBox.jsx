import React from 'react'

export default class CMTBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label>评论人：</label>
        <br />
        <input type="text" ref='user' />
        <br />
        <label >评论内容：</label>
        <br />
        <textarea ref='content' cols="30" rows="4"></textarea><br />
        <input type="button" value="发表评论" onClick={this.postComment} />
      </div>
    )
  }
  postComment = () => {
    // 1.获取到评论人和评轮内容
    const cmtInfo = {
      user: this.refs.user.value,
      content: this.refs.content.value
    }
    // 2.从本地存储中，先获取之前的评论数组
    let list = JSON.parse(localStorage.getItem('cmts') || '[]')
    // 3.把最新的这条评论，unshift进去
    list.unshift(cmtInfo)
    // 4.在把最新的评论数组，保存到本地存储后中
    localStorage.setItem('cmts', JSON.stringify(list))
    // 5.把列表清空
    this.refs.user.value = this.refs.content.value = ''
    // 调用父组件的方法，刷新页面
    this.props.reload()



  }
}