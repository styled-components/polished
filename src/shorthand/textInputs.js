// @flow

/**
 * Populates a selector that targets all text inputs. You can pass an optional state to append to the selector.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */

function generateTextInputs(state: ?string) {
  const stateSuffix = state ? `:${state}` : ''
  return `
    input[type="color"]${stateSuffix},
    input[type="date"]${stateSuffix},
    input[type="datetime"]${stateSuffix},
    input[type="datetime-local"]${stateSuffix},
    input[type="email"]${stateSuffix},
    input[type="month"]${stateSuffix},
    input[type="number"]${stateSuffix},
    input[type="password"]${stateSuffix},
    input[type="search"]${stateSuffix},
    input[type="tel"]${stateSuffix},
    input[type="text"]${stateSuffix},
    input[type="time"]${stateSuffix},
    input[type="url"]${stateSuffix},
    input[type="week"]${stateSuffix},
    input:not([type])${stateSuffix},
    textarea${stateSuffix}
  `
}

const stateMap = [undefined, 'active', 'focus', 'hover']

type State =
  | typeof(undefined)
  | 'active'
  | 'focus'
  | 'hover'

function textInputs(state: State) {
  if (!stateMap.includes(state)) throw new Error('textInputs only accepts the following state: "active", "focus", or "hover". You can also pass no state at all.')
  return generateTextInputs(state)
}

export default textInputs
