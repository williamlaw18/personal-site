"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = (0,contentful__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    space: process.env.CONTENTFUL_SPACE_ID,\n    accessToken: process.env.CONTENTFUL_ACCESS_KEY,\n    host: \"preview.contentful.com\"\n});\nasync function getStaticProps() {\n    const res = await client.getEntries({\n        content_type: \"project\",\n        select: \"fields\"\n    });\n    return {\n        props: {\n            projects: res.items\n        },\n        revalidate: 100\n    };\n}\nfunction Projects({ projects  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: projects.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: item.fields.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Sites\\\\personal-site\\\\pages\\\\projects\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, this)\n            }, index, false, {\n                fileName: \"D:\\\\Sites\\\\personal-site\\\\pages\\\\projects\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Sites\\\\personal-site\\\\pages\\\\projects\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1DLFNBQVNELHdEQUFZQSxDQUFDO0lBQ3hCRSxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtJQUN0Q0MsYUFBYUgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7SUFDOUNDLE1BQU07QUFDVjtBQUVPLGVBQWVDLGlCQUFpQjtJQUVuQyxNQUFNQyxNQUFNLE1BQU1ULE9BQU9VLFVBQVUsQ0FBRTtRQUNqQ0MsY0FBYztRQUNkQyxRQUFRO0lBQ1o7SUFFQSxPQUFPO1FBQ0hDLE9BQU87WUFDSEMsVUFBVUwsSUFBSU0sS0FBSztRQUN2QjtRQUNBQyxZQUFZO0lBQ2hCO0FBQ0osQ0FBQztBQUVjLFNBQVNDLFNBQVMsRUFBQ0gsU0FBUSxFQUFDLEVBQUU7SUFDekMscUJBQ0ksOERBQUNJO2tCQUNJSixTQUFTSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDSDswQkFDRyw0RUFBQ0k7OEJBQUlGLEtBQUtHLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2VBRGhCSDs7Ozs7Ozs7OztBQU0xQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9hcHAvLi9wYWdlcy9wcm9qZWN0cy9pbmRleC5qcz80N2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCJcclxuXHJcbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgICBzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcclxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19LRVksXHJcbiAgICBob3N0OiBcInByZXZpZXcuY29udGVudGZ1bC5jb21cIlxyXG59KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKCh7XHJcbiAgICAgICAgY29udGVudF90eXBlOiBcInByb2plY3RcIixcclxuICAgICAgICBzZWxlY3Q6IFwiZmllbGRzXCJcclxuICAgIH0pKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcHJvamVjdHM6IHJlcy5pdGVtc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAwXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHtwcm9qZWN0c30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLmZpZWxkcy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiZW52IiwiQ09OVEVOVEZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiQ09OVEVOVEZVTF9BQ0NFU1NfS0VZIiwiaG9zdCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsInNlbGVjdCIsInByb3BzIiwicHJvamVjdHMiLCJpdGVtcyIsInJldmFsaWRhdGUiLCJQcm9qZWN0cyIsImRpdiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImgyIiwiZmllbGRzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/index.js\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("contentful");

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
var __webpack_exports__ = (__webpack_exec__("./pages/projects/index.js"));
module.exports = __webpack_exports__;

})();