"use strict";
self["webpackHotUpdate_N_E"]("pages/signUp",{

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\blue\\to_do\\To_Do_List\\pages\\signUp.js";




function SignUp() {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      textAlign: "center",
      mt: "5",
      fontSize: "2xl",
      fontWeight: "bold",
      textShadow: "1px 1px #F0FFFF",
      children: "Crie sua conta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      justifyContent: "center",
      alignItems: "center",
      my: "5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
        initialValues: {
          name: '',
          username: '',
          email: '',
          password: ''
        },
        validate: function validate(values) {
          var errors = {};
          console.log(errors);

          if (!values.name) {
            errors.name = 'Nome é obrigatório.';
          }

          if (!values.username) {
            errors.username = 'Nome de usuário é obrigatório';
          }

          if (!values.email) {
            errors.email = 'Email é obrigatório';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Email inválido';
          }

          if (!values.password) {
            errors.password = 'Senha é obrigatória';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)) {
            errors.password = 'Senha inváida. Tente com um caracter especial';
          }

          return errors;
        },
        onSubmit: function onSubmit(values, actions) {
          setTimeout(function () {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        },
        children: function children(_ref) {
          var values = _ref.values,
              errors = _ref.errors,
              touched = _ref.touched,
              handleChange = _ref.handleChange,
              handleBlur = _ref.handleBlur,
              handleSubmit = _ref.handleSubmit;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
              spacing: "5",
              alignItems: "center",
              justifyContent: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                name: "name",
                type: "text",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.name,
                placeholder: "Digite seu nome completo",
                variant: "flushed",
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 18
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.name && touched.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                name: "username",
                type: "text",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.username,
                placeholder: "Digite seu nome de usu\xE1rio",
                variant: "flushed",
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                name: "email",
                type: "email",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.email,
                placeholder: "Digite seu email",
                variant: "flushed",
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                name: "password",
                type: "password",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.password,
                placeholder: "Digite uma senha",
                variant: "flushed",
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.password
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                mt: "5",
                p: "3",
                bgColor: "brand.700",
                color: "gray.50",
                borderRadius: "5",
                _hover: {
                  bgColor: 'gray.50',
                  color: 'brand.700'
                },
                children: "CRIAR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: "Se tiver uma conta, clique aqui"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 16
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 14
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnblVwLmVhNmE5YzkzMDQ0OTY5YzhlYTNlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUNFLGVBQVMsRUFBQyxRQURaO0FBRUUsUUFBRSxFQUFDLEdBRkw7QUFHRSxjQUFRLEVBQUMsS0FIWDtBQUlFLGdCQUFVLEVBQUMsTUFKYjtBQUtFLGdCQUFVLEVBQUMsaUJBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLDhEQUFDLG9EQUFEO0FBQVEsb0JBQWMsRUFBQyxRQUF2QjtBQUFnQyxnQkFBVSxFQUFDLFFBQTNDO0FBQW9ELFFBQUUsRUFBQyxHQUF2RDtBQUFBLDZCQUNBLDhEQUFDLDBDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNiQyxVQUFBQSxJQUFJLEVBQUUsRUFETztBQUViQyxVQUFBQSxRQUFRLEVBQUUsRUFGRztBQUdiQyxVQUFBQSxLQUFLLEVBQUUsRUFITTtBQUliQyxVQUFBQSxRQUFRLEVBQUU7QUFKRyxTQURqQjtBQU9HLGdCQUFRLEVBQUksa0JBQUFDLE1BQU0sRUFBSTtBQUNwQixjQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNDQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFDRCxjQUFHLENBQUNELE1BQU0sQ0FBQ0osSUFBWCxFQUFnQjtBQUNkSyxZQUFBQSxNQUFNLENBQUNMLElBQVAsR0FBYyxxQkFBZDtBQUNEOztBQUFBLGNBQUksQ0FBQ0ksTUFBTSxDQUFDSCxRQUFaLEVBQXFCO0FBQ3BCSSxZQUFBQSxNQUFNLENBQUNKLFFBQVAsR0FBa0IsK0JBQWxCO0FBQ0Q7O0FBQUMsY0FBSSxDQUFDRyxNQUFNLENBQUNGLEtBQVosRUFBa0I7QUFDbEJHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FB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LENBQUNIO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQ0QsZUFxQ0MsOERBQUMsbURBQUQ7QUFDRSxvQkFBSSxFQUFDLFVBRFA7QUFFRSxvQkFBSSxFQUFDLFVBRlA7QUFHRSx3QkFBUSxFQUFFYyxZQUhaO0FBSUUsc0JBQU0sRUFBRUMsVUFKVjtBQUtFLHFCQUFLLEVBQUdiLE1BQU0sQ0FBQ0QsUUFMakI7QUFNRSwyQkFBVyxFQUFDLGtCQU5kO0FBT0UsdUJBQU8sRUFBQyxTQVBWO0FBUUUsb0JBQUksRUFBRTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckNELGVBK0NDLDhEQUFDLGtEQUFEO0FBQUEsMEJBQU9FLE1BQU0sQ0FBQ0Y7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQS9DRCxlQWlEQyw4REFBQyxvREFBRDtBQUNBLG9CQUFJLEVBQUMsUUFETDtBQUVBLGtCQUFFLEVBQUMsR0FGSDtBQUdBLGlCQUFDLEVBQUMsR0FIRjtBQUlBLHVCQUFPLEVBQUMsV0FKUjtBQUtBLHFCQUFLLEVBQUMsU0FMTjtBQU1BLDRCQUFZLEVBQUMsR0FOYjtBQU9BLHNCQUFNLEVBQUU7QUFDTmdCLGtCQUFBQSxPQUFPLEVBQUUsU0FESDtBQUVOQyxrQkFBQUEsS0FBSyxFQUFFO0FBRkQsaUJBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakRELGVBZ0VELDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhEO0FBQUE7QUFsQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBLGtCQURGO0FBK0hEO0tBaEl1QnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25VcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7IElucHV0LCBUZXh0LCBWU3RhY2ssIEJ1dHRvbiwgRm9ybUVycm9yTWVzc2FnZSwgRm9ybUNvbnRyb2wgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgIG10PSc1J1xyXG4gICAgICAgIGZvbnRTaXplPScyeGwnXHJcbiAgICAgICAgZm9udFdlaWdodD0nYm9sZCdcclxuICAgICAgICB0ZXh0U2hhZG93PScxcHggMXB4ICNGMEZGRkYnXHJcbiAgICAgID5cclxuICAgICAgICBDcmllIHN1YSBjb250YVxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICA8VlN0YWNrIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgbXk9JzUnPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICAgfX1cclxuICAgICAgICAgdmFsaWRhdGU9IHsgdmFsdWVzID0+IHtcclxuICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICAgICAgICAgaWYoIXZhbHVlcy5uYW1lKXtcclxuICAgICAgICAgICAgIGVycm9ycy5uYW1lID0gJ05vbWUgw6kgb2JyaWdhdMOzcmlvLidcclxuICAgICAgICAgICB9aWYgKCF2YWx1ZXMudXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gJ05vbWUgZGUgdXN1w6FyaW8gw6kgb2JyaWdhdMOzcmlvJ1xyXG4gICAgICAgICAgIH0gaWYgKCF2YWx1ZXMuZW1haWwpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIMOpIG9icmlnYXTDs3JpbydcclxuICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpbnbDoWxpZG8nXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmICghdmFsdWVzLnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdTZW5oYSDDqSBvYnJpZ2F0w7NyaWEnXHJcbiAgICAgICAgICAgfSBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdTZW5oYSBpbnbDoWlkYS4gVGVudGUgY29tIHVtIGNhcmFjdGVyIGVzcGVjaWFsJ1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICByZXR1cm4gZXJyb3JzXHJcbiAgICAgICAgIH19XHJcbiAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKVxyXG4gICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxyXG4gICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgIH19PlxyXG4gICAgICAgICAgIHsoeyBcclxuICAgICAgICAgICAgIHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIsIGhhbmRsZVN1Ym1pdFxyXG4gICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzUnIGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBub21lIGNvbXBsZXRvJ1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdmbHVzaGVkJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPSAnbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0RpZ2l0ZSBzZXUgbm9tZSBkZSB1c3XDoXJpbydcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nZmx1c2hlZCdcclxuICAgICAgICAgICAgICAgICAgc2l6ZT0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0PntlcnJvcnMudXNlcm5hbWV9PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IGVtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdmbHVzaGVkJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPSAnbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2Vycm9ycy5lbWFpbH08L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0RpZ2l0ZSB1bWEgc2VuaGEnXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2ZsdXNoZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ICdsZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57ZXJyb3JzLnBhc3N3b3JkfTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBtdD0nNSdcclxuICAgICAgICAgICAgICAgIHA9JzMnXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yPSdicmFuZC43MDAnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nZ3JheS41MCdcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz0nNSdcclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnZ3JheS41MCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYnJhbmQuNzAwJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDUklBUlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgIFNlIHRpdmVyIHVtYSBjb250YSwgY2xpcXVlIGFxdWlcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICA8L1ZTdGFjaz5cclxuXHJcbiAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkZvcm1payIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsIkJ1dHRvbiIsIkZvcm1FcnJvck1lc3NhZ2UiLCJGb3JtQ29udHJvbCIsIlNpZ25VcCIsIm5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsImFjdGlvbnMiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0U3VibWl0dGluZyIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiYmdDb2xvciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==