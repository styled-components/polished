import React from 'react'
import md from '../../utils/markdown'
import slug from '../../utils/slug'

export default ({ note }) => (
  <section>
    <h2 id={slug(note.namespace)}>{note.name}</h2>
    {note.description && md(note.description)}
  </section>
)
