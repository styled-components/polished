import React from 'react'
import Note from '../components/Note';
import Util from '../components/Util';

export default () => (
  <div>
    {global.utilities.map(util =>
      util.kind === 'note'
      ? <Note note={util} />
      : <Util util={util} />
    )}
  </div>
)
