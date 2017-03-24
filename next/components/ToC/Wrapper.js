import styled from 'styled-components'

export default styled.div`
  position: fixed;
  transform: translateX(-100%);
	height: 100%;
  overflow-y: scroll;
  height: calc(100% - 3em); /* 100% - nav height */
  top: 3em; /* Nav height */

  @media screen and (max-width: 1350px) {
    display: none;
  }
`
