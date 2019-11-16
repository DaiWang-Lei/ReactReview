import React, { Component } from 'react'

export default class Movie extends Component {
  constructor(props){
    super(props)

    this.state= {
      routeParams:props.match.params
    }
  }
  render() {
    console.log(this);
    // 如果想要从路由规则中，提取匹配到的参数，进行使用，可以使用this,props.match.params.***来访问
    return (
      <div>

        我是电影---{`${this.state.routeParams.types}的${this.state.routeParams.id}`}
      </div>
    )
  }
}
