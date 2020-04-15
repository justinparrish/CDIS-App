import React, { Component } from 'react'
import { Button, Card, Image, CardDescription } from 'semantic-ui-react'

const card = (review) => (
    <Card>
        <Card.Content>
            <Card.Header>{review.type}</Card.Header>
            <Card.Description>
                <ul style={{listStyleType: 'none'}}>
                    <li>Ep: {review.ep}</li>
                    <li>VS: {review.vitalSigns}</li>
                    <li>Diagnostic: {review.diagnostic}</li>
                    <li>Mar: {review.mar}</li>
                    <li>H&P: {review.historyAndPhysical}</li>
                    <li>Query Opportunites: {review.queryOpp}</li>
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
