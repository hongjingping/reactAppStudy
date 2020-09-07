const defaultState = {
  facused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    return {
      facused: true
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state
}