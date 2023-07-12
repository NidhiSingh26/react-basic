import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const {count,HandleClick}=this.props
    return (
      <div>
        <h2 onMouseOver={HandleClick}>
            Hovered {count} 
        </h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter)