import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class DemographicForm extends Component {
    state = {
        patient_name: '',
        age: 0,
        date_of_birth: '2020-01-01',

    }
    handleInputs = (evnt) => {
        let state = { ...this.state }

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewDemographic(this.state)
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{margin: '40px', color: 'white'}}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Patient Name' type='text' name='patient_name' placeholder='Last, First I' onChange={this.handleInputs} />
                    <Form.Input fluid label='Age' type='number' name='age' placeholder='Current Age' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date Of Birth' type='date' name='date_of_birth' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}