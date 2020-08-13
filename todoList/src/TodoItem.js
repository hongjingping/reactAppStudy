import React, { Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  // 当组件从父组件接收参数，
  // 如果组件第一次存在于父组件中，不会被执行；
  // 如果已经存在于父组件中，才会被执行
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }

  // 当组件即将被在页面中剔除时候执行
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) { // 当content改变的时候，才去执行render
      return true
    } else {
      return false
    }
  }

  render () {
    console.log('child render')
    const {content, test} = this.props
    // JSX(写法简单，底层是创建dom) => JS对象 => 真实dom
    return (
      <div onClick={this.handleClick}>
        {test}-{content}
      </div>
    )
    // return (
    //   <div>{item}</div>
    // )
    // return React.createElement(
    //   'div', {}, 'item'
    // )
  }

  handleClick () {
    /*实现删除功能-调用父组件handleItemDelete方法*/
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

// 校验数据类型
TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // 必须传值
  content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 默认值-当父组件么有传值的时候，我们自定义，防止报错
TodoItem.defaultProps = {
  test: 'hello World'
}


export default TodoItem