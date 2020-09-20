import React, { Component } from 'react'
import {RecomendWrapper, RecomendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component {
  render () {
    return (
      <div>
        <RecomendWrapper>
          {
            this.props.list.map((item) => {
              return <RecomendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecomendItem>
            })
          }
        </RecomendWrapper>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)