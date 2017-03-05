(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polished = global.polished || {})));
}(this, (function (exports) { 'use strict';

//      

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit(100px)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit(100px)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

//      

/**
 * Check if a string ends with something
 * @private
 */
var endsWith = function (string, suffix) {
  return string.substr(-suffix.length) === suffix;
};

//      

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @static
 * @param {string|number} pxval - The pixel value you want to convert
 * @param {string|number} [base = "16px"] - The base size to convert from
 * @return {String} The converted value
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

/* eslint-disable no-param-reassign */
function em(pxval) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';

  var newPxval = pxval;
  var newBase = base;
  if (typeof pxval === 'string') {
    if (!endsWith(pxval, 'px')) {
      throw new Error('Expected a string ending in "px" or a number passed as the first argument to em(), got "' + pxval + '" instead.');
    }
    newPxval = stripUnit(pxval);
  }

  if (typeof base === 'string') {
    if (!endsWith(base, 'px')) {
      throw new Error('Expected a string ending in "px" or a number passed as the second argument to em(), got "' + base + '" instead.');
    }
    newBase = stripUnit(base);
  }

  if (typeof newPxval === 'string') {
    throw new Error('Passed invalid pixel value ("' + pxval + '") to em(), please pass a value like "12px" or 12.');
  }

  if (typeof newBase === 'string') {
    throw new Error('Passed invalid base value ("' + base + '") to em(), please pass a value like "12px" or 12.');
  }

  return newPxval / newBase + 'em';
}

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

//      

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '',
 *   'display': 'table'
 * }
 */

function clearFix() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '&';

  var pseudoSelector = parent + '::after';
  return defineProperty({}, pseudoSelector, {
    'clear': 'both',
    'content': '',
    'display': 'table'
  });
}

//      

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis(250px)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis(250px)}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'max-width': '250px',
 *   'overflow': 'hidden',
 *   'text-overflow': 'ellipsis',
 *   'white-space': 'nowrap',
 *   'word-wrap': 'normal'
 * }
 */

function ellipsis() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '100%';

  return {
    'display': 'inline-block',
    'max-width': width,
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'word-wrap': 'normal'
  };
}

//      

/**
 * CSS to hide text to show a background image in a SEO-Friendly.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background-image': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background-image: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'background-image': 'url(logo.png)',
 *   'text-indent': '101%',
 *   'overflow': 'hidden',
 *   'white-space': 'nowrap',
 * }
 */

function hideText() {
  return {
    'text-indent': '101%',
    'overflow': 'hidden',
    'white-space': 'nowrap'
  };
}

//      

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */

function hiDPI() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.3;

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

//      

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'background': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'background': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'background-color':'blue',
 *   },
 *   'section::selection': {
 *     'background-color': 'blue',
 *   }
 * }
 */

function selection(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return _ref = {}, defineProperty(_ref, parent + '::-moz-selection', _extends({}, styles)), defineProperty(_ref, parent + '::selection', _extends({}, styles)), _ref;
}

//      

/**
 * Mixin to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */

function size(height) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : height;

  return {
    height: height,
    width: width
  };
}

//      

/* eslint-disable key-spacing */
var functionsMap = {
  'easeInBack': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  'easeInCirc': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  'easeInCubic': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  'easeInExpo': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  'easeInQuad': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  'easeInQuart': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  'easeInQuint': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  'easeInSine': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',

  'easeOutBack': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  'easeOutCubic': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  'easeOutCirc': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  'easeOutExpo': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  'easeOutQuad': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  'easeOutQuart': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  'easeOutQuint': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  'easeOutSine': 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',

  'easeInOutBack': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  'easeInOutCirc': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  'easeInOutCubic': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  'easeInOutExpo': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  'easeInOutQuad': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  'easeInOutQuart': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  'easeInOutQuint': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  'easeInOutSine': 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
};
/* eslint-enable key-spacing */

/**
 * String to represent commong easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transition-timing-function': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transition-timing-function: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */

function timingFunctions(timingFunction) {
  return functionsMap[timingFunction];
}

//      

/**
 * Provides an easy way to change the `word-wrap` property
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-all')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-all')}
 *
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflow-wrap: 'break-all',
 *   word-wrap: 'break-all',
 *   word-break: 'break-all',
 * }
 */

function wordWrap() {
  var wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'break-word';

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    'overflow-wrap': wrap,
    'word-wrap': wrap,
    'word-break': wordBreak
  };
}

//      
// Helpers
// Mixins
var polished = {
  clearFix: clearFix,
  ellipsis: ellipsis,
  em: em,
  hideText: hideText,
  hiDPI: hiDPI,
  selection: selection,
  size: size,
  stripUnit: stripUnit,
  timingFunctions: timingFunctions,
  wordWrap: wordWrap
};

exports['default'] = polished;
exports.clearFix = clearFix;
exports.ellipsis = ellipsis;
exports.em = em;
exports.hideText = hideText;
exports.hiDPI = hiDPI;
exports.selection = selection;
exports.size = size;
exports.stripUnit = stripUnit;
exports.timingFunctions = timingFunctions;
exports.wordWrap = wordWrap;

Object.defineProperty(exports, '__esModule', { value: true });

})));
