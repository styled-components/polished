#!/bin/env node

/**
 * This file recursively tests all .examples.js files in the src/ folder and snapshots them with
 * Jest.
 *
 * NOTE: Changing anything about the test names breaks all previous snapshots. Handle with care.
 */

const path = require('path')
const { getExamples, getName } = require('../helpers')

getExamples('./').forEach((exampleFile) => {
  describe(`${getName(exampleFile)} examples`, () => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const examples = require(path.resolve('./', exampleFile))
    examples.forEach((example, index) => {
      it(`should match example #${index}`, () => {
        expect(example).toMatchSnapshot()
      })
    })
  })
})
