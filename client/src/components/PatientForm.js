import React, { Component } from 'react'

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
        let state = {...this.state}

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()
        
        this.props.addNewPatient(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                <label>Accont Number</label>
                <input type='text' name='accountNum' placeholder='Enter Account #' onChange={this.handleInputs} />
                <label>Medical Record Number</label>
                <input type='text' name='medicalRecNum' placeholder='Enter Medical Record #' onChange={this.handleInputs} />
                <label>Admit Date</label>
                <input type='date' name='admitDate' placeholder='When Admitted?' onChange={this.handleInputs} />
                <label>Length of Stay</label>
                <input type='number' name='lengthOfStay' placeholder='How Long was the stay?' onChange={this.handleInputs} />
                <label>Financial Class</label>
                <input type='text' name='financialClass' placeholder='Medicaid, Medicare, etc.' onChange={this.handleInputs} />
                </fieldset>
                <fieldset>
                <label>Status</label>
                <input type='text' name='status' placeholder='Admitted or Discharged' onChange={this.handleInputs} />
                <label>Patient Name</label>
                <input type='text' name='patientName' placeholder='Last, First I' onChange={this.handleInputs} />
                <label>Patient Age</label>
                <input type='number' name='age' placeholder='Current Age' onChange={this.handleInputs} />
                <label>Patient Date Of Birth</label>
                <input type='date' name='dob' onChange={this.handleInputs} />
                <label>Nursing Unit</label>
                <input type='text' name='nursingUnit' placeholder='T5-S' onChange={this.handleInputs} />
                <label>Room</label>
                <input type='text' name='room' placeholder='T509-01' onChange={this.handleInputs} />
                </fieldset>
                <fieldset>
                <label>Date In</label>
                <input type='date' name='dateIn' onChange={this.handleInputs} />
                <label>Date Out</label>
                <input type='date' name='dateOut' onChange={this.handleInputs} />
                <input type='submit' value='Add' />
                </fieldset>
            </form>
        )
    }
}
