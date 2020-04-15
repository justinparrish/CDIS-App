import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'


export default class PatientInfoAccordion extends Component {
  state = {
    activeIndex: undefined
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Patient Info
        </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            {this.props.info}
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Room Info
        </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            {this.props.roomInfo}
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Demographics
        </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            {this.props.demographics}
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}
