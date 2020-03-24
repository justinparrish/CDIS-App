import React from 'react';
import './App.css';
import { Menu, Segment } from 'semantic-ui-react'


// --------- Employee ------------
const getEmployeeName = (employee) => (
  <span>Employee Name: {employee.employeeName}</span>
)

// ---------- Patient Info ----------
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

// ----------- Patient Demographics ---------------
const getPatientDemographics = (demographic) => (
  <ul>
    <li>Name: {demographic.patientName}</li>
    <li>Age: {demographic.age}</li>
    <li>Date of Birth: {demographic.dob}</li>
  </ul>
)

// ----------- Patient Room Info -------------
const getPatientRoomInfo = (room) => (
  <ul>
    <li>Nursing Unit: {room.nursingUnit}</li>
    <li>Room: {room.room}</li>
    <li>Date In: {room.datein}</li>
    <li>Date Out: {room.dateOut}</li>
  </ul>
)

// ------------ Patient Query -------------
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

// ---------- Patient Review/Re-reivews ------------
const getPatientReview = (review) => (
  <ul style={{margin: '15px', border: '2px dotted grey'}}>
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

// ----------- Test Data Structures --------------
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

// ---------- List of Queries -----------

const patientQueries = [
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
      {getEmployeeName(employee)}
      {/* For List */}
      <h2>Patient</h2>
      <h3>Query List</h3>
      {queryList(patientQueries)}
      <h3>Review List</h3>
      {reviewList(patientReviews)}
    </div>
  )
}

export default App;
