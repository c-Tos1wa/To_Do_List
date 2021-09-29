"use strict";
self["webpackHotUpdate_N_E"]("pages/teste",{

/***/ "./pages/teste.js":
/*!************************!*\
  !*** ./pages/teste.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var C_blue_to_do_To_Do_List_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\blue\\to_do\\To_Do_List\\pages\\teste.js",
    _s = $RefreshSig$();





function index() {
  _s();

  var _this = this;

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
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "text",
        value: userInput,
        onChange: handleChange,
        placeholder: "Adicione uma tarefa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: handleSubmit,
        children: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
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
            lineNumber: 47,
            columnNumber: 40
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 20
        }, _this);
      }) : 'Registre uma tarefa'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(index, "In0CfmjzHYwZeIgaI5r9wD0TDjs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdGUuN2Q5OTYyMWVkMDEyNGUzZTY2MDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR2UsU0FBU0ssS0FBVCxHQUFnQjtBQUFBOztBQUFBOztBQUU3QixrQkFBa0NMLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9NLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsbUJBQWdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFMLElBQUFBLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWixDQUgwQixDQUkxQjtBQUNELEdBTEQ7O0FBT0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0osQ0FBRCxFQUFPO0FBQzFCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQUgsSUFBQUEsV0FBVyxFQUNUSCxTQURTLHFKQUVORSxRQUZNLEdBQVg7QUFLQUQsSUFBQUEsWUFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNELEdBVEQ7O0FBV0EsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFFBQU1DLFNBQVMsR0FBR1YsUUFBUSxDQUFDVyxNQUFULENBQWdCLFVBQUFDLFFBQVE7QUFBQSxhQUFJWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJELFFBQWpCLEtBQThCWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJKLElBQWpCLENBQWxDO0FBQUEsS0FBeEIsQ0FBbEI7QUFDQVIsSUFBQUEsV0FBVyxDQUFDUyxTQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVaLFNBQTFCO0FBQXFDLGdCQUFRLEVBQUVJLFlBQS9DO0FBQTZELG1CQUFXLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBUSxlQUFPLEVBQUVLLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFRRTtBQUFBLGdCQUVJUCxRQUFRLENBQUNjLE1BQVQsSUFBbUIsQ0FBbkIsR0FBdUJkLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLFVBQUNOLElBQUQsRUFBT08sR0FBUCxFQUFlO0FBRWpELDRCQUFPO0FBQUEscUJBQWVQLElBQWYsZUFBb0IsOERBQUMsb0RBQUQ7QUFBUSxtQkFBTyxFQUFFLGlCQUFDTixDQUFELEVBQU87QUFDakRBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSSxjQUFBQSxZQUFZLENBQUNDLElBQUQsQ0FBWjtBQUNELGFBSDBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFwQjtBQUFBLFdBQVNPLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUlELE9BTnNCLENBQXZCLEdBT0k7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQTJCRDs7R0F4RHVCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGV4dCwgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCl7XHJcblxyXG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBzZXRUb2RvTGlzdChbXHJcbiAgICAgIHVzZXJJbnB1dCxcclxuICAgICAgLi4udG9kb0xpc3RcclxuICAgIF0pXHJcblxyXG4gICAgc2V0VXNlcklucHV0KCcnKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZUFyciA9IHRvZG9MaXN0LmZpbHRlcih0b2RvSXRlbSA9PiB0b2RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKSAhPSB0b2RvTGlzdC5pbmRleE9mKHRvZG8pKVxyXG4gICAgc2V0VG9kb0xpc3QodXBkYXRlQXJyKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUZXh0PkhvcmEgZGUgb3JnYW5pemFyIHN1YXMgdGFyZWZhczwvVGV4dD5cclxuICAgICAgPEZvcm0+XHJcbiAgICAgICAgPElucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPSdBZGljaW9uZSB1bWEgdGFyZWZhJyAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5DYWRhc3RyYXI8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICBcclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZG9MaXN0Lmxlbmd0aCA+PSAxID8gdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpZHh9Pnt0b2RvfTxCdXR0b24gb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcclxuICAgICAgICAgICAgfX0+QXBhZ2FyPC9CdXR0b24+PC9saT5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogJ1JlZ2lzdHJlIHVtYSB0YXJlZmEnXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3VsPiBcclxuXHJcblxyXG5cclxuICAgIDwvPlxyXG4gIClcclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGV4dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=