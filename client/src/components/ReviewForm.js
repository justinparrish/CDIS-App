import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


export default class ReviewForm extends Component {
    state = {
        ep: '',
        vitalSigns: '',
        diagnostic: '',
        mar: '',
        historyAndPhysical: '',
        queryOpp: '',
        labs: '',
        type: ''
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
                    <Form.Input fluid label='Ep' type='text' name='ep' placeholder='500 Words Max' onChange={this.handleInputs} />

                    <Form.Input fluid label='Vital Signs' type='text' name='vitalSigns' placeholder='500 Words Max' onChange={this.handleInputs} />

                    <Form.Input fluid label='Diagnostics' type='text' name='diagnostic' placeholder='500 Words Max' onChange={this.handleInputs} />

                    <Form.Input fluid label='Mar' type='text' name='mar' placeholder='500 Words Max' onChange={this.handleInputs} />
                </Form.Group>


                <Form.Group widths='equal'>
                    <Form.Input fluid label='H&P' type='text' name='historyAndPhysical' placeholder='500 Words Max' onChange={this.handleInputs} />

                    <Form.Input fluid label='Query Opportunites' type='text' name='queryOpp' placeholder='500 Words Max' onChange={this.handleInputs} />

                    <Form.Input fluid label='Labs' type='text' name='labs' placeholder='500 Words Max' onChange={this.handleInputs} />

                    <Form.Input fluid label='Type' type='text' name='type' placeholder='Review or Re-Review' onChange={this.handleInputs} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <input type='submit' value='Add' />
                </Form.Group>
            </Form>
        )
    }
}
