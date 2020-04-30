import React, { Component } from 'react'
import { Tab, Modal, Button } from 'semantic-ui-react'
import DemographicTable from './DemographicTable'
import PatientInfoAccordion from './PatientInfoAccoridion'
import ReviewCards from './cards/ReviewCards'
import QueryCard from './cards/QueryCards'

const panes = [
    {
        menuItem: { key: 'patients', icon: 'users', content: 'Patients' },
        render: (props) => (
            <Tab.Pane>
                <Modal trigger={<Button className="add-patient-button">Add New Patient</Button>} size='large' style={{position: 'relative', overflow: 'scroll'}}>
                    <Modal.Header>Enter New Patient Info</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                <h2>Patient Info</h2>
                {props.pform}
                </Modal.Description>
                </Modal.Content>
                </Modal>
                {props.chart}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'patient', icon: 'address card', content: 'Patient' },
        render: (props) => (
            <Tab.Pane>
                <h1>Patient's Info</h1>
                {props.patientaccordion}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'reviews', icon: 'stethoscope', content: 'Reviews' },
        render: (props) => (
            <Tab.Pane>
                {props.employeename}
                {props.rform}
                <h2>Patient Name: {props.patientname}</h2>
                {props.reviewcards}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'queries', icon: 'pills', content: 'Queries' },
        render: (props) => (
            <Tab.Pane>
                {props.employeename}
                {props.qform}
                <h2>Patient Name: {props.patientname}</h2>
                {props.querycards}
            </Tab.Pane>
        )
    }
]

export default class Tabs extends Component {
    render() {
        return (
            <div>
                <Tab
                    panes={panes}
                    employeename={this.props.employeename}
                    pform={this.props.pform}
                    rform={this.props.rform}
                    qform={this.props.qform}
                    roomform={this.props.roomform}
                    patientname={this.props.patientname}
                    chart={<DemographicTable currentEmployee={this.props.currentEmployee} />}
                    reviewcards={<ReviewCards reviews={this.props.reviews} />}
                    querycards={<QueryCard queries={this.props.queries} />}
                    patientaccordion={<PatientInfoAccordion
                        info={this.props.info}
                        roomInfo={this.props.roomInfo}
                        demographics={this.props.demographics} />}
                />
            </div>
        )
    }
}
