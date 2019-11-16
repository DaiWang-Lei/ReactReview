import React from 'react'

export default class BindThis extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: '这是默认的msg'
    }
    // 绑定this并传参的方式2：在构造函数中绑定并传参
    // 注意⚠️：当为一个函数，调用bind改变了this指向后，bind函数调用的结果，有一个返回值，这个值，就是被改变this指向后的函数引用
    // 注意⚠️：bind不会修改原函数当this指向
    this.changeMsg2 = this.changeMsg2.bind(this, '🚗', '🚄')
    this.txtChange =this.txtChange.bind(this)
  }
  render() {
    return (
      <div>
        <h1>绑定This并传参的几种方式</h1>
        {/* bind 的作用：为前面的函数，修改函数内部的this指向，让函数内部的this,指向bind参数列表中的第一个参数 */}
        {/* bind和call/apply之间的区别 */}
        {/* call/apply修改完this指向后会立即调用，但是bind只是修改this指向，并不会调用 */}
        {/* ⚠️注意：bind中的第一参数，使用来修改this指向的，第一个参数的后面所有参数，都会当作将来调用前面函数时候的参数传递进去 */}
        <input type="button" value="绑定this并传参的方式1" onClick={this.changeMsg1.bind(this, '🌈', '🌊')} />
        <input type="button" value="绑定this并传参的方式2" onClick={this.changeMsg2} />
        <input type="button" value="绑定this并传参的方式3" onClick={()=>{this.changeMsg3('😯','🐝')}} />

        <hr />
        <h3>{this.state.msg}</h3>

        {/* 在Vue中，有v-model指令来实现双向数据绑定，但是，在React中，根本没有指令的概念，因此React默认不支持双向数据绑定 */}
        {/* React只支持，把数据从state上传输到页面，但是，无法自动实现数据从 页面 传输到state 中进行保存，也就是，React不支持数据的
        自动逆向传输，只是实现了数据的单项绑定 */}
        {/* 注意⚠️：如果为表单元素，提供了value属性绑定，那么，必须同时为表单元素绑定ReadOnly，或者提供要给 onChange事件*/}
        {/* 如果提供了readOnly，表示这个元素只读的不能被修改 */}
        {/* 如果提供了onChange表示，这个元素的值可以被修改，但是，要自己定义修改的逻辑 */}
        <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={this.txtChange} ref='ipt'/>
      </div>
    )
  }

  // 为文本框 绑定txtChange事件
  txtChange(e){
    console.log(this);
    // 如果想让 文本框在触发onChange的时候同时把文本框最新的值，保存到state中，那么我们需要手动调用this.setState
    // 获取文本框中最新文本的三种方式：
    // 1.使用document.getElementById()
    // 2.使用ref来拿
    console.log(this.refs.ipt.value);
    // 3.使用事件对象的参数e来拿，e.targete.target就表示触发这个事件的 事件源对象，得到的是一个原声的JSDOM对象
    console.log(e.target.value);


    this.setState({
      // 法2:
      // msg:this.refs.ipt.value
      // 法3:
      msg:e.target.value
    })
    
  }
  changeMsg1(arg1, arg2) {
    // 注意：这里的方式是一个普通方法，因此在触发的时候，这里的this，是undefined

    this.setState({
      msg: "这是绑定This并传参的方式1" + arg1 + arg2
    })
  }
  changeMsg2(arg1, arg2) {
    // 注意：这里的方式是一个普通方法，因此在触发的时候，这里的this，是undefined

    this.setState({
      msg: "这是绑定This并传参的方式2" + arg1 + arg2
    })
  }
  changeMsg3(arg1, arg2) {
    // 注意：这里的方式是一个普通方法，因此在触发的时候，这里的this，是undefined

    this.setState({
      msg: "这是绑定This并传参的方式2" + arg1 + arg2
    })
  }

}