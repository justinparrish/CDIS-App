import React, { Component } from 'react'

export default class ReviewForm extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <label>Ep</label>
                    <input type='text' name='ep' placeholder='500 Words Max' />
                    <label>Vital Signs</label>
                    <input type='text' name='vitalSigns' placeholder='500 Words Max' />
                    <label>Diagnostics</label>
                    <input type='text' name='diagnostic' placeholder='500 Words Max' />
                    <label>Mar</label>
                    <input type='text' name='mar' placeholder='500 Words Max' />
                    <label>H&P</label>
                    <input type='text' name='historyAndPhysical' placeholder='500 Words Max' />
                    <label>Query Opportunites</label>
                    <input type='text' name='queryOpp' placeholder='500 Words Max' />
                </fieldset>
                <fieldset>
                    <label>Labs</label>
                    <input type='text' name='labs' placeholder='500 Words Max' />
                    <label>Type</label>
                    <input type='text' name='type' placeholder='Review or Re-Review' />
                    <input type='submit' value='Add' />
                </fieldset>
            </form>
        )
    }
}
