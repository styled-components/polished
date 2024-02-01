const { BABEL_ENV, NODE_ENV } = process.env;
const cjs = BABEL_ENV === "cjs" || NODE_ENV === "test";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        exclude: [/transform-typeof-symbol/],
        bugfixes: true,
      },
    ],
    "@babel/flow",
  ],
  plugins: [
    cjs && "add-module-exports",
    "annotate-pure-calls",
    "preval",
  ].filter(Boolean),
};
