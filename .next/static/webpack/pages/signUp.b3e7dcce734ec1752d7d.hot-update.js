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
                children: errors.name && errors.touched
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnblVwLmIzZTdkY2NlNzM0ZWMxNzUyZDdkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUNFLGVBQVMsRUFBQyxRQURaO0FBRUUsUUFBRSxFQUFDLEdBRkw7QUFHRSxjQUFRLEVBQUMsS0FIWDtBQUlFLGdCQUFVLEVBQUMsTUFKYjtBQUtFLGdCQUFVLEVBQUMsaUJBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLDhEQUFDLG9EQUFEO0FBQVEsb0JBQWMsRUFBQyxRQUF2QjtBQUFnQyxnQkFBVSxFQUFDLFFBQTNDO0FBQW9ELFFBQUUsRUFBQyxHQUF2RDtBQUFBLDZCQUNBLDhEQUFDLDBDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNiQyxVQUFBQSxJQUFJLEVBQUUsRUFETztBQUViQyxVQUFBQSxRQUFRLEVBQUUsRUFGRztBQUdiQyxVQUFBQSxLQUFLLEVBQUUsRUFITTtBQUliQyxVQUFBQSxRQUFRLEVBQUU7QUFKRyxTQURqQjtBQU9HLGdCQUFRLEVBQUksa0JBQUFDLE1BQU0sRUFBSTtBQUNwQixjQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNDQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFDRCxjQUFHLENBQUNELE1BQU0sQ0FBQ0osSUFBWCxFQUFnQjtBQUNkSyxZQUFBQSxNQUFNLENBQUNMLElBQVAsR0FBYyxxQkFBZDtBQUNEOztBQUFBLGNBQUksQ0FBQ0ksTUFBTSxDQUFDSCxRQUFaLEVBQXFCO0FBQ3BCSSxZQUFBQSxNQUFNLENBQUNKLFFBQVAsR0FBa0IsK0JBQWxCO0FBQ0Q7O0FBQUMsY0FBSSxDQUFDRyxNQUFNLENBQUNGLEtBQVosRUFBa0I7QUFDbEJHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLHFCQUFmO0FBQ0QsV0FGQyxNQUVLLElBQ04sQ0FBQywyQ0FBMkNNLElBQTNDLENBQWdESixNQUFNLENBQUNGLEtBQXZELENBREssRUFFTDtBQUNBRyxZQUFBQSxNQUFNLENBQUNILEtBQVAsR0FBZSxnQkFBZjtBQUNEOztBQUNELGNBQUksQ0FBQ0UsTUFBTSxDQUFDRCxRQUFaLEVBQXFCO0FBQ25CRSxZQUFBQSxNQUFNLENBQUNGLFFBQVAsR0FBa0IscUJBQWxCO0FBQ0QsV0FGRCxNQUVPLElBQUksQ0FBQywyQ0FBMkNLLElBQTNDLENBQWdESixNQUFNLENBQUNELFFBQXZELENBQUwsRUFBdUU7QUFDNUVFLFlBQUFBLE1BQU0sQ0FBQ0YsUUFBUCxHQUFrQiwrQ0FBbEI7QUFDRDs7QUFDRCxpQkFBT0UsTUFBUDtBQUNELFNBM0JKO0FBNEJHLGdCQUFRLEVBQUUsa0JBQUNELE1BQUQsRUFBU0ssT0FBVCxFQUFxQjtBQUM3QkMsVUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkMsWUFBQUEsS0FBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7QUFDQUssWUFBQUEsT0FBTyxDQUFDSyxhQUFSLENBQXNCLEtBQXRCO0FBQ0QsV0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlELFNBakNKO0FBQUEsa0JBa0NNO0FBQUEsY0FDQ1YsTUFERCxRQUNDQSxNQUREO0FBQUEsY0FDU0MsTUFEVCxRQUNTQSxNQURUO0FBQUEsY0FDaUJVLE9BRGpCLFFBQ2lCQSxPQURqQjtBQUFBLGNBQzBCQyxZQUQxQixRQUMwQkEsWUFEMUI7QUFBQSxjQUN3Q0MsVUFEeEMsUUFDd0NBLFVBRHhDO0FBQUEsY0FDb0RDLFlBRHBELFFBQ29EQSxZQURwRDtBQUFBLDhCQUdDO0FBQU0sb0JBQVEsRUFBRUEsWUFBaEI7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUFRLHFCQUFPLEVBQUMsR0FBaEI7QUFBb0Isd0JBQVUsRUFBQyxRQUEvQjtBQUF3Qyw0QkFBYyxFQUFDLFFBQXZEO0FBQUEsc0NBRUUsOERBQUMsbURBQUQ7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxvQkFBSSxFQUFDLE1BRk47QUFHQyx3QkFBUSxFQUFFRixZQUhYO0FBSUMsc0JBQU0sRUFBRUMsVUFKVDtBQUtDLHFCQUFLLEVBQUViLE1BQU0sQ0FBQ0osSUFMZjtBQU1DLDJCQUFXLEVBQUMsMEJBTmI7QUFPQyx1QkFBTyxFQUFDLFNBUFQ7QUFRQyxvQkFBSSxFQUFFO0FBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQVlDLDhEQUFDLGtEQUFEO0FBQUEsMEJBQU9LLE1BQU0sQ0FBQ0wsSUFBUCxJQUFlSyxNQUFNLENBQUNVO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkQsZUFhQyw4REFBQyxtREFBRDtBQUNFLG9CQUFJLEVBQUMsVUFEUDtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHdCQUFRLEVBQUVDLFlBSFo7QUFJRSxzQkFBTSxFQUFFQyxVQUpWO0FBS0UscUJBQUssRUFBRWIsTUFBTSxDQUFDSCxRQUxoQjtBQU1FLDJCQUFXLEVBQUMsK0JBTmQ7QUFPRSx1QkFBTyxFQUFDLFNBUFY7QUFRRSxvQkFBSSxFQUFFO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRCxlQXVCQyw4REFBQyxrREFBRDtBQUFBLDBCQUFPSSxNQUFNLENBQUNKO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF2QkQsZUF5QkMsOERBQUMsbURBQUQ7QUFDRSxvQkFBSSxFQUFDLE9BRFA7QUFFRSxvQkFBSSxFQUFDLE9BRlA7QUFHRSx3QkFBUSxFQUFFZSxZQUhaO0FBSUUsc0JBQU0sRUFBRUMsVUFKVjtBQUtFLHFCQUFLLEVBQUdiLE1BQU0sQ0FBQ0YsS0FMakI7QUFNRSwyQkFBVyxFQUFDLGtCQU5kO0FBT0UsdUJBQU8sRUFBQyxTQVBWO0FBUUUsb0JBQUksRUFBRTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBekJELGVBbUNDLDhEQUFDLGtEQUFEO0FBQUEsMEJBQU9HLE1BQU0sQ0FBQ0g7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5DRCxlQXFDQyw4REFBQyxtREFBRDtBQUNFLG9CQUFJLEVBQUMsVUFEUDtBQUVFLG9CQUFJLEVBQUMsVUFGUDtBQUdFLHdCQUFRLEVBQUVjLFlBSFo7QUFJRSxzQkFBTSxFQUFFQyxVQUpWO0FBS0UscUJBQUssRUFBR2IsTUFBTSxDQUFDRCxRQUxqQjtBQU1FLDJCQUFXLEVBQUMsa0JBTmQ7QUFPRSx1QkFBTyxFQUFDLFNBUFY7QUFRRSxvQkFBSSxFQUFFO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQ0QsZUErQ0MsOERBQUMsa0RBQUQ7QUFBQSwwQkFBT0UsTUFBTSxDQUFDRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBL0NELGVBaURDLDhEQUFDLG9EQUFEO0FBQ0Esb0JBQUksRUFBQyxRQURMO0FBRUEsa0JBQUUsRUFBQyxHQUZIO0FBR0EsaUJBQUMsRUFBQyxHQUhGO0FBSUEsdUJBQU8sRUFBQyxXQUpSO0FBS0EscUJBQUssRUFBQyxTQUxOO0FBTUEsNEJBQVksRUFBQyxHQU5iO0FBT0Esc0JBQU0sRUFBRTtBQUNOZ0Isa0JBQUFBLE9BQU8sRUFBRSxTQURIO0FBRU5DLGtCQUFBQSxLQUFLLEVBQUU7QUFGRCxpQkFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFqREQsZUFnRUQsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaEVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQ7QUFBQTtBQWxDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUEsa0JBREY7QUErSEQ7S0FoSXVCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnblVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IHsgSW5wdXQsIFRleHQsIFZTdGFjaywgQnV0dG9uLCBGb3JtRXJyb3JNZXNzYWdlLCBGb3JtQ29udHJvbCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgbXQ9JzUnXHJcbiAgICAgICAgZm9udFNpemU9JzJ4bCdcclxuICAgICAgICBmb250V2VpZ2h0PSdib2xkJ1xyXG4gICAgICAgIHRleHRTaGFkb3c9JzFweCAxcHggI0YwRkZGRidcclxuICAgICAgPlxyXG4gICAgICAgIENyaWUgc3VhIGNvbnRhXHJcbiAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgIDxWU3RhY2sganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBteT0nNSc+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICB9fVxyXG4gICAgICAgICB2YWxpZGF0ZT0geyB2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgICAgICAgICBpZighdmFsdWVzLm5hbWUpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLm5hbWUgPSAnTm9tZSDDqSBvYnJpZ2F0w7NyaW8uJ1xyXG4gICAgICAgICAgIH1pZiAoIXZhbHVlcy51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICBlcnJvcnMudXNlcm5hbWUgPSAnTm9tZSBkZSB1c3XDoXJpbyDDqSBvYnJpZ2F0w7NyaW8nXHJcbiAgICAgICAgICAgfSBpZiAoIXZhbHVlcy5lbWFpbCl7XHJcbiAgICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgw6kgb2JyaWdhdMOzcmlvJ1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGludsOhbGlkbydcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1NlbmhhIMOpIG9icmlnYXTDs3JpYSdcclxuICAgICAgICAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1NlbmhhIGludsOhaWRhLiBUZW50ZSBjb20gdW0gY2FyYWN0ZXIgZXNwZWNpYWwnXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHJldHVybiBlcnJvcnNcclxuICAgICAgICAgfX1cclxuICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpXHJcbiAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgeyh7IFxyXG4gICAgICAgICAgICAgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciwgaGFuZGxlU3VibWl0XHJcbiAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz0nNScgYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUgY29tcGxldG8nXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2ZsdXNoZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ICdsZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLnRvdWNoZWR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUgZGUgdXN1w6FyaW8nXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2ZsdXNoZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ICdsZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57ZXJyb3JzLnVzZXJuYW1lfTwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nZmx1c2hlZCdcclxuICAgICAgICAgICAgICAgICAgc2l6ZT0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0PntlcnJvcnMuZW1haWx9PC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgdW1hIHNlbmhhJ1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdmbHVzaGVkJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPSAnbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2Vycm9ycy5wYXNzd29yZH08L1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgbXQ9JzUnXHJcbiAgICAgICAgICAgICAgICBwPSczJ1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvcj0nYnJhbmQuNzAwJ1xyXG4gICAgICAgICAgICAgICAgY29sb3I9J2dyYXkuNTAnXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9JzUnXHJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgYmdDb2xvcjogJ2dyYXkuNTAnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JyYW5kLjcwMCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ1JJQVJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICBTZSB0aXZlciB1bWEgY29udGEsIGNsaXF1ZSBhcXVpXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcblxyXG4gICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICl9XHJcbiAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICA8L1ZTdGFjaz5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJGb3JtaWsiLCJJbnB1dCIsIlRleHQiLCJWU3RhY2siLCJCdXR0b24iLCJGb3JtRXJyb3JNZXNzYWdlIiwiRm9ybUNvbnRyb2wiLCJTaWduVXAiLCJuYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwiZXJyb3JzIiwiY29uc29sZSIsImxvZyIsInRlc3QiLCJhY3Rpb25zIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFN1Ym1pdHRpbmciLCJ0b3VjaGVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImJnQ29sb3IiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=