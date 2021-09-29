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
            children: "Cadastrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsS0F2QjFDLGVBd0JDLDhEQUFDLG1EQUFEO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsZ0JBQUksRUFBQyxVQUZQO0FBR0Usb0JBQVEsRUFBRVcsWUFIWjtBQUlFLGtCQUFNLEVBQUVDLFVBSlY7QUFLRSxpQkFBSyxFQUFFVixNQUFNLENBQUNELFFBTGhCO0FBTUUsZ0JBQUksRUFBQyxJQU5QO0FBT0UsdUJBQVcsRUFBQztBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJELEVBaUNFRSxNQUFNLENBQUNGLFFBQVAsSUFBbUJTLE9BQU8sQ0FBQ1QsUUFBM0IsSUFBdUNFLE1BQU0sQ0FBQ0YsUUFqQ2hELGVBa0NDLDhEQUFDLG9EQUFEO0FBQVEsa0JBQU0sRUFBQyxNQUFmO0FBQXNCLGtCQUFNLEVBQUMsS0FBN0I7QUFBbUMsaUJBQUssRUFBQyxXQUF6QztBQUNBLHVCQUFXLEVBQUMsV0FEWjtBQUN3QixnQkFBSSxFQUFDLFFBRDdCO0FBQ3NDLG1CQUFPLEVBQUMsU0FEOUM7QUFDd0Qsb0JBQVEsRUFBRWEsWUFEbEU7QUFFQSxrQkFBTSxFQUFDLFVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBOEZBLGlFQUFlaEIsS0FBZjs7Ozs7Ozs7OztBQ25HRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RvZG8tbGlzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBIZWFkaW5nLCBCdXR0b24sIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4gXHJcbiBjb25zdCBCYXNpYyA9ICgpID0+IChcclxuICAgPGRpdj5cclxuICAgIDxWU3RhY2sgc3BhY2luZz0nMS41cmVtJyA+XHJcblxyXG4gICAgIDxIZWFkaW5nIG10PSc0MHB4JyBmb250U2l6ZT1cIjR4bFwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxpbmVIZWlnaHQ9XCJzaG9ydFwiPlxyXG4gICAgICAgRW50cmUgZSB2ZWphIGFzIHN1YXMgdGFyZWZhc1xyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgXHJcbiAgICAgPEZvcm1pa1xyXG4gICAgICAgaW5pdGlhbFZhbHVlcz17eyBuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfX1cclxuICAgICAgIHZhbGlkYXRlPXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBpZighdmFsdWVzLm5hbWUpe1xyXG4gICAgICAgICAgIGVycm9ycy5uYW1lID0gJ1JlcXVpcmVkJzsgXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICApIHtcclxuICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICAgfX1cclxuICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgIH19XHJcbiAgICAgPlxyXG4gICAgICAgeyh7XHJcbiAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAvKiBhbmQgb3RoZXIgZ29vZGllcyAqL1xyXG4gICAgICAgfSkgPT4gKFxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+ICAgIHsvKiAvLyBjb21lw6dvIGRvIGZvcm0gICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9JzJyZW0nPlxyXG5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaWdpdGUgc2V1IG5vbWUnXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWdvcmEgc2V1IGVtYWlsJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0UgYWdvcmEgc3VhIHNlbmhhJ1xyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICA8QnV0dG9uIGhlaWdodD1cIjQ4cHhcIiBib3JkZXI9XCIycHhcIiBjb2xvcj0nYnJhbmQuODAwJyBcclxuICAgICAgICAgICBib3JkZXJDb2xvcj1cImJyYW5kLjgwMFwiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IFxyXG4gICAgICAgICAgIF9ob3Zlcj0nZ3JheS4yMDAnXHJcbiAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgKX1cclxuICAgICA8L0Zvcm1paz5cclxuXHJcbiAgICA8L1ZTdGFjaz5cclxuICAgIFxyXG4gICA8L2Rpdj5cclxuICk7XHJcbiBcclxuIGV4cG9ydCBkZWZhdWx0IEJhc2ljOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiSGVhZGluZyIsIkJ1dHRvbiIsIlZTdGFjayIsIkJhc2ljIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3VjaGVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyJdLCJzb3VyY2VSb290IjoiIn0=