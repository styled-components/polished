webpackHotUpdate(5,{

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(324);

var _stringify2 = _interopRequireDefault(_stringify);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement('div', null, (0, _stringify2.default)(global.utilities), _react2.default.createElement('h1', null, 'Hello World!'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/a2517/sites/personal/github/styled-comps/polished/next/pages/docs.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/a2517/sites/personal/github/styled-comps/polished/next/pages/docs.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/docs")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48), "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kb2NzLmpzP2Y1ODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztrQkFFZTtTQUNiLHFDQUNHLCtCQUFlLE9BQ2hCIiwiZmlsZSI6IjUuMjA0NjE3YzVkZGE1ZmRjYjdhODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIHtKU09OLnN0cmluZ2lmeShnbG9iYWwudXRpbGl0aWVzKX1cbiAgICA8aDE+SGVsbG8gV29ybGQhPC9oMT5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kb2NzLmpzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==