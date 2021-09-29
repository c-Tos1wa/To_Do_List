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
                lineNumber: 58,
                columnNumber: 18
              }, _this), console.log(errors), errors.name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormErrorMessage, {
                children: "errors.name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
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
                lineNumber: 71,
                columnNumber: 17
              }, _this), errors.username && touched.username && errors.username, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
                lineNumber: 83,
                columnNumber: 17
              }, _this), errors.email && touched.email && errors.email, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
                lineNumber: 95,
                columnNumber: 17
              }, _this), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit" //disabled={isSubmitting}
                ,
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
                lineNumber: 106,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: "Se tiver uma conta, clique aqui"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnblVwLmQwZWM0MjBhZmRmZDQwMGM5NjYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNNLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUNFLGVBQVMsRUFBQyxRQURaO0FBRUUsUUFBRSxFQUFDLEdBRkw7QUFHRSxjQUFRLEVBQUMsS0FIWDtBQUlFLGdCQUFVLEVBQUMsTUFKYjtBQUtFLGdCQUFVLEVBQUMsaUJBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFLDhEQUFDLG9EQUFEO0FBQVEsb0JBQWMsRUFBQyxRQUF2QjtBQUFnQyxnQkFBVSxFQUFDLFFBQTNDO0FBQW9ELFFBQUUsRUFBQyxHQUF2RDtBQUFBLDZCQUNBLDhEQUFDLDBDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNiQyxVQUFBQSxJQUFJLEVBQUUsRUFETztBQUViQyxVQUFBQSxRQUFRLEVBQUUsRUFGRztBQUdiQyxVQUFBQSxLQUFLLEVBQUUsRUFITTtBQUliQyxVQUFBQSxRQUFRLEVBQUU7QUFKRyxTQURqQjtBQU9HLGdCQUFRLEVBQUksa0JBQUFDLE1BQU0sRUFBSTtBQUNwQixjQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNDQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFDRCxjQUFHLENBQUNELE1BQU0sQ0FBQ0osSUFBWCxFQUFnQjtBQUNkSyxZQUFBQSxNQUFNLENBQUNMLElBQVAsR0FBYyxxQkFBZDtBQUNELFdBRkQsTUFFTSxJQUFJLENBQUNJLE1BQU0sQ0FBQ0gsUUFBWixFQUFxQjtBQUN6QkksWUFBQUEsTUFBTSxDQUFDSixRQUFQLEdBQWtCLCtCQUFsQjtBQUNELFdBRkssTUFFQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBWixFQUFrQjtBQUN2QkcsWUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUscUJBQWY7QUFDRCxXQUZNLE1BRUEsSUFDTixDQUFDLDJDQUEyQ00sSUFBM0MsQ0FBZ0RKLE1BQU0sQ0FBQ0YsS0FBdkQsQ0FESyxFQUVMO0FBQ0FHLFlBQUFBLE1BQU0sQ0FBQ0gsS0FBUCxHQUFlLGdCQUFmO0FBQ0QsV0FKTSxNQUtGLElBQUksQ0FBQ0UsTUFBTSxDQUFDRCxRQUFaLEVBQXFCO0FBQ3hCRSxZQUFBQSxNQUFNLENBQUNGLFFBQVAsR0FBa0IscUJBQWxCO0FBQ0QsV0FGSSxNQUVFLElBQUksQ0FBQywyQ0FBMkNLLElBQTNDLENBQWdESixNQUFNLENBQUNELFFBQXZELENBQUwsRUFBdUU7QUFDNUVFLFlBQUFBLE1BQU0sQ0FBQ0YsUUFBUCxHQUFrQiwrQ0FBbEI7QUFDRDs7QUFFRCxpQkFBT0UsTUFBUDtBQUNELFNBNUJKO0FBNkJHLGdCQUFRLEVBQUUsa0JBQUNELE1BQUQsRUFBU0ssT0FBVCxFQUFxQjtBQUM3QkMsVUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkMsWUFBQUEsS0FBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7QUFDQUssWUFBQUEsT0FBTyxDQUFDSyxhQUFSLENBQXNCLEtBQXRCO0FBQ0QsV0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlELFNBbENKO0FBQUEsa0JBbUNNO0FBQUEsY0FDQ1YsTUFERCxRQUNDQSxNQUREO0FBQUEsY0FDU0MsTUFEVCxRQUNTQSxNQURUO0FBQUEsY0FDaUJVLE9BRGpCLFFBQ2lCQSxPQURqQjtBQUFBLGNBQzBCQyxZQUQxQixRQUMwQkEsWUFEMUI7QUFBQSxjQUN3Q0MsVUFEeEMsUUFDd0NBLFVBRHhDO0FBQUEsY0FDb0RDLFlBRHBELFFBQ29EQSxZQURwRDtBQUFBLDhCQUdDO0FBQU0sb0JBQVEsRUFBRUEsWUFBaEI7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUFRLHFCQUFPLEVBQUMsR0FBaEI7QUFBb0Isd0JBQVUsRUFBQyxRQUEvQjtBQUF3Qyw0QkFBYyxFQUFDLFFBQXZEO0FBQUEsc0NBQ0UsOERBQUMsbURBQUQ7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxvQkFBSSxFQUFDLE1BRk47QUFHQyx3QkFBUSxFQUFFRixZQUhYO0FBSUMsc0JBQU0sRUFBRUMsVUFKVDtBQUtDLHFCQUFLLEVBQUViLE1BQU0sQ0FBQ0osSUFMZjtBQU1DLDJCQUFXLEVBQUMsMEJBTmI7QUFPQyx1QkFBTyxFQUFDLFNBUFQ7QUFRQyxvQkFBSSxFQUFFO0FBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQVdFTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQVhGLEVBWUVBLE1BQU0sQ0FBQ0wsSUFBUCxpQkFBZSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaakIsZUFjQyw4REFBQyxtREFBRDtBQUNFLG9CQUFJLEVBQUMsVUFEUDtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHdCQUFRLEVBQUVnQixZQUhaO0FBSUUsc0JBQU0sRUFBRUMsVUFKVjtBQUtFLHFCQUFLLEVBQUViLE1BQU0sQ0FBQ0gsUUFMaEI7QUFNRSwyQkFBVyxFQUFDLCtCQU5kO0FBT0UsdUJBQU8sRUFBQyxTQVBWO0FBUUUsb0JBQUksRUFBRTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEQsRUF3QkVJLE1BQU0sQ0FBQ0osUUFBUCxJQUFtQmMsT0FBTyxDQUFDZCxRQUEzQixJQUF1Q0ksTUFBTSxDQUFDSixRQXhCaEQsZUEwQkMsOERBQUMsbURBQUQ7QUFDRSxvQkFBSSxFQUFDLE9BRFA7QUFFRSxvQkFBSSxFQUFDLE9BRlA7QUFHRSx3QkFBUSxFQUFFZSxZQUhaO0FBSUUsc0JBQU0sRUFBRUMsVUFKVjtBQUtFLHFCQUFLLEVBQUdiLE1BQU0sQ0FBQ0YsS0FMakI7QUFNRSwyQkFBVyxFQUFDLGtCQU5kO0FBT0UsdUJBQU8sRUFBQyxTQVBWO0FBUUUsb0JBQUksRUFBRTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBMUJELEVBb0NFRyxNQUFNLENBQUNILEtBQVAsSUFBZ0JhLE9BQU8sQ0FBQ2IsS0FBeEIsSUFBaUNHLE1BQU0sQ0FBQ0gsS0FwQzFDLGVBc0NDLDhEQUFDLG1EQUFEO0FBQ0Usb0JBQUksRUFBQyxVQURQO0FBRUUsb0JBQUksRUFBQyxVQUZQO0FBR0Usd0JBQVEsRUFBRWMsWUFIWjtBQUlFLHNCQUFNLEVBQUVDLFVBSlY7QUFLRSxxQkFBSyxFQUFHYixNQUFNLENBQUNELFFBTGpCO0FBTUUsMkJBQVcsRUFBQyxrQkFOZDtBQU9FLHVCQUFPLEVBQUMsU0FQVjtBQVFFLG9CQUFJLEVBQUU7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRDRCxFQWdERUUsTUFBTSxDQUFDRixRQUFQLElBQW1CWSxPQUFPLENBQUNaLFFBQTNCLElBQXVDRSxNQUFNLENBQUNGLFFBaERoRCxlQWlEQyw4REFBQyxvREFBRDtBQUNBLG9CQUFJLEVBQUMsUUFETCxDQUVBO0FBRkE7QUFHQSxrQkFBRSxFQUFDLEdBSEg7QUFJQSxpQkFBQyxFQUFDLEdBSkY7QUFLQSx1QkFBTyxFQUFDLFdBTFI7QUFNQSxxQkFBSyxFQUFDLFNBTk47QUFPQSw0QkFBWSxFQUFDLEdBUGI7QUFRQSxzQkFBTSxFQUFFO0FBQ05nQixrQkFBQUEsT0FBTyxFQUFFLFNBREg7QUFFTkMsa0JBQUFBLEtBQUssRUFBRTtBQUZELGlCQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpERCxlQWlFRCw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFqRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRDtBQUFBO0FBbkNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQSxrQkFERjtBQWlJRDtLQWxJdUJyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduVXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7IElucHV0LCBUZXh0LCBWU3RhY2ssIEJ1dHRvbiwgRm9ybUVycm9yTWVzc2FnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgbXQ9JzUnXHJcbiAgICAgICAgZm9udFNpemU9JzJ4bCdcclxuICAgICAgICBmb250V2VpZ2h0PSdib2xkJ1xyXG4gICAgICAgIHRleHRTaGFkb3c9JzFweCAxcHggI0YwRkZGRidcclxuICAgICAgPlxyXG4gICAgICAgIENyaWUgc3VhIGNvbnRhXHJcbiAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgIDxWU3RhY2sganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBteT0nNSc+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICB9fVxyXG4gICAgICAgICB2YWxpZGF0ZT0geyB2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgICAgICAgICBpZighdmFsdWVzLm5hbWUpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLm5hbWUgPSAnTm9tZSDDqSBvYnJpZ2F0w7NyaW8uJ1xyXG4gICAgICAgICAgIH1lbHNlIGlmICghdmFsdWVzLnVzZXJuYW1lKXtcclxuICAgICAgICAgICAgIGVycm9ycy51c2VybmFtZSA9ICdOb21lIGRlIHVzdcOhcmlvIMOpIG9icmlnYXTDs3JpbydcclxuICAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZXMuZW1haWwpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIMOpIG9icmlnYXTDs3JpbydcclxuICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpbnbDoWxpZG8nXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGVsc2UgaWYgKCF2YWx1ZXMucGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1NlbmhhIMOpIG9icmlnYXTDs3JpYSdcclxuICAgICAgICAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1NlbmhhIGludsOhaWRhLiBUZW50ZSBjb20gdW0gY2FyYWN0ZXIgZXNwZWNpYWwnXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICByZXR1cm4gZXJyb3JzXHJcbiAgICAgICAgIH19XHJcbiAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKVxyXG4gICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxyXG4gICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgIH19PlxyXG4gICAgICAgICAgIHsoeyBcclxuICAgICAgICAgICAgIHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIsIGhhbmRsZVN1Ym1pdFxyXG4gICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzUnIGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBub21lIGNvbXBsZXRvJ1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdmbHVzaGVkJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPSAnbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGVycm9ycyl9XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPEZvcm1FcnJvck1lc3NhZ2U+ZXJyb3JzLm5hbWU8L0Zvcm1FcnJvck1lc3NhZ2U+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBub21lIGRlIHVzdcOhcmlvJ1xyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdmbHVzaGVkJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPSAnbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nZmx1c2hlZCdcclxuICAgICAgICAgICAgICAgICAgc2l6ZT0gJ2xnJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0RpZ2l0ZSB1bWEgc2VuaGEnXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2ZsdXNoZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ICdsZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgLy9kaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgbXQ9JzUnXHJcbiAgICAgICAgICAgICAgICBwPSczJ1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvcj0nYnJhbmQuNzAwJ1xyXG4gICAgICAgICAgICAgICAgY29sb3I9J2dyYXkuNTAnXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9JzUnXHJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgYmdDb2xvcjogJ2dyYXkuNTAnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JyYW5kLjcwMCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ1JJQVJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICBTZSB0aXZlciB1bWEgY29udGEsIGNsaXF1ZSBhcXVpXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcblxyXG4gICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICkgfVxyXG4gICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiRm9ybWlrIiwiSW5wdXQiLCJUZXh0IiwiVlN0YWNrIiwiQnV0dG9uIiwiRm9ybUVycm9yTWVzc2FnZSIsIlNpZ25VcCIsIm5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsImFjdGlvbnMiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0U3VibWl0dGluZyIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiYmdDb2xvciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==