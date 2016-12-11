#!/bin/env node

const path = require('path')
const walk = require('walk-sync')

// Check if a string ends in .example.js
const ENDS_IN_EXAMPLES_DOT_JS = /\.examples\.js$/
const exampleDotJS = file => ENDS_IN_EXAMPLES_DOT_JS.test(file)

// Get all example files in this folder
const exampleFiles = walk('./').filter(file => exampleDotJS(path.resolve('./', file)))

exampleFiles.forEach((exampleFile) => {
  describe(`${exampleFile.substring(0, exampleFile.indexOf('.examples.js'))} examples`, () => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const examples = require(path.resolve('./', exampleFile))
    examples.forEach((example, index) => {
      it(`should match example #${index}`, () => {
        expect(example).toMatchSnapshot()
      })
    })
  })
})
