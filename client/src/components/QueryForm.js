import React, { Component } from 'react'

export default class QueryForm extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <label>Doctor Name</label>
                    <input type='text' name='doctorName' placeholder='Doe, John D., NP' />
                    <label>Doctor Question</label>
                    <input type='text' name='doctorQuestion' placeholder="1,000 Words Max" />
                    <label>Clinical Indicators</label>
                    <input type='text' name='clinicalIndicators' placeholder='1,000 Words Max' />
                    <label>H&P</label>
                    <input type='text' name='historyAndPhysical' placeholder='1,000 Words Max' />
                    <label>Treatment</label>
                    <input type='text' name='treatment' placeholder='1,000 Words Max' />
                    <input type='submit' value='Add' />
                </fieldset>
            </form>
        )
    }
}
