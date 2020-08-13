import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem.js'
import Test from './Test.js'
import axios from 'axios'
import './style.css'
class TodoList extends Component {
  // 组件被创建的时候，自动执行（不是react独有的，是es6自带的）
  constructor (props) {
    // 当组件的props或者state发送改变的时候，render函数就会重新执行,当父组件的render函数被执行时候，子组件的render也会被执行
    super(props);
    this.state = { // 组件的状态,负责存储数据
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 在组建即将被挂载到页面的时刻执行(只执行一次)
  componentWillMount () {
    console.log('componentWillMount')
  }
  // 在组建即将被挂载到页面之后执行(只执行一次)
  componentDidMount () {
    // ajax请求一般放在这边
    console.log('componentDidMount')
    axios.get('/api/todolist')
      .then((res) => {
        console.log(res)
        this.setState(() => {
          return {
            list: res.data
          }
        })
        alert('succ')
      })
      .catch(() => {
        alert('err')
      })
  }

  // 组件被更新之前自动执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true // 如果返回false的话，后面的不会执行
  }

  // 组件被更新之前自动执行,在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true，才会执行；如果返回false，就不会执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  // 在组建更新完成之后会被执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  // 
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }

  // state和props发送改变时候，render自动执行
  render () {
    console.log('parent render')
    return (
      <Fragment>
        <div>
          {/* 绑定事件要用bind(this)指向作用域 */}
          {
            // 单行注释
          }
          <label htmlFor="insertArea">输入内容</label>
          <input 
            id="insertArea"
            className="input"
            value = {this.state.inputValue}
            onChange = {this.handleInputChange}
            ref = {(input) => {
              this.input = input
            }}
          />
          <button
            onClick={this.handleButtonClick}
          >提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {
            this.getTodoItem()
            // this.state.list.map((item, index) => {
            //   return (
            //     <div>
            //       {/* 父传子，通过属性传递，子组件接收用this.props.属性 */}
            //       {/* 子调用父组件方法，强制绑定父组件的this */}
            //       <TodoItem 
            //         content={item} 
            //         index={index} 
            //         deleteItem={this.handleItemDelete}
            //       />
            //       {/*<li 
            //         key={index} 
            //         onClick={this.handleItemDelete.bind(this, index)}
            //         dangerouslySetInnerHTML = {{__html: item}}
            //       >
            //       </li>*/}
            //     </div>
            //   )
            // })
          }
        </ul>
        <Test content = {this.state.inputValue}/>
      </Fragment>
    )
  }

  handleInputChange (e) {
    // 当对象变成函数，在外层保存值
    console.log(e.target)
    console.log(this.input)
    console.log(this.input.value)
    const value = e.target.value
    this.setState(() =>
      ({
        inputValue: value
      })
    )
    // this.setState({ // this.setState改变数据的内容
    //   inputValue: e.target.value
    // })
  }

  handleButtonClick () {
    // 新增list，清空input
    // this.setState({
    //   // 展开运算符
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    // setState是异步函数
    this.setState((prevState) => ({
      // 展开运算符
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
  }

  handleItemDelete (index) {
    // immutable
    // 删除功能,state不允许我们做任何改变
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        // key = {item}写在最外层，不建议用index做key值，要使用一个稳定的key值，因为在diff算法中同级比较的时候，耗性能
        <div key = {item}>
          {/* 1.父传子，通过属性传递，子组件接收用this.props.属性，
            ··2.注意父传子，只允许父直接传值的话，子组件只能使用，但是不能改变，单向数据流 
            · 3.要想改变的话，就传父组件方法 
          */}
          {/* 子传父，子调用父组件方法，强制绑定父组件的this */}
          <TodoItem 
            content={item} 
            index={index} 
            deleteItem={this.handleItemDelete}
          />
          {/*<li 
            key={index} 
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML = {{__html: item}}
          >
          </li>*/}
        </div>
      )
    })
  }
}

export default TodoList;