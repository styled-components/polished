import styled, { css } from 'styled-components'
import { shadow } from '../../utils/theme'

export default styled.section`
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 1em;
  border-radius: 4px;
  box-shadow: ${shadow.low};
  transition: box-shadow 125ms ease-out;

  ${props => props.compact && css`
    &:hover {
      box-shadow: ${shadow.high};
    }
  `}
`
