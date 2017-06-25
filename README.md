<a href="https://github.com/styled-components/polished">
  <img alt="polished" src="https://raw.githubusercontent.com/styled-components/brand/master/polished.png" height="150px" />
</a>
<br />

A lightweight toolset for writing styles in JavaScript. ✨

[![Build Status](https://travis-ci.org/styled-components/polished.svg?branch=master)](https://travis-ci.org/styled-components/polished) [![codecov](https://codecov.io/gh/styled-components/polished/branch/master/graph/badge.svg)](https://codecov.io/gh/styled-components/polished) [![Dependency Status](https://david-dm.org/styled-components/polished/status.svg)](https://david-dm.org/styled-components/polished) [![Supported by Thinkmill](https://thinkmill.github.io/badge/heart.svg)](http://thinkmill.com.au/?utm_source=github&utm_medium=badge&utm_campaign=polished)

```sh
npm install --save polished
# or if you're using yarn
yarn add polished
```

Want to write styles in JavaScript, but also want Sass-style helper functions and mixins? Need a consistent color palette throughout your app? `✨ polished` is for you!

- **Make your app look great without stress**
- **Cross framework compatible**: No matter if you're using `styled-components`, aphrodite, radium, or plain inline styles, as long as you're writing your styles in JavaScript you can use polished!
- **Switching from a pre-processor to styles in JS made easy**

## Usage

`✨ polished` modules are meant to be used as stand-alone imports. You should avoid importing the entire library directly by only importing the modules you need:

`import clearFix from 'polished/mixins/clearFix'

You should avoid importing the entire polished library:

~`import * as polished from 'polished'`~
~`import polished from 'polished'`~

### Webpack/Rollup with tree shaking

You can also leverage tree shaking in either [webpack](https://webpack.js.org/guides/tree-shaking/) or [Rollup](https://github.com/rollup/rollup#tree-shaking).

`import { clearFix, animation } from 'polished'`


## Docs

**See the full documentation at [polished.js.org](http://polished.js.org/docs)!**

### Babel plugin

You can optionally also use [`babel-plugin-polished`](https://github.com/styled-components/babel-plugin-polished) to compile the static function calls out and remove the (already tiny) runtime performance impact of using `✨ polished`.

### Object Spread Properties

In the documentation you will see examples using [object spread properties](https://github.com/tc39/proposal-object-rest-spread). (`{ ...other }`) To enable this syntax in your project add the [`transform-object-rest-spread` plugin](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) (or the [`stage-3` preset](https://babeljs.io/docs/plugins/preset-stage-3/) to enable all stage three features) to your Babel configuration.

### ToC

<!-- NOTE: Anything between INJECT DOCS START and END will be deleted! -->
<!-- INJECT DOCS START -->
<details open>
  <summary>Mixins</summary>
  <ul>
    <li><a href="http://polished.js.org/docs/#clearfix">clearFix</a></li>
    <li><a href="http://polished.js.org/docs/#ellipsis">ellipsis</a></li>
    <li><a href="http://polished.js.org/docs/#fontface">fontFace</a></li>
    <li><a href="http://polished.js.org/docs/#hidpi">hiDPI</a></li>
    <li><a href="http://polished.js.org/docs/#hidetext">hideText</a></li>
    <li><a href="http://polished.js.org/docs/#normalize">normalize</a></li>
    <li><a href="http://polished.js.org/docs/#placeholder">placeholder</a></li>
    <li><a href="http://polished.js.org/docs/#radialgradient">radialGradient</a></li>
    <li><a href="http://polished.js.org/docs/#retinaimage">retinaImage</a></li>
    <li><a href="http://polished.js.org/docs/#selection">selection</a></li>
    <li><a href="http://polished.js.org/docs/#timingfunctions">timingFunctions</a></li>
    <li><a href="http://polished.js.org/docs/#triangle">triangle</a></li>
    <li><a href="http://polished.js.org/docs/#wordwrap">wordWrap</a></li>
  </ul>
</details>
<details open>
  <summary>Color</summary>
  <ul>
    <li><a href="http://polished.js.org/docs/#adjusthue">adjustHue</a></li>
    <li><a href="http://polished.js.org/docs/#complement">complement</a></li>
    <li><a href="http://polished.js.org/docs/#darken">darken</a></li>
    <li><a href="http://polished.js.org/docs/#desaturate">desaturate</a></li>
    <li><a href="http://polished.js.org/docs/#grayscale">grayscale</a></li>
    <li><a href="http://polished.js.org/docs/#hsl">hsl</a></li>
    <li><a href="http://polished.js.org/docs/#hsla">hsla</a></li>
    <li><a href="http://polished.js.org/docs/#invert">invert</a></li>
    <li><a href="http://polished.js.org/docs/#lighten">lighten</a></li>
    <li><a href="http://polished.js.org/docs/#mix">mix</a></li>
    <li><a href="http://polished.js.org/docs/#opacify">opacify</a></li>
    <li><a href="http://polished.js.org/docs/#parsetohsl">parseToHsl</a></li>
    <li><a href="http://polished.js.org/docs/#parsetorgb">parseToRgb</a></li>
    <li><a href="http://polished.js.org/docs/#rgb">rgb</a></li>
    <li><a href="http://polished.js.org/docs/#rgba">rgba</a></li>
    <li><a href="http://polished.js.org/docs/#saturate">saturate</a></li>
    <li><a href="http://polished.js.org/docs/#sethue">setHue</a></li>
    <li><a href="http://polished.js.org/docs/#setlightness">setLightness</a></li>
    <li><a href="http://polished.js.org/docs/#setsaturation">setSaturation</a></li>
    <li><a href="http://polished.js.org/docs/#shade">shade</a></li>
    <li><a href="http://polished.js.org/docs/#tint">tint</a></li>
    <li><a href="http://polished.js.org/docs/#transparentize">transparentize</a></li>
  </ul>
</details>
<details open>
  <summary>Shorthands</summary>
  <ul>
    <li><a href="http://polished.js.org/docs/#animation">animation</a></li>
    <li><a href="http://polished.js.org/docs/#backgroundimages">backgroundImages</a></li>
    <li><a href="http://polished.js.org/docs/#backgrounds">backgrounds</a></li>
    <li><a href="http://polished.js.org/docs/#bordercolor">borderColor</a></li>
    <li><a href="http://polished.js.org/docs/#borderradius">borderRadius</a></li>
    <li><a href="http://polished.js.org/docs/#borderstyle">borderStyle</a></li>
    <li><a href="http://polished.js.org/docs/#borderwidth">borderWidth</a></li>
    <li><a href="http://polished.js.org/docs/#buttons">buttons</a></li>
    <li><a href="http://polished.js.org/docs/#margin">margin</a></li>
    <li><a href="http://polished.js.org/docs/#padding">padding</a></li>
    <li><a href="http://polished.js.org/docs/#position">position</a></li>
    <li><a href="http://polished.js.org/docs/#size">size</a></li>
    <li><a href="http://polished.js.org/docs/#textinputs">textInputs</a></li>
    <li><a href="http://polished.js.org/docs/#transitions">transitions</a></li>
  </ul>
</details>
<details open>
  <summary>Helpers</summary>
  <ul>
    <li><a href="http://polished.js.org/docs/#directionalproperty">directionalProperty</a></li>
    <li><a href="http://polished.js.org/docs/#em">em</a></li>
    <li><a href="http://polished.js.org/docs/#modularscale">modularScale</a></li>
    <li><a href="http://polished.js.org/docs/#rem">rem</a></li>
    <li><a href="http://polished.js.org/docs/#stripunit">stripUnit</a></li>
  </ul>
</details>
<details open>
  <summary>Types</summary>
  <ul>
    <li><a href="http://polished.js.org/docs/#animationproperty">AnimationProperty</a></li>
    <li><a href="http://polished.js.org/docs/#buttonstate">ButtonState</a></li>
    <li><a href="http://polished.js.org/docs/#fontfaceconfiguration">FontFaceConfiguration</a></li>
    <li><a href="http://polished.js.org/docs/#hslcolor">HslColor</a></li>
    <li><a href="http://polished.js.org/docs/#hslacolor">HslaColor</a></li>
    <li><a href="http://polished.js.org/docs/#inputstate">InputState</a></li>
    <li><a href="http://polished.js.org/docs/#pointingdirection">PointingDirection</a></li>
    <li><a href="http://polished.js.org/docs/#radialgradientconfiguration">RadialGradientConfiguration</a></li>
    <li><a href="http://polished.js.org/docs/#ratio">Ratio</a></li>
    <li><a href="http://polished.js.org/docs/#rgbacolor">RgbaColor</a></li>
    <li><a href="http://polished.js.org/docs/#rgbcolor">RgbColor</a></li>
    <li><a href="http://polished.js.org/docs/#timingfunction">TimingFunction</a></li>
    <li><a href="http://polished.js.org/docs/#tocolorstring">toColorString</a></li>
  </ul>
</details>
<!-- INJECT DOCS END -->

## Why?

When writing styles in JavaScript, many people need Sass-style helper functions to be productive. `✨ polished` brings them to you in a nice, lightweight package tailor-made for styles in JavaScript.

The main difference with Sass is that it's written in a functional style and all color functions are curried. This means you can compose them together into your own reusable helpers with a `compose` function of your choice:

```JS
import { compose } from 'ramda' // Replace with any compose() function of your choice
import { lighten, desaturate } from 'polished'

// Create tone() helper
const tone = compose(lighten(10), desaturate(10))
```

### Why not `package-xyz`?

First of all, we didn't find another library that had everything we needed, and we don't care about installing a dozen packages separately.

Specifically most other packages that provide color functions do so in an object-oriented style, often with a fluent API that's very different from the Sass-style helpers. This means people that aren't very familiar with JavaScript might shy away from using them.

`✨ polished` was made as a standard library for everybody, no matter if they know JS inside out or not.

## Compatibility

✨ polished is **compatible with any library that accepts styles as JS objects**. This includes, but is by far not limited to, `styled-components`, radium, aphrodite, glamor, glamorous, jss and many more!

No matter if you're using [inline styles or CSS-in-JS](http://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/), polished is for you.

## License

Copyright © 2016 Maximilian Stoiber. Licensed under the MIT License, see [LICENSE.md](LICENSE.md) for more information!
