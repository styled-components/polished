import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import Note from '../../components/Note'
import Wrapper from '../../components/Wrapper'
import Util from '../../components/Util'
import Nav from '../../components/Nav'
import ToC from '../../components/ToC'
import ToCWrapper from '../../components/ToC/Wrapper'

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      {global.utilities && (
        <div>
          <Nav />
          <Wrapper columns>
            <ToCWrapper>
              <ToC utils={global.utilities} />
            </ToCWrapper>
            <div>
              {global.utilities.map(util => util.kind === 'note' ?
                <Note note={util} /> :
                <Util util={util} compact />
              )}
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  </ThemeProvider>
)
