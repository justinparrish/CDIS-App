import React, { Component } from 'react'

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
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <label>Ep</label>
                    <input type='text' name='ep' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <label>Vital Signs</label>
                    <input type='text' name='vitalSigns' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <label>Diagnostics</label>
                    <input type='text' name='diagnostic' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <label>Mar</label>
                    <input type='text' name='mar' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <label>H&P</label>
                    <input type='text' name='historyAndPhysical' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <label>Query Opportunites</label>
                    <input type='text' name='queryOpp' placeholder='500 Words Max' onChange={this.handleInputs} />
                </fieldset>
                <fieldset>
                    <label>Labs</label>
                    <input type='text' name='labs' placeholder='500 Words Max' onChange={this.handleInputs} />
                    <label>Type</label>
                    <input type='text' name='type' placeholder='Review or Re-Review' onChange={this.handleInputs} />
                    <input type='submit' value='Add' />
                </fieldset>
            </form>
        )
    }
}
