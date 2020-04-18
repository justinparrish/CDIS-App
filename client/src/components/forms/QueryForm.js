import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class QueryForm extends Component {
    state = {
        doctor_name: '',
        doctor_question: '',
        clinical_indicators: '',
        history_and_physical: '',
        treatment: '',
        status: '',
        created_on: ''
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
                    <Form.Input fluid label='Doctor Name' type='text' name='doctor_name' placeholder='Doe, John D., NP' onChange={this.handleInputs} />
                    <Form.Input fluid label='Doctor Question' type='text' name='doctor_question' placeholder="1,000 Words Max" onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Clinical Indicators' type='text' name='clinical_indicators' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='H&P' type='text' name='history_and_physical' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Treatment' type='text' name='treatment' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Status' type='text' name='status' placeholder='Open or Closed' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date' type='date' name='created_on' placeholder="Today's Date" onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}
