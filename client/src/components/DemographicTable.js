import React, { Component } from 'react'
import { Menu, Segment, Table } from 'semantic-ui-react'

const tableRow = (demographic) => (
    <Table.Row>
        <Table.Cell>{demographic.patientName}</Table.Cell>
        <Table.Cell>{demographic.age}</Table.Cell>
        <Table.Cell>{demographic.dob}</Table.Cell>
        <Table.Cell selectable><a href='#'>Select</a>Select</Table.Cell>
    </Table.Row>
)




export default class DemographicTable extends Component {
    render() {
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                            <Table.HeaderCell>DOB</Table.HeaderCell>
                            <Table.HeaderCell>View</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Doe, John B</Table.Cell>
                            <Table.Cell>48</Table.Cell>
                            <Table.Cell>1972-03-12</Table.Cell>
                            <Table.Cell selectable><a href='#'>Select</a></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
