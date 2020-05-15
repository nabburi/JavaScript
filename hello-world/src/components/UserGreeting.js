import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render () {
    //conditional rendering
    //using short-circuit operator
    return this.state.isLoggedIn && <div>Welcome Nava</div>
    //using ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Nava</div>
    // ) : (
    //   <div>Welcome Guest!</div>
    // )
    //using element variables
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Nava</div>
    // } else {
    //   message = <div>Welcome Guest!</div>
    // }

    // return <div>{message}</div>
    //Using If/else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Nava</div>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest!</div>
    //     </div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>Welcome Nava</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting
