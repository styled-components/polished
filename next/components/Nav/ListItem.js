import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Item = styled.li`
  border-bottom: 1px solid #999;
  padding: 1em;
  font-size: 1em;
`

export default ({ href, as, children, onClick }) => (
  <Link prefetch href={href} as={as}>
    <Item onClick={onClick}>{children}</Item>
  </Link>
)
