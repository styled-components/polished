import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { shadow } from '../../utils/theme'

const Button = styled.span`
  color: #678fda;
  text-decoration: none;
  text-align: right;
  margin-top: 1.5em;
  display: block;
  padding-right: 1.25em;
  transition: padding 0.2s ease-in-out;

  &:after {
    content: "⇢";
    position: absolute;
    padding-left: 0.25em;
    transition: padding 0.2s ease-in-out;
  }

  &:hover {
    text-decoration: underline;

    &:after {
      padding-left: 0.75em;
    }
  }
`

const Anchor = styled.a`
  display: block;
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 1em;
  border-radius: 4px;
  box-shadow: ${shadow.low};
  transition: box-shadow 125ms ease-out;

  ${props => props.compact && css`
    cursor: pointer;

    &:hover {
      box-shadow: ${shadow.high};

      > ${Button} {
        text-decoration: underline;
      }
    }
  `}
`

export default ({ href, as, children, compact }) => (
  <Link href={href} as={as}>
    <Anchor compact={compact}>
      {children}
      {compact && (
        <Button>Read more</Button>
      )}
    </Anchor>
  </Link>
)
