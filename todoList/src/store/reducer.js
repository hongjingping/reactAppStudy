// 笔记本里面的数据
const defaultState = {
  inputValue: '123',
  list: ['1', '2']
}


// state 整个图书馆里面所有书籍的信息（整个仓库里面的数据）
// action 
// reducer可以接收state，不可以修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_change') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }
  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState;
  }
  return state;
}