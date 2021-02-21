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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/title */ "./components/title.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");


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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-1953926826",
        children: ["User #", user.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Nesse curso de webtutoriais aprendemos sobre NextJS",
        className: "jsx-1953926826"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: ["User ID ", user.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1953926826" + " " + "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-1953926826",
        children: "User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Name: ", user.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Email: ", user.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Phone: ", user.phone]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-1953926826",
        children: ["Website: ", user.website]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1953926826",
      children: ".card.jsx-1953926826{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1953926826:hover,.card.jsx-1953926826:focus,.card.jsx-1953926826:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1953926826 h3.jsx-1953926826{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1953926826 p.jsx-1953926826{margin:0;font-size:1.25rem;line-height:1.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXR0aWVcXG5leHRqc1xccGFnZXNcXHVzZXJzXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCUyxBQUd5QixBQWNFLEFBS0ksQUFLVCxTQUNTLEdBeEJILEVBY00sSUFLSixTQU1ELFFBVmxCLEFBS0EsUUFNQSxtQ0F6QmlCLGVBQ0MsZ0JBQ0YsY0FDTyxrREFDSSx5QkFDTixtQkFDa0MsZ0hBQ3ZEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXR0aWVcXG5leHRqc1xccGFnZXNcXHVzZXJzXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aXRsZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHt1c2VyfSl7XHJcbiAgICBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpO1xyXG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gPGRpdj5DYXJyZWdhbmRvLi4uPC9kaXY+XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+XHJcblVzZXIgI3t1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJOZXNzZSBjdXJzbyBkZSB3ZWJ0dXRvcmlhaXMgYXByZW5kZW1vcyBzb2JyZSBOZXh0SlNcIj48L21ldGE+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFRpdGxlPlVzZXIgSUQge3VzZXIuaWR9PC9UaXRsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxoMz5Vc2VyPC9oMz5cclxuICAgICAgICAgICAgPHA+TmFtZToge3VzZXIubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDxwPlBob25lOiB7dXNlci5waG9uZX08L3A+XHJcbiAgICAgICAgICAgIDxwPldlYnNpdGU6IHt1c2VyLndlYnNpdGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vLyAgICAgY29uc3QgcGF0aHMgPVtcclxuLy8ge3BhcmFtczoge2lkOiAnMSd9fSxcclxuLy8ge3BhcmFtczoge2lkOicyJ319LFxyXG5cclxuLy8gICAgIF07XHJcbmNvbnN0IHBhdGhzID0gdXNlcnMubWFwICh1c2VyID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHBhcmFtczp7aWQ6IGAke3VzZXIuaWR9YH1cclxuICAgIH1cclxufSlcclxuICAgIHJldHVybntcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazp0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4vL2Fzc2lnbmFjaW9uOlxyXG4vL2NyaWFyIHJvdGEgZGluYW1pY2EgZGUgcG9zdHNcclxuLy9kaXYgXHJcbi8vaDIgLT4gUG9zdCBEZXRhaWxcclxuLy9wIC0+IFBvc3QgSUQgJCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\attie\\\\nextjs\\\\pages\\\\users\\\\[id].js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwid2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxJQUFULE9BQXFCO0FBQUE7O0FBQUEsTUFBTkMsSUFBTSxRQUFOQSxJQUFNO0FBQ2hDLE1BQU1DLE1BQU0sR0FBRUMsNkRBQVMsRUFBdkI7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXNCO0FBQ2xCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxzQkFDSSxxRUFBQywwREFBRDtBQUFBLDRCQUNNLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLDZCQUNURCxJQUFJLENBQUNNLEVBREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQyxxREFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETixlQU9JLHFFQUFDLHlEQUFEO0FBQUEsNkJBQWdCTixJQUFJLENBQUNNLEVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBUUk7QUFBQSwwQ0FBZSxNQUFmO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQTtBQUFBLDZCQUFVTixJQUFJLENBQUNPLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFHQTtBQUFBO0FBQUEsOEJBQVdQLElBQUksQ0FBQ1EsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFJQTtBQUFBO0FBQUEsOEJBQVdSLElBQUksQ0FBQ1MsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkEsZUFLQTtBQUFBO0FBQUEsZ0NBQWFULElBQUksQ0FBQ1UsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtREgsQyxDQWtDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQS9Gd0JYLEk7VUFDTkcscUQ7OztLQURNSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzL1tpZF0uMGFhZTZiYmJjNTVjOWRmMmRkNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGl0bGUnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7dXNlcn0pe1xyXG4gICAgY29uc3Qgcm91dGVyID11c2VSb3V0ZXIoKTtcclxuICAgIGlmIChyb3V0ZXIuaXNGYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+Q2FycmVnYW5kby4uLjwvZGl2PlxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlxyXG5Vc2VyICN7dXNlci5pZH1cclxuICAgICAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmVzc2UgY3Vyc28gZGUgd2VidHV0b3JpYWlzIGFwcmVuZGVtb3Mgc29icmUgTmV4dEpTXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaXRsZT5Vc2VyIElEIHt1c2VyLmlkfTwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8aDM+VXNlcjwvaDM+XHJcbiAgICAgICAgICAgIDxwPk5hbWU6IHt1c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8cD5QaG9uZToge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICA8cD5XZWJzaXRlOiB7dXNlci53ZWJzaXRlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICAgIGNvbnN0IHBhdGhzID1bXHJcbi8vIHtwYXJhbXM6IHtpZDogJzEnfX0sXHJcbi8vIHtwYXJhbXM6IHtpZDonMid9fSxcclxuXHJcbi8vICAgICBdO1xyXG5jb25zdCBwYXRocyA9IHVzZXJzLm1hcCAodXNlciA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICBwYXJhbXM6e2lkOiBgJHt1c2VyLmlkfWB9XHJcbiAgICB9XHJcbn0pXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6dHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuLy9hc3NpZ25hY2lvbjpcclxuLy9jcmlhciByb3RhIGRpbmFtaWNhIGRlIHBvc3RzXHJcbi8vZGl2IFxyXG4vL2gyIC0+IFBvc3QgRGV0YWlsXHJcbi8vcCAtPiBQb3N0IElEICQiXSwic291cmNlUm9vdCI6IiJ9