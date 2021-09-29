"use strict";
(() => {
var exports = {};
exports.id = "pages/tarefas";
exports.ids = ["pages/tarefas"];
exports.modules = {

/***/ "./pages/tarefas.js":
/*!**************************!*\
  !*** ./pages/tarefas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\blue\\to_do\\To_Do_List\\pages\\tarefas.js";





const index = () => {
  const {
    0: userInput,
    1: setUserInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: todoList,
    1: setTodoList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodoList([userInput, ...todoList]);
    setUserInput('');
  };

  const handleDelete = todo => {
    const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo));
    setTodoList(updateArr);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: "Hora de organizar suas tarefas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      value: userInput,
      onChange: handleChange,
      placeholder: "Adicione uma tarefa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: handleSubmit,
      children: "Adicionar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      children: todoList.length >= 1 ? todoList.map((todo, idx) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [todo, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: e => {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Apagar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 40
          }, undefined)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }, undefined);
      }) : 'Registre uma tarefa'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/tarefas.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdGFyZWZhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBRUEsTUFBTUksS0FBSyxHQUFHLE1BQU07QUFFbEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFFQSxRQUFNO0FBQUEsT0FBQ08sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJSLCtDQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFQSxRQUFNUyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFMLElBQUFBLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNELEdBSkQ7O0FBTUEsUUFBTUMsWUFBWSxHQUFJSixDQUFELElBQU87QUFDMUJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBSCxJQUFBQSxXQUFXLENBQUMsQ0FDVkgsU0FEVSxFQUVWLEdBQUdFLFFBRk8sQ0FBRCxDQUFYO0FBS0FELElBQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7QUFDRCxHQVREOztBQVdBLFFBQU1TLFlBQVksR0FBSUMsSUFBRCxJQUFVO0FBQzdCLFVBQU1DLFNBQVMsR0FBR1YsUUFBUSxDQUFDVyxNQUFULENBQWdCQyxRQUFRLElBQUlaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkQsUUFBakIsS0FBOEJaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkosSUFBakIsQ0FBMUQsQ0FBbEI7QUFDQVIsSUFBQUEsV0FBVyxDQUFDUyxTQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRVosU0FBMUI7QUFBcUMsY0FBUSxFQUFFSSxZQUEvQztBQUE2RCxpQkFBVyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxvREFBRDtBQUFRLGFBQU8sRUFBRUssWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBLGdCQUVJUCxRQUFRLENBQUNjLE1BQVQsSUFBbUIsQ0FBbkIsR0FBdUJkLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLENBQUNOLElBQUQsRUFBT08sR0FBUCxLQUFlO0FBRWpELDRCQUFPO0FBQUEscUJBQWVQLElBQWYsZUFBb0IsOERBQUMsb0RBQUQ7QUFBUSxtQkFBTyxFQUFHTixDQUFELElBQU87QUFDakRBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSSxjQUFBQSxZQUFZLENBQUNDLElBQUQsQ0FBWjtBQUNELGFBSDBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFwQjtBQUFBLFdBQVNPLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUlELE9BTnNCLENBQXZCLEdBT0k7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsa0JBREY7QUFvQkQsQ0FoREQ7O0FBaURBLGlFQUFlbkIsS0FBZjs7Ozs7Ozs7OztBQ3BEQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9wYWdlcy90YXJlZmFzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RvZG8tbGlzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRleHQsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgc2V0VG9kb0xpc3QoW1xyXG4gICAgICB1c2VySW5wdXQsXHJcbiAgICAgIC4uLnRvZG9MaXN0XHJcbiAgICBdKVxyXG5cclxuICAgIHNldFVzZXJJbnB1dCgnJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVBcnIgPSB0b2RvTGlzdC5maWx0ZXIodG9kb0l0ZW0gPT4gdG9kb0xpc3QuaW5kZXhPZih0b2RvSXRlbSkgIT0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuICAgIHNldFRvZG9MaXN0KHVwZGF0ZUFycilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGV4dD5Ib3JhIGRlIG9yZ2FuaXphciBzdWFzIHRhcmVmYXM8L1RleHQ+XHJcbiAgICAgIDxJbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dXNlcklucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj0nQWRpY2lvbmUgdW1hIHRhcmVmYScgLz5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkFkaWNpb25hcjwvQnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49IDEgPyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+e3RvZG99PEJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICB9fT5BcGFnYXI8L0J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiAnUmVnaXN0cmUgdW1hIHRhcmVmYSdcclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRleHQiLCJCdXR0b24iLCJJbnB1dCIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=