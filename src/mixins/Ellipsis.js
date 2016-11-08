/**
 * Truncates text, adding an ellipsis to represent that the text overflows.
 * @param {string} width - a string that is a number plus a unit of measure.
 * @return {object} - a CSS in JS Object.
 */

 export default function(width = "100%") {
  return {
    'display': 'inline-block',
    'max-width': width,
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'word-wrap': 'normal'
  }
 }
