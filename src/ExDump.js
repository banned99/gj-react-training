import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ExDump extends Component {
  static propTypes = {
    name: PropTypes.string,
    count: PropTypes.number
  }

  render() {
    const { onLogin, onLogout,
      isLoggedIn, name, count } = this.props

  //   if (isLoggedIn) {
  //     return (
  //       <div>
  //         Hello {name}, you have been logged in for {count} s.
  //         <button onClick={() => onLogout({ isLoggedIn: false })} >
  //           Logout
  //         </button>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         Hello {name}, you have been logged in for {count} s.
  //         <button onClick={() => onLogin({ isLoggedIn: true })} >
  //           Login
  //         </button>
  //       </div>
  //     )
  //   }
  // }

    return (
      <div>
        Hello {name}, you have been logged in for {count} s.
        {        
          isLoggedIn ? 
            <button onClick={() => onLogout({isLoggedIn : false})} >
              Logout
            </button> :
            <button onClick={() => onLogin({isLoggedIn : true})} >
              Login
            </button> 
        }
      </div>
    )
  }
}
