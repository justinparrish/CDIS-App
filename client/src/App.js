import React from 'react';
import './App.css';
import PatientForm from './components/forms/PatientForm'
import QueryForm from './components/forms/QueryForm';
import ReviewForm from './components/forms/ReviewForm'
import Tabs from './components/Tabs'



// --------- Employee ------------
const getEmployeeName = (employee) => (
  <h4>Employee Name: {employee.name}</h4>
)

// ---------- Patient Info * ----------
const getPatientInfo = (patient) => (
  <ul>
    <li>Account Number: {patient.account_number}</li>
    <li>Medical Record Number: {patient.medical_rec_number}</li>
    <li>Admit Date: {patient.admit_date}</li>
    <li>Length of Stay: {patient.length_of_stay}</li>
    <li>Financial Class: {patient.financial_class}</li>
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
    <li>Name: {patient.demographic.patient_name}</li>
    <li>Age: {patient.demographic.age}</li>
    <li>Date of Birth: {patient.demographic.date_of_birth}</li>
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
    <li>Nursing Unit: {patient.room.nursing_unit}</li>
    <li>Room: {patient.room.room}</li>
    <li>Date In: {patient.room.datein}</li>
    <li>Date Out: {patient.room.date_out}</li>
  </ul>
)



// ------------ Patient Query -------------
const getPatientQuery = (query) => (
  <ul style={{ margin: '15px', border: '2px dotted grey' }}>
    <li>Doctor Name: {query.doctor_name}</li>
    <li>Doctor Question: {query.doctor_question}</li>
    <li>Clinical Indicators: {query.clinical_indicators}</li>
    <li>H&P: {query.history_and_physical}</li>
    <li>Tx: {query.treatment}</li>
  </ul>
)

const queryList = (list) => (
  <div>{list.map(getPatientQuery)}</div>
)

// ---------- Patient Review/Re-reivews ------------
const getPatientReview = (review) => (
  <ul style={{ margin: '15px', border: '2px dotted grey' }}>
    <li>Ed: {review.ed}</li>
    <li>VS: {review.vital_signs}</li>
    <li>Diagnostic: {review.diagnostics}</li>
    <li>Mar: {review.medication_administration_record}</li>
    <li>H&P: {review.history_and_physical}</li>
    <li>Query Opportunites: {review.query_opportunities}</li>
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
  <option value={patient.account_number}>{patient.demographic.patient_name}</option>
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
        account_number: 'EUH6304393485',
        medical_rec_number: 'EUH694321',
        admit_date: '2020-16-02',
        length_of_stay: 3,
        financial_class: 'Medicare',
        status: 'Discharged',
        demographic: {
          id: 1,
          patient_name: 'Nelson, Justin D',
          age: 20,
          date_of_birth: '2000-10-03'
        },
        room: {
          id: 1,
          nursing_unit: 'T5-S',
          room: 'T509-01',
          date_in: '2020-16-02',
          date_out: '2020-19-02',
        },
        query: [
          {
            id: 1,
            doctor_name: 'Morgan, Phil R., NP',
            doctor_question: "Doctor's Question number 1",
            clinical_indicators: "Pt admitted with Hypercapnia Respitory Failure with ALS",
            history_and_physical: "history and physical 1",
            treatment: "3/4/20 Normal Saline 60ml Tube flush given x 6",
            status: 'Open',
            created_on: '2020-19-02'
          }
        ],
        review: [
          {
            id: 1,
            ed: 'ed 1',
            vital_signs: "vital signs 1",
            diagnostics: "diagnostics 1",
            medication_administration_record: "medication administration record 1",
            past_medical_history: 'past medical history 1',
            history_and_physical: "history and physical 1",
            query_opportunities: "query opportunities 1",
            labs: "lab results 1",
            type: "Review",
            created_on:'2020-19-02'
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
        account_number: 'EUH6304393485',
        medical_rec_number: 'EUH694321',
        admit_date: '2020-16-02',
        length_of_stay: 3,
        financial_class: 'Medicare',
        status: 'Discharged',
        demographic: {
          id: 1,
          patient_name: 'Nelson, D',
          age: 10,
          date_of_birth: '2010-10-03'
        },
        room: {
          id: 1,
          nursing_unit: 'T4-S',
          room: 'T411-01',
          date_in: '2020-11-02',
          date_out: '2020-11-02',
        },
        query: [
          {
            id: 1,
            doctor_name: 'Morgan, R., NP',
            doctor_question: "Doctor's Quen number 1",
            clinical_indicators: "Pt ted with Hypercapnia Respitory Failure with ALS",
            history_and_physical: "ory and physical 1",
            treatment: "3rmal Saline 60ml Tube flush given x 6",
            status: 'open',
            created_on: '2020-19-02'
            // status: open or closed,
            // numberOfOpen: Number
          }
        ],
        review: [
          {
            id: 1,
            ed: 'ed 1',
            vital_signs: "val signs 1",
            diagnostics: "dgnostic 1",
            medication_administration_record: "medicn administration record 1",
            past_medical_history: "past medical history 1",
            history_and_physical: "his and physical 1",
            query_opportunities: "query opnities 1",
            labs: "lab resu1",
            type: "Review",
            created_on: '2020-19-02'
          }
        ]
      }
    ]
  }
}

