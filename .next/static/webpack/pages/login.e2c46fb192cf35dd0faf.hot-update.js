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
            background: "whiteAlpha.50",
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
              placeholder: "E agora sua senha"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 12
            }, _this), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
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
              lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZTJjNDZmYjE5MmNmMzVkZDBmYWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0MsSUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQTs7QUFBQSxzQkFDWjtBQUFBLDJCQUVDLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQXlCLGdCQUFVLEVBQUMseUNBQXBDO0FBQThFLFlBQU0sRUFBQztBQUFyRixnTEFBcUcsS0FBckcsa0xBQXlILFFBQXpILHNLQUFvSSxFQUFwSSwyTEFFQyw4REFBQyxxREFBRDtBQUFTLFFBQUUsRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBQyxLQUE1QjtBQUFrQyxnQkFBVSxFQUFDLFVBQTdDO0FBQXdELGdCQUFVLEVBQUMsT0FBbkU7QUFBMkUsUUFBRSxFQUFDLElBQTlFO0FBQW1GLGFBQU8sRUFBQyxHQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBTUMsOERBQUMsMENBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLFFBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLFFBQUFBLEtBQUssRUFBRSxFQUFuQjtBQUF1QkMsUUFBQUEsUUFBUSxFQUFFO0FBQWpDLE9BRGpCO0FBRUUsY0FBUSxFQUFFLGtCQUFBQyxNQUFNLEVBQUk7QUFDbEIsWUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0QsWUFBRyxDQUFDRCxNQUFNLENBQUNILElBQVgsRUFBZ0I7QUFDYkksVUFBQUEsTUFBTSxDQUFDSixJQUFQLEdBQWMsVUFBZDtBQUNBLFNBRkgsTUFFUyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBWixFQUFtQjtBQUN6QkcsVUFBQUEsTUFBTSxDQUFDSCxLQUFQLEdBQWUsVUFBZjtBQUNELFNBRk8sTUFFRCxJQUNMLENBQUMsMkNBQTJDSSxJQUEzQyxDQUFnREYsTUFBTSxDQUFD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O0FBQUEsaUJBWkM7QUFBQTtBQXRCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1oQjtBQW1HTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgSGVhZGluZywgQnV0dG9uLCBWU3RhY2ssIERpdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuIFxyXG4gY29uc3QgQmFzaWMgPSAoKSA9PiAoXHJcbiAgIDxkaXY+XHJcbiAgICBcclxuICAgIDxWU3RhY2sgc3BhY2luZz0nMS41cmVtJyBiZ0dyYWRpZW50PSdsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzExQUVFQiwgIzM1RjM5RCknIGhlaWdodD0nMTAwdmgnIHNwYWNpbmc9JzIuNScgZmxleERpcmVjdGlvbj0nY29sdW1uJyB3PScnPlxyXG5cclxuICAgICA8SGVhZGluZyBtdD0nNDBweCcgZm9udFNpemU9XCI0eGxcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBsaW5lSGVpZ2h0PVwic2hvcnRcIiBtYj0nNTAnIHBhZGRpbmc9JzcnPlxyXG4gICAgICAgRW50cmUgZSB2ZWphIGFzIHN1YXMgdGFyZWZhc1xyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgXHJcbiAgICAgPEZvcm1pa1xyXG4gICAgICAgaW5pdGlhbFZhbHVlcz17eyBuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfX1cclxuICAgICAgIHZhbGlkYXRlPXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBpZighdmFsdWVzLm5hbWUpe1xyXG4gICAgICAgICAgIGVycm9ycy5uYW1lID0gJ1JlcXVpcmVkJzsgXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICApIHtcclxuICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICAgfX1cclxuICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgIH19XHJcbiAgICAgPlxyXG4gICAgICAgeyh7XHJcbiAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAvKiBhbmQgb3RoZXIgZ29vZGllcyAqL1xyXG4gICAgICAgfSkgPT4gKFxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+ICAgIHsvKiAvLyBjb21lw6dvIGRvIGZvcm0gICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzJyZW0nIGJhY2tncm91bmQ9J3doaXRlQWxwaGEuNTAnPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWdvcmEgc2V1IGVtYWlsJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0UgYWdvcmEgc3VhIHNlbmhhJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgPEJ1dHRvbiBoZWlnaHQ9XCI0OHB4XCIgYm9yZGVyPVwiMnB4XCIgY29sb3JTY2hlbWU9J2JyYW5kLjgwMCcgXHJcbiAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJicmFuZC44MDBcIiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBcclxuICAgICAgICAgICBfaG92ZXI9J2dyYXkuMjAwJ1xyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICl9XHJcbiAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiApO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBCYXNpYzsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlZTdGFjayIsIkRpdmlkZXIiLCJCYXNpYyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwiZXJyb3JzIiwidGVzdCIsInNldFN1Ym1pdHRpbmciLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwidG91Y2hlZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciXSwic291cmNlUm9vdCI6IiJ9