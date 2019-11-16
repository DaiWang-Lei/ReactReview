import React, { Component } from 'react'
// 如果要使用路由模块，第一步，运行yarn add react-router-dom
// 第二步，导入路由模块

// HashRouter 表示一个路由的根容器，将来，所有路由相关的东西，都要包裹在HashRouter里面，
// 而且，一个网站中，只需要使用一次HashRouter就好了
// Route表示一个路由规则，在Route上，有两个比较重要的属性，path component
// Link表示一个路由的链接，就好比Vue中的<router-link to=""></router-link>
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import Music from './components/Music.jsx'
// 按需导入日期组件
import { DatePicker, Button } from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <HashRouter>
        <div>
          <h1>这是网站的根组件App</h1>
          <hr />
          <Link to='/home'>首页</Link>&nbsp;&nbsp;
           <Link to='/movie/top666/10'>电影</Link>&nbsp;&nbsp;
          <Link to='/music'>音乐</Link>&nbsp;&nbsp;
        <hr />
          {/* route创建的标签就是路由的规则，其中path表示要匹配的路由，component表示对应要展示的组件 */}
          {/* 在Vue中有个router-view的路由标签，专门用来放置，匹配到的路由组件，但是，
         在react-router中，并没有类似于这样的标签，而是，直接把Route标签，当作坑（占位符）*/}
          {/* Route具有两种身份，1.他是一个路由匹配规则，2.他是一个占位符表示将来匹配到的组件放到这个位置 */}
          <Route path='/home' component={Home}></Route>
          <hr />
          {/* 注意⚠️：默认情况下，路由中的匹配规则，是模糊匹配，
          如果路由可以部分匹配成功，就会展示 这个路由对应的组件 */}
          {/* 如果想让路由规则，进行精确匹配，可以为Route，添加exact属性，表示启用精确匹配 */}
          {/* 如果要匹配参数，可以在匹配规则中，使用：修饰符，表示这个位置匹配到的是参数 */}
          <Route exact path='/movie/:types/:id' component={Movie}></Route>
          <hr />
          <Route path='/music' component={Music}></Route>
          <DatePicker></DatePicker>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>


      </HashRouter>


    )
  }
}
