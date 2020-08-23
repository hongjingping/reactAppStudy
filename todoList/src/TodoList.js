import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
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
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange (e) {
    const action = {
      type: 'change_input_change',
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
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
}

export default TodoList;