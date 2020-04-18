import React, { Component } from 'react'
import { Button, Card, Image, CardDescription } from 'semantic-ui-react'

const card = (review) => (
    <Card>
        <Card.Content>
            <Card.Header>
                <em style={{ marginRight: '10px' }}>{review.type}</em>
                |
                <em style={{ marginLeft: '10px' }}>{review.created_on}</em>
            </Card.Header>
            <Card.Meta>{review.type}</Card.Meta>
            <Card.Description>
                <ul style={{ listStyleType: 'none' }}>
                    <li>Ed: {review.ed}</li>
                    <li>VS: {review.vital_signs}</li>
                    <li>Diagnostic: {review.diagnostics}</li>
                    <li>Mar: {review.medication_administration_record}</li>
                    <li>PMH: {review.past_medical_history}</li>
                    <li>H&P: {review.history_and_physical}</li>
                    <li>Query Opportunites: {review.query_opportunities}</li>
                    <li>Labs: {review.labs}</li>
                </ul>
            </Card.Description>
        </Card.Content>
    </Card>
)

const cardList = (list) => (
    list.map(card)
)

export default class ReviewCards extends Component {
    render() {
        return (
            <div>
                <Card.Group>
                    {cardList(this.props.reviews)}
                </Card.Group>
            </div>
        )
    }
}
