import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }

    //Approach 3 -
    this.clickHandler = this.clickHandler.bind(this)
  }
    
  clickHandler(){
    this.setState({
       message:'Thank you' 
    })

  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        Approach 1 - using bind keyword with this
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        
        Approach 2 - using arrow method in render method
        <button onClick={()=>this.clickHandler()}>Click</button>

        Approach 3 - using binding in class  constructor
        <button onClick={this.clickHandler}>Click</button>


      </div>
    )
  }
}

export default EventBind
