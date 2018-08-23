import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const input = "src/index.js";
const name = "polished";
const babelOptions = { plugins: ["external-helpers"] };

export default [
  {
    input,
    output: [
      { file: "dist/polished.js", format: "umd", name, exports: "named" },
      { file: "dist/polished.es.js", format: "es" }
    ],
    plugins: [babel(babelOptions)]
  },
  {
    input,
    output: {
      file: "dist/polished.min.js",
      format: "umd",
      name,
      exports: "named"
    },
    plugins: [babel(babelOptions), uglify()]
  }
];
