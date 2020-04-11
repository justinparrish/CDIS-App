import React, { Component } from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import DemographicTable from './DemographicTable'

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
        menuItem: { key: 'reviews', icon: 'users', content: 'Reviews' },
        render: (props) => (
            <Tab.Pane>
                {props.employeeName}
                {props.rForm}
                {props.reviews}
            </Tab.Pane>
        )
    },
    {
        menuItem: { key: 'queries', icon: 'users', content: 'Queries' },
        render: (props) => (
            <Tab.Pane>
                {props.employeeName}
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
                    rForm={this.props.rForm}
                    reviews={this.props.reviews}
                    queries={this.props.queries}
                />
            </div>
        )
    }
}
