import React from 'react'
import slug from '../../utils/slug'

export default ({ utils }) => (
  <ul>
    {utils.map((util) => <li><a href={slug(util.namespace)}>{util.name}</a></li>)}
  </ul>
)
