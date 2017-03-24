import React from 'react'
import slug from '../../utils/slug'

export default ({ note }) => (
  <section>
    <h2 id={slug(note.namespace)}>{note.name}</h2>
    <p
      dangerouslySetInnerHTML={{
        __html: note.description,
      }}
    />
  </section>
)
