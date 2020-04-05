import React from 'react';
import './App.css';
import PatientForm from './components/PatientForm'
import QueryForm from './components/QueryForm';
import ReviewForm from './components/ReviewForm'
import { Menu, Segment, Table } from 'semantic-ui-react'
import DemographicTable from './components/DemographicTable';
import Routes from './components/Routes';
import LoginForm from './components/LoginForm';


// --------- Employee ------------
const getEmployeeName = (employee) => (
  <h4>Employee Name: {employee.name}</h4>
)

// ---------- Patient Info * ----------
const getPatientInfo = (patient) => (
  <ul>
    <li>Account Number: {patient.accountNum}</li>
    <li>Medical Record Number: {patient.medicalRecNum}</li>
    <li>Admit Date: {patient.admitDate}</li>
    <li>Length of Stay: {patient.lengthOfStay}</li>
    <li>Financial Class: {patient.financialClass}</li>
    <li>Status: {patient.status}</li>
  </ul>
)

const listPatientInfo = (patients) => (
  <div>{patients.map(getPatientInfo)}</div>
)

const employeePatients = (employee) => (
  <div>
    {listPatientInfo(employee.patients)}
  </div>
)

// ----------- Patient Demographics * ---------------
const getPatientDemographics = (patient) => (
  <ul>
    <li>Name: {patient.demographic.patientName}</li>
    <li>Age: {patient.demographic.age}</li>
    <li>Date of Birth: {patient.demographic.dob}</li>
  </ul>
)
const listPatientDemographic = (patients) => (
  <div>
    {patients.map(getPatientDemographics)}
  </div>
)
const patientsDemographic = (employee) => (
  <div>
    {listPatientDemographic(employee.patients)}
  </div>
)


// ----------- Patient Room Info -------------
const getPatientRoomInfo = (patient) => (
  <ul>
    <li>Nursing Unit: {patient.room.nursingUnit}</li>
    <li>Room: {patient.room.room}</li>
    <li>Date In: {patient.room.datein}</li>
    <li>Date Out: {patient.room.dateOut}</li>
  </ul>
)



// ------------ Patient Query -------------
const getPatientQuery = (query) => (
  <ul style={{ margin: '15px', border: '2px dotted grey' }}>
    <li>Doctor Name: {query.doctorName}</li>
    <li>Doctor Question: {query.doctorQuestion}</li>
    <li>Clinical Indicators: {query.clinicalIndicators}</li>
    <li>H&P: {query.historyAndPhysical}</li>
    <li>Tx: {query.treatment}</li>
  </ul>
)

const queryList = (list) => (
  <div>{list.map(getPatientQuery)}</div>
)

// ---------- Patient Review/Re-reivews ------------
const getPatientReview = (review) => (
  <ul style={{ margin: '15px', border: '2px dotted grey' }}>
    <li>Ep: {review.ep}</li>
    <li>VS: {review.vitalSigns}</li>
    <li>Diagnostic: {review.diagnostic}</li>
    <li>Mar: {review.mar}</li>
    <li>H&P: {review.historyAndPhysical}</li>
    <li>Query Opportunites: {review.queryOpp}</li>
    <li>Labs: {review.labs}</li>
    <li>Type: {review.type}</li>
  </ul>
)

const reviewList = (list) => (
  <div>{list.map(getPatientReview)}</div>
)

//List of Employees
const employeeUsername = (employee) => (
  <option value={employee.id}>{employee.username}</option>
)

const employeeList = (employees, currentEmployee, onChange) => (
  <select value={currentEmployee} onChange={(evnt) => onChange(evnt.target.value)}>
    {employees.map(employeeUsername)}
  </select>
)

//List of Cars
const patientNameOption = (patient) => (
  <option value={patient.accountNum}>{patient.demographic.patientName}</option>
)

const patientList = (patients, currentPatient, onChange) => (
  <select value={currentPatient} onChange={(evnt) => onChange(evnt.target.value)}>
    <option value={undefined}>Select Patient</option>
    {patients.map(patientNameOption)}
  </select>
)


