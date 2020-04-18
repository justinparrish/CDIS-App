import React, { Component } from 'react'
import { Button, Card, Image, CardDescription } from 'semantic-ui-react'

const card = (review) => (
    <Card>
        <Card.Content>
            <Card.Header>{review.type}</Card.Header>
            <Card.Description>
                <ul style={{listStyleType: 'none'}}>
                    <li>Ed: {review.ed}</li>
                    <li>VS: {review.vital_signs}</li>
                    <li>Diagnostic: {review.diagnostics}</li>
                    <li>Mar: {review.medication_administration_record}</li>
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
