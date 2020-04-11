import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class PatientForm extends Component {
    state = {
        // patient
        accountNum: '',
        medicalRecNum: '',
        admitDate: '2020-01-01',
        lengthOfStay: 0,
        financialClass: '',
        status: '',
        // demographic
        patientName: '',
        age: 0,
        dob: '2020-01-01',
        // room
        nursingUnit: '',
        room: '',
        dateIn: '2020-01-01',
        dateOut: '2020-01-01'
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
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Accont Number' type='text' name='accountNum' placeholder='Enter Account #' onChange={this.handleInputs} />
                    <Form.Input fluid label='Medical Record Number' type='text' name='medicalRecNum' placeholder='Enter Medical Record #' onChange={this.handleInputs} />
                    <Form.Input fluid label='Admit Date' type='date' name='admitDate' placeholder='When Admitted?' onChange={this.handleInputs} />
                    <Form.Input fluid label='Length of Stay' type='number' name='lengthOfStay' placeholder='How Long was the stay?' onChange={this.handleInputs} />
                    <Form.Input fluid label='Financial Class' type='text' name='financialClass' placeholder='Medicaid, Medicare, etc.' onChange={this.handleInputs} />
                    <Form.Input fluid label='Status' type='text' name='status' placeholder='Admitted or Discharged' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Patient Name' type='text' name='patientName' placeholder='Last, First I' onChange={this.handleInputs} />
                    <Form.Input fluid label='Age' type='number' name='age' placeholder='Current Age' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date Of Birth' type='date' name='dob' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nursing Unit' type='text' name='nursingUnit' placeholder='T5-S' onChange={this.handleInputs} />
                    <Form.Input fluid label='Room' type='text' name='room' placeholder='T509-01' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date In' type='date' name='dateIn' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date Out' type='date' name='dateOut' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}