// ----------- Test Data Structure --------------
const docs =
{
  1: {
    id: 1,
    name: 'Tenia Parrish',
    username: 'tenia64',
    password: 'tenia71',
    email: 'tenia64@msn.com',
    patients: [
      {
        id: 1,
        accountNum: 'EUH6304393485',
        medicalRecNum: 'EUH694321',
        admitDate: '2020-16-02',
        lengthOfStay: 3,
        financialClass: 'Medicare',
        status: 'Discharged',
        demographic: {
          id: 1,
          patientName: 'Nelson, Justin D',
          age: 20,
          dob: '2000-10-03'
        },
        room: {
          id: 1,
          nursingUnit: 'T5-S',
          room: 'T509-01',
          dateIn: '2020-16-02',
          dateOut: '2020-19-02',
        },
        query: [
          {
            id: 1,
            doctorName: 'Morgan, Phil R., NP',
            doctorQuestion: "Doctor's Question number 1",
            clinicalIndicators: "Pt admitted with Hypercapnia Respitory Failure with ALS",
            historyAndPhysical: "history and physical 1",
            treatment: "3/4/20 Normal Saline 60ml Tube flush given x 6",
          }
        ],
        review: [
          {
            id: 1,
            ep: 'ep 1',
            vitalSigns: "vital signs 1",
            diagnostic: "diagnostic 1",
            mar: "medication administration record 1",
            historyAndPhysical: "history and physical 1",
            queryOpp: "query opportunities 1",
            labs: "lab results 1",
            type: "Review"
          }
        ]
      },

    ]
  },
  2: {
    id: 2,
    name: 'Justin Parrish',
    username: 'Justin12',
    password: 'justin2112',
    email: 'justin@msn.com',
    patients: [
      {
        id: 1,
        accountNum: 'EUH6304393485',
        medicalRecNum: 'EUH694321',
        admitDate: '2020-16-02',
        lengthOfStay: 3,
        financialClass: 'Medicare',
        status: 'Discharged',
        demographic: {
          id: 1,
          patientName: 'Nelson, D',
          age: 10,
          dob: '2010-10-03'
        },
        room: {
          id: 1,
          nursingUnit: 'T4-S',
          room: 'T411-01',
          dateIn: '2020-11-02',
          dateOut: '2020-11-02',
        },
        query: [
          {
            id: 1,
            doctorName: 'Morgan, R., NP',
            doctorQuestion: "Doctor's Quen number 1",
            clinicalIndicators: "Pt ted with Hypercapnia Respitory Failure with ALS",
            historyAndPhysical: "ory and physical 1",
            treatment: "3rmal Saline 60ml Tube flush given x 6",
            // status: open or closed,
            // numberOfOpen: Number
          }
        ],
        review: [
          {
            id: 1,
            ep: 'ep 1',
            vitalSigns: "val signs 1",
            diagnostic: "dgnostic 1",
            mar: "medicn administration record 1",
            historyAndPhysical: "his and physical 1",
            queryOpp: "query opnities 1",
            labs: "lab resu1",
            type: "Review"
          }
        ]
      }
    ]
  }
}


class App extends React.Component {
  state = {
    employees: docs,
    currentEmployee: 1,
    currentPatient: 0
  }

  getAllEmployees = () => (
    Object.values(this.state.employees)
  )

  getAllEmployeePatients = () => (
    Object.values(this.state.employees[this.state.currentEmployee].patients)
  )

