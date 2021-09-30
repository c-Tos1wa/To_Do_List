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
      columnNumber: 7
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
            columnNumber: 15
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
            columnNumber: 15
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
            columnNumber: 15
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
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "./signUp",
              children: "Clique aqui se ainda n\xE3o tiver uma conta."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2luLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RvZG8tbGlzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IExpbmssIFRleHQsIElucHV0LCBIZWFkaW5nLCBCdXR0b24sIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgQmFzaWMgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxWU3RhY2sgc3BhY2luZz0nMS41cmVtJyA+XHJcblxyXG4gICAgICA8SGVhZGluZyBtdD0nNDBweCcgZm9udFNpemU9XCI0eGxcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBsaW5lSGVpZ2h0PVwic2hvcnRcIj5cclxuICAgICAgICBFbnRyZSBlIHZlamEgYXMgc3VhcyB0YXJlZmFzXHJcbiAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9fVxyXG4gICAgICAgIHZhbGlkYXRlPXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgICBpZiAoIXZhbHVlcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5uYW1lID0gJ1JlcXVpcmVkJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7XHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgIC8qIGFuZCBvdGhlciBnb29kaWVzICovXHJcbiAgICAgICAgfSkgPT4gKFxyXG5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gICAgey8qIC8vIGNvbWXDp28gZG8gZm9ybSAgKi99XHJcblxyXG4gICAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzJyZW0nPlxyXG5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0RpZ2l0ZSBzZXUgbm9tZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWV9XHJcblxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWdvcmEgc2V1IGVtYWlsJ1xyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFIGFnb3JhIHN1YSBzZW5oYSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBoZWlnaHQ9XCI0OHB4XCIgYm9yZGVyPVwiMnB4XCIgY29sb3I9J2JyYW5kLjgwMCdcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiYnJhbmQuODAwXCIgdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgIF9ob3Zlcj0nZ3JheS4yMDAnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScuL3NpZ25VcCc+Q2xpcXVlIGFxdWkgc2UgYWluZGEgbsOjbyB0aXZlciB1bWEgY29udGEuPC9hPlxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgPC9WU3RhY2s+XHJcblxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1payIsIkxpbmsiLCJUZXh0IiwiSW5wdXQiLCJIZWFkaW5nIiwiQnV0dG9uIiwiVlN0YWNrIiwiQmFzaWMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsImVycm9ycyIsInRlc3QiLCJzZXRTdWJtaXR0aW5nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==