import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import Note from '../../components/Note';
import Wrapper from '../../components/Wrapper';
import Util from '../../components/Util';
import ToC from '../../components/ToC';

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      {global.utilities && (
        <div>
          <ToC utils={global.utilities} />
          <Wrapper>
            {global.utilities.map(util => util.kind === 'note' ? <Note note={util} /> : <Util util={util} compact />)}
          </Wrapper>
        </div>
      )}
    </div>
  </ThemeProvider>
)
