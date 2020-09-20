import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { actionCreators } from './store'
import { BackTop } from './style'

import { 
  HomeWrapper, 
  HomeLeft, 
  HomeRight 
} from './style'

class Home extends Component {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }

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
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow () {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)