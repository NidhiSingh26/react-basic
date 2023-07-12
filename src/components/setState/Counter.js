import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    incrementCount(){
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log(this.state.count)
        })
    }
    incrementCountBy5(){
        this.setState({
            count:this.state.count + 5
        },()=>{console.log(this.state.count)})
    }

    render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.incrementCount()}>Increment</button>
        <button onClick={()=>this.incrementCountBy5()}>Increment By 5</button>
      </div>
    )
  }
}

export default Counter
