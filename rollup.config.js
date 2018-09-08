import generateRollupConfig from './build/generateRollupConfig';
import path from 'path';

const pkgConfig = name => {
  return generateRollupConfig(name);
};

export default Promise.all(
  ['color', 'core', 'helpers', 'math', 'mixins', 'shorthands'].map(pkgConfig)
).then(function (values) {
  return [].concat(...values);
});
