import React from 'react'
import styled from 'styled-components'
import slug from '../../utils/slug'

const Heading = styled.h3`
  color: #222;
`

export default ({ namespace, name, context }) => (
  <Heading id={slug(namespace)}>
    {name}{' '}
    {context && context.github && (
      <a href={context.github} target="_blank">(source)</a>
    )}
  </Heading>
)
