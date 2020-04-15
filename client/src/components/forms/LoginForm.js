import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputs = (evnt) => {
        let state = {...this.state}

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.authenicate(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' onChange={this.handleInputs}/>
                <label>Password</label>
                <input type='password' name='password' onChange={this.handleInputs}/>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
