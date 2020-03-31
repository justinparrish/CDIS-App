import React, { Component } from 'react'
import { Menu, Segment, Table } from 'semantic-ui-react'

const tableRow = (patient) => (
    <Table.Row>
        <Table.Cell>{patient.medicalRecNum}</Table.Cell>
        <Table.Cell>{patient.admitDate}</Table.Cell>
        <Table.Cell>{patient.financialClass}</Table.Cell>
        <Table.Cell>{patient.demographic.patientName}</Table.Cell>
        <Table.Cell>{patient.demographic.age}</Table.Cell>
        <Table.Cell>{patient.demographic.dob}</Table.Cell>
        <Table.Cell>{patient.status}</Table.Cell>
        <Table.Cell selectable><a href='#'>Select</a></Table.Cell>
    </Table.Row>
)

const patientList = (patients) => (
    patients.map(tableRow)
)

const employeePatients = (employee) => (
    patientList(employee.patients)
)

export default class DemographicTable extends Component {
    render() {
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Medical Record #</Table.HeaderCell>
                            <Table.HeaderCell>Admit Date</Table.HeaderCell>
                            <Table.HeaderCell>Financial Class</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                            <Table.HeaderCell>DOB</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>View</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {employeePatients(this.props.currentEmployee)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
