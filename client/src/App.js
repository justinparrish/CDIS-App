import React from 'react';
import './App.css';
import { Menu, Segment } from 'semantic-ui-react'

/*
//Test Data Structure
const docs = [
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
        financailClass: 'Medicare',
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
      }
    ]
  }
}
]
*/

//Employee
const getEmployeeName = (employee) => (
  <span>{employee.employeeName}</span>
)

//Patient Info
const getPatientInfo = (patient) => (
  <ul>
    <li>Account Number: {patient.accountNum}</li>
    <li>Medical Record Number: {patient.medicalRecNum}</li>
    <li>Admit Date: {patient.admitDate}</li>
    <li>Length of Stay: {patient.lengthOfStay}</li>
    <li>Financial Class: {patient.financailClass}</li>
    <li>Status: {patient.status}</li>
  </ul>
)

//Patient Demographics
const getPatientDemographics = (patient) => (
  <ul>
    <li>Name: {patient.patientName}</li>
    <li>Age: {patient.age}</li>
    <li>Date of Birth: {patient.dob}</li>
  </ul>
)

//Patient Room Info
const getPatientRoomInfo = (patient) => (
  <ul>
    <li>Nursing Unit: {patient.nursingUnit}</li>
    <li>Room: {patient.room}</li>
    <li>Date In: {patient.datein}</li>
    <li>Date Out: {patient.dateOut}</li>
  </ul>
)

//Patient Query
const getPatientQuery = (query) => (
  <ul style={{margin: '15px', border: '2px dotted grey'}}>
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

//Patient Review/Re-reivews
const getPatientReview = (review) => (
  <ul>
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

//Test Data Structures
const employee = { employeeName: "Tenia Parrish" }

const patient = {
  accountNum: 'EUH6304393485',
  medicalRecNum: 'EUH694321',
  admitDate: '2020-16-02',
  lengthOfStay: 3,
  financailClass: 'Medicare',
  status: 'Discharged',
}

const patientDemographics = {
  patientName: 'Nelson, Justin D',
  age: 20,
  dob: '2000-10-03'
}

const patientRoomInfo = {
  nursingUnit: 'T5-S',
  room: 'T509-01',
  dateIn: '2020-16-02',
  dateOut: '2020-19-02',
}

const patientQuery = {
  doctorName: 'Morgan, Phil R., NP',
  doctorQuestion: "Doctor's Question number 1",
  clinicalIndicators: "Pt admitted with Hypercapnia Respitory Failure with ALS",
  historyAndPhysical: "history and physical 1",
  treatment: "3/4/20 Normal Saline 60ml Tube flush given x 6"
}

const patientReview = {
  ep: 'ep 1',
  vitalSigns: "vital signs 1",
  diagnostic: "diagnostic 1",
  mar: "medication administration record 1",
  historyAndPhysical: "history and physical 1",
  queryOpp: "query opportunities 1",
  labs: "lab results 1",
  type: "Review"
}

//List of Querys

const patientQuerys = [
  {
    doctorName: 'Morgan, Phil R., NP',
    doctorQuestion: "Doctor's Question number 1",
    clinicalIndicators: "Pt admitted with Hypercapnia Respitory Failure with ALS",
    historyAndPhysical: "history and physical 1",
    treatment: "3/4/20 Normal Saline 60ml Tube flush given x 6"
  },
  {
    doctorName: 'Smith, Greg P., NP',
    doctorQuestion: "Doctor's Question number 2",
    clinicalIndicators: "Pt admitted with Hypercapnia Respitory Failure with ALS",
    historyAndPhysical: "history and physical 2",
    treatment: "3/4/20 Normal Saline 60ml Tube flush given x 6"
  }
]

//List of Reviews/Re-Reviews
const patientReviews = [
  {
    ep: 'ep 1',
    vitalSigns: "vital signs 1",
    diagnostic: "diagnostic 1",
    mar: "medication administration record 1",
    historyAndPhysical: "history and physical 1",
    queryOpp: "query opportunities 1",
    labs: "lab results 1",
    type: "Review"
  },
  {
    ep: 'ep 2',
    vitalSigns: "vital signs 2",
    diagnostic: "diagnostic 2",
    mar: "medication administration record 2",
    historyAndPhysical: "history and physical 2",
    queryOpp: "query opportunities 2",
    labs: "lab results 2",
    type: "Re-Review"
  }

]

const App = () => {
  return (
    <div class="container">
      <h1>CDIS App</h1>
      {/* For List */}
      <h2>Patient</h2>
      <h3>Query List</h3>
      {queryList(patientQuerys)}
    </div>
  )
}

export default App;
