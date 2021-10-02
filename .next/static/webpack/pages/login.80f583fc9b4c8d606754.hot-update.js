"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_blue_turma01_modulo06_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\blue\\turma01-modulo06\\To_Do_List\\pages\\login.js",
    _this = undefined;






var Basic = function Basic() {
  var _jsxDEV2;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, (_jsxDEV2 = {
      spacing: "1.5rem",
      bgGradient: "linear-gradient(90deg,#11AEEB, #35F39D)",
      height: "100vh"
    }, (0,C_blue_turma01_modulo06_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "spacing", "2.5"), (0,C_blue_turma01_modulo06_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "flexDirection", "column"), (0,C_blue_turma01_modulo06_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "w", ""), (0,C_blue_turma01_modulo06_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "children", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
      mt: "40px",
      fontSize: "4xl",
      fontWeight: "semibold",
      lineHeight: "short",
      mb: "50",
      padding: "7",
      children: "Entre e veja as suas tarefas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      validate: function validate(values) {
        var errors = {};

        if (!values.name) {
          errors.name = 'Required';
        } else if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        return errors;
      },
      onSubmit: function onSubmit(values, _ref) {
        var setSubmitting = _ref.setSubmitting;
        setTimeout(function () {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      },
      children: function children(_ref2) {
        var values = _ref2.values,
            errors = _ref2.errors,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            isSubmitting = _ref2.isSubmitting;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
          onSubmit: handleSubmit,
          children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
            spacing: "2rem",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
              type: "name",
              name: "name",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.name,
              size: "lg",
              placeholder: "Digite seu nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, _this), errors.name && touched.name && errors.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
              type: "email",
              name: "email",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.email,
              size: "lg",
              placeholder: "Agora seu email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 12
            }, _this), errors.email && touched.email && errors.email, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
              type: "password",
              name: "password",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.password,
              size: "lg",
              placeholder: "E agora sua senha",
              variant: "filled",
              variantColor: "red"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 12
            }, _this), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
              height: "48px",
              border: "2px",
              colorScheme: "brand.800",
              borderColor: "brand.800",
              type: "submit",
              variant: "outline",
              disabled: isSubmitting,
              _hover: "gray.200",
              children: "Cadastrar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 12
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 8
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }, _this)]), _jsxDEV2), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 4
  }, _this);
};

_c = Basic;
/* harmony default export */ __webpack_exports__["default"] = (Basic);

var _c;

$RefreshReg$(_c, "Basic");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uODBmNTgzZmM5YjRjOGQ2MDY3NTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0MsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQTs7QUFBQSxzQkFDWjtBQUFBLDJCQUVDLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQXlCLGdCQUFVLEVBQUMseUNBQXBDO0FBQThFLFlBQU0sRUFBQztBQUFyRixnTEFBcUcsS0FBckcsa0xBQXlILFFBQXpILHNLQUFvSSxFQUFwSSwyTEFFQyw4REFBQyxxREFBRDtBQUFTLFFBQUUsRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBQyxLQUE1QjtBQUFrQyxnQkFBVSxFQUFDLFVBQTdDO0FBQXdELGdCQUFVLEVBQUMsT0FBbkU7QUFBMkUsUUFBRSxFQUFDLElBQTlFO0FBQW1GLGFBQU8sRUFBQyxHQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBTUMsOERBQUMsMENBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLFFBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFFBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsUUFBQUEsUUFBUSxFQUFFO0FBQWpDLE9BRGpCO0FBRUUsY0FBUSxFQUFFLGtCQUFBQyxNQUFNLEVBQUk7QUFDbEIsWUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0QsWUFBRyxDQUFDRCxNQUFNLENBQUNILElBQVgsRUFBZ0I7QUFDYkksVUFBQUEsTUFBTSxDQUFDSixJQUFQLEdBQWMsVUFBZDtBQUNBLFNBRkgsTUFFUyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBWixFQUFtQjtBQUN6QkcsVUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUsVUFBZjtBQUNELFNBRk8sTUFFRCxJQUNMLENBQUMsMkNBQTJDSSxJQUEzQyxDQUFnREYsTUFBTSxDQUFD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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztLQUFNaEI7QUFnR04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIEhlYWRpbmcsIEJ1dHRvbiwgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbiBcclxuIGNvbnN0IEJhc2ljID0gKCkgPT4gKFxyXG4gICA8ZGl2PlxyXG4gICAgXHJcbiAgICA8VlN0YWNrIHNwYWNpbmc9JzEuNXJlbScgYmdHcmFkaWVudD0nbGluZWFyLWdyYWRpZW50KDkwZGVnLCMxMUFFRUIsICMzNUYzOUQpJyBoZWlnaHQ9JzEwMHZoJyBzcGFjaW5nPScyLjUnIGZsZXhEaXJlY3Rpb249J2NvbHVtbicgdz0nJz5cclxuXHJcbiAgICAgPEhlYWRpbmcgbXQ9JzQwcHgnIGZvbnRTaXplPVwiNHhsXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCIgbGluZUhlaWdodD1cInNob3J0XCIgbWI9JzUwJyBwYWRkaW5nPSc3Jz5cclxuICAgICAgIEVudHJlIGUgdmVqYSBhcyBzdWFzIHRhcmVmYXNcclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgIFxyXG4gICAgIDxGb3JtaWtcclxuICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XHJcbiAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcclxuICAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgaWYoIXZhbHVlcy5uYW1lKXtcclxuICAgICAgICAgICBlcnJvcnMubmFtZSA9ICdSZXF1aXJlZCc7IFxyXG4gICAgICAgICAgfSBlbHNlIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ1JlcXVpcmVkJztcclxuICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgIH19XHJcbiAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICB9fVxyXG4gICAgID5cclxuICAgICAgIHsoe1xyXG4gICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgLyogYW5kIG90aGVyIGdvb2RpZXMgKi9cclxuICAgICAgIH0pID0+IChcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PiAgICB7LyogLy8gY29tZcOnbyBkbyBmb3JtICAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFZTdGFjayBzcGFjaW5nPScycmVtJyA+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0RpZ2l0ZSBzZXUgbm9tZSdcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWV9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZ29yYSBzZXUgZW1haWwnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRSBhZ29yYSBzdWEgc2VuaGEnXHJcbiAgICAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnIHZhcmlhbnRDb2xvcj0ncmVkJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICA8QnV0dG9uIGhlaWdodD1cIjQ4cHhcIiBib3JkZXI9XCIycHhcIiBjb2xvclNjaGVtZT0nYnJhbmQuODAwJyBcclxuICAgICAgICAgICBib3JkZXJDb2xvcj1cImJyYW5kLjgwMFwiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IFxyXG4gICAgICAgICAgIF9ob3Zlcj0nZ3JheS4yMDAnXHJcbiAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgKX1cclxuICAgICA8L0Zvcm1paz5cclxuXHJcbiAgICA8L1ZTdGFjaz5cclxuICAgIFxyXG4gICA8L2Rpdj5cclxuICk7XHJcbiBcclxuIGV4cG9ydCBkZWZhdWx0IEJhc2ljOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1payIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJIZWFkaW5nIiwiQnV0dG9uIiwiVlN0YWNrIiwiQmFzaWMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsImVycm9ycyIsInRlc3QiLCJzZXRTdWJtaXR0aW5nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==