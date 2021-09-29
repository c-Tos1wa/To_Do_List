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
                children: "Cadastrar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMjRhOTAwMjVhYTk1NzgwZjZmYTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0MsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFBLDJCQUNDLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQUEsOEJBRUMsOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFDLEtBQTVCO0FBQWtDLGtCQUFVLEVBQUMsVUFBN0M7QUFBd0Qsa0JBQVUsRUFBQyxPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBTUMsOERBQUMsMENBQUQ7QUFDRSxxQkFBYSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFVBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsVUFBQUEsUUFBUSxFQUFFO0FBQWpDLFNBRGpCO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQUMsTUFBTSxFQUFJO0FBQ2xCLGNBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNELGNBQUcsQ0FBQ0QsTUFBTSxDQUFDSCxJQUFYLEVBQWdCO0FBQ2JJLFlBQUFBLE1BQU0sQ0FBQ0osSUFBUCxHQUFjLFVBQWQ7QUFDQSxXQUZILE1BRVMsSUFBSSxDQUFDRyxNQUFNLENBQUNGLEtBQVosRUFBbUI7QUFDekJHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLFVBQWY7QUFDRCxXQUZPLE1BRUQsSUFDTCxDQUFDLDJDQUEyQ0ksSUFBM0MsQ0FBZ0RGLE1BQU0sQ0FBQ0YsS0FBdkQsQ0FESSxFQUVMO0FBQ0FHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLHVCQUFmO0FBQ0Q7O0FBQ0QsaUJBQU9HLE1BQVA7QUFDRCxTQWRIO0FBZUUsZ0JBQVEsRUFBRSxrQkFBQ0QsTUFBRCxRQUErQjtBQUFBLGNB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dGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgSGVhZGluZywgQnV0dG9uLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuIFxyXG4gY29uc3QgQmFzaWMgPSAoKSA9PiAoXHJcbiAgIDxkaXY+XHJcbiAgICA8VlN0YWNrIHNwYWNpbmc9JzEuNXJlbScgPlxyXG5cclxuICAgICA8SGVhZGluZyBtdD0nNDBweCcgZm9udFNpemU9XCI0eGxcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBsaW5lSGVpZ2h0PVwic2hvcnRcIj5cclxuICAgICAgIEVudHJlIGUgdmVqYSBhcyBzdWFzIHRhcmVmYXNcclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgIFxyXG4gICAgIDxGb3JtaWtcclxuICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XHJcbiAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcclxuICAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgaWYoIXZhbHVlcy5uYW1lKXtcclxuICAgICAgICAgICBlcnJvcnMubmFtZSA9ICdSZXF1aXJlZCc7IFxyXG4gICAgICAgICAgfSBlbHNlIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ1JlcXVpcmVkJztcclxuICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgIH19XHJcbiAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICB9fVxyXG4gICAgID5cclxuICAgICAgIHsoe1xyXG4gICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgLyogYW5kIG90aGVyIGdvb2RpZXMgKi9cclxuICAgICAgIH0pID0+IChcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PiAgICB7LyogLy8gY29tZcOnbyBkbyBmb3JtICAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFZTdGFjayBzcGFjaW5nPScycmVtJz5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBub21lJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZX1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Fnb3JhIHNldSBlbWFpbCdcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFIGFnb3JhIHN1YSBzZW5oYSdcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgPEJ1dHRvbiBoZWlnaHQ9XCI0OHB4XCIgYm9yZGVyPVwiMnB4XCIgY29sb3I9J2JyYW5kLjgwMCcgXHJcbiAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJicmFuZC44MDBcIiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBcclxuICAgICAgICAgICBfaG92ZXI9J2dyYXkuMjAwJ1xyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICl9XHJcbiAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiApO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBCYXNpYzsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlZTdGFjayIsIkJhc2ljIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3VjaGVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyJdLCJzb3VyY2VSb290IjoiIn0=