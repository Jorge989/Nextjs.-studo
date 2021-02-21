webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_attie_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_attie_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_attie_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_attie_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_attie_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/title */ "./components/title.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");





var _jsxFileName = "C:\\Users\\attie\\nextjs\\pages\\posts\\index.js",
    _s = $RefreshSig$();




function Posts() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),
      _React$useState2 = Object(C_Users_attie_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      post = _React$useState2[0],
      setPosts = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    var fetchPosts = /*#__PURE__*/function () {
      var _ref = Object(C_Users_attie_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_attie_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res, newPosts;
        return C_Users_attie_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://jsonplaceholder.typicode.com/posts');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                newPosts = _context.sent;
                console.log("newposts" + newPosts);
                fetchPosts();
                console.log(newPosts);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchPosts() {
        return _ref.apply(this, arguments);
      };
    }();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: "Posts Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(Posts, "ZoA856eg3v6hgSIwv0o45K47CTI=");

_c = Posts;

var _c;

$RefreshReg$(_c, "Posts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJSZWFjdCIsInVzZVN0YXRlIiwicG9zdCIsInNldFBvc3RzIiwidXNlRWZmZWN0IiwiZmV0Y2hQb3N0cyIsImZldGNoIiwicmVzIiwianNvbiIsIm5ld1Bvc3RzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUFBLHdCQUNGQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURFO0FBQUE7QUFBQSxNQUNwQkMsSUFEb0I7QUFBQSxNQUNkQyxRQURjOztBQUUzQkgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFJO0FBQ3hCLFFBQU1DLFVBQVU7QUFBQSxvUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNHQyxLQUFLLENBQUMsNENBQUQsQ0FEUjs7QUFBQTtBQUNUQyxtQkFEUztBQUFBO0FBQUEsdUJBRVFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZSOztBQUFBO0FBRVRDLHdCQUZTO0FBR2ZDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFXRixRQUF2QjtBQUNBSiwwQkFBVTtBQUNWSyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxPQUFoQjtBQVFLLEdBVEQsRUFTRSxFQVRGO0FBV0Esc0JBRUkscUVBQUMsMERBQUQ7QUFBQSwyQkFDSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQU1IOztHQW5CdUJOLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuNzdkM2ZlNmZiZTIxMjU0NTc5OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGl0bGUnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKXtcclxuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0c10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG5jb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCk9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxyXG4gICAgY29uc3QgbmV3UG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhcIm5ld3Bvc3RzXCIrbmV3UG9zdHMpXHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQb3N0cylcclxufTtcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRpdGxlPlBvc3RzIFBhZ2U8L1RpdGxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=