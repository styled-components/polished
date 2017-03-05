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
const formatType = (node) => {
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
      return `${node.name}: ${formatType(node.expression)}`

    case 'TypeApplication':
      return `${formatType(node.expression)}${commaList(node.applications, '<', '>')}`
    case 'UnionType':
      return commaList(node.elements, '(', ')', ' | ')
    case 'ArrayType':
      return commaList(node.elements, '[', ']')
    case 'RecordType':
      return commaList(node.fields, '{', '}')

    case 'FieldType':
      if (!node.value) return node.key
      return `${node.key}: ${formatType(node.value)}`

    case 'FunctionType': {
      let result = ['function (']

      if (node.this) {
        if (node.new) {
          result.push('new: ')
        } else {
          result.push('this: ')
        }

        result = result.concat(formatType(node.this))

        if (node.params.length !== 0) {
          result.push(', ')
        }
      }

      result = result.concat(commaList(node.params, '', ')'))

      if (node.result) {
        result = result.concat([': '].concat(formatType(node.result)))
      }
      return result
    }
    case 'RestType':
      // note that here we diverge from doctrine itself, which
      // lets the expression be omitted.
      return `...${formatType(node.expression)}`
    case 'OptionalType':
      return `[${formatType(node.expression)}]${node.default ? `(default ${node.default})` : ''}`
    case 'NonNullableType':
      return `${formatType(node.expression)}!`
    case 'NullableType':
      return `${formatType(node.expression)}?`
    default:
      return 'Unknown'
  }
}

export default formatType
