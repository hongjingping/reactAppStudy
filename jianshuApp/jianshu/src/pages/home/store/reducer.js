import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [
    
  ],
  articleList: [
    
  ],
  recommendList: [
    
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList),
      })
      break
    default:
      return state
  }
}