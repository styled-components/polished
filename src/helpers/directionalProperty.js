// @flow
const positionMap = ['top', 'right', 'bottom', 'left']

function generateProperty(property: string, position: string) {
  if (!property) return position
  const splitPropertyName = property.split('-')
  splitPropertyName.splice(1, 0, position)
  return splitPropertyName.join('-')
}

function generateStyles(property: string, valuesWithDefaults: Array<string|null>) {
  const styles = {}
  for (let i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i]) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i]
    }
  }
  return styles
}

function directionalProperty(property: string, ...values: Array<string|null>) {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values
  const valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue]
  return generateStyles(property, valuesWithDefaults)
}

export default directionalProperty
