//Default Imports
import React from 'react';
import './App.css';

// Form Components
import PatientForm from './components/forms/PatientForm'
import QueryForm from './components/forms/QueryForm';
import ReviewForm from './components/forms/ReviewForm'

// Extra Components
import Tabs from './components/Tabs'

// Loading Screen Dependents
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json"




// --------- Employee ------------
const getEmployeeName = (employee) => (<h4>Employee Name: {employee.name}</h4>)

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

const listPatientInfo = (patients) => (<div>{patients.map(getPatientInfo)}</div>)
const employeePatients = (employee) => (<div>{listPatientInfo(employee.patients)}</div>)

// ----------- Patient Demographics * ---------------
const getPatientDemographics = (patient) => (
  <ul>
    <li>Name: {patient.demographic.patient_name}</li>
    <li>Age: {patient.demographic.age}</li>
    <li>Date of Birth: {patient.demographic.date_of_birth}</li>
  </ul>
)
const listPatientDemographic = (patients) => (<div>{patients.map(getPatientDemographics)}</div>)
const patientsDemographic = (employee) => (<div>{listPatientDemographic(employee.patients)}</div>)

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
const queryList = (list) => (<div>{list.map(getPatientQuery)}</div>)

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
const reviewList = (list) => (<div>{list.map(getPatientReview)}</div>)

//List of Employees
const employeeUsername = (employee) => (<option value={employee.id}>{employee.username}</option>)
const employeeList = (employees, currentEmployee, onChange) => (
  <select value={currentEmployee} onChange={(evnt) => onChange(evnt.target.value)}>
    {employees.map(employeeUsername)}
  </select>
)

//List of Cars
const patientNameOption = (patient) => (<option value={patient.account_number || "Loading..."}>{patient.demographic.patient_name || "Loading..."}</option>)
const patientList = (patients, currentPatient, onChange) => (
  <select value={currentPatient} onChange={(evnt) => onChange(evnt.target.value)}>
    {/* <option value={undefined}>Select Patient</option> */}
    {patients.map(patientNameOption)}
  </select>
)

// Loading Screen Options
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

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
            created_on: '2020-19-02'
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

const getPatientsFromServer = () => (
  fetch('/api/patient/')
    .then(res => res.json())
)

const getDemographicsFromServer = () => (
  fetch('/api/demographic/')
    .then(res => res.json())
)

const getRoomsFromServer = () => (
  fetch('/api/room/')
    .then(res => res.json())
)

const getQueriesFromServer = () => (
  fetch('/api/query/')
    .then(res => res.json())
)

const getReviewsFromServer = () => (
  fetch('/api/review/')
    .then(res => res.json())
)

const getAllFromServer = () => (
  getEmployeesFromServer().then(employees => (
    getPatientsFromServer().then(patients => (
      getDemographicsFromServer().then(demographics => (
        getRoomsFromServer().then(rooms => (
          getQueriesFromServer().then(queries => (
            getReviewsFromServer().then(reviews => (
              patients.reduce((employee, patient) => {
                for (let i = 0; i < demographics.length; i++) {
                  if (demographics[i].patient === patient.id) {
                    patient.demographic = demographics[i]
                  }
                }
                for (let j = 0; j < rooms.length; j++) {
                  if (rooms[j].patient === patient.id) {
                    patient.room = rooms[j]
                  }
                }
                patient.query = queries.filter(query => query.patient === patient.id)
                patient.review = reviews.filter(review => review.patient === patient.id)
                employee[patient.id] = patient
                return employee
              }, {}),
              employees.reduce((obj, employee) => {
                employee.patients = patients.filter(patient => patient.employee === employee.id)
                obj[employee.id] = employee
                return obj
              }, {})

            ))
          ))
        ))
      ))
    ))
  ))
)
// --------- Sending Data to Database with Fetch POST Method ----------
const sendPatientReviewToDb = (reviewData) => (
  fetch('/api/review/',
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData)
  }).then(res => res.json())
)

const sendPatientQueryToDb = (queryData) => (
  fetch('/api/query/',
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(queryData)
  }).then(res => res.json())
)

const sendPatientInfoToDb = (patientData) => (
  fetch('/api/patient/',
  {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(patientData)
  }).then(res => res.json())
)

const sendPatientDemographicToDb = (demographicData) => (
  fetch('/api/demographic/', {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(demographicData)
  }).then(res => res.json())
)

