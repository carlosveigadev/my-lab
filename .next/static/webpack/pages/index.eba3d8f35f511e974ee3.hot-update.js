webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CurrencyInput/index.js":
/*!*******************************************!*\
  !*** ./components/CurrencyInput/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "C:\\Users\\jungb\\Documents\\DEV\\Nodejs\\my-lab\\components\\CurrencyInput\\index.js",
    _this = undefined;



var currencyFormatter = function currencyFormatter(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

var currencyParser = function currencyParser(val) {
  try {
    // for when the input gets clears
    if (typeof val === "string" && !val.length) {
      val = "0,0";
    } // detecting and parsing between comma and dot


    var group = '.';
    var decimal = ',';
    var reversedVal = val.replace(new RegExp("\\" + group, "g"), "");
    console.log(val, reversedVal);
    reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
    console.log(val, reversedVal); //  => 1232.21 €
    // removing everything except the digits and dot

    reversedVal = reversedVal.replace(/[^0-9\.|\,]/g, ""); //  => 1232.21
    // appending digits properly

    var digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;
    var needsDigitsAppended = digitsAfterDecimalCount > 2;

    if (needsDigitsAppended) {
      reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
    }

    return Number.isNaN(reversedVal) ? 0 : reversedVal;
  } catch (error) {
    console.error(error);
  }
};

var CurrencyInput = function CurrencyInput() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    defaultValue: 150,
    style: {
      width: 400,
      marginLeft: "1rem"
    },
    formatter: currencyFormatter,
    parser: currencyParser
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_c = CurrencyInput;
/* harmony default export */ __webpack_exports__["default"] = (CurrencyInput);

var _c;

$RefreshReg$(_c, "CurrencyInput");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwiZ3JvdXAiLCJkZWNpbWFsIiwicmV2ZXJzZWRWYWwiLCJyZXBsYWNlIiwiUmVnRXhwIiwiY29uc29sZSIsImxvZyIsImRpZ2l0c0FmdGVyRGVjaW1hbENvdW50Iiwic3BsaXQiLCJuZWVkc0RpZ2l0c0FwcGVuZGVkIiwiTWF0aCIsInBvdyIsIk51bWJlciIsImlzTmFOIiwiZXJyb3IiLCJDdXJyZW5jeUlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJO0FBQ0Y7QUFDQSxRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFBNEM7QUFDMUNELFNBQUcsR0FBRyxLQUFOO0FBQ0QsS0FKQyxDQU1GOzs7QUFDQSxRQUFJRSxLQUFLLEdBQUcsR0FBWjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxHQUFkO0FBQ0EsUUFBSUMsV0FBVyxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxJQUFJQyxNQUFKLENBQVcsT0FBT0osS0FBbEIsRUFBeUIsR0FBekIsQ0FBWixFQUEyQyxFQUEzQyxDQUFsQjtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsR0FBWixFQUFpQkksV0FBakI7QUFDQUEsZUFBVyxHQUFHQSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsSUFBSUMsTUFBSixDQUFXLE9BQU9ILE9BQWxCLEVBQTJCLEdBQTNCLENBQXBCLEVBQXFELEdBQXJELENBQWQ7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlSLEdBQVosRUFBaUJJLFdBQWpCLEVBWkUsQ0FhRjtBQUVBOztBQUNBQSxlQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQixjQUFwQixFQUFvQyxFQUFwQyxDQUFkLENBaEJFLENBaUJGO0FBRUE7O0FBQ0EsUUFBTUksdUJBQXVCLEdBQUcsQ0FBQ0wsV0FBVyxDQUFDTSxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEtBQTZCLEVBQTlCLEVBQWtDVCxNQUFsRTtBQUNBLFFBQU1VLG1CQUFtQixHQUFHRix1QkFBdUIsR0FBRyxDQUF0RDs7QUFFQSxRQUFJRSxtQkFBSixFQUF5QjtBQUN2QlAsaUJBQVcsR0FBR0EsV0FBVyxHQUFHUSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWFKLHVCQUF1QixHQUFHLENBQXZDLENBQTVCO0FBQ0Q7O0FBRUQsV0FBT0ssTUFBTSxDQUFDQyxLQUFQLENBQWFYLFdBQWIsSUFBNEIsQ0FBNUIsR0FBZ0NBLFdBQXZDO0FBQ0QsR0E1QkQsQ0E0QkUsT0FBT1ksS0FBUCxFQUFjO0FBQ2RULFdBQU8sQ0FBQ1MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixDQWhDRDs7QUFrQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsR0FERjtBQUVMQyxnQkFBVSxFQUFFO0FBRlAsS0FGVDtBQU1FLGFBQVMsRUFBRTNCLGlCQU5iO0FBT0UsVUFBTSxFQUFFTztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBWkQ7O0tBQU1rQixhO0FBY1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmViYTNkOGYzNWY1MTFlOTc0ZWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IHZhbHVlID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgfSkuZm9ybWF0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnJlbmN5UGFyc2VyID0gdmFsID0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gZm9yIHdoZW4gdGhlIGlucHV0IGdldHMgY2xlYXJzXHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsLmxlbmd0aCkge1xyXG4gICAgICB2YWwgPSBcIjAsMFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRldGVjdGluZyBhbmQgcGFyc2luZyBiZXR3ZWVuIGNvbW1hIGFuZCBkb3RcclxuICAgIGxldCBncm91cCA9ICcuJztcclxuICAgIGxldCBkZWNpbWFsID0gJywnO1xyXG4gICAgbGV0IHJldmVyc2VkVmFsID0gdmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGdyb3VwLCBcImdcIiksIFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2codmFsLCByZXZlcnNlZFZhbCk7XHJcbiAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGRlY2ltYWwsIFwiZ1wiKSwgXCIuXCIpO1xyXG4gICAgY29uc29sZS5sb2codmFsLCByZXZlcnNlZFZhbCk7XHJcbiAgICAvLyAgPT4gMTIzMi4yMSDigqxcclxuXHJcbiAgICAvLyByZW1vdmluZyBldmVyeXRoaW5nIGV4Y2VwdCB0aGUgZGlnaXRzIGFuZCBkb3RcclxuICAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKTtcclxuICAgIC8vICA9PiAxMjMyLjIxXHJcblxyXG4gICAgLy8gYXBwZW5kaW5nIGRpZ2l0cyBwcm9wZXJseVxyXG4gICAgY29uc3QgZGlnaXRzQWZ0ZXJEZWNpbWFsQ291bnQgPSAocmV2ZXJzZWRWYWwuc3BsaXQoXCIuXCIpWzFdIHx8IFtdKS5sZW5ndGg7XHJcbiAgICBjb25zdCBuZWVkc0RpZ2l0c0FwcGVuZGVkID0gZGlnaXRzQWZ0ZXJEZWNpbWFsQ291bnQgPiAyO1xyXG5cclxuICAgIGlmIChuZWVkc0RpZ2l0c0FwcGVuZGVkKSB7XHJcbiAgICAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwgKiBNYXRoLnBvdygxMCwgZGlnaXRzQWZ0ZXJEZWNpbWFsQ291bnQgLSAyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHJldmVyc2VkVmFsKSA/IDAgOiByZXZlcnNlZFZhbDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ3VycmVuY3lJbnB1dCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0TnVtYmVyXHJcbiAgICAgIGRlZmF1bHRWYWx1ZT17MTUwfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIxcmVtXCJcclxuICAgICAgfX1cclxuICAgICAgZm9ybWF0dGVyPXtjdXJyZW5jeUZvcm1hdHRlcn1cclxuICAgICAgcGFyc2VyPXtjdXJyZW5jeVBhcnNlcn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5SW5wdXQiXSwic291cmNlUm9vdCI6IiJ9