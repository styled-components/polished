//@flow
function placeholder(styles: Object, parent: string = '&') {
  return {
    [`${parent}::-webkit-input-placeholder`]: {
      ...styles
    },
    [`${parent}:-moz-placeholder`]: {
      ...styles
    },
    [`${parent}::-moz-placeholder`]: {
      ...styles
    },
    [`${parent}:-ms-input-placeholder`]: {
      ...styles
    },
  }
}

export default placeholder
