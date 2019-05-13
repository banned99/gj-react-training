import React, { Component } from 'react'
import './App.css';
import ExContainer from './ExContainer';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount = () => {} //might have been deprecated

  componentDidMount = () => {}

  componentWillUpdate = () => {} //might have been deprecated

  componentDidUpdate = (prevProps, prevState, snapshot) => {}

  componentWillReceiveProps = (nextProps) => {}

  shouldComponentUpdate = (nextProps, nextState) => {}

  componentDidCatch = (err, info) => {}

  componentWillUnmount = () => {}
  
  render() {
    return <ExContainer name='Minion' />
  }
}
