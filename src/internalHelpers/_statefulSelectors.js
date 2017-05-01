// @flow
function generateSelectors(template: Function, state: string|null) {
  const stateSuffix = state ? `:${state}` : ''
  return template(stateSuffix)
}

type State =
  | typeof(undefined)
  | null
  | string;

/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */
function statefulSelectors(states: Array<State>, template: Function, stateMap: ?Array<State>) {
  if (!template) throw new Error('You must provide a template to this method.')
  if (states.length === 0) return generateSelectors(template, null)
  let selectors = []
  for (let i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) throw new Error('You passed an unsupported selector state to this method.')
    selectors.push(generateSelectors(template, states[i]))
  }
  selectors = selectors.join(',')
  return selectors
}

export default statefulSelectors
