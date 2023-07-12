import React, { Component } from 'react'
import MemoComp from '../MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'


class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Nidhi'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Nidhi'
            })
        },2000)
    }
    
  render() {
    console.log("**********Parent Component**********")
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
