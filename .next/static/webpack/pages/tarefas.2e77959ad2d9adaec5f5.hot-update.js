"use strict";
self["webpackHotUpdate_N_E"]("pages/tarefas",{

/***/ "./pages/tarefas.js":
/*!**************************!*\
  !*** ./pages/tarefas.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_blue_to_do_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\blue\\to_do\\To_Do_List\\pages\\tarefas.js",
    _this = undefined,
    _s = $RefreshSig$();






var index = function index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      userInput = _useState[0],
      setUserInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value); // console.log(userInput)
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setTodoList([userInput].concat((0,C_blue_to_do_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(todoList)));
    setUserInput('');
  };

  var handleDelete = function handleDelete(todo) {
    var updateArr = todoList.filter(function (todoItem) {
      return todoList.indexOf(todoItem) != todoList.indexOf(todo);
    });
    setTodoList(updateArr);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
      children: "Hora de organizar suas tarefas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "text",
        value: userInput,
        onChange: handleChange,
        placeholder: "Adicione uma tarefa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: handleSubmit,
        children: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      children: todoList.length >= 1 ? todoList.map(function (todo, idx) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          children: [todo, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
            onClick: function onClick(e) {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Apagar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 40
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }, _this);
      }) : 'Registre uma tarefa'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(index, "In0CfmjzHYwZeIgaI5r9wD0TDjs=");

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFyZWZhcy4yZTc3OTU5YWQyZDlhZGFlYzVmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFbEIsa0JBQWtDSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPSyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLG1CQUFnQ04sK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBTCxJQUFBQSxZQUFZLENBQUNJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVosQ0FIMEIsQ0FJMUI7QUFDRCxHQUxEOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQsRUFBTztBQUMxQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFILElBQUFBLFdBQVcsRUFDVEgsU0FEUyxxSkFFTkUsUUFGTSxHQUFYO0FBS0FELElBQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7QUFDRCxHQVREOztBQVdBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBVTtBQUM3QixRQUFNQyxTQUFTLEdBQUdWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFBQyxRQUFRO0FBQUEsYUFBSVosUUFBUSxDQUFDYSxPQUFULENBQWlCRCxRQUFqQixLQUE4QlosUUFBUSxDQUFDYSxPQUFULENBQWlCSixJQUFqQixDQUFsQztBQUFBLEtBQXhCLENBQWxCO0FBQ0FSLElBQUFBLFdBQVcsQ0FBQ1MsU0FBRCxDQUFYO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFWixTQUExQjtBQUFxQyxnQkFBUSxFQUFFSSxZQUEvQztBQUE2RCxtQkFBVyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLG9EQUFEO0FBQVEsZUFBTyxFQUFFSyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBT0U7QUFBQSxnQkFFSVAsUUFBUSxDQUFDYyxNQUFULElBQW1CLENBQW5CLEdBQXVCZCxRQUFRLENBQUNlLEdBQVQsQ0FBYSxVQUFDTixJQUFELEVBQU9PLEdBQVAsRUFBZTtBQUVqRCw0QkFBTztBQUFBLHFCQUFlUCxJQUFmLGVBQW9CLDhEQUFDLG9EQUFEO0FBQVEsbUJBQU8sRUFBRSxpQkFBQ04sQ0FBRCxFQUFPO0FBQ2pEQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUksY0FBQUEsWUFBWSxDQUFDQyxJQUFELENBQVo7QUFDRCxhQUgwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcEI7QUFBQSxXQUFTTyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFJRCxPQU5zQixDQUF2QixHQU9JO0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUF1QkQsQ0FwREQ7O0dBQU1uQjs7QUFxRE4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFyZWZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUZXh0LCBCdXR0b24sIElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlcklucHV0KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIHNldFRvZG9MaXN0KFtcclxuICAgICAgdXNlcklucHV0LFxyXG4gICAgICAuLi50b2RvTGlzdFxyXG4gICAgXSlcclxuXHJcbiAgICBzZXRVc2VySW5wdXQoJycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpXHJcbiAgICBzZXRUb2RvTGlzdCh1cGRhdGVBcnIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRleHQ+SG9yYSBkZSBvcmdhbml6YXIgc3VhcyB0YXJlZmFzPC9UZXh0PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8SW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9J0FkaWNpb25lIHVtYSB0YXJlZmEnIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkNhZGFzdHJhcjwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49IDEgPyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+e3RvZG99PEJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICB9fT5BcGFnYXI8L0J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiAnUmVnaXN0cmUgdW1hIHRhcmVmYSdcclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRleHQiLCJCdXR0b24iLCJJbnB1dCIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=