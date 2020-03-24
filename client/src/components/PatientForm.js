import React, { Component } from 'react'

export default class PatientForm extends Component {
    render() {
        return (
            <form>
                <label>Accont Number</label>
                <input type='text' name='accountNum' placeholder='Enter Account #' />
                <label>Medical Record Number</label>
                <input type='text' name='medicalRecNum' placeholder='Enter Medical Record #' />
                <label>Admit Date</label>
                <input type='date' name='admitDate' placeholder='When Admitted?' />
                <label>Length of Stay</label>
                <input type='number' name='lengthOfStay' placeholder='How Long was the stay?' />
                <label>Financial Class</label>
                <input type='text' name='financialClass' placeholder='Medicaid, Medicare, etc.' />
                <label>Status</label>
                <input type='text' name='status' placeholder='Admitted or Discharged' />
                <label>Patient Name</label>
                <input type='text' name='patientName' placeholder='Last, First I' />
                <label>Patient Age</label>
                <input type='number' name='age' placeholder='Current Age' />
                <label>Patient Date Of Birth</label>
                <input type='date' name='dob' />
                <label>Nursing Unit</label>
                <input type='text' name='nursingUnit' placeholder='T5-S' />
                <label>Room</label>
                <input type='text' name='room' placeholder='T509-01' />
                <label>Date In</label>
                <input type='date' name='dateIn' />
                <label>Date Out</label>
                <input type='date' name='dateOut' />
                <input type='submit' value='Add' />
            </form>
        )
    }
}
