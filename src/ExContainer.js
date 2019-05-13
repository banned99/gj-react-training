import React, { Component } from 'react'
import ExDump from './ExDump'
import ExDumpSH from './ExDumpSH';

export default class ExContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: props.name ? props.name : 'Min',
       count: 0,
       counter: null,
       isLoggedIn: false
    }
  }
  
  componentDidMount = () => {
    this.start()
  }

  start = () => {
    const counter = window.setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
    this.setState({
      counter,
      isLoggedIn: true
    })
  }

  clear = () => {
    window.clearInterval(this.state.counter)
    this.setState({
      counter: null,
      count: 0,
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div>
      <ExDump 
        name={this.props.name} 
        count={this.state.count} 
        onLogout={this.clear} 
        onLogin={this.start}
        isLoggedIn={this.state.isLoggedIn}
      />
      <ExDumpSH name={this.props.name}>
        <p>This is child</p>
      </ExDumpSH>
      </div>
    )
  }
}
