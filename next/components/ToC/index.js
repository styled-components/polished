import React from 'react'
import Link from 'next/link'
import slug from '../../utils/slug'

export default ({ utils }) => (
  <ul>
    {utils.map((util) => <li><Link prefetch href="/docs/util" as={`/docs/util/${slug(util.namespace.toLowerCase())}`}><a>{util.name}</a></Link></li>)}
  </ul>
)
