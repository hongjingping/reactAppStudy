import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value = {this.state.inputValue}
            placeholder="TodoLIst Info"
            style={{width: '300px', marginRight: '10px'}}
            onChange = {this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
        </div>
        <List
          style={{ width: '300px', marginTop: '10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange (e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
    console.log('handleInputChange', e.target.value)
  }

  handleStoreChange () {
    this.setState(store.getState())
    console.log('handleStoreChange')
  }

  handleButtonClick () {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
}

export default TodoList;