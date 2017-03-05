import React from 'react'
import Note from '../components/Note';
import Util from '../components/Util';
import ToC from '../components/ToC';

export default () => (
  <div>
    {global.utilities && (
      <div>
        <ToC utils={global.utilities} />
        {global.utilities.map(util => util.kind === 'note' ? <Note note={util} /> : <Util util={util} />)}
      </div>
    )}
  </div>
)
