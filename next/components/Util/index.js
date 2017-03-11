import React from 'react'
import slug from '../../utils/slug'
import {
  signature,
  type as formatType,
} from '../../utils/format'
import autolink from '../../utils/autolink'
import highlight from '../../utils/highlight'
import md from '../../utils/markdown'

import Title from './Title'
import Card from './Card'
import Signature from './Signature'
import Type from './Type'

export default ({ util, compact }) => (
  <Card compact={compact}>
    {!util.nested && (
      <Title
        nested={util.nested}
        namespace={util.namespace}
        name={util.name}
        // Only show (source) link in non-compact mode
        context={!compact && util.context}
      />
    )}

    {md(util.description)}

    <Signature>{signature(util)}</Signature>
    {util.type && <p>Type: {formatType(util.type)}</p>}
    {util.augments && (
      <p>Extends {util.augments.map(tag => autolink(tag.name)).join(', ')}</p>
    )}

    {!compact && (
      <div>
        {util.version && <div>Version: {util.version}</div>}
        {util.license && <div>License: {util.license}</div>}
        {util.author && <div>Author: {util.author}</div>}
        {util.copyright && <div>Copyright: {util.copyright}</div>}
        {util.since && <div>Since: {util.since}</div>}

        {util.params && (
          <div>
            <h4>Parameters</h4>
            {util.params.map((param) => (
              <div>
                <Type>{`${param.name} `}</Type>
                <code>({`${formatType(param.type)}${param.default && ` = ${param.default}`}`})</code>
                {param.description && md(param.description, true)}
                {param.properties && (
                  <table>
                    <colgroup>
                      <col width='30%' />
                      <col width='70%' />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {param.properties.map((property) => (
                        <tr>
                          <td>
                            <span>{property.name}</span>
                            <code>{formatType(property.type)}</code>
                            {property.default &&
                              <code>{`default ${property.default}`}</code>
                            }
                          </td>
                          <td>{property.description && md(property.description, true)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        )}

        {util.properties && (
          <div>
            <h4>Properties</h4>
            {util.properties.map(property => (
              <div>
                <span>{property.name}</span>
                <code>({formatType(property.type)})</code>
                {property.default &&
                  <code>{`default ${property.default}`}</code>
                }
                {property.description && `: ${md(property.description, true)}`}
                {property.properties && (
                  <ul>
                    {property.properties.map(prop => (
                      <li>
                        <code>{prop.name}</code>
                        {` ${formatType(prop.type)}`}
                        {property.default &&
                          <code>{`default ${property.default}`}</code>
                        }
                        {property.description && md(property.description, true)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {util.returns && util.returns.map(ret => (
          <div>
            <h4>Returns</h4>
            <code>{formatType(ret.type)}</code>
            {ret.description && md(ret.description, true)}
          </div>
        ))}

        {util.throws && (
          <ul>
            {util.throws.map(throws => (
              <li>{`${formatType(throws.type)}: ${md(throws.description, true)}`}</li>
            ))}
          </ul>
        )}

        {util.examples && (
          <div>
            <h4>Example</h4>
            {util.examples.map(example => (
              <div>
                {example.caption && <p>{md(example.caption)}</p>}
                <pre>{highlight(example.description)}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </Card>
)
