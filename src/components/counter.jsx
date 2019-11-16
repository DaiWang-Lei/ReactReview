import React, { Component } from 'react'
import ReactTypes from 'prop-types'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是state里的数据',
      count: props.initcount
    }
  }

  // 在React中，使用静态的defaultProps属性，来设置组件的默认属性值
  static defaultProps = {
    initcount: 0 //如果外界没有传递initcount，那么，自己初始化一个数值,为0 
  }

  // 这是创建一个静态的propTypes对象，在这个对象中，可以把外界传递过来的属性，做类型校验
  // 注意：如果要为传递过来的属性做类型校验，必须安装React提供的第三方包，叫做prop-types
  // prop-types大概在15版本之前，并没有单独抽离出来，那个时候还和React包在一起，后来从15版本之后，官方把类型检验的模块，单独抽离外一个包，叫做prop-types
  static propTypes = {
    initcount: ReactTypes.number
  }

  // 
  // componentWillMount() {
  //   // console.log(document.querySelector('.myh3'));  null
  //   // console.log(this.props.initcount);  3
  //   // console.log(this.state.msg);  我是state里的数据
  //   // console.log(this.myFun());  这是函数  
  // }

  // 当执行到这个生命周期函数到时候，即将要开始渲染内存中到虚拟DOM了，当这个函数执行完，内存中就有了一个
  // 渲染好的虚拟DOM，但是，网页上尚未显示真正到DOM元素呢
  render() {
    // 在return之前，虚拟DOM还没有开始创建，页面上也是空的。根本拿不到任何的元素
    // console.log(document.querySelector('.myh3'));  null
    // console.log(this.refs.h3&&this.refs.h3.innerHTML)
    // 不要在render中调用this.setState({})因为会陷入死循环 
    return (
      <div>
        <h1>这是Counter计数器组件</h1>
        <input type="button" value='+1' onClick={this.addOne} />
        <hr />
        <h3 id="myh3" ref="h3">当前的个数为：{this.state.count}</h3>
      </div>
      // 当return执行完毕后，虚拟DOM创建好了，但是，还没有挂载到真正当页面中
    )
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // 当组件挂载到页面上之后，会进入这个生命周期函数，只要进入这个生命周期函数，必然说明，页面上，已经有可见到
  // DOM元素了
  // 当组件执行完componentDidMount函数后，就进入到了运行中当状态，所以componentDidMount是创建阶段的最后一个函数
  componentDidMount() {
    // 在这个函数中，我们可以放心当去操作页面上你需要使用当DOM元素了
    // 如果我们想操作DOM元素，最早只能在componentDidMount中进行
    // componentDidMount相当于Vue中当mounted函数
    // console.log(document.querySelector('#myh3'));  

    // 不推荐这种方式
    // document.querySelector('input').onclick = () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }
  }


  myFun() {
    console.log('这是函数');
  }


  // ————————————————————————————————————————————————————————————————————————————————————

  // 从这里开始，组件进入运行中的状态
  // 1。判断组件是否需要更新
  shouldComponentUpdate(nextProps, nextState) {
    // 1.在shouldComponentUpdate 中要求必须返回一个布尔值
    // 2.在shouldComponentUpdate 中，如果返回值是false，则不会继续执行后续的生命周期函数，而是 直接退回到了运行中的状态，
    // 此时，后续的render函数并没有调用，因此，页面不会被更新。但是组件的state状态更新了

    // 3，在shouldComponentUpdate中，通过this.state.count拿到的值，是上一次的就数据，并不是最新的stat里的值
    // 最新的是nextState里的值    
    // 实现页面按需更新，如果是偶数就更新，奇数不更新
    // return nextState.count % 2 === 0 ? true : false
    return true
  }

  // 组件将要更新，在进入这个生命周期函数 当时候，内存中当虚拟DOM是旧的。页面上的DOM元素也是旧的
  componentWillUpdate(nextProps, nextState){
    // 此时页面上的DOM节点，都是旧的，应该慎重操作，因为可能操作的是旧的DOM
    // console.log(document.querySelector('#myh3').innerHTML)  React 不推荐操作DOM
    // console.log(this.refs.h3.innerHTML); // 用ref操作
    // console.log(nextProps); // 用ref操作
    // console.log(nextState); // 用ref操作
  }

  
  // 组件完成了更新，此时，state中的数据，虚拟DOM，都是最新的，此时，你可以放心的去操作页面
    componentDidUpdate(){
      console.log(this.refs.h3.innerHTML);
      
    }
}

