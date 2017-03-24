import styled from 'styled-components'

export default styled.ul`
	display: block;
	visibility: ${props => props.visible ? 'visible' : 'hidden'};
	transition: visibility 0ms 150ms;
	background-color: white;
  margin-top: 0;
  list-style: none;
  padding: 0;
`
