import React from 'react'

class Test extends React.Component {
  // 当父组件的render函数被执行时候，子组件的render也会被执行
  render () {
    console.log('Test Render')
    return <div>{this.props.content}</div>
  }
}

export default Test