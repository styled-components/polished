// @flow

// Note: we define properties with JSdoc since documentation.js doesn't recognize
// exported types yet. See https://github.com/documentationjs/documentation/issues/680

/**
 * @property {function} Calculation
 */
export type Calculation = (string | number) => string | number
