import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DemographicTable from './DemographicTable'


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/table" component={DemographicTable} />
                </Switch>
            </Router>
        )
    }
}
