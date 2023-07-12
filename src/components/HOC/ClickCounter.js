import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
 
  render() {
    const {count,HandleClick}=this.props
    return (
        <button onClick={HandleClick}>
             Clicked {count} times
        </button>
    )
  }
}

export default withCounter(ClickCounter)
