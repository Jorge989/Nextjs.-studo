webpackHotUpdate_N_E("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/title */ "./components/title.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");


var _jsxFileName = "C:\\Users\\attie\\nextjs\\pages\\users\\[id].js",
    _s = $RefreshSig$();





var __N_SSG = true;
function User(_ref) {
  _s();

  var user = _ref.user;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Carregando..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }, this);
  }

  console.log(router);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: ["User ID ", user.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1953926826" + " " + "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-1953926826",
        children: "User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Name: ", user.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Email: ", user.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Phone: ", user.phone]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Website: ", user.website]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1953926826",
      children: ".card.jsx-1953926826{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1953926826:hover,.card.jsx-1953926826:focus,.card.jsx-1953926826:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1953926826 h3.jsx-1953926826{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1953926826 p.jsx-1953926826{margin:0;font-size:1.25rem;line-height:1.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXR0aWVcXG5leHRqc1xccGFnZXNcXHVzZXJzXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCUyxBQUd5QixBQWNFLEFBS0ksQUFLVCxTQUNTLEdBeEJILEVBY00sSUFLSixTQU1ELFFBVmxCLEFBS0EsUUFNQSxtQ0F6QmlCLGVBQ0MsZ0JBQ0YsY0FDTyxrREFDSSx5QkFDTixtQkFDa0MsZ0hBQ3ZEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXR0aWVcXG5leHRqc1xccGFnZXNcXHVzZXJzXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoe3VzZXJ9KXtcclxuICAgIGNvbnN0IHJvdXRlciA9dXNlUm91dGVyKCk7XHJcbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuIFxyXG4gICAgICAgICAgICA8VGl0bGU+VXNlciBJRCB7dXNlci5pZH08L1RpdGxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGgzPlVzZXI8L2gzPlxyXG4gICAgICAgICAgICA8cD5OYW1lOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPHA+UGhvbmU6IHt1c2VyLnBob25lfTwvcD5cclxuICAgICAgICAgICAgPHA+V2Vic2l0ZToge3VzZXIud2Vic2l0ZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgICBjb25zdCBwYXRocyA9W1xyXG4vLyB7cGFyYW1zOiB7aWQ6ICcxJ319LFxyXG4vLyB7cGFyYW1zOiB7aWQ6JzInfX0sXHJcblxyXG4vLyAgICAgXTtcclxuY29uc3QgcGF0aHMgPSB1c2Vycy5tYXAgKHVzZXIgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGFyYW1zOntpZDogYCR7dXNlci5pZH1gfVxyXG4gICAgfVxyXG59KVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOnRydWVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbi8vYXNzaWduYWNpb246XHJcbi8vY3JpYXIgcm90YSBkaW5hbWljYSBkZSBwb3N0c1xyXG4vL2RpdiBcclxuLy9oMiAtPiBQb3N0IERldGFpbFxyXG4vL3AgLT4gUG9zdCBJRCAkIl19 */\n/*@ sourceURL=C:\\\\Users\\\\attie\\\\nextjs\\\\pages\\\\users\\\\[id].js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
} //assignacion:
//criar rota dinamica de posts
//div 
//h2 -> Post Detail
//p -> Post ID $

_s(User, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = User;

var _c;

$RefreshReg$(_c, "User");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwid2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUNlLFNBQVNBLElBQVQsT0FBcUI7QUFBQTs7QUFBQSxNQUFOQyxJQUFNLFFBQU5BLElBQU07QUFDaEMsTUFBTUMsTUFBTSxHQUFFQyw2REFBUyxFQUF2Qjs7QUFDQSxNQUFJRCxNQUFNLENBQUNFLFVBQVgsRUFBc0I7QUFDbEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBRUkscUVBQUMseURBQUQ7QUFBQSw2QkFBZ0JELElBQUksQ0FBQ00sRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLDBDQUFlLE1BQWY7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBO0FBQUEsNkJBQVVOLElBQUksQ0FBQ08sSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQUE7QUFBQSw4QkFBV1AsSUFBSSxDQUFDUSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUlBO0FBQUE7QUFBQSw4QkFBV1IsSUFBSSxDQUFDUyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQSxlQUtBO0FBQUE7QUFBQSxnQ0FBYVQsSUFBSSxDQUFDVSxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSCxDLENBa0NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBMUZ3QlgsSTtVQUNORyxxRDs7O0tBRE1ILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW2lkXS5kOWQwYjAzOGUwMTI2OWE5MTA0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoe3VzZXJ9KXtcclxuICAgIGNvbnN0IHJvdXRlciA9dXNlUm91dGVyKCk7XHJcbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuIFxyXG4gICAgICAgICAgICA8VGl0bGU+VXNlciBJRCB7dXNlci5pZH08L1RpdGxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGgzPlVzZXI8L2gzPlxyXG4gICAgICAgICAgICA8cD5OYW1lOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPHA+UGhvbmU6IHt1c2VyLnBob25lfTwvcD5cclxuICAgICAgICAgICAgPHA+V2Vic2l0ZToge3VzZXIud2Vic2l0ZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgICBjb25zdCBwYXRocyA9W1xyXG4vLyB7cGFyYW1zOiB7aWQ6ICcxJ319LFxyXG4vLyB7cGFyYW1zOiB7aWQ6JzInfX0sXHJcblxyXG4vLyAgICAgXTtcclxuY29uc3QgcGF0aHMgPSB1c2Vycy5tYXAgKHVzZXIgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGFyYW1zOntpZDogYCR7dXNlci5pZH1gfVxyXG4gICAgfVxyXG59KVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOnRydWVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbi8vYXNzaWduYWNpb246XHJcbi8vY3JpYXIgcm90YSBkaW5hbWljYSBkZSBwb3N0c1xyXG4vL2RpdiBcclxuLy9oMiAtPiBQb3N0IERldGFpbFxyXG4vL3AgLT4gUG9zdCBJRCAkIl0sInNvdXJjZVJvb3QiOiIifQ==