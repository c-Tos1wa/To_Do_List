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
          children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
            bg: "gray.100",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
              spacing: "2rem",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
                variant: "solid",
                type: "name",
                name: "name",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.name,
                size: "lg",
                placeholder: "Digite seu nome"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
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
                lineNumber: 67,
                columnNumber: 12
              }, _this), errors.email && touched.email && errors.email, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
                type: "password",
                name: "password",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.password,
                size: "lg",
                placeholder: "E agora sua senha"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 12
              }, _this), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 12
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
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
                lineNumber: 92,
                columnNumber: 12
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMDA5NmY0NzRmYTJhMGM2NGVlNzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0MsSUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQTs7QUFBQSxzQkFDWjtBQUFBLDJCQUVDLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQXlCLGdCQUFVLEVBQUMseUNBQXBDO0FBQThFLFlBQU0sRUFBQztBQUFyRixnTEFBcUcsS0FBckcsa0xBQXlILFFBQXpILHNLQUFvSSxFQUFwSSwyTEFFQyw4REFBQyxxREFBRDtBQUFTLFFBQUUsRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBQyxLQUE1QjtBQUFrQyxnQkFBVSxFQUFDLFVBQTdDO0FBQXdELGdCQUFVLEVBQUMsT0FBbkU7QUFBMkUsUUFBRSxFQUFDLElBQTlFO0FBQW1GLGFBQU8sRUFBQyxHQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBTUMsOERBQUMsMENBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLFFBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFFBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsUUFBQUEsUUFBUSxFQUFFO0FBQWpDLE9BRGpCO0FBRUUsY0FBUSxFQUFFLGtCQUFBQyxNQUFNLEVBQUk7QUFDbEIsWUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0QsWUFBRyxDQUFDRCxNQUFNLENBQUNILElBQVgsRUFBZ0I7QUFDYkksVUFBQUEsTUFBTSxDQUFDSixJQUFQLEdBQWMsVUFBZDtBQUNBLFNBRkgsTUFFUyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBWixFQUFtQjtBQUN6QkcsVUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUsVUFBZjtBQUNELFNBRk8sTUFFRCxJQUNMLENBQUMsMkNBQTJDSSxJQUEzQyxDQUFnREYsTUFBTSxDQUFDRixLQUF2RCxDQURJLEVBRUw7QUFDQUcsVUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUsdUJBQWY7QUFDRDs7QUFDRCxlQUFPRyxNQUFQO0FBQ0QsT0FkSDtBQWVFLGNBQVEsRUFBRSxrQkFBQ0QsTUFBRCxRQUErQjtBQUFBLFlBQXBCRyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDdkNDLFFBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZDLFVBQUFBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBRCxDQUFMO0FBQ0FHLFVBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxTQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQsT0FwQkg7QUFBQSxnQkFzQkc7QUFBQSxZQUNDSCxNQURELFNBQ0NBLE1BREQ7QUFBQSxZQUVDQyxNQUZELFNBRUNBLE1BRkQ7QUFBQSxZQUdDTyxPQUhELFNBR0NBLE9BSEQ7QUFBQSxZQUlDQyxZQUpELFNBSUNBLFlBSkQ7QUFBQSxZQUtDQyxVQUxELFNBS0NBLFVBTEQ7QUFBQSxZQU1DQyxZQU5ELFNBTUNBLFlBTkQ7QUFBQSxZQU9DQyxZQVBELFNBT0NBLFlBUEQ7QUFBQSw0QkFZRDtBQUFNLGtCQUFRLEVBQUVELFlBQWhCO0FBQUEsMENBRUcsOERBQUMsaURBQUQ7QUFBSyxjQUFFLEVBQUMsVUFBUjtBQUFBLG1DQUVBLDhEQUFDLG9EQUFEO0FBQVEscUJBQU8sRUFBQyxNQUFoQjtBQUFBLHNDQUVFLDhEQUFDLG1EQUFEO0FBQ0EsdUJBQU8sRUFBQyxPQURSO0FBRUMsb0JBQUksRUFBQyxNQUZOO0FBR0Msb0JBQUksRUFBQyxNQUhOO0FBSUMsd0JBQVEsRUFBRUYsWUFKWDtBQUtDLHNCQUFNLEVBQUVDLFVBTFQ7QUFNQyxxQkFBSyxFQUFFVixNQUFNLENBQUNILElBTmY7QUFPQyxvQkFBSSxFQUFDLElBUE47QUFRQywyQkFBVyxFQUFDO0FBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixFQVlFSSxNQUFNLENBQUNKLElBQVAsSUFBZVcsT0FBTyxDQUFDWCxJQUF2QixJQUErQkksTUFBTSxDQUFDSixJQVp4QyxlQWNDLDhEQUFDLG1EQUFEO0FBQ0Usb0JBQUksRUFBQyxPQURQO0FBRUUsb0JBQUksRUFBQyxPQUZQO0FBR0Usd0JBQVEsRUFBRVksWUFIWjtBQUlFLHNCQUFNLEVBQUVDLFVBSlY7QUFLRSxxQkFBSyxFQUFFVixNQUFNLENBQUNGLEtBTGhCO0FBTUUsb0JBQUksRUFBQyxJQU5QO0FBT0UsMkJBQVcsRUFBQztBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEQsRUF3QkVHLE1BQU0sQ0FBQ0gsS0FBUCxJQUFnQlUsT0FBTyxDQUFDVixLQUF4QixJQUFpQ0csTUFBTSxDQUFDSCxLQXhCMUMsZUEwQkMsOERBQUMsbURBQUQ7QUFDRSxvQkFBSSxFQUFDLFVBRFA7QUFFRSxvQkFBSSxFQUFDLFVBRlA7QUFHRSx3QkFBUSxFQUFFVyxZQUhaO0FBSUUsc0JBQU0sRUFBRUMsVUFKVjtBQUtFLHFCQUFLLEVBQUVWLE1BQU0sQ0FBQ0QsUUFMaEI7QUFNRSxvQkFBSSxFQUFDLElBTlA7QUFPRSwyQkFBVyxFQUFDO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkExQkQsRUFtQ0VFLE1BQU0sQ0FBQ0YsUUFBUCxJQUFtQlMsT0FBTyxDQUFDVCxRQUEzQixJQUF1Q0UsTUFBTSxDQUFDRixRQW5DaEQsZUFxQ0MsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQ0QsZUF1Q0MsOERBQUMsb0RBQUQ7QUFBUSxzQkFBTSxFQUFDLE1BQWY7QUFBc0Isc0JBQU0sRUFBQyxLQUE3QjtBQUFtQywyQkFBVyxFQUFDLFdBQS9DO0FBQ0EsMkJBQVcsRUFBQyxXQURaO0FBQ3dCLG9CQUFJLEVBQUMsUUFEN0I7QUFDc0MsdUJBQU8sRUFBQyxTQUQ5QztBQUN3RCx3QkFBUSxFQUFFYSxZQURsRTtBQUVBLHNCQUFNLEVBQUMsVUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkM7QUFBQTtBQXRCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1oQjtBQXdHTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgSGVhZGluZywgQnV0dG9uLCBWU3RhY2ssIERpdmlkZXIsIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gXHJcbiBjb25zdCBCYXNpYyA9ICgpID0+IChcclxuICAgPGRpdj5cclxuICAgIFxyXG4gICAgPFZTdGFjayBzcGFjaW5nPScxLjVyZW0nIGJnR3JhZGllbnQ9J2xpbmVhci1ncmFkaWVudCg5MGRlZywjMTFBRUVCLCAjMzVGMzlEKScgaGVpZ2h0PScxMDB2aCcgc3BhY2luZz0nMi41JyBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nIHc9Jyc+XHJcblxyXG4gICAgIDxIZWFkaW5nIG10PSc0MHB4JyBmb250U2l6ZT1cIjR4bFwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxpbmVIZWlnaHQ9XCJzaG9ydFwiIG1iPSc1MCcgcGFkZGluZz0nNyc+XHJcbiAgICAgICBFbnRyZSBlIHZlamEgYXMgc3VhcyB0YXJlZmFzXHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICBcclxuICAgICA8Rm9ybWlrXHJcbiAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9fVxyXG4gICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGlmKCF2YWx1ZXMubmFtZSl7XHJcbiAgICAgICAgICAgZXJyb3JzLm5hbWUgPSAnUmVxdWlyZWQnOyBcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXHJcbiAgICAgICAgICkge1xyXG4gICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICB9fVxyXG4gICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgfX1cclxuICAgICA+XHJcbiAgICAgICB7KHtcclxuICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgIC8qIGFuZCBvdGhlciBnb29kaWVzICovXHJcbiAgICAgICB9KSA9PiAoXHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gICAgey8qIC8vIGNvbWXDp28gZG8gZm9ybSAgKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCb3ggYmc9J2dyYXkuMTAwJz5cclxuXHJcbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzJyZW0nID5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxyXG4gICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBub21lJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZX1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Fnb3JhIHNldSBlbWFpbCdcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFIGFnb3JhIHN1YSBzZW5oYSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgIDxCdXR0b24gaGVpZ2h0PVwiNDhweFwiIGJvcmRlcj1cIjJweFwiIGNvbG9yU2NoZW1lPSdicmFuZC44MDAnIFxyXG4gICAgICAgICAgIGJvcmRlckNvbG9yPVwiYnJhbmQuODAwXCIgdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gXHJcbiAgICAgICAgICAgX2hvdmVyPSdncmF5LjIwMCdcclxuICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICl9XHJcbiAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiApO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBCYXNpYzsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlZTdGFjayIsIkRpdmlkZXIiLCJCb3giLCJCYXNpYyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwiZXJyb3JzIiwidGVzdCIsInNldFN1Ym1pdHRpbmciLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwidG91Y2hlZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciXSwic291cmNlUm9vdCI6IiJ9