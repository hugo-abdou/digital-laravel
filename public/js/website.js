(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/website"],{

/***/ "./resources/js/website.js":
/*!*********************************!*\
  !*** ./resources/js/website.js ***!
  \*********************************/
/***/ (() => {

console.log("scroll"); // const navBar = document.getElementById("nav-bar");
// const handleScroll = () => {
//     let st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > 50) {
//         if (!navBar.classList.contains("float")) {
//             navBar.classList.add("float", "shadow");
//         }
//     } else {
//         if (navBar.classList.contains("float")) {
//             navBar.classList.remove("float", "shadow");
//         }
//     }
// };
// window.document.addEventListener("scroll", function () {
//     handleScroll();
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app"], () => (__webpack_exec__("./resources/js/website.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);