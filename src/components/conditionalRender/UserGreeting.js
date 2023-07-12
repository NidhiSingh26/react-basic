import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
    }
  }
  
  render() {
    //if/else
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Nidhi</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }

    //Element variable - here message is a variable which store element to be render
    // let message
    // if(this.state.isLoggedIn){
    //     return(
    //         message = <div>Welcome Nidhi</div>
    //     )
    // } else {
    //     return(
    //         message = <div>Welcome Guest</div>
    //     )
    // }

    //Ternary condition operator
    return(
        this.state.isLoggedIn?(
            <div>Welcome Nidhi</div>
        ):(
            <div>Welcome Guest</div>
        )
    )

    //Short Circuit operator
    // return this.state.isLoggedIn && <div>Welcome Nidhi</div>




    
  }
}

export default UserGreeting
