import React, { Component } from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import DemographicTable from './DemographicTable'
import PatientInfoAccordion from './accordions/PatientInfoAccordion'

const panes = [
    {
        menuItem: { key: 'patients', icon: 'users', content: 'Patients' },
        render: (props) => (
            <Tab.Pane>
                {props.employeeName}
                {props.chart}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'patient', icon: 'address card', content: 'Patient' },
        render: (props) => (
            <Tab.Pane>
                {props.pForm}
                <h1>Patient's Info</h1>
                {props.patientAccordion}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'reviews', icon: 'stethoscope', content: 'Reviews' },
        render: (props) => (
            <Tab.Pane>
                {props.employeeName}
                {props.rForm}
                {props.reviews}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'queries', icon: 'pills', content: 'Queries' },
        render: (props) => (
            <Tab.Pane>
                {props.employeeName}
                {props.qForm}
                {props.queries}
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
                    employeeName={this.props.employeeName}
                    chart={<DemographicTable currentEmployee={this.props.currentEmployee} />}
                    pForm={this.props.pForm}
                    rForm={this.props.rForm}
                    qForm={this.props.qForm}
                    reviews={this.props.reviews}
                    queries={this.props.queries}
                    patientAccordion={<PatientInfoAccordion 
                                            info={this.props.info}
                                            roomInfo={this.props.roomInfo}
                                            demographics={this.props.demographics} />}
                />
            </div>
        )
    }
}
