import React, { Component } from 'react'


// 父组件
export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是父组件的msg',
      num: 1
    }
  }
  render() {
    return (<div>
      <h1>父组件</h1>
      <input type="button" value="+1" onClick={this.change} />
      <hr />
      <Son pnum={this.state.num}></Son>
    </div>)
  }
  change = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

}

// 子组件
class Son extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (<div>
      <h3>子组件----{this.props.pnum}</h3>
    </div>)
  }

  // 组件将要接受外界传递过来的新的props属性值
  // 当子组件第一次被渲染到页面上到时候，不会触发这个函数
  // 只有当父组件中，通过某些事件，重新修改了传递给子组件当props数据之后
  // 才会触发componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    // 注意：在componentWillReceiveProps 被触发的时候，如果我们使用this.props来获取属性值,
    // 这个属性值不是最新的，是上一次的旧属性值
    // 如果想要获取最新的属性值。需要通过componentWillReceiveProps的参数列表来获取
    console.log('被修改了！');
    console.log(nextProps);
    
  } 
}
