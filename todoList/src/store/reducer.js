const defaultState = {
  inputValue: '123',
  list: ['1', '2']
}

// reducer 可以接收state，但是不可以修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  console.log(state, action)
  return state;
}