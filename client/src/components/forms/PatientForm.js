import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class PatientForm extends Component {
    state = {
        account_number: '',
        medical_rec_number: '',
        admit_date: '2020-01-01',
        length_of_stay: 0,
        financial_class: '',
        status: '',
    }
    handleInputs = (evnt) => {
        let state = { ...this.state }

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewPatient(this.state)
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{margin: '40px', color: 'white'}}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Accont Number' type='text' name='account_number' placeholder='Enter Account #' onChange={this.handleInputs} />
                    <Form.Input fluid label='Medical Record #' type='text' name='medical_rec_number' placeholder='Enter Medical Record #' onChange={this.handleInputs} />
                    <Form.Input fluid label='Admit Date' type='date' name='admit_date' placeholder='When Admitted?' onChange={this.handleInputs} />
                    <Form.Input fluid label='Length of Stay' type='number' name='length_of_stay' placeholder='How Long was the stay?' onChange={this.handleInputs} />
                    <Form.Input fluid label='Financial Class' type='text' name='financial_class' placeholder='Medicaid, Medicare, etc.' onChange={this.handleInputs} />
                    <Form.Input fluid label='Status' type='text' name='status' placeholder='Admitted or Discharged' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}
