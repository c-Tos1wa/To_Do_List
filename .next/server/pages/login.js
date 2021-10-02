"use strict";
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\blue\\turma01-modulo06\\To_Do_List\\pages\\login.js";





const Basic = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    spacing: "1.5rem",
    bgGradient: "linear-gradient(90deg,#11AEEB, #35F39D)",
    height: "100vh",
    spacing: "2.5",
    flexDirection: "column",
    w: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      validate: values => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Required';
        } else if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        return errors;
      },
      onSubmit: (values, {
        setSubmitting
      }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      },
      children: ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */

      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
          bg: "gray.100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
            spacing: "2rem",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
              variant: "subtle",
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
            }, undefined), errors.name && touched.name && errors.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
              variant: "subtle",
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
            }, undefined), errors.email && touched.email && errors.email, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
              variant: "subtle",
              type: "password",
              name: "password",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.password,
              size: "lg",
              placeholder: "E agora sua senha"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 12
            }, undefined), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              height: "48px",
              border: "2px",
              colorScheme: "brand.800",
              variant: "subtle",
              borderColor: "brand.800",
              type: "submit",
              variant: "outline",
              disabled: isSubmitting,
              _hover: "gray.200",
              children: "Cadastrar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 4
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basic);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEscUJBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQTBHQSxpRUFBZWhCLEtBQWY7Ozs7Ozs7Ozs7QUMvR0Q7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgSGVhZGluZywgQnV0dG9uLCBWU3RhY2ssIERpdmlkZXIsIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gXHJcbiBjb25zdCBCYXNpYyA9ICgpID0+IChcclxuICAgPGRpdj5cclxuICAgIFxyXG4gICAgPFZTdGFjayBzcGFjaW5nPScxLjVyZW0nIGJnR3JhZGllbnQ9J2xpbmVhci1ncmFkaWVudCg5MGRlZywjMTFBRUVCLCAjMzVGMzlEKScgaGVpZ2h0PScxMDB2aCcgc3BhY2luZz0nMi41JyBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nIHc9Jyc+XHJcblxyXG4gICAgIDxIZWFkaW5nIG10PSc0MHB4JyBmb250U2l6ZT1cIjR4bFwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxpbmVIZWlnaHQ9XCJzaG9ydFwiIG1iPSc1MCcgcGFkZGluZz0nNyc+XHJcbiAgICAgICBFbnRyZSBlIHZlamEgYXMgc3VhcyB0YXJlZmFzXHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICBcclxuICAgICA8Rm9ybWlrXHJcbiAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9fVxyXG4gICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGlmKCF2YWx1ZXMubmFtZSl7XHJcbiAgICAgICAgICAgZXJyb3JzLm5hbWUgPSAnUmVxdWlyZWQnOyBcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXHJcbiAgICAgICAgICkge1xyXG4gICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICB9fVxyXG4gICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgfX1cclxuICAgICA+XHJcbiAgICAgICB7KHtcclxuICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgIC8qIGFuZCBvdGhlciBnb29kaWVzICovXHJcbiAgICAgICB9KSA9PiAoXHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gICAgey8qIC8vIGNvbWXDp28gZG8gZm9ybSAgKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCb3ggYmc9J2dyYXkuMTAwJz5cclxuXHJcbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzJyZW0nID5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdmFyaWFudD1cInN1YnRsZVwiXHJcbiAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdmFyaWFudD1cInN1YnRsZVwiXHJcbiAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZ29yYSBzZXUgZW1haWwnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdmFyaWFudD1cInN1YnRsZVwiXHJcbiAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFIGFnb3JhIHN1YSBzZW5oYSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgIDxCdXR0b24gaGVpZ2h0PVwiNDhweFwiIGJvcmRlcj1cIjJweFwiIGNvbG9yU2NoZW1lPSdicmFuZC44MDAnIHZhcmlhbnQ9XCJzdWJ0bGVcIlxyXG4gICAgICAgICAgIGJvcmRlckNvbG9yPVwiYnJhbmQuODAwXCIgdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gXHJcbiAgICAgICAgICAgX2hvdmVyPSdncmF5LjIwMCdcclxuICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICl9XHJcbiAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiApO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBCYXNpYzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIkhlYWRpbmciLCJCdXR0b24iLCJWU3RhY2siLCJEaXZpZGVyIiwiQm94IiwiQmFzaWMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsImVycm9ycyIsInRlc3QiLCJzZXRTdWJtaXR0aW5nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==