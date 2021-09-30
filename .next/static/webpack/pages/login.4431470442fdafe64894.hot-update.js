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
        columnNumber: 7
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
                columnNumber: 15
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
                columnNumber: 15
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
                columnNumber: 15
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
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "./signUp",
                  children: "Clique aqui se ainda n\xE3o tiver uma conta."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNDQzMTQ3MDQ0MmZkYWZlNjQ4OTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFBLDJCQUNFLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQUEsOEJBRUUsOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFDLEtBQTVCO0FBQWtDLGtCQUFVLEVBQUMsVUFBN0M7QUFBd0Qsa0JBQVUsRUFBQyxPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBTUUsOERBQUMsMENBQUQ7QUFDRSxxQkFBYSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFVBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsVUFBQUEsUUFBUSxFQUFFO0FBQWpDLFNBRGpCO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQUMsTUFBTSxFQUFJO0FBQ2xCLGNBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLGNBQUksQ0FBQ0QsTUFBTSxDQUFDSCxJQUFaLEVBQWtCO0FBQ2hCSSxZQUFBQSxNQUFNLENBQUNKLElBQVAsR0FBYyxVQUFkO0FBQ0QsV0FGRCxNQUVPLElBQUksQ0FBQ0csTUFBTSxDQUFDRixLQUFaLEVBQW1CO0FBQ3hCRyxZQUFBQSxNQUFNLENBQUNILEtBQVAsR0FBZSxVQUFmO0FBQ0QsV0FGTSxNQUVBLElBQ0wsQ0FBQywyQ0FBMkNJLElBQTNDLENBQWdERixNQUFNLENBQUNGLEtBQXZELENBREksRUFFTDtBQUNBRyxZQUFBQSxNQUFNLENBQUNILEtBQVAsR0FBZSx1QkFBZjtBQUNEOztBQUNELGlCQUFPRyxNQUFQO0FBQ0QsU0FkSDtBQWVFLGdCQUFRLEVBQUUsa0JBQUNELE1BQUQsUUFBK0I7QUFBQSxj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QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1oQjtBQWlHTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBMaW5rLCBUZXh0LCBJbnB1dCwgSGVhZGluZywgQnV0dG9uLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEJhc2ljID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8VlN0YWNrIHNwYWNpbmc9JzEuNXJlbScgPlxyXG5cclxuICAgICAgPEhlYWRpbmcgbXQ9JzQwcHgnIGZvbnRTaXplPVwiNHhsXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCIgbGluZUhlaWdodD1cInNob3J0XCI+XHJcbiAgICAgICAgRW50cmUgZSB2ZWphIGFzIHN1YXMgdGFyZWZhc1xyXG4gICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfX1cclxuICAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgICAgaWYgKCF2YWx1ZXMubmFtZSkge1xyXG4gICAgICAgICAgICBlcnJvcnMubmFtZSA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ1JlcXVpcmVkJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoe1xyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAvKiBhbmQgb3RoZXIgZ29vZGllcyAqL1xyXG4gICAgICAgIH0pID0+IChcclxuXHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+ICAgIHsvKiAvLyBjb21lw6dvIGRvIGZvcm0gICovfVxyXG5cclxuICAgICAgICAgICAgPFZTdGFjayBzcGFjaW5nPScycmVtJz5cclxuXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Fnb3JhIHNldSBlbWFpbCdcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRSBhZ29yYSBzdWEgc2VuaGEnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaGVpZ2h0PVwiNDhweFwiIGJvcmRlcj1cIjJweFwiIGNvbG9yPSdicmFuZC44MDAnXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImJyYW5kLjgwMFwiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICBfaG92ZXI9J2dyYXkuMjAwJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLi9zaWduVXAnPkNsaXF1ZSBhcXVpIHNlIGFpbmRhIG7Do28gdGl2ZXIgdW1hIGNvbnRhLjwvYT5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG5cclxuICAgIDwvVlN0YWNrPlxyXG5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1payIsIkxpbmsiLCJUZXh0IiwiSW5wdXQiLCJIZWFkaW5nIiwiQnV0dG9uIiwiVlN0YWNrIiwiQmFzaWMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsImVycm9ycyIsInRlc3QiLCJzZXRTdWJtaXR0aW5nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==