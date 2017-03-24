import React from 'react'
import Link from 'next/link'
import List from './List'
import Anchor from './Anchor'
import ListItem from './ListItem'
import NoteItem from './NoteItem'
import slug from '../../utils/slug'

export default ({ utils }) => (
  <List>
    {utils.map((util) => (
      <ListItem key={`toc-${slug(util.namespace.toLowerCase())}`}>
        {util.kind === 'note' ? (
          <NoteItem>{util.name}</NoteItem>
        ) : (
          <Link
            prefetch
            href="/docs/util"
            as={`/docs/util/${slug(util.namespace.toLowerCase())}`}
          >
            <Anchor>{util.name}</Anchor>
          </Link>
        )}
      </ListItem>
    ))}
  </List>
)
