import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";

const root = process.platform === "win32" ? path.resolve("/") : "/";
const external = (id) => !id.startsWith(".") && !id.startsWith(root);
const globals = {
  "@babel/runtime/helpers/esm/extends": "extends",
  "@babel/runtime/helpers/esm/assertThisInitialized": "assertThisInitialized",
  "@babel/runtime/helpers/esm/inheritsLoose": "inheritsLoose",
  "@babel/runtime/helpers/esm/wrapNativeSuper": "wrapNativeSuper",
  "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose":
    "taggedTemplateLiteralLoose",
};

const input = "src/index.js";
const name = "polished";

const getBabelOptions = ({ useESModules }, targets) => ({
  babelrc: false,
  runtimeHelpers: true,
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false,
        exclude: [/transform-typeof-symbol/],
        targets,
        bugfixes: true,
      },
    ],
    "@babel/flow",
  ],
  plugins: [
    "add-module-exports",
    "annotate-pure-calls",
    "preval",
    [
      "@babel/transform-runtime",
      { useESModules },
      ">0.5%, not dead, ie >= 11, not op_mini all",
    ],
  ],
});

export default [
  {
    input,
    output: { file: `dist/${name}.esm.js`, format: "esm" },
    external,
    plugins: [
      sourceMaps(),
      resolve(),
      babel(getBabelOptions({ useESModules: true })),
    ],
  },
  {
    input,
    output: { file: `dist/${name}.cjs.js`, format: "cjs" },
    external,
    plugins: [
      sourceMaps(),
      resolve(),
      babel(getBabelOptions({ useESModules: false })),
    ],
  },
  {
    input,
    output: { file: `dist/${name}.js`, format: "umd", name, globals },
    external,
    plugins: [
      sourceMaps(),
      resolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
    ],
  },
  {
    input,
    output: { file: `dist/${name}.min.js`, format: "umd", name, globals },
    external,
    plugins: [
      sourceMaps(),
      resolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      terser(),
    ],
  },
];
