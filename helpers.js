const path = require('path')
const walk = require('walk-sync')

// Check if a string ends in .example.js
const ENDS_IN_EXAMPLES_DOT_JS = /\.examples\.js$/
const exampleDotJS = file => ENDS_IN_EXAMPLES_DOT_JS.test(file)

// Get all .example.js files in a folder, recursively
const getExamples = folder => walk(folder).filter(file => exampleDotJS(path.resolve('./', file)))

// Export helper method for usage in docs
exports.getExamples = getExamples

// Get the name from a full path of a module
// e.g. /src/helpers/stripUnit.examples.js -> stripUnit
const getName = name => name.substring(name.lastIndexOf('/') + 1, name.indexOf('.examples.js'))

exports.getName = getName

// Stringify a template literal properly
const stringify = (strings, ...interpolations) => (
  interpolations.reduce((array, interp, i) => (
    array.concat(typeof interp === 'object' ? JSON.stringify(interp, null, 2) : interp, strings[i + 1])
  ), [strings[0]])
).toString()

exports.stringify = stringify
