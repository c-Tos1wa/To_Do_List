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
              variantColor: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNzhmNjgwOGNmMmNhOTFlMmJhMzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0MsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQTs7QUFBQSxzQkFDWjtBQUFBLDJCQUVDLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQXlCLGdCQUFVLEVBQUMseUNBQXBDO0FBQThFLFlBQU0sRUFBQztBQUFyRixnTEFBcUcsS0FBckcsa0xBQXlILFFBQXpILHNLQUFvSSxFQUFwSSwyTEFFQyw4REFBQyxxREFBRDtBQUFTLFFBQUUsRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBQyxLQUE1QjtBQUFrQyxnQkFBVSxFQUFDLFVBQTdDO0FBQXdELGdCQUFVLEVBQUMsT0FBbkU7QUFBMkUsUUFBRSxFQUFDLElBQTlFO0FBQW1GLGFBQU8sRUFBQyxHQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBTUMsOERBQUMsMENBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLFFBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFFBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsUUFBQUEsUUFBUSxFQUFFO0FBQWpDLE9BRGpCO0FBRUUsY0FBUSxFQUFFLGtCQUFBQyxNQUFNLEVBQUk7QUFDbEIsWUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0QsWUFBRyxDQUFDRCxNQUFNLENBQUNILElBQVgsRUFBZ0I7QUFDYkksVUFBQUEsTUFBTSxDQUFDSixJQUFQLEdBQWMsVUFBZDtBQUNBLFNBRkgsTUFFUyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBWixFQUFtQjtBQUN6QkcsVUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUsVUFBZjtBQUNELFNBRk8sTUFFRCxJQUNMLENBQUMsMkNBQTJDSSxJQUEzQyxDQUFnREYsTUFBTSxDQUFD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QUFBQTtBQUFBO0FBQUEsYUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7S0FBTWhCO0FBZ0dOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBIZWFkaW5nLCBCdXR0b24sIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gXHJcbiBjb25zdCBCYXNpYyA9ICgpID0+IChcclxuICAgPGRpdj5cclxuICAgIFxyXG4gICAgPFZTdGFjayBzcGFjaW5nPScxLjVyZW0nIGJnR3JhZGllbnQ9J2xpbmVhci1ncmFkaWVudCg5MGRlZywjMTFBRUVCLCAjMzVGMzlEKScgaGVpZ2h0PScxMDB2aCcgc3BhY2luZz0nMi41JyBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nIHc9Jyc+XHJcblxyXG4gICAgIDxIZWFkaW5nIG10PSc0MHB4JyBmb250U2l6ZT1cIjR4bFwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxpbmVIZWlnaHQ9XCJzaG9ydFwiIG1iPSc1MCcgcGFkZGluZz0nNyc+XHJcbiAgICAgICBFbnRyZSBlIHZlamEgYXMgc3VhcyB0YXJlZmFzXHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICBcclxuICAgICA8Rm9ybWlrXHJcbiAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9fVxyXG4gICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGlmKCF2YWx1ZXMubmFtZSl7XHJcbiAgICAgICAgICAgZXJyb3JzLm5hbWUgPSAnUmVxdWlyZWQnOyBcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXHJcbiAgICAgICAgICkge1xyXG4gICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICB9fVxyXG4gICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgfX1cclxuICAgICA+XHJcbiAgICAgICB7KHtcclxuICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgIC8qIGFuZCBvdGhlciBnb29kaWVzICovXHJcbiAgICAgICB9KSA9PiAoXHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gICAgey8qIC8vIGNvbWXDp28gZG8gZm9ybSAgKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz0nMnJlbScgPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWdvcmEgc2V1IGVtYWlsJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0UgYWdvcmEgc3VhIHNlbmhhJ1xyXG4gICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJyB2YXJpYW50Q29sb3JcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgPEJ1dHRvbiBoZWlnaHQ9XCI0OHB4XCIgYm9yZGVyPVwiMnB4XCIgY29sb3JTY2hlbWU9J2JyYW5kLjgwMCcgXHJcbiAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJicmFuZC44MDBcIiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBcclxuICAgICAgICAgICBfaG92ZXI9J2dyYXkuMjAwJ1xyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICl9XHJcbiAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiApO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBCYXNpYzsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlZTdGFjayIsIkJhc2ljIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3VjaGVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyJdLCJzb3VyY2VSb290IjoiIn0=