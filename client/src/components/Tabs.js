import React, {Component} from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import DemographicTable from './DemographicTable'

const panes = [
    {
        menuItem : {key: 'patients', icon: 'users', content: 'Patients'},
    render: (props) => <Tab.Pane>{props.chart}</Tab.Pane>
    }
]

export default class Tabs extends Component {
    render() {
        return (
            <div>
                <Tab 
                panes={panes}
                chart={<DemographicTable currentEmployee={this.props.currentEmployee} />}
                />
            </div>
        )
    }
}
