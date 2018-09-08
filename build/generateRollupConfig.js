import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";

const babelOptions = {
  runtimeHelpers: true,
  plugins: [["@babel/transform-runtime", { useESModules: true }]]
};

function generateRollupConfig(pkg) {
  const name = pkg === "core" ? "polished" : `polished-${pkg}`
  return [
    {
      input: `packages/${pkg}/index.js`,
      output: {
        file: `packages/${pkg}/dist/${name}.es.js`,
        format: "es"
      },
      // treat as external all node modules
      external: id => !id.startsWith(".") && !id.startsWith("/"),
      plugins: [babel(babelOptions)]
    },

    {
      input: `packages/${pkg}/index.js`,
      output: {
        file: `packages/${pkg}/dist/${name}.js`,
        format: "umd",
        name
      },
      plugins: [
        nodeResolve(),
        babel(babelOptions),
        replace({ "process.env.NODE_ENV": JSON.stringify("development") })
      ]
    },

    {
      input: `packages/${pkg}/index.js`,
      output: {
        file: `packages/${pkg}/dist/${name}.min.js`,
        format: "umd",
        name
      },
      plugins: [
        nodeResolve(),
        babel(babelOptions),
        replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
        uglify()
      ]
    }
  ];
};

export default generateRollupConfig;
