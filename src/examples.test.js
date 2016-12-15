#!/bin/env node

const path = require('path')
const getExamples = require('../helpers').getExamples

getExamples('./').forEach((exampleFile) => {
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
