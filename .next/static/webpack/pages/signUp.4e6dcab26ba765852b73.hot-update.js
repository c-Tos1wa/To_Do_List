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
          } else if (!values.username) {
            errors.username = 'Nome de usuário é obrigatório';
          } else if (!values.email) {
            errors.email = 'Email é obrigatório';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Email inválido';
          } else if (!values.password) {
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
                lineNumber: 59,
                columnNumber: 18
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
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
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
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
                lineNumber: 82,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
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
                lineNumber: 94,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: errors.password
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
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
              lineNumber: 57,
              columnNumber: 16
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnblVwLjRlNmRjYWIyNmJhNzY1ODUyYjczLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUNFLGVBQVMsRUFBQyxRQURaO0FBRUUsUUFBRSxFQUFDLEdBRkw7QUFHRSxjQUFRLEVBQUMsS0FIWDtBQUlFLGdCQUFVLEVBQUMsTUFKYjtBQUtFLGdCQUFVLEVBQUMsaUJBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLDhEQUFDLG9EQUFEO0FBQVEsb0JBQWMsRUFBQyxRQUF2QjtBQUFnQyxnQkFBVSxFQUFDLFFBQTNDO0FBQW9ELFFBQUUsRUFBQyxHQUF2RDtBQUFBLDZCQUNBLDhEQUFDLDBDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNiQyxVQUFBQSxJQUFJLEVBQUUsRUFETztBQUViQyxVQUFBQSxRQUFRLEVBQUUsRUFGRztBQUdiQyxVQUFBQSxLQUFLLEVBQUUsRUFITTtBQUliQyxVQUFBQSxRQUFRLEVBQUU7QUFKRyxTQURqQjtBQU9HLGdCQUFRLEVBQUksa0JBQUFDLE1BQU0sRUFBSTtBQUNwQixjQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNDQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFDRCxjQUFHLENBQUNELE1BQU0sQ0FBQ0osSUFBWCxFQUFnQjtBQUNkSyxZQUFBQSxNQUFNLENBQUNMLElBQVAsR0FBYyxxQkFBZDtBQUNELFdBRkQsTUFFTSxJQUFJLENBQUNJLE1BQU0sQ0FBQ0gsUUFBWixFQUFxQjtBQUN6QkksWUFBQUEsTUFBTSxDQUFDSixRQUFQLEdBQWtCLCtCQUFsQjtBQUNELFdBRkssTUFFQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBWixFQUFrQjtBQUN2QkcsWUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUscUJBQWY7QUFDRCxXQUZNLE1BRUEsSUFDTixDQUFDLDJDQUEyQ00sSUFBM0MsQ0FBZ0RKLE1BQU0sQ0FBQ0YsS0FBdkQsQ0FESyxFQUVMO0FBQ0FHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLGdCQUFmO0FBQ0QsV0FKTSxNQUtGLElBQUksQ0FBQ0UsTUFBTSxDQUFDRCxRQUFaLEVBQXFCO0FBQ3hCRSxZQUFBQSxNQUFNLENBQUNGLFFBQVAsR0FBa0IscUJBQWxCO0FBQ0QsV0FGSSxNQUVFLElBQUksQ0FBQywyQ0FBMkNLLElBQTNDLENBQWdESixNQUFNLENBQUNELFFBQXZELENBQUwsRUFBdUU7QUFDNUVFLFlBQUFBLE1BQU0sQ0FBQ0YsUUFBUCxHQUFrQiwrQ0FBbEI7QUFDRDs7QUFFRCxpQkFBT0UsTUFBUDtBQUNELFNBNUJKO0FBNkJHLGdCQUFRLEVBQUUsa0JBQUNELE1BQUQsRUFBU0ssT0FBVCxFQUFxQjtBQUM3QkMsVUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkMsWUFBQUEsS0FBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7QUFDQUssWUFBQUEsT0FBTyxDQUFDSyxhQUFSLENBQXNCLEtBQXRCO0FBQ0QsV0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlELFNBbENKO0FBQUEsa0JBbUNNO0FBQUEsY0FDQ1YsTUFERCxRQUNDQSxNQUREO0FBQUEsY0FDU0MsTUFEVCxRQUNTQSxNQURUO0FBQUEsY0FDaUJVLE9BRGpCLFFBQ2lCQSxPQURqQjtBQUFBLGNBQzBCQyxZQUQxQixRQUMwQkEsWUFEMUI7QUFBQSxjQUN3Q0MsVUFEeEMsUUFDd0NBLFVBRHhDO0FBQUEsY0FDb0RDLFlBRHBELFFBQ29EQSxZQURwRDtBQUFBLDhCQUdDO0FBQU0sb0JBQVEsRUFBRUEsWUFBaEI7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUFRLHFCQUFPLEVBQUMsR0FBaEI7QUFBb0Isd0JBQVUsRUFBQyxRQUEvQjtBQUF3Qyw0QkFBYyxFQUFDLFFBQXZEO0FBQUEsc0NBRUUsOERBQUMsbURBQUQ7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxvQkFBSSxFQUFDLE1BRk47QUFHQyx3QkFBUSxFQUFFRixZQUhYO0FBSUMsc0JBQU0sRUFBRUMsVUFKVDtBQUtDLHFCQUFLLEVBQUViLE1BQU0sQ0FBQ0osSUFMZjtBQU1DLDJCQUFXLEVBQUMsMEJBTmI7QUFPQyx1QkFBTyxFQUFDLFNBUFQ7QUFRQyxvQkFBSSxFQUFFO0FBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQVlDLDhEQUFDLGtEQUFEO0FBQUEsMEJBQU9LLE1BQU0sQ0FBQ0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpELGVBYUMsOERBQUMsbURBQUQ7QUFDRSxvQkFBSSxFQUFDLFVBRFA7QUFFRSxvQkFBSSxFQUFDLE1BRlA7QUFHRSx3QkFBUSxFQUFFZ0IsWUFIWjtBQUlFLHNCQUFNLEVBQUVDLFVBSlY7QUFLRSxxQkFBSyxFQUFFYixNQUFNLENBQUNILFFBTGhCO0FBTUUsMkJBQVcsRUFBQywrQkFOZDtBQU9FLHVCQUFPLEVBQUMsU0FQVjtBQVFFLG9CQUFJLEVBQUU7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWJELGVBdUJDLDhEQUFDLGtEQUFEO0FBQUEsMEJBQU9JLE1BQU0sQ0FBQ0o7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXZCRCxlQXlCQyw4REFBQyxtREFBRDtBQUNFLG9CQUFJLEVBQUMsT0FEUDtBQUVFLG9CQUFJLEVBQUMsT0FGUDtBQUdFLHdCQUFRLEVBQUVlLFlBSFo7QUFJRSxzQkFBTSxFQUFFQyxVQUpWO0FBS0UscUJBQUssRUFBR2IsTUFBTSxDQUFDRixLQUxqQjtBQU1FLDJCQUFXLEVBQUMsa0JBTmQ7QUFPRSx1QkFBTyxFQUFDLFNBUFY7QUFRRSxvQkFBSSxFQUFFO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF6QkQsZUFtQ0MsOERBQUMsa0RBQUQ7QUFBQSwwQkFBT0csTUFBTSxDQUFDSDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkNELGVBcUNDLDhEQUFDLG1EQUFEO0FBQ0Usb0JBQUksRUFBQyxVQURQO0FBRUUsb0JBQUksRUFBQyxVQUZQO0FBR0Usd0JBQVEsRUFBRWMsWUFIWjtBQUlFLHNCQUFNLEVBQUVDLFVBSlY7QUFLRSxxQkFBSyxFQUFHYixNQUFNLENBQUNELFFBTGpCO0FBTUUsMkJBQVcsRUFBQyxrQkFOZDtBQU9FLHVCQUFPLEVBQUMsU0FQVjtBQVFFLG9CQUFJLEVBQUU7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJDRCxlQStDQyw4REFBQyxrREFBRDtBQUFBLDBCQUFPRSxNQUFNLENBQUNGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkEvQ0QsZUFnREMsOERBQUMsb0RBQUQ7QUFDQSxvQkFBSSxFQUFDLFFBREw7QUFFQSxrQkFBRSxFQUFDLEdBRkg7QUFHQSxpQkFBQyxFQUFDLEdBSEY7QUFJQSx1QkFBTyxFQUFDLFdBSlI7QUFLQSxxQkFBSyxFQUFDLFNBTE47QUFNQSw0QkFBWSxFQUFDLEdBTmI7QUFPQSxzQkFBTSxFQUFFO0FBQ05nQixrQkFBQUEsT0FBTyxFQUFFLFNBREg7QUFFTkMsa0JBQUFBLEtBQUssRUFBRTtBQUZELGlCQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhERCxlQStERCw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkEvREM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRDtBQUFBO0FBbkNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQSxrQkFERjtBQStIRDtLQWhJdUJyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduVXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgeyBJbnB1dCwgVGV4dCwgVlN0YWNrLCBCdXR0b24sIEZvcm1FcnJvck1lc3NhZ2UsIEZvcm1Db250cm9sIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRleHRcclxuICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICBtdD0nNSdcclxuICAgICAgICBmb250U2l6ZT0nMnhsJ1xyXG4gICAgICAgIGZvbnRXZWlnaHQ9J2JvbGQnXHJcbiAgICAgICAgdGV4dFNoYWRvdz0nMXB4IDFweCAjRjBGRkZGJ1xyXG4gICAgICA+XHJcbiAgICAgICAgQ3JpZSBzdWEgY29udGFcclxuICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgPFZTdGFjayBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInIG15PSc1Jz5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgIH19XHJcbiAgICAgICAgIHZhbGlkYXRlPSB7IHZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgY29uc3QgZXJyb3JzID0ge31cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgICAgIGlmKCF2YWx1ZXMubmFtZSl7XHJcbiAgICAgICAgICAgICBlcnJvcnMubmFtZSA9ICdOb21lIMOpIG9icmlnYXTDs3Jpby4nXHJcbiAgICAgICAgICAgfWVsc2UgaWYgKCF2YWx1ZXMudXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gJ05vbWUgZGUgdXN1w6FyaW8gw6kgb2JyaWdhdMOzcmlvJ1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlcy5lbWFpbCl7XHJcbiAgICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgw6kgb2JyaWdhdMOzcmlvJ1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGludsOhbGlkbydcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSBpZiAoIXZhbHVlcy5wYXNzd29yZCl7XHJcbiAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAnU2VuaGEgw6kgb2JyaWdhdMOzcmlhJ1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAoIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAnU2VuaGEgaW52w6FpZGEuIFRlbnRlIGNvbSB1bSBjYXJhY3RlciBlc3BlY2lhbCdcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIHJldHVybiBlcnJvcnNcclxuICAgICAgICAgfX1cclxuICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpXHJcbiAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgeyh7IFxyXG4gICAgICAgICAgICAgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciwgaGFuZGxlU3VibWl0XHJcbiAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz0nNScgYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUgY29tcGxldG8nXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2ZsdXNoZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ICdsZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57ZXJyb3JzLm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUgZGUgdXN1w6FyaW8nXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2ZsdXNoZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ICdsZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57ZXJyb3JzLnVzZXJuYW1lfTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nZmx1c2hlZCdcclxuICAgICAgICAgICAgICAgICAgc2l6ZT0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0PntlcnJvcnMuZW1haWx9PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgdW1hIHNlbmhhJ1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdmbHVzaGVkJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPSAnbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2Vycm9ycy5wYXNzd29yZH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBtdD0nNSdcclxuICAgICAgICAgICAgICAgIHA9JzMnXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yPSdicmFuZC43MDAnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nZ3JheS41MCdcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz0nNSdcclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnZ3JheS41MCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYnJhbmQuNzAwJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDUklBUlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgIFNlIHRpdmVyIHVtYSBjb250YSwgY2xpcXVlIGFxdWlcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICA8L1ZTdGFjaz5cclxuXHJcbiAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkZvcm1payIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsIkJ1dHRvbiIsIkZvcm1FcnJvck1lc3NhZ2UiLCJGb3JtQ29udHJvbCIsIlNpZ25VcCIsIm5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsImFjdGlvbnMiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0U3VibWl0dGluZyIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiYmdDb2xvciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==