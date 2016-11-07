/**
 * Strips the unit from a given value.
 * @param {string} value - a string that is a number plus a unit of measure.
 * @return {number} - an integer without the unit.
 */

import isInteger from '../internalHelpers/_isInteger';

export default function(value) {

  const unitlessValue = parseFloat(value);
  if (isInteger(unitlessValue)) return unitlessValue;

};
