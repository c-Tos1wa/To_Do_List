"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\blue\\to_do\\To_Do_List\\pages\\login.js",
    _this = undefined;






var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
      spacing: "1.5rem",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
        mt: "40px",
        fontSize: "4xl",
        fontWeight: "semibold",
        lineHeight: "short",
        children: "Entre e veja as suas tarefas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
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
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
            onSubmit: handleSubmit,
            children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
              spacing: "2rem",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                type: "name",
                name: "name",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.name,
                size: "lg",
                placeholder: "Digite seu nome"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 13
              }, _this), errors.name && touched.name && errors.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                type: "email",
                name: "email",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.email,
                size: "lg",
                placeholder: "Agora seu email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 12
              }, _this), errors.email && touched.email && errors.email, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                type: "password",
                name: "password",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.password,
                size: "lg",
                placeholder: "E agora sua senha"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 12
              }, _this), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                height: "48px",
                border: "2px",
                color: "brand.800",
                borderColor: "brand.800",
                type: "submit",
                variant: "outline",
                disabled: isSubmitting,
                _hover: "gray.200",
                children: "Entrar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 12
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                children: "Clique aqui se ainda n\xE3o tiver uma conta."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 12
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 8
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMGYzMThlZDhiZDdkMDU1ZWJlZjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0MsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFBLDJCQUNDLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQUEsOEJBRUMsOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFDLEtBQTVCO0FBQWtDLGtCQUFVLEVBQUMsVUFBN0M7QUFBd0Qsa0JBQVUsRUFBQyxPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBTUMsOERBQUMsMENBQUQ7QUFDRSxxQkFBYSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFVBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsVUFBQUEsUUFBUSxFQUFFO0FBQWpDLFNBRGpCO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQUMsTUFBTSxFQUFJO0FBQ2xCLGNBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNELGNBQUcsQ0FBQ0QsTUFBTSxDQUFDSCxJQUFYLEVBQWdCO0FBQ2JJLFlBQUFBLE1BQU0sQ0FBQ0osSUFBUCxHQUFjLFVBQWQ7QUFDQSxXQUZILE1BRVMsSUFBSSxDQUFDRyxNQUFNLENBQUNGLEtBQVosRUFBbUI7QUFDekJHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLFVBQWY7QUFDRCxXQUZPLE1BRUQsSUFDTCxDQUFDLDJDQUEyQ0ksSUFBM0MsQ0FBZ0RGLE1BQU0sQ0FBQ0YsS0FBdkQsQ0FESSxFQUVMO0FBQ0FHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLHVCQUFmO0FBQ0Q7O0FBQ0QsaUJBQU9HLE1BQVA7QUFDRCxTQWRIO0FBZUUsZ0JBQVEsRUFBRSxrQkFBQ0QsTUFBRCxRQUErQjtBQUFBLGNB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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFRleHQsIElucHV0LCBIZWFkaW5nLCBCdXR0b24sIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gXHJcbiBjb25zdCBCYXNpYyA9ICgpID0+IChcclxuICAgPGRpdj5cclxuICAgIDxWU3RhY2sgc3BhY2luZz0nMS41cmVtJyA+XHJcblxyXG4gICAgIDxIZWFkaW5nIG10PSc0MHB4JyBmb250U2l6ZT1cIjR4bFwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxpbmVIZWlnaHQ9XCJzaG9ydFwiPlxyXG4gICAgICAgRW50cmUgZSB2ZWphIGFzIHN1YXMgdGFyZWZhc1xyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgXHJcbiAgICAgPEZvcm1pa1xyXG4gICAgICAgaW5pdGlhbFZhbHVlcz17eyBuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfX1cclxuICAgICAgIHZhbGlkYXRlPXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBpZighdmFsdWVzLm5hbWUpe1xyXG4gICAgICAgICAgIGVycm9ycy5uYW1lID0gJ1JlcXVpcmVkJzsgXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICApIHtcclxuICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICAgfX1cclxuICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgIH19XHJcbiAgICAgPlxyXG4gICAgICAgeyh7XHJcbiAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAvKiBhbmQgb3RoZXIgZ29vZGllcyAqL1xyXG4gICAgICAgfSkgPT4gKFxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+ICAgIHsvKiAvLyBjb21lw6dvIGRvIGZvcm0gICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzJyZW0nPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWdvcmEgc2V1IGVtYWlsJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0UgYWdvcmEgc3VhIHNlbmhhJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICA8QnV0dG9uIGhlaWdodD1cIjQ4cHhcIiBib3JkZXI9XCIycHhcIiBjb2xvcj0nYnJhbmQuODAwJyBcclxuICAgICAgICAgICBib3JkZXJDb2xvcj1cImJyYW5kLjgwMFwiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IFxyXG4gICAgICAgICAgIF9ob3Zlcj0nZ3JheS4yMDAnXHJcbiAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICBDbGlxdWUgYXF1aSBzZSBhaW5kYSBuw6NvIHRpdmVyIHVtYSBjb250YS5cclxuICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICApfVxyXG4gICAgIDwvRm9ybWlrPlxyXG5cclxuICAgIDwvVlN0YWNrPlxyXG4gICAgXHJcbiAgIDwvZGl2PlxyXG4gKTtcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgQmFzaWM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRm9ybUNvbnRyb2wiLCJUZXh0IiwiSW5wdXQiLCJIZWFkaW5nIiwiQnV0dG9uIiwiVlN0YWNrIiwiQmFzaWMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsImVycm9ycyIsInRlc3QiLCJzZXRTdWJtaXR0aW5nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==