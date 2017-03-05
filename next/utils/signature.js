import formatType from './format-type'
import formatParams from './parameter'

/**
 * Build the type signature for a given util
 */
export default (util) => {
  if (util.kind !== 'function') return util.name

  const returns = util.returns ? `: ${formatType(util.returns[0].type)}` : ''
  const prefix = util.kind === 'class' ? 'new ' : ''
  return `${prefix}${util.name}${formatParams(util)}${returns}`
}
