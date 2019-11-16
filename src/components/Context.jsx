import React from 'react'
import ReactTypes from 'prop-types'

// 最外层的父组件
// export default class Com1 extends React.Component{
//   constructor(props){
//     super(props)

//     this.state={
//       color:'red'
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>我是父组件</h1>
//         <Com2 color={this.state.color}></Com2>
//       </div>
//     )
//   }
// }

// // 中间层的子组件
// class Com2 extends React.Component{
//   render(){
//     return(
//       <div>
//         <h3>我是子组件</h3>
//         <Com3 color={this.props.color}></Com3>
//       </div>
//     )
//   }
// }


// // 最内层的孙子组件
// class Com3 extends React.Component{
//   render(){
//     return(
//       <div>
//         <h5 style={{color:this.props.color}}>我是孙子组件</h5>
//       </div>
//     )
//   }
// }


// 最外层的父组件
export default class Com1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'red'
    }
  }



  // 1.在父组件中，定义一个function,这个function有个固定的名称，叫做getChildContext,内部，
  // 必须返回一个对象，这个对象，就是要共享给 所有子组件自建的数据
  getChildContext() {
    return {
      color: this.state.color
    }
  }

  // 2.使用属性校验，规定一下传递给子组件的数据类型，需要定义一个静态的（static）
  // childContextTypes(固定名称，不要修改)
  static childContextTypes = {
    color: ReactTypes.string //规定了 传递给子组件的数据类型
  }


  render() {
    return (
      <div>
        <h1>我是父组件</h1>
        <Com2 ></Com2>
      </div>
    )
  }
}

// 中间层的子组件
class Com2 extends React.Component {
  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <Com3 ></Com3>
      </div>
    )
  }
}


// 最内层的孙子组件
class Com3 extends React.Component {

  // 3.先来个属性校验，去检验下父组件传递过来的参数类型
  static contextTypes = {
    color: ReactTypes.string //这里，如果子组件，想要使用父组件通过context共享的数据，那么在使用之前
    // 一定要先做 数据类型校验
  }
  render() {
    return (
      <div>
  <h5 style={{color:this.context.color}}>我是孙子组件----{this.context.color}</h5>
      </div>
    )
  }
}