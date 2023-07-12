import React, { Component } from "react";

// class GreetClass extends Component{
//     render(){
//         return <h1>Welcome {this.props.fname} {this.props.lname}</h1>
//     }
// }


class GreetClass extends Component{
    render(){
        const {fname,lname}=this.props
        return <h1>Welcome {fname} {lname}</h1>
    }
}

export default GreetClass