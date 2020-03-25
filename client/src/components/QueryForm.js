import React, { Component } from 'react'

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
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label>Doctor Name</label>
                    <input type='text' name='doctorName' placeholder='Doe, John D., NP' onChange={this.handleInputs} />
                    <label>Doctor Question</label>
                    <input type='text' name='doctorQuestion' placeholder="1,000 Words Max" onChange={this.handleInputs} />
                    <label>Clinical Indicators</label>
                    <input type='text' name='clinicalIndicators' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <label>H&P</label>
                    <input type='text' name='historyAndPhysical' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <label>Treatment</label>
                    <input type='text' name='treatment' placeholder='1,000 Words Max' onChange={this.handleInputs} />
                    <input type='submit' value='Add' />
                </fieldset>
            </form>
        )
    }
}
