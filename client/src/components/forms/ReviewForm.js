import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


export default class ReviewForm extends Component {
    state = {
        ed: '',
        vital_signs: '',
        diagnostics: '',
        medication_administration_record: '',
        history_and_physical: '',
        query_opportunities: '',
        labs: '',
        type: '',
        past_medical_history: '',
        created_on: ''

    }

    handleInputs = (evnt) => {
        let state = { ...this.state }

        state[evnt.target.name] = evnt.target.value

        this.setState(state)
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()

        this.props.addNewReview(this.state)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Ed' type='text' name='ed' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Vital Signs' type='text' name='vital_signs' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Diagnostics' type='text' name='diagnostics' placeholder='500 Words Max' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Mar' type='text' name='medication_administration_record' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Past Medical History' type='text' name='past_medical_history' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='H&P' type='text' name='history_and_physical' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Query Opportunites' type='text' name='query_opportunities' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <Form.Input fluid label='Labs' type='text' name='labs' placeholder='500 Words Max' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Type' type='text' name='type' placeholder='Review or Re-Review' onChange={this.handleInputs} />
                    <Form.Input fluid label='Date' type='date' name='created_on' placeholder="Today's Date" onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}
