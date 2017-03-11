/**
 * Render a list of things with commas
 *
 * @param  {Array}  list      The list
 * @param  {String} start     Optional prefix
 * @param  {String} end       Optional postfix
 * @param  {String} separator Optional separator other than a comma
 */
const commaList = (list, start, end, separator) => `${start}${list.join(separator || ', ')}${end}`

/**
 * Format a nodes type correctly
 */
export const type = (node) => {
  if (!node) return 'Any'

  switch (node.type) {
    case 'NullableLiteral':
      return '?'
    case 'AllLiteral':
      return 'Any'
    case 'NullLiteral':
      return 'null'
    case 'VoidLiteral':
      return 'void'
    case 'UndefinedLiteral':
      return 'undefined'
    case 'NameExpression':
      return node.name
    case 'ParameterType':
      return `${node.name}: ${type(node.expression)}`

    case 'TypeApplication':
      return `${type(node.expression)}${commaList(node.applications, '<', '>')}`
    case 'UnionType':
      return commaList(node.elements, '(', ')', ' | ')
    case 'ArrayType':
      return commaList(node.elements, '[', ']')
    case 'RecordType':
      return commaList(node.fields, '{', '}')

    case 'FieldType':
      if (!node.value) return node.key
      return `${node.key}: ${type(node.value)}`

    case 'FunctionType': {
      let result = ['function (']

      if (node.this) {
        if (node.new) {
          result.push('new: ')
        } else {
          result.push('this: ')
        }

        result = result.concat(type(node.this))

        if (node.params.length !== 0) {
          result.push(', ')
        }
      }

      result = result.concat(commaList(node.params, '', ')'))

      if (node.result) {
        result = result.concat([': '].concat(type(node.result)))
      }
      return result
    }
    case 'RestType':
      // note that here we diverge from doctrine itself, which
      // lets the expression be omitted.
      return `...${type(node.expression)}`
    case 'OptionalType':
      return `[${type(node.expression)}]${node.default ? `(default ${node.default})` : ''}`
    case 'NonNullableType':
      return `${type(node.expression)}!`
    case 'NullableType':
      return `${type(node.expression)}?`
    default:
      return 'Unknown'
  }
}

/**
 * Format a parameter of a function correctly
 */
const param = (parameter, short) => {
  if (!short) return `${parameter.name}: ${type(parameter.type).replace(/\n/g, '')}`
  return (parameter.type && parameter.type.type === 'OptionalType') ? `[${parameter.name}]` : parameter.name
}

/**
 * Format a utils parameters correctly
 */
export const params = (util, short) => {
  if (!util.params) return '()'
  return `(${util.params.map((parameter) => param(parameter, short)).join(', ')})`
}

/**
 * Format a utils signature
 */
export const signature = (util) => {
  if (util.kind !== 'function') return util.name

  const returns = util.returns ? `: ${type(util.returns[0].type)}` : ''
  const prefix = util.kind === 'class' ? 'new ' : ''
  return `${prefix}${util.name}${params(util)}${returns}`
}
