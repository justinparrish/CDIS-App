import React, { Component } from 'react'
import { Button, Card, Image, CardDescription } from 'semantic-ui-react'

const card = (query) => (
    <Card>
        <Card.Content>
            <Card.Header>Query</Card.Header>
            <Card.Description>
                <ul style={{ listStyleType: 'none' }}>
                    <li>Doctor Name: {query.doctor_name}</li>
                    <li>Doctor Question: {query.doctor_question}</li>
                    <li>Clinical Indicators: {query.clinical_indicators}</li>
                    <li>H&P: {query.history_and_physical}</li>
                    <li>Tx: {query.treatment}</li>
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
                    {cardList(this.props.queries)}
                </Card.Group>
            </div>
        )
    }
}
