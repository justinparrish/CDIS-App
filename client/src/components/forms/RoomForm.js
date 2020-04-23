import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class PatientForm extends Component {
    state = {
        nursing_unit: '',
        room: '',
        date_in: '2020-01-01',
        date_out: '2020-01-01'
    }
    handleInputs = (evnt) => {
        let state = { ...this.state }

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewRoom(this.state)
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{margin: '40px', color: 'white'}}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nursing Unit' type='text' name='nursing_unit' placeholder='T5-S' onChange={this.handleInputs} />
                    <Form.Input fluid label='Room' type='text' name='room' placeholder='T509-01' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date In' type='date' name='date_in' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date Out' type='date' name='date_out' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}