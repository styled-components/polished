import styled from 'styled-components'
import React, { PropTypes, PureComponent } from 'react'

class Heading extends PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
  }

  render() {
    const {
      level,
      ...other
    } = this.props

    if (level < 1 || level > 6) {
      throw new Error('Prop "level" passed to <Heading /> needs to be a number between 1 and 6.')
    }

    const Comp = styled(`h${level}`)`
      text-shadow: 0 1px 1px #3a9b6d;
      text-shadow: 0 1px 1px rgba(58, 155, 109, 0.37);
    `

    return <Comp {...other} />
  }
}

export default Heading
