import formatType from './format-type'

const formatParam = (param, short) => {
  if (!short) return `${param.name}: ${formatType(param.type).replace(/\n/g, '')}`
  return (param.type && param.type.type === 'OptionalType') ? `[${param.name}]` : param.name
}

const formatParams = ({ params }, short) => {
  if (!params) return '()'
  return `(${params.map((param) => formatParam(param, short)).join(', ')})`
}

export default formatParams