const sendPatientRoomToDb = (roomData) => (
  fetch('/api/room/', {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(roomData)
  }).then(res => res.json())
)

class App extends React.Component {
  state = {
    employees: docs,
    currentEmployee: 1,
    currentPatient: 0,
    done: undefined,
  }

  componentDidMount = () => {
    getAllFromServer()
      .then(employees => {
        console.log("object", employees)
        this.setState({ employees })
      }).then(
        setTimeout(() => {
          this.setState({ done: true })
        }, 7000)
      )
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

    let index = patients.findIndex(patient => patient.account_number === currentPatient)

    console.log(index)


    this.setState({ currentPatient: index })
  }

  getCurrentEmployee = () => (
    this.state.employees[this.state.currentEmployee]
  )
  // ------------------------------------------
  addNewPatient = (info) => {
    getPatientsFromServer().then(patients => {
    sendPatientInfoToDb({...info, employee: this.state.employees[this.state.currentEmployee].id}).then(patientInfo => {
      sendPatientDemographicToDb({...info, patient: patients[patients.length - 1].id + 1}).then(demographic => {
        sendPatientRoomToDb({...info, patient: patients[patients.length - 1].id + 1}).then(room => {
          
          console.log("Patient From App Comp.", info)
          
          let employees = this.state.employees
          
          let nextPatientId = patients[patients.length - 1].id + 1
          console.log("patient array length", nextPatientId)

          let newPatientInfo = {
            id: nextPatientId,
            account_number: patientInfo.account_number,
            medical_rec_number: patientInfo.medical_rec_number,
            admit_date: patientInfo.admit_date,
            length_of_stay: patientInfo.length_of_stay,
            financial_class: patientInfo.financial_class,
            status: patientInfo.status,
          }
          console.log("Patient Info part 1", newPatientInfo)
          let newDemographic = {
            patient_name: demographic.patient_name,
            age: demographic.age,
            date_of_birth: demographic.date_of_birth,
          }
          let newRoom = {
            nursing_unit: room.nursing_unit,
            room: room.room,
            date_in: room.date_in,
            date_out: room.date_out,
          }
          newPatientInfo.demographic = newDemographic
          newPatientInfo.room = newRoom
          newPatientInfo.query = []
          newPatientInfo.review = []
      
          employees[this.state.currentEmployee].patients.push(newPatientInfo)
      
          this.setState({ employees })

        })
      })
    })
  })

  }
  // ------------------------------------------
  addNewQuery = (info) => {
    sendPatientQueryToDb({...info, patient: this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].id}).then(info => {
      let employees = this.state.employees
  
      let nextQueryId = employees[this.state.currentEmployee].patients[this.state.currentPatient].query.length + 1
  
      let newQuery = {
        doctor_name: info.doctor_name,
        doctor_question: info.doctor_question,
        clinical_indicators: info.clinical_indicators,
        history_and_physical: info.history_and_physical,
        treatment: info.treatment,
        status: info.status,
        created_on: info.created_on
      }
  
      employees[this.state.currentEmployee].patients[this.state.currentPatient].query.push(newQuery)
  
      this.setState({ employees })
    })
  }
  addNewReview = (info) => {
    sendPatientReviewToDb({...info, patient: this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].id}).then(info => {

      let employees = this.state.employees
  
      let nextQueryId = employees[this.state.currentEmployee].patients[this.state.currentPatient].review.length + 1
  
      let newReview = {
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
  
      this.setState({ employees })
    })
  }

  authenicate = (credentials) => {
    console.log(credentials)
    let username = credentials.username
    let password = credentials.password
  }

  getState = () => (
    console.log("click for state", this.state)
  )

  render() {
    console.log(this.state)
    return (
      <div className="container">
        {!this.state.done ?
          <div className="loading-screen">
            <FadeIn>
              <div class="d-flex justify-content-center align-items-center">
                <Lottie options={defaultOptions} height={600} width={900} />
              </div>
            </FadeIn>
          </div>
          :
          <div className="content">
            <h1>Documentation Helper</h1>
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
              reviews={this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].review}
              queries={this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].query}
              info={getPatientInfo(this.getCurrentPatient())}
              roomInfo={getPatientRoomInfo(this.getCurrentPatient())}
              demographics={getPatientDemographics(this.getCurrentPatient())}
              patientname={this.state.employees[this.state.currentEmployee].patients[this.state.currentPatient].demographic.patient_name || "Loading..."}
            />
          </div>
        }
      </div>
    )
  }
}

export default App;
