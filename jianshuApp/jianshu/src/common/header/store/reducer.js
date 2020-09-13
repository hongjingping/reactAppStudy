import * as constants from './constants'
import { fromJS } from 'immutable'

// immutable库
// immutable对象

const defaultState = fromJS({
  facused: false,
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOUCS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}