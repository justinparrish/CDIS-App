import React from 'react';
import './App.css';
import { Menu, Segment } from 'semantic-ui-react'


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

class App extends React.Component {
  state = {
    employess: docs
  }

  render() {
    return (
      <div className='container'>
        <h1>CDIS APP</h1>
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
