import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "@rollup/plugin-replace";
import { uglify } from "rollup-plugin-uglify";

const input = "src/index.js";
const name = "polished";
const babelOptions = {
  runtimeHelpers: true,
  plugins: [["@babel/transform-runtime", { useESModules: true }]]
};

export default [
  {
    input,
    output: { file: "dist/polished.es.js", format: "es" },
    // treat as external all node modules
    external: id => !id.startsWith(".") && !id.startsWith("/"),
    plugins: [babel(babelOptions)]
  },

  {
    input,
    output: { file: "dist/polished.js", format: "umd", name },
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") })
    ]
  },

  {
    input,
    output: { file: "dist/polished.min.js", format: "umd", name },
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      uglify()
    ]
  }
];
