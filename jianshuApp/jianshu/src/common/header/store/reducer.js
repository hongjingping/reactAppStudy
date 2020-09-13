import * as constants from './constants'

const defaultState = {
  facused: false
}

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOUCS) {
    return {
      facused: true
    }
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}