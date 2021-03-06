import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const tableRow = (patient) => (
    <Table.Row>
        <Table.Cell>{patient.medical_rec_number}</Table.Cell>
        <Table.Cell>{patient.admit_date}</Table.Cell>
        <Table.Cell>{patient.financial_class}</Table.Cell>
        <Table.Cell>{patient.demographic.patient_name || "Loading..."}</Table.Cell>
        <Table.Cell>{patient.demographic.age || "Loading..."}</Table.Cell>
        <Table.Cell>{patient.demographic.date_of_birth || "Loading..."}</Table.Cell>
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
                            {/* vvvvv Change for number of open Queries vvvv */}
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