// -------------- Using Fetch to GET data from Django server ----------------
const getEmployeesFromServer = () => (
  fetch('/api/employee/')
    .then(res => res.json())
)


class App extends React.Component {
  state = {
    employees: docs,
    currentEmployee: 1,
    currentPatient: 0
  }

componentDidMount = () => (
  getEmployeesFromServer().then(employees => {
    console.log("from server: ", employees)
  })
)

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

    let index = patients.findIndex(patient => patient.account_number === currentPatient)

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
      account_number: info.account_number,
      medical_rec_number: info.medical_rec_number,
      admit_date: info.admit_date,
      length_of_stay: info.length_of_stay,
      financial_class: info.financial_class,
      status: info.status,
    }
    console.log("Patient Info part 1", newPatientInfo)
    let newDemographic = {
      id: 2,
      patient_name: info.patient_name,
      age: info.age,
      date_of_birth: info.date_of_birth
    }
    let newRoom = {
      id: 2,
      nursing_unit: info.nursing_unit,
      room: info.room,
      date_in: info.date_in,
      date_out: info.date_out
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
      doctor_name: info.doctor_name,
      doctor_question: info.doctor_question,
      clinical_indicators: info.clinical_indicators,
      history_and_physical: info.history_and_physical,
      treatment: info.treatment,
      status: info.status,
      created_on: info.created_on
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
      ed: info.ed,
      vital_signs: info.vital_signs,
      diagnostics: info.diagnostics,
      medication_administration_record: info.medication_administration_record,
      past_medical_history: info.past_medical_history,
      history_and_physical: info.history_and_physical,
      query_opportunities: info.query_opportunities,
      labs: info.labs,
      type: info.type,
      created_on: info.created_on
    }

    employees[this.state.currentEmployee].patients[this.state.currentPatient].review.push(newReview)

    console.log("New Review", newReview)
    console.log(nextQueryId)

    this.setState({ employees })
  }

  authenicate = (credentials) => {
    console.log(credentials)
    let username = credentials.username
    let password = credentials.password
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <h1>CDIS App</h1>
        {getEmployeeName(this.getCurrentEmployee())} <br />
        {employeeList(this.getAllEmployees(), this.state.currentEmployee, this.setCurrentEmployee)}
        {patientList(this.getAllEmployeePatients(), this.state.currentPatient, this.setCurrentPatientIndex)}
        <Tabs
          employeename={getEmployeeName(this.getCurrentEmployee())}
          currentEmployee={this.getCurrentEmployee()}
          pform={<PatientForm addNewPatient={this.addNewPatient} />}
          rform={<ReviewForm addNewReview={this.addNewReview} />}
          qform={<QueryForm addNewQuery={this.addNewQuery} />}
          patientInfo={getPatientInfo(this.getCurrentPatient())}
          demographic={getPatientDemographics(this.getCurrentPatient())}
          roomInfo={getPatientRoomInfo(this.getCurrentPatient())}
          reviews={this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].review}
          queries={this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].query}
          info={getPatientInfo(this.getCurrentPatient())}
          roomInfo={getPatientRoomInfo(this.getCurrentPatient())}
          demographics={getPatientDemographics(this.getCurrentPatient())}
          patientname={this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].demographic.patient_name}

        />

        {/* <LoginForm authenicate={this.authenicate}/> */}
      </div>
    )
  }
}

export default App;
