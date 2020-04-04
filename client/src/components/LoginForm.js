import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <form>
                <label>Username</label>
                <input type='text' name='username' />
                <label>Password</label>
                <input type='password' name='password' />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