  getCurrentPatient = () => (
    this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient]
  )

  setCurrentEmployee = (currentEmployee) => {
    this.setState({ currentEmployee, currentPatient: 0 })
  }

  setCurrentPatientIndex = (currentPatient) => {
    let patients = this.state.employees[this.state.currentEmployee].patients

    let index = patients.findIndex(patient => patient.accountNum === currentPatient)

    console.log(index)


    this.setState({ currentPatient: index })
  }

  getCurrentEmployee = () => (
    this.state.employees[this.state.currentEmployee]
  )
  // ------------------------------------------
  addNewPatient = (info) => {
    console.log("Patient From App Comp.", info)
    let employees = this.state.employees

    let newPatientInfo = {
      id: 2,
      accountNum: info.accountNum,
      medicalRecNum: info.medicalRecNum,
      admitDate: info.admitDate,
      lengthOfStay: info.lengthOfStay,
      financialClass: info.financialClass,
      status: info.status,
    }
    console.log("Patient Info part 1", newPatientInfo)
    let newDemographic = {
      id: 2,
      patientName: info.patientName,
      age: info.age,
      dob: info.dob
    }
    let newRoom = {
      id: 2,
      nursingUnit: info.nursingUnit,
      room: info.room,
      dateIn: info.dateIn,
      dateOut: info.dateOut
    }
    newPatientInfo.demographic = newDemographic
    newPatientInfo.room = newRoom
    newPatientInfo.query = []
    newPatientInfo.review = []
    console.log("Demographic", newDemographic)
    console.log("Room Info", newRoom)
    console.log("Patient Info part 2", newPatientInfo)

    employees[this.state.currentEmployee].patients.push(newPatientInfo)

    this.setState({ employees })

  }
  // ------------------------------------------
  addNewQuery = (info) => {
    let employees = this.state.employees

    let nextQueryId = employees[this.state.currentEmployee].patients[this.state.currentPatient].query.length + 1

    let newQuery = {
      id: nextQueryId,
      doctorName: info.doctorName,
      doctorQuestion: info.doctorQuestion,
      clinicalIndicators: info.clinicalIndicators,
      historyAndPhysical: info.historyAndPhysical,
      treatment: info.treatment
    }

    employees[this.state.currentEmployee].patients[this.state.currentPatient].query.push(newQuery)

    console.log("New Query", newQuery)
    console.log(nextQueryId)

    this.setState({ employees })
  }
  addNewReview = (info) => {
    let employees = this.state.employees

    let nextQueryId = employees[this.state.currentEmployee].patients[this.state.currentPatient].review.length + 1

    let newReview = {
      id: nextQueryId,
      ep: info.ep,
      vitalSigns: info.vitalSigns,
      diagnostic: info.diagnostic,
      mar: info.mar,
      historyAndPhysical: info.historyAndPhysical,
      queryOpp: info.queryOpp,
      labs: info.labs,
      type: info.type
    }

    employees[this.state.currentEmployee].patients[this.state.currentPatient].review.push(newReview)

    console.log("New Review", newReview)
    console.log(nextQueryId)

    this.setState({ employees })
  }

  authenicate = (credentials) => {
    console.log(credentials)
  }

  render() {
    return (
      <div class="container">
        <LoginForm authenicate={this.authenicate}/>
        <button onClick={this.getCurrentPatient}>Current Employee</button>
        <DemographicTable currentEmployee={this.getCurrentEmployee()} />
        <h1>CDIS App</h1>
        {getEmployeeName(this.getCurrentEmployee())} <br />
        {employeeList(this.getAllEmployees(), this.state.currentEmployee, this.setCurrentEmployee)}
        {patientList(this.getAllEmployeePatients(), this.state.currentPatient, this.setCurrentPatientIndex)}

        <h3>Patient Demographic 1</h3>
        {getPatientDemographics(this.getCurrentPatient())}
        <h3>Patient Info 1</h3>
        {getPatientInfo(this.getCurrentPatient())}
        <h3>Patient Room 1</h3>
        {getPatientRoomInfo(this.getCurrentPatient())}
        <h3>Patient Query 1</h3>
        {queryList(this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].query)}
        <QueryForm addNewQuery={this.addNewQuery} />
        <br /><hr /><br />
        <h3>Patient Review 1</h3>
        {reviewList(this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].review)}
        <ReviewForm addNewReview={this.addNewReview} />
        <br /><hr /><br />
        <PatientForm addNewPatient={this.addNewPatient} />
      </div>
    )
  }
}

export default App;
