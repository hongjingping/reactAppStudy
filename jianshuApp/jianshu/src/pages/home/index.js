import React, { Component } from 'react'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { 
  HomeWrapper, 
  HomeLeft, 
  HomeRight 
} from './style'

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className="banner-img" src={'https://upload.jianshu.io/users/upload_avatars/12708103/c2b9934e-e106-4923-b892-18aacf16eb41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'}/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home