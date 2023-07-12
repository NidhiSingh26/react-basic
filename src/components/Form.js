import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'Choose Any'
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handlecommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit= event =>{
        alert(`${this.state.username} has succesfully submitted the form`)
        event.preventDefault() //this will not refresh the page
    }
    
    render() {
    return (
        <Form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input 
                    type='text' 
                    value={this.state.username} 
                    onChange={this.state.handleUsernameChange}
                />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comment} onChange={this.handlecommentChange}></textarea>    
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="dotnet">DotNet</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </Form>
    
    )
  }
}

export default Form
