import React, {Component} from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'

const panes = [
    {
        menuItem : {key: 'patients', icon: 'users', content: 'Patients'},
    render: () => <Tab.Pane>fssdsdfdss</Tab.Pane>
    }
]

export default class Tabs extends Component {
    render() {
        return (
            <div>
                <Tab panes={panes} />
            </div>
        )
    }
}
