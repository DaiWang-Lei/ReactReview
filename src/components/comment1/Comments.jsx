import React from 'react'
import CommentItem from './CommentItem.jsx'
import CmtBox from './CmtBox.jsx'
import { runInThisContext } from 'vm'
// import '../css/comments.css'
export default class Comments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      CommentList: [
        { user: '张三', content: '哈哈，沙发' },
        { user: '张三2', content: '哈哈，板凳' },
        { user: '张三3', content: '哈哈，凉席' },
        { user: '张三4', content: '哈哈，砖头' },
        { user: '张三5', content: '哈哈，楼下山炮' }
      ]
    }
  }
  // 在组件尚未渲染的时候，就立即获取函数
  componentWillMount() {
    this.loadComts()
  }
  render() {
    return <div>
      {/* 发表评论组件 */}
      {/* 相对于Vue中，把父组件传递给子组件的普通属性和方法属性，区别对待，普通属性用props接受，
      方法用this.$emit（‘方法名’） */}
      {/* React 中，只要是传递给子组件的数据，不管是普通的类型还是方法，都可以使用this.props来调用 */}
      <CmtBox reload={this.loadComts}></CmtBox>
      <h1 className='title'>评论列表 </h1>
      {this.state.CommentList.map((item, i) => {
        return <CommentItem key={i} {...item}></CommentItem>
      })}
    </div>
  }

  loadComts = () => {
    const list = JSON.parse(localStorage.getItem('cmts') || '[]')
    this.setState({
      CommentList: list
    })
  }
}