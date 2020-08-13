import React, { Component,Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render () {
    return (
      <Fragment>
        <TransitionGroup >
        {
          this.state.list.map((item,index) => {
            return(
              <CSSTransition
              in={this.state.show}
              timeout={500}
              classNames="fade"
              unmountOnExit
              onEnter={(el) => {el.style.color = 'blue'}}
              onExited={(el) => {el.style.color = 'yellow'}}
              appear={true}
              key={index}
            >
              <div>{item}</div>
            </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>add</button>
        {/* <CSSTransition
          in={this.state.show}
          timeout={500}
          classNames="fade"
          unmountOnExit
          onEnter={(el) => {el.style.color = 'blue'}}
          onExited={(el) => {el.style.color = 'yellow'}}
          appear={true}
        >
          <div>hello wikihong</div>
        </CSSTransition> */}
        {/* <div className = {this.state.show ? 'show' : 'hide'}>hello</div> */}
        {/* <button onClick={this.handleToggle}>toggle</button> */}
      </Fragment>
    )
  }

  handleToggle () {
    this.setState({
      show: this.state.show ? false : true
    })
  }

  handleAddItem () {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App