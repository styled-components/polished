const path = require('path')
const walk = require('walk-sync')

// Check if a string ends in .example.js
const ENDS_IN_EXAMPLES_DOT_JS = /\.examples\.js$/
const exampleDotJS = file => ENDS_IN_EXAMPLES_DOT_JS.test(file)

// Get all .example.js files in a folder, recursively
const getExamples = folder => walk(folder).filter(file => exampleDotJS(path.resolve('./', file)))

// Export helper method for usage in docs
exports.getExamples = getExamples
