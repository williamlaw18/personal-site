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
exports.id = "pages/projects/[slug]";
exports.ids = ["pages/projects/[slug]"];
exports.modules = {

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = (0,contentful__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    space: process.env.CONTENTFUL_SPACE_ID,\n    accessToken: process.env.CONTENTFUL_ACCESS_KEY,\n    host: \"preview.contentful.com\"\n});\nasync function getStaticPaths() {\n    const res = await client.getEntries({\n        content_type: \"project\"\n    });\n    const paths = res.items.map((item)=>{\n        return {\n            params: {\n                slug: item.fields.slug\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: true\n    };\n}\nasync function getStaticProps({ params  }) {\n    const { items  } = await client.getEntries({\n        content_type: \"project\",\n        \"fields.slug\": params.slug\n    });\n    return {\n        props: {\n            project: items[0]\n        },\n        revalidate: 100\n    };\n}\nfunction Project({ project  }) {\n    if (!project) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Sites\\\\personal-site\\\\pages\\\\projects\\\\[slug].js\",\n        lineNumber: 41,\n        columnNumber: 26\n    }, this);\n    const { title  } = project.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title\n    }, void 0, false, {\n        fileName: \"D:\\\\Sites\\\\personal-site\\\\pages\\\\projects\\\\[slug].js\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsU0FBU0Qsd0RBQVlBLENBQUM7SUFDeEJFLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CO0lBQ3RDQyxhQUFhSCxRQUFRQyxHQUFHLENBQUNHLHFCQUFxQjtJQUM5Q0MsTUFBTTtBQUNWO0FBRU8sZUFBZUMsaUJBQWlCO0lBRW5DLE1BQU1DLE1BQU0sTUFBTVQsT0FBT1UsVUFBVSxDQUFFO1FBQ2pDQyxjQUFjO0lBQ2xCO0lBRUEsTUFBTUMsUUFBUUgsSUFBSUksS0FBSyxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVE7UUFDaEMsT0FBTztZQUNIQyxRQUFRO2dCQUFFQyxNQUFNRixLQUFLRyxNQUFNLENBQUNELElBQUk7WUFBQztRQUNyQztJQUNKO0lBRUEsT0FBTztRQUNITDtRQUNBTyxVQUFVLElBQUk7SUFDbEI7QUFDSixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFSixPQUFNLEVBQUUsRUFBRTtJQUM3QyxNQUFNLEVBQUVILE1BQUssRUFBRSxHQUFHLE1BQU1iLE9BQU9VLFVBQVUsQ0FBQztRQUN0Q0MsY0FBYztRQUNkLGVBQWVLLE9BQU9DLElBQUk7SUFDOUI7SUFFQSxPQUFNO1FBQ0ZJLE9BQU87WUFBRUMsU0FBU1QsS0FBSyxDQUFDLEVBQUU7UUFBQztRQUMzQlUsWUFBWTtJQUNoQjtBQUNKLENBQUM7QUFFYyxTQUFTQyxRQUFRLEVBQUNGLFFBQU8sRUFBQyxFQUFFO0lBRXZDLElBQUksQ0FBQ0EsU0FBUyxxQkFBTyw4REFBQ0c7a0JBQUc7Ozs7OztJQUV6QixNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHSixRQUFRSixNQUFNO0lBRWhDLHFCQUFPLDhEQUFDTztrQkFBSUM7Ozs7OztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9hcHAvLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanM/NzcxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiXHJcblxyXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgc3BhY2U6IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfU1BBQ0VfSUQsXHJcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZLFxyXG4gICAgaG9zdDogXCJwcmV2aWV3LmNvbnRlbnRmdWwuY29tXCJcclxufSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcygoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZTogXCJwcm9qZWN0XCIsXHJcbiAgICB9KSlcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoaXRlbSA9PiB7IFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBzbHVnOiBpdGVtLmZpZWxkcy5zbHVnIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcclxuICAgICAgICBjb250ZW50X3R5cGU6IFwicHJvamVjdFwiLFxyXG4gICAgICAgICdmaWVsZHMuc2x1Zyc6IHBhcmFtcy5zbHVnXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczogeyBwcm9qZWN0OiBpdGVtc1swXSB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEwMFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHtwcm9qZWN0fSkge1xyXG5cclxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT5cclxuXHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBwcm9qZWN0LmZpZWxkc1xyXG5cclxuICAgIHJldHVybiA8aDE+e3RpdGxlfTwvaDE+XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiZW52IiwiQ09OVEVOVEZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiQ09OVEVOVEZVTF9BQ0NFU1NfS0VZIiwiaG9zdCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsInBhdGhzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwicGFyYW1zIiwic2x1ZyIsImZpZWxkcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInByb2plY3QiLCJyZXZhbGlkYXRlIiwiUHJvamVjdCIsImgxIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/projects/[slug].js"));
module.exports = __webpack_exports__;

})();