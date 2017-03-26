import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default (props) => {
  const tag = props.prefetch ? Link : 'a'
  const Comp = styled(tag)`
    background-color: #ff583f;
    border-bottom: 4px solid #D7493A;
    border-radius: 4px;
    padding: 1em 2em;
    color: #fff!important;
    font-weight: bold;
    font-size: 1em;
    display: inline-block;
    text-decoration: none!important;

    & img {
      height: 1em;
      width: 1em;
      transform: translateY(0.1em);
      margin-right: 0.5em;
    }

    &:hover {
      text-decoration: none;
      border-bottom: 5px solid #D7493A;
      transform: translateY(-1px);
      margin-bottom: -1px;
    }

    &:active {
      text-decoration: none;
      border-bottom: 3px solid #D7493A;
      transform: translateY(1px);
      margin-bottom: 1px;
    }
  `
  return <Comp {...props} />
}
