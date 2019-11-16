import React from 'react'
class Hello2 extends React.Component {

  constructor(props){
    super()
    console.log(props);
    this.state = {
      msg:666
    }
  }
  render(props) {
    return <div>
      <h1>这是类创建的组件---{this.props.name} </h1>
      <h2>{this.state.msg}</h2>
      <br/>
      <input type="button" value='点击改变msg值' onClick={this.changeMsg}/>
    </div>
  }
  changeMsg=()=>{
    console.log(this);
    
    // this.setState({
    //   msg : this.props.name
    // },()=>{
    //   console.log(this.state.msg);
    // })
    this.setState(function (pre,pro) { 
      console.log(pre);
      console.log(pro);
      return{
        msg:pro.name
      }
     },()=>{
       console.log(this.state.msg);
       console.log(this);
       
     })
  }
}

export default Hello2