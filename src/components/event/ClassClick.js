import React, { Component } from 'react'

class ClassClick extends Component {
    classClickHandler(){
        console.log('Button clicked')
    }
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
