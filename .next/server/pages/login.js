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
var _jsxFileName = "C:\\blue\\to_do\\To_Do_List\\pages\\login.js";





const Basic = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    spacing: "1.5rem",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      mt: "40px",
      fontSize: "4xl",
      fontWeight: "semibold",
      lineHeight: "short",
      children: "Entre e veja as suas tarefas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
        children: ["    ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          spacing: "2rem",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
          }, undefined), errors.name && touched.name && errors.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
          }, undefined), errors.email && touched.email && errors.email, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
          }, undefined), errors.password && touched.password && errors.password, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
              href: "./signUp",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                children: "Clique aqui se ainda n\xE3o tiver uma conta."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 14
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 12
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBMaW5rLCBUZXh0LCBJbnB1dCwgSGVhZGluZywgQnV0dG9uLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuIFxyXG4gY29uc3QgQmFzaWMgPSAoKSA9PiAoXHJcbiAgIDxkaXY+XHJcbiAgICA8VlN0YWNrIHNwYWNpbmc9JzEuNXJlbScgPlxyXG5cclxuICAgICA8SGVhZGluZyBtdD0nNDBweCcgZm9udFNpemU9XCI0eGxcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBsaW5lSGVpZ2h0PVwic2hvcnRcIj5cclxuICAgICAgIEVudHJlIGUgdmVqYSBhcyBzdWFzIHRhcmVmYXNcclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgIFxyXG4gICAgIDxGb3JtaWtcclxuICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XHJcbiAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcclxuICAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgaWYoIXZhbHVlcy5uYW1lKXtcclxuICAgICAgICAgICBlcnJvcnMubmFtZSA9ICdSZXF1aXJlZCc7IFxyXG4gICAgICAgICAgfSBlbHNlIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ1JlcXVpcmVkJztcclxuICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgIH19XHJcbiAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICB9fVxyXG4gICAgID5cclxuICAgICAgIHsoe1xyXG4gICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgLyogYW5kIG90aGVyIGdvb2RpZXMgKi9cclxuICAgICAgIH0pID0+IChcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PiAgICB7LyogLy8gY29tZcOnbyBkbyBmb3JtICAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFZTdGFjayBzcGFjaW5nPScycmVtJz5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlnaXRlIHNldSBub21lJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZX1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Fnb3JhIHNldSBlbWFpbCdcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFIGFnb3JhIHN1YSBzZW5oYSdcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgPEJ1dHRvbiBoZWlnaHQ9XCI0OHB4XCIgYm9yZGVyPVwiMnB4XCIgY29sb3I9J2JyYW5kLjgwMCcgXHJcbiAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJicmFuZC44MDBcIiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBcclxuICAgICAgICAgICBfaG92ZXI9J2dyYXkuMjAwJ1xyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj0nLi9zaWduVXAnPlxyXG4gICAgICAgICAgICAgIDxhPkNsaXF1ZSBhcXVpIHNlIGFpbmRhIG7Do28gdGl2ZXIgdW1hIGNvbnRhLjwvYT5cclxuICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICl9XHJcbiAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiApO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBCYXNpYzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiTGluayIsIlRleHQiLCJJbnB1dCIsIkhlYWRpbmciLCJCdXR0b24iLCJWU3RhY2siLCJCYXNpYyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwiZXJyb3JzIiwidGVzdCIsInNldFN1Ym1pdHRpbmciLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwidG91Y2hlZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciXSwic291cmNlUm9vdCI6IiJ9