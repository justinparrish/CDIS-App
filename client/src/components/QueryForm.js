import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class QueryForm extends Component {
    state = {
        doctorName: '',
        doctorQuestion: '',
        clinicalIndicators: '',
        historyAndPhysical: '',
        treatment: ''
    }

    handleInputs = (evnt) => {
        let state = {...this.state}

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewQuery(this.state)
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Doctor Name' type='text' name='doctorName' placeholder='Doe, John D., NP' onChange={this.handleInputs} />
                    <Form.Input fluid label='Doctor Question' type='text' name='doctorQuestion' placeholder="1,000 Words Max" onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Clinical Indicators' type='text' name='clinicalIndicators' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='H&P' type='text' name='historyAndPhysical' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Treatment' type='text' name='treatment' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}
