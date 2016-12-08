// @flow
function selection(styles: Object, parent: string = '') {
  return {
    [`${parent}::-moz-selection`]: {
      ...styles,
    },
    [`${parent}::selection`]: {
      ...styles,
    },
  }
}

export default selection
