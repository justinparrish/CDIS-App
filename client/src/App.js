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

const getEmployeeName = (employee) => (
  <span>{employee.employeeName}</span>
)

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

const getPatientDemographics = (patient) => (
  <ul>
    <li>Name: {patient.patientName}</li>
    <li>Age: {patient.age}</li>
    <li>Date of Birth: {patient.dob}</li>
  </ul>
)

const getPatientRoomInfo = (patient) => (
  <ul>
    <li>Nursing Unit: {patient.nursingUnit}</li>
    <li>Room: {patient.room}</li>
    <li>Date In: {patient.datein}</li>
    <li>Date Out: {patient.dateOut}</li>
  </ul>
)

const getPatientQuery = (query) => (
  <ul>
    <li>Doctor Name: {query.doctorName}</li>
    <li>Doctor Question: {query.doctorQuestion}</li>
    <li>Clinical Indicators: {query.clinicalIndicators}</li>
    <li>H&P: {query.historyAndPhysical}</li>
    <li>Tx: {query.treatment}</li>
  </ul>
)

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

const App = () => {
  return (
    <div class="container">
      <h1>CDIS App</h1>
      <h2>Employee Name</h2>
      {getEmployeeName(employee)}
      <h2>Patient Information</h2>
      <h3>Info</h3>
      {getPatientInfo(patient)}
      <h3>Demographics</h3>
      {getPatientDemographics(patientDemographics)}
      <h3>Room Info</h3>
      {getPatientRoomInfo(patientRoomInfo)}
      <h3>Query</h3>
      {getPatientQuery(patientQuery)}
    </div>
  )
}

export default App;
