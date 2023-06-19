(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_AllToaser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/AllToaser */ "./src/components/AllToaser.js");
/* harmony import */ var _src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/layouts/PreLoader */ "./src/layouts/PreLoader.js");
/* harmony import */ var _src_layouts_ScrollTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/layouts/ScrollTop */ "./src/layouts/ScrollTop.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/main.css */ "./style/main.css");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Web SIIM\\vue\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  const {
    0: preloader,
    1: setPreloader
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setTimeout(() => {
      _src_redux_store__WEBPACK_IMPORTED_MODULE_7__.default && setPreloader(false);
    }, 2000);
    setTimeout(() => {
      if (false) {}

      new WOW.WOW().init();
    }, 2000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _src_redux_store__WEBPACK_IMPORTED_MODULE_7__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Distribuidora de Materiales y Equipos en las \xE1reas de Detecci\xF3n y Extinci\xF3n de Incendios, Seguridad Electr\xF3nica, Ferreter\xEDa, Electricidad."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "manifest",
        href: "site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/img/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), preloader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 20
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_ScrollTop__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 36
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_AllToaser__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/components/AllToaser.js":
/*!*************************************!*\
  !*** ./src/components/AllToaser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\AllToaser.js";


const AllToaster = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, {
    position: "top-left",
    toastOptions: {
      duration: 5000 // style: {
      //   background: "#363636",
      //   color: "#fff",
      // },
      // error: {},

    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllToaster);

/***/ }),

/***/ "./src/layouts/PreLoader.js":
/*!**********************************!*\
  !*** ./src/layouts/PreLoader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\PreLoader.js";

const PreLoader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "preloader",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "preloader",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreLoader);

/***/ }),

/***/ "./src/layouts/ScrollTop.js":
/*!**********************************!*\
  !*** ./src/layouts/ScrollTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\ScrollTop.js";


const ScrollTop = () => {
  const {
    0: scrollTop,
    1: setScrollTop
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let offset = window.scrollY;
    const sticky = document.getElementById("scrollUp");

    if (sticky) {
      if (offset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    id: "scrollUp",
    href: "#top",
    style: {
      position: "fixed",
      zIndex: 2147483647,
      display: scrollTop ? "block" : "none"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: "fas fa-arrow-up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);

/***/ }),

/***/ "./src/redux/action/type.js":
/*!**********************************!*\
  !*** ./src/redux/action/type.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOME_1": () => (/* binding */ HOME_1),
/* harmony export */   "GET_BLOG": () => (/* binding */ GET_BLOG),
/* harmony export */   "GET_MAS_BLOG": () => (/* binding */ GET_MAS_BLOG),
/* harmony export */   "GET_SINGLE_BLOG": () => (/* binding */ GET_SINGLE_BLOG),
/* harmony export */   "NEXT_POST": () => (/* binding */ NEXT_POST),
/* harmony export */   "PREV_POST": () => (/* binding */ PREV_POST),
/* harmony export */   "TOP_SELLER": () => (/* binding */ TOP_SELLER),
/* harmony export */   "GET_FEATURES": () => (/* binding */ GET_FEATURES),
/* harmony export */   "HOME_2": () => (/* binding */ HOME_2),
/* harmony export */   "GET_UPCOMING_PRODUCT": () => (/* binding */ GET_UPCOMING_PRODUCT),
/* harmony export */   "HOME_3": () => (/* binding */ HOME_3),
/* harmony export */   "HOME_4": () => (/* binding */ HOME_4),
/* harmony export */   "HOME_5": () => (/* binding */ HOME_5),
/* harmony export */   "GET_PRODUCT": () => (/* binding */ GET_PRODUCT),
/* harmony export */   "GET_SINGLE": () => (/* binding */ GET_SINGLE),
/* harmony export */   "FILTER_NAME": () => (/* binding */ FILTER_NAME),
/* harmony export */   "FILTER_BRAND": () => (/* binding */ FILTER_BRAND),
/* harmony export */   "FILTER_CATAGORY": () => (/* binding */ FILTER_CATAGORY),
/* harmony export */   "FILTER_SIZE": () => (/* binding */ FILTER_SIZE),
/* harmony export */   "FILTER_PRICE": () => (/* binding */ FILTER_PRICE),
/* harmony export */   "FILTER_COLOR": () => (/* binding */ FILTER_COLOR),
/* harmony export */   "FILTER_TAG": () => (/* binding */ FILTER_TAG),
/* harmony export */   "GET_CARTS": () => (/* binding */ GET_CARTS),
/* harmony export */   "ADD_TO_CART": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "REMOVE_CART": () => (/* binding */ REMOVE_CART),
/* harmony export */   "DECREASE_CART": () => (/* binding */ DECREASE_CART),
/* harmony export */   "CART_AMOUNT": () => (/* binding */ CART_AMOUNT),
/* harmony export */   "COMPARE": () => (/* binding */ COMPARE),
/* harmony export */   "GET_COMPARE": () => (/* binding */ GET_COMPARE),
/* harmony export */   "REMOVE_COMPARE": () => (/* binding */ REMOVE_COMPARE),
/* harmony export */   "QUICK_VIEW": () => (/* binding */ QUICK_VIEW),
/* harmony export */   "ADD_WISHLIST": () => (/* binding */ ADD_WISHLIST),
/* harmony export */   "GET_WISHLIST": () => (/* binding */ GET_WISHLIST),
/* harmony export */   "CHECKOUT_USER": () => (/* binding */ CHECKOUT_USER)
/* harmony export */ });
const HOME_1 = "HOME_1";
const GET_BLOG = "GET_BLOG";
const GET_MAS_BLOG = "GET_MAS_BLOG";
const GET_SINGLE_BLOG = "GET_SINGLE_BLOG";
const NEXT_POST = "NEXT_POST";
const PREV_POST = "PREV_POST";
const TOP_SELLER = "TOP_SELLER";
const GET_FEATURES = "GET_FEATURES";
const HOME_2 = "HOME_2";
const GET_UPCOMING_PRODUCT = "GET_UPCOMING_PRODUCT";
const HOME_3 = "HOME_3";
const HOME_4 = "HOME_4";
const HOME_5 = "HOME_5"; // Product

const GET_PRODUCT = "GET_PRODUCT";
const GET_SINGLE = "GET_SINGLE"; // filter

const FILTER_NAME = "FILTER_NAME";
const FILTER_BRAND = "FILTER_BRAND";
const FILTER_CATAGORY = "FILTER_CATAGORY";
const FILTER_SIZE = "FILTER_SIZE";
const FILTER_PRICE = "FILTER_PRICE";
const FILTER_COLOR = "FILTER_COLOR";
const FILTER_TAG = "FILTER_TAG"; // Utiles

const GET_CARTS = "GET_CARTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART = "REMOVE_CART";
const DECREASE_CART = "DECREASE_CART";
const CART_AMOUNT = "CART_AMOUNT";
const COMPARE = "COMPARE";
const GET_COMPARE = "GET_COMPARE";
const REMOVE_COMPARE = "REMOVE_COMPARE";
const QUICK_VIEW = "QUICK_VIEW";
const ADD_WISHLIST = "ADD_WISHLIST";
const GET_WISHLIST = "GET_WISHLIST";
const CHECKOUT_USER = "CHECKOUT_USER";

/***/ }),

/***/ "./src/redux/reducer/blog.js":
/*!***********************************!*\
  !*** ./src/redux/reducer/blog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const blog = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_BLOG:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogs: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_MAS_BLOG:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogs: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_SINGLE_BLOG:
      return _objectSpread(_objectSpread({}, state), {}, {
        singleBlog: payload.single,
        blogs: payload.blogs
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blog);

/***/ }),

/***/ "./src/redux/reducer/features.js":
/*!***************************************!*\
  !*** ./src/redux/reducer/features.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");


const features = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_FEATURES:
      return payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (features);

/***/ }),

/***/ "./src/redux/reducer/filter.js":
/*!*************************************!*\
  !*** ./src/redux/reducer/filter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  search: "",
  price: {
    min: 0,
    max: 200
  },
  brand: [],
  size: [],
  colors: [],
  tags: [],
  category: []
};

const filter = (state = initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_NAME:
      return _objectSpread(_objectSpread({}, state), {}, {
        search: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_BRAND:
      return _objectSpread(_objectSpread({}, state), {}, {
        brand: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.updateState)(state.brand, payload)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_CATAGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.updateState)(state.category, payload)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_SIZE:
      return _objectSpread(_objectSpread({}, state), {}, {
        size: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.updateState)(state.size, payload)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_COLOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        colors: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.updateState)(state.colors, payload)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tags: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.updateState)(state.tags, payload)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_1__.FILTER_PRICE:
      return _objectSpread(_objectSpread({}, state), {}, {
        price: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/redux/reducer/home.js":
/*!***********************************!*\
  !*** ./src/redux/reducer/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const home = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.HOME_1:
      return _objectSpread(_objectSpread({}, state), {}, {
        home1: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.HOME_2:
      return _objectSpread(_objectSpread({}, state), {}, {
        home2: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.HOME_3:
      return _objectSpread(_objectSpread({}, state), {}, {
        home3: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.HOME_4:
      return _objectSpread(_objectSpread({}, state), {}, {
        home4: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.HOME_5:
      return _objectSpread(_objectSpread({}, state), {}, {
        home5: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/redux/reducer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog */ "./src/redux/reducer/blog.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features */ "./src/redux/reducer/features.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "./src/redux/reducer/filter.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/redux/reducer/home.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product */ "./src/redux/reducer/product.js");
/* harmony import */ var _seller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller */ "./src/redux/reducer/seller.js");
/* harmony import */ var _upcomingProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcomingProduct */ "./src/redux/reducer/upcomingProduct.js");
/* harmony import */ var _utilis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilis */ "./src/redux/reducer/utilis.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blog: _blog__WEBPACK_IMPORTED_MODULE_1__.default,
  seller: _seller__WEBPACK_IMPORTED_MODULE_6__.default,
  features: _features__WEBPACK_IMPORTED_MODULE_2__.default,
  upcomingProduct: _upcomingProduct__WEBPACK_IMPORTED_MODULE_7__.default,
  product: _product__WEBPACK_IMPORTED_MODULE_5__.default,
  filter: _filter__WEBPACK_IMPORTED_MODULE_3__.default,
  home: _home__WEBPACK_IMPORTED_MODULE_4__.default,
  utilis: _utilis__WEBPACK_IMPORTED_MODULE_8__.default
}));

/***/ }),

/***/ "./src/redux/reducer/product.js":
/*!**************************************!*\
  !*** ./src/redux/reducer/product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const product = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_SINGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        singleProduct: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (product);

/***/ }),

/***/ "./src/redux/reducer/seller.js":
/*!*************************************!*\
  !*** ./src/redux/reducer/seller.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");


const seller = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.TOP_SELLER:
      return {
        topSeller: payload.topSellers
      };

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seller);

/***/ }),

/***/ "./src/redux/reducer/upcomingProduct.js":
/*!**********************************************!*\
  !*** ./src/redux/reducer/upcomingProduct.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");


const upcomingProduct = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.GET_UPCOMING_PRODUCT:
      return payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upcomingProduct);

/***/ }),

/***/ "./src/redux/reducer/utilis.js":
/*!*************************************!*\
  !*** ./src/redux/reducer/utilis.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_filterProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filterProduct */ "./src/utils/filterProduct.js");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.js");
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  carts: [],
  compares: [],
  wishlist: []
};

const utilis = (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_2__.GET_CARTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        carts: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_CART:
      return (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_0__.updateCart)(state, payload, "+");

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.DECREASE_CART:
      return (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_0__.updateCart)(state, payload, "-");

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.REMOVE_CART:
      const removeItem = state.carts.filter(cart => cart.id !== payload);
      (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)("vue-ecommerce", removeItem);
      return _objectSpread(_objectSpread({}, state), {}, {
        carts: removeItem
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.ADD_WISHLIST:
      const wishlist = state.wishlist.find(wishlist => wishlist.id === payload.id) ? state.wishlist.filter(wishlist => wishlist.id !== payload.id) : [...state.wishlist, payload];
      (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)("vue-wishlist", wishlist);
      return _objectSpread(_objectSpread({}, state), {}, {
        wishlist: wishlist
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.GET_WISHLIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        wishlist: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.GET_COMPARE:
      return _objectSpread(_objectSpread({}, state), {}, {
        compares: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.COMPARE:
      const compare = state.compares.find(compares => compares.id === payload.id) ? state.compares.filter(compares => compares.id !== payload.id) : [...state.compares, payload];
      (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)("vue-compares", compare);
      return _objectSpread(_objectSpread({}, state), {}, {
        compares: compare
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.REMOVE_COMPARE:
      const compareremove = state.compares.filter(compare => compare.id !== payload.id);
      (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)("vue-compares", compareremove);
      return _objectSpread(_objectSpread({}, state), {}, {
        compares: compareremove
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_2__.CHECKOUT_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        chcekoutData: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utilis);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/redux/reducer/index.js");




const initialState = {};
const middleware = [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())];
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_3__.default, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/utils/filterProduct.js":
/*!************************************!*\
  !*** ./src/utils/filterProduct.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductByFilter": () => (/* binding */ getProductByFilter),
/* harmony export */   "simpleProductFilter": () => (/* binding */ simpleProductFilter),
/* harmony export */   "exitsProduct": () => (/* binding */ exitsProduct),
/* harmony export */   "updateCart": () => (/* binding */ updateCart)
/* harmony export */ });
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/utils/localstorage.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getProductByFilter = (data, filters) => {
  let filteredList = data && [...data];

  for (const key in filters) {
    if (key !== "price") {
      if (key === "search") {
        filteredList = filteredList && filteredList.filter(data => data.name.toLowerCase().includes(filters[key].toLowerCase()));
      } else {
        if (key === "colors" || key === "category" || key === "tags") {
          filteredList = filterInArray(filteredList, filters[key], key);
        } else {
          filteredList = filterByKey(filteredList, filters[key], key);
        }
      }
    } else {
      filteredList = filterByPrice(filteredList, filters[key]);
    }
  }

  return filteredList;
};

function filterByKey(filteredList, size, key) {
  let list = [];
  if (!size || size.length === 0) return filteredList;

  for (let index = 0; index < filteredList.length; index++) {
    const product = filteredList[index];
    const isOk = size.indexOf(product[key]);

    if (isOk !== -1) {
      list.push(product);
    }
  }

  return list;
}

function filterByPrice(filteredList, price) {
  return filteredList = filteredList && filteredList.filter(product => Number(product.mainPrice) >= price.min && Number(product.mainPrice) <= price.max);
}

function filterInArray(filteredList, value, key) {
  return filteredList && value.length > 0 ? filteredList.filter(data => data[key] && data[key].find(f => value.includes(f))) : filteredList;
}

const simpleProductFilter = (key, arr) => {
  let isArr = typeof key !== "string" ? true : false;
  var sorted = isArr ? key && key.map(function (value) {
    return value.toLowerCase();
  }).sort() : [key.toLowerCase()];
  return arr && arr.filter(arr => arr.category.find(e => e.toLowerCase().includes(sorted && sorted.join(","))));
};
const exitsProduct = (state, item) => {
  console.log(item);
  let value = state && state.find(product => Number(product.id) === Number(item.id));
  return value;
};
const updateCart = (state, item, type) => {
  const exitsCarts = state.carts && state.carts.find(product => Number(product.id) === Number(item.id));
  let result = {};

  if (state.carts) {
    if (exitsCarts) {
      exitsCarts.qty = type === "+" ? exitsCarts.qty += 1 : exitsCarts.qty -= 1;
      exitsCarts.totalPrice = Number(exitsCarts.qty) * Number(exitsCarts.mainPrice);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)("vue-ecommerce", state.carts);
      result = _objectSpread(_objectSpread({}, state), {}, {
        carts: [...state.carts]
      });
    } else {
      item.qty = 1;
      item.totalPrice = Number(item.mainPrice);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)("vue-ecommerce", [...state.carts, item]);
      result = _objectSpread(_objectSpread({}, state), {}, {
        carts: [...state.carts, item]
      });
    }
  }

  return result;
};

/***/ }),

/***/ "./src/utils/localstorage.js":
/*!***********************************!*\
  !*** ./src/utils/localstorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage),
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage)
/* harmony export */ });
const setLocalStorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};
const getLocalStorage = name => {
  const data = localStorage.getItem(name);

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(name, JSON.stringify([]));
    return [];
  }
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeData": () => (/* binding */ activeData),
/* harmony export */   "updateState": () => (/* binding */ updateState),
/* harmony export */   "clickToActive": () => (/* binding */ clickToActive),
/* harmony export */   "getDiscount": () => (/* binding */ getDiscount),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "dblock": () => (/* binding */ dblock),
/* harmony export */   "dataImage": () => (/* binding */ dataImage),
/* harmony export */   "totalPrice": () => (/* binding */ totalPrice)
/* harmony export */ });
const activeData = (active, sort, products) => {
  function _(number) {
    return number <= 9 ? `0${number}` : number;
  }

  return `Showing ${products && products.length ? _(active * sort + 1) : "00"}–${products && products.length > (active + 1) * sort ? _((active + 1) * sort) : _(products && products.length)}
     of ${_(products && products.length)} results`;
};
const updateState = (state, payload) => {
  return state && state.includes(payload) ? state.filter(brand => brand !== payload) : [...state, payload];
};
const clickToActive = (activeArr, value, setActiveArr) => {
  if (activeArr.includes(value)) {
    setActiveArr(activeArr.filter(active => active !== value));
  } else {
    setActiveArr([...activeArr, value]);
  }
};
const getDiscount = (value, discount) => {
  const valueBeforDiscount = value - value * discount / 100;
  return valueBeforDiscount.toFixed(2);
};
const scroll = () => {
  let offset = window.scrollY;
  const sticky = document.getElementById("header-sticky");

  if (sticky) {
    if (offset > 300) {
      sticky.classList.add("sticky-header");
    } else {
      sticky.classList.remove("sticky-header");
    }
  }
};
const dblock = (active, id, sort) => {
  if (active === 0) {
    return id + 1 >= 0 && id + 1 <= sort ? "d-block" : "d-none";
  } else {
    return id + 1 > active * sort && id + 1 <= (active + 1) * sort ? "d-block" : "d-none";
  }
};
const dataImage = () => {
  let d = document.querySelectorAll("[data-background");

  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute("data-background")})`; // console.log(element.getAttribute("data-background"));
  }
};
const totalPrice = items => {
  return items && items.map(item => item.totalPrice).reduce((prev, next) => prev + next, 0).toFixed(2);
};

/***/ }),

/***/ "./style/main.css":
/*!************************!*\
  !*** ./style/main.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFHcEIsSUFBbEIsSUFBMEJyQyxFQUFFLEdBQUcsQ0FBTCxJQUFVLENBQUN5RCxNQUFNLEdBQUcsQ0FBVixJQUFlcEIsSUFBbkQsR0FDSCxTQURHLEdBRUgsUUFGSjtBQUdEO0FBQ0YsQ0FSTTtBQVVBLE1BQU1tQyxTQUFTLEdBQUcsTUFBTTtBQUM3QixNQUFJQyxDQUFDLEdBQUczSixRQUFRLENBQUM0SixnQkFBVCxDQUEwQixrQkFBMUIsQ0FBUjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLENBQUMsQ0FBQ2xELE1BQXRCLEVBQThCb0QsQ0FBQyxFQUEvQixFQUFtQztBQUNqQyxVQUFNQyxPQUFPLEdBQUdILENBQUMsQ0FBQ0UsQ0FBRCxDQUFqQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsZUFBZCxHQUFpQyxPQUFNRixPQUFPLENBQUNHLFlBQVIsQ0FDckMsaUJBRHFDLENBRXJDLEdBRkYsQ0FGaUMsQ0FLakM7QUFDRDtBQUNGLENBVE07QUFXQSxNQUFNaEMsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFDbkMsU0FDRUEsS0FBSyxJQUNMQSxLQUFLLENBQ0ZaLEdBREgsQ0FDUUssSUFBRCxJQUFVQSxJQUFJLENBQUNNLFVBRHRCLEVBRUdpQyxNQUZILENBRVUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEtBQWdCRCxJQUFJLEdBQUdDLElBRmpDLEVBRXVDLENBRnZDLEVBR0doQixPQUhILENBR1csQ0FIWCxDQUZGO0FBT0QsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFbEVQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BbGxUb2FzZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2xheW91dHMvUHJlTG9hZGVyLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9sYXlvdXRzL1Njcm9sbFRvcC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvYWN0aW9uL3R5cGUuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL3JlZHV4L3JlZHVjZXIvYmxvZy5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL3JlZHV4L3JlZHVjZXIvaG9tZS5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9wcm9kdWN0LmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9yZWR1eC9yZWR1Y2VyL3NlbGxlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci91cGNvbWluZ1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL3JlZHV4L3JlZHVjZXIvdXRpbGlzLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvdXRpbHMvZmlsdGVyUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvdXRpbHMvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zdHlsZS9tYWluLmNzcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWhvdC10b2FzdFwiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQWxsVG9hc3RlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQWxsVG9hc2VyXCI7XG5pbXBvcnQgUHJlTG9hZGVyIGZyb20gXCIuLi9zcmMvbGF5b3V0cy9QcmVMb2FkZXJcIjtcbmltcG9ydCBTY3JvbGxUb3AgZnJvbSBcIi4uL3NyYy9sYXlvdXRzL1Njcm9sbFRvcFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zcmMvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBcIi4uL3N0eWxlL21haW4uY3NzXCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3ByZWxvYWRlciwgc2V0UHJlbG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc3RvcmUgJiYgc2V0UHJlbG9hZGVyKGZhbHNlKTtcbiAgICB9LCAyMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93LldPVyA9IHJlcXVpcmUoXCJ3b3dqc1wiKTtcbiAgICAgIH1cbiAgICAgIG5ldyBXT1cuV09XKCkuaW5pdCgpO1xuICAgIH0sIDIwMDApO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpc3RyaWJ1aWRvcmEgZGUgTWF0ZXJpYWxlcyB5IEVxdWlwb3MgZW4gbGFzIMOhcmVhcyBkZSBEZXRlY2Npw7NuIHkgRXh0aW5jacOzbiBkZSBJbmNlbmRpb3MsIFNlZ3VyaWRhZCBFbGVjdHLDs25pY2EsIEZlcnJldGVyw61hLCBFbGVjdHJpY2lkYWQuPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudCAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCJzaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2ltZy9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7cHJlbG9hZGVyID8gPFByZUxvYWRlciAvPiA6IDxTY3JvbGxUb3AgLz59XG4gICAgICA8QWxsVG9hc3RlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmNvbnN0IEFsbFRvYXN0ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdGVyXHJcbiAgICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIlxyXG4gICAgICB0b2FzdE9wdGlvbnM9e3tcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICAvLyBzdHlsZToge1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZDogXCIjMzYzNjM2XCIsXHJcbiAgICAgICAgLy8gICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBlcnJvcjoge30sXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxUb2FzdGVyO1xyXG4iLCJjb25zdCBQcmVMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgIDxzcGFuIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZUxvYWRlcjtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2Nyb2xsVG9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzY3JvbGxUb3AsIHNldFNjcm9sbFRvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBjb25zdCBzdGlja3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcm9sbFVwXCIpO1xyXG4gICAgaWYgKHN0aWNreSkge1xyXG4gICAgICBpZiAob2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgc2V0U2Nyb2xsVG9wKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNjcm9sbFRvcChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaWQ9XCJzY3JvbGxVcFwiXHJcbiAgICAgIGhyZWY9XCIjdG9wXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIHpJbmRleDogMjE0NzQ4MzY0NyxcclxuICAgICAgICBkaXNwbGF5OiBzY3JvbGxUb3AgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwXCIgLz5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wO1xyXG4iLCJleHBvcnQgY29uc3QgSE9NRV8xID0gXCJIT01FXzFcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9CTE9HID0gXCJHRVRfQkxPR1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX01BU19CTE9HID0gXCJHRVRfTUFTX0JMT0dcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTEVfQkxPRyA9IFwiR0VUX1NJTkdMRV9CTE9HXCI7XHJcbmV4cG9ydCBjb25zdCBORVhUX1BPU1QgPSBcIk5FWFRfUE9TVFwiO1xyXG5leHBvcnQgY29uc3QgUFJFVl9QT1NUID0gXCJQUkVWX1BPU1RcIjtcclxuZXhwb3J0IGNvbnN0IFRPUF9TRUxMRVIgPSBcIlRPUF9TRUxMRVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFUyA9IFwiR0VUX0ZFQVRVUkVTXCI7XHJcbmV4cG9ydCBjb25zdCBIT01FXzIgPSBcIkhPTUVfMlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VQQ09NSU5HX1BST0RVQ1QgPSBcIkdFVF9VUENPTUlOR19QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBIT01FXzMgPSBcIkhPTUVfM1wiO1xyXG5leHBvcnQgY29uc3QgSE9NRV80ID0gXCJIT01FXzRcIjtcclxuZXhwb3J0IGNvbnN0IEhPTUVfNSA9IFwiSE9NRV81XCI7XHJcblxyXG4vLyBQcm9kdWN0XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IFwiR0VUX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTEUgPSBcIkdFVF9TSU5HTEVcIjtcclxuXHJcbi8vIGZpbHRlclxyXG5leHBvcnQgY29uc3QgRklMVEVSX05BTUUgPSBcIkZJTFRFUl9OQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBGSUxURVJfQlJBTkQgPSBcIkZJTFRFUl9CUkFORFwiO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0NBVEFHT1JZID0gXCJGSUxURVJfQ0FUQUdPUllcIjtcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9TSVpFID0gXCJGSUxURVJfU0laRVwiO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX1BSSUNFID0gXCJGSUxURVJfUFJJQ0VcIjtcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DT0xPUiA9IFwiRklMVEVSX0NPTE9SXCI7XHJcbmV4cG9ydCBjb25zdCBGSUxURVJfVEFHID0gXCJGSUxURVJfVEFHXCI7XHJcblxyXG4vLyBVdGlsZXNcclxuZXhwb3J0IGNvbnN0IEdFVF9DQVJUUyA9IFwiR0VUX0NBUlRTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9IFwiQUREX1RPX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUID0gXCJSRU1PVkVfQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVBU0VfQ0FSVCA9IFwiREVDUkVBU0VfQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgQ0FSVF9BTU9VTlQgPSBcIkNBUlRfQU1PVU5UXCI7XHJcbmV4cG9ydCBjb25zdCBDT01QQVJFID0gXCJDT01QQVJFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NUEFSRSA9IFwiR0VUX0NPTVBBUkVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01QQVJFID0gXCJSRU1PVkVfQ09NUEFSRVwiO1xyXG5leHBvcnQgY29uc3QgUVVJQ0tfVklFVyA9IFwiUVVJQ0tfVklFV1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1dJU0hMSVNUID0gXCJBRERfV0lTSExJU1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9XSVNITElTVCA9IFwiR0VUX1dJU0hMSVNUXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfVVNFUiA9IFwiQ0hFQ0tPVVRfVVNFUlwiO1xyXG4iLCJpbXBvcnQgeyBHRVRfQkxPRywgR0VUX01BU19CTE9HLCBHRVRfU0lOR0xFX0JMT0cgfSBmcm9tIFwiLi4vYWN0aW9uL3R5cGVcIjtcclxuXHJcbmNvbnN0IGJsb2cgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9CTE9HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJsb2dzOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBHRVRfTUFTX0JMT0c6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYmxvZ3M6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEdFVF9TSU5HTEVfQkxPRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaW5nbGVCbG9nOiBwYXlsb2FkLnNpbmdsZSxcclxuICAgICAgICBibG9nczogcGF5bG9hZC5ibG9ncyxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGJsb2c7XHJcbiIsImltcG9ydCB7IEdFVF9GRUFUVVJFUyB9IGZyb20gXCIuLi9hY3Rpb24vdHlwZVwiO1xyXG5cclxuY29uc3QgZmVhdHVyZXMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9GRUFUVVJFUzpcclxuICAgICAgcmV0dXJuIHBheWxvYWQ7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZmVhdHVyZXM7XHJcbiIsImltcG9ydCB7IHVwZGF0ZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgRklMVEVSX0JSQU5ELFxyXG4gIEZJTFRFUl9DQVRBR09SWSxcclxuICBGSUxURVJfQ09MT1IsXHJcbiAgRklMVEVSX05BTUUsXHJcbiAgRklMVEVSX1BSSUNFLFxyXG4gIEZJTFRFUl9TSVpFLFxyXG4gIEZJTFRFUl9UQUcsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbi90eXBlXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc2VhcmNoOiBcIlwiLFxyXG4gIHByaWNlOiB7IG1pbjogMCwgbWF4OiAyMDAgfSxcclxuICBicmFuZDogW10sXHJcbiAgc2l6ZTogW10sXHJcbiAgY29sb3JzOiBbXSxcclxuICB0YWdzOiBbXSxcclxuICBjYXRlZ29yeTogW10sXHJcbn07XHJcblxyXG5jb25zdCBmaWx0ZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgcGF5bG9hZCwgdHlwZSB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBGSUxURVJfTkFNRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2g6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZJTFRFUl9CUkFORDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBicmFuZDogdXBkYXRlU3RhdGUoc3RhdGUuYnJhbmQsIHBheWxvYWQpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBGSUxURVJfQ0FUQUdPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZVN0YXRlKHN0YXRlLmNhdGVnb3J5LCBwYXlsb2FkKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgRklMVEVSX1NJWkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2l6ZTogdXBkYXRlU3RhdGUoc3RhdGUuc2l6ZSwgcGF5bG9hZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZJTFRFUl9DT0xPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb2xvcnM6IHVwZGF0ZVN0YXRlKHN0YXRlLmNvbG9ycywgcGF5bG9hZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZJTFRFUl9UQUc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFnczogdXBkYXRlU3RhdGUoc3RhdGUudGFncywgcGF5bG9hZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZJTFRFUl9QUklDRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcmljZTogcGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyO1xyXG4iLCJpbXBvcnQgeyBIT01FXzEsIEhPTUVfMiwgSE9NRV8zLCBIT01FXzQsIEhPTUVfNSB9IGZyb20gXCIuLi9hY3Rpb24vdHlwZVwiO1xyXG5cclxuY29uc3QgaG9tZSA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgSE9NRV8xOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWUxOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBIT01FXzI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZTI6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEhPTUVfMzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lMzogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgSE9NRV80OlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWU0OiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBIT01FXzU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZTU6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBob21lO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGJsb2cgZnJvbSBcIi4vYmxvZ1wiO1xyXG5pbXBvcnQgZmVhdHVyZXMgZnJvbSBcIi4vZmVhdHVyZXNcIjtcclxuaW1wb3J0IGZpbHRlciBmcm9tIFwiLi9maWx0ZXJcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBzZWxsZXIgZnJvbSBcIi4vc2VsbGVyXCI7XHJcbmltcG9ydCB1cGNvbWluZ1Byb2R1Y3QgZnJvbSBcIi4vdXBjb21pbmdQcm9kdWN0XCI7XHJcbmltcG9ydCB1dGlsaXMgZnJvbSBcIi4vdXRpbGlzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGJsb2csXHJcbiAgc2VsbGVyLFxyXG4gIGZlYXR1cmVzLFxyXG4gIHVwY29taW5nUHJvZHVjdCxcclxuICBwcm9kdWN0LFxyXG4gIGZpbHRlcixcclxuICBob21lLFxyXG4gIHV0aWxpcyxcclxufSk7XHJcbiIsImltcG9ydCB7IEdFVF9QUk9EVUNULCBHRVRfU0lOR0xFIH0gZnJvbSBcIi4uL2FjdGlvbi90eXBlXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0ID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgR0VUX1NJTkdMRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaW5nbGVQcm9kdWN0OiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3Q7XHJcbiIsImltcG9ydCB7IFRPUF9TRUxMRVIgfSBmcm9tIFwiLi4vYWN0aW9uL3R5cGVcIjtcclxuXHJcbmNvbnN0IHNlbGxlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgVE9QX1NFTExFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b3BTZWxsZXI6IHBheWxvYWQudG9wU2VsbGVycyxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNlbGxlcjtcclxuIiwiaW1wb3J0IHsgR0VUX1VQQ09NSU5HX1BST0RVQ1QgfSBmcm9tIFwiLi4vYWN0aW9uL3R5cGVcIjtcclxuXHJcbmNvbnN0IHVwY29taW5nUHJvZHVjdCA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgR0VUX1VQQ09NSU5HX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiBwYXlsb2FkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXBjb21pbmdQcm9kdWN0O1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVDYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2ZpbHRlclByb2R1Y3RcIjtcclxuaW1wb3J0IHsgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9UT19DQVJULFxyXG4gIEFERF9XSVNITElTVCxcclxuICBDSEVDS09VVF9VU0VSLFxyXG4gIENPTVBBUkUsXHJcbiAgREVDUkVBU0VfQ0FSVCxcclxuICBHRVRfQ0FSVFMsXHJcbiAgR0VUX0NPTVBBUkUsXHJcbiAgR0VUX1dJU0hMSVNULFxyXG4gIFJFTU9WRV9DQVJULFxyXG4gIFJFTU9WRV9DT01QQVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb24vdHlwZVwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhcnRzOiBbXSxcclxuICBjb21wYXJlczogW10sXHJcbiAgd2lzaGxpc3Q6IFtdLFxyXG59O1xyXG5jb25zdCB1dGlsaXMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfQ0FSVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydHM6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9UT19DQVJUOlxyXG4gICAgICByZXR1cm4gdXBkYXRlQ2FydChzdGF0ZSwgcGF5bG9hZCwgXCIrXCIpO1xyXG4gICAgY2FzZSBERUNSRUFTRV9DQVJUOlxyXG4gICAgICByZXR1cm4gdXBkYXRlQ2FydChzdGF0ZSwgcGF5bG9hZCwgXCItXCIpO1xyXG4gICAgY2FzZSBSRU1PVkVfQ0FSVDpcclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9IHN0YXRlLmNhcnRzLmZpbHRlcigoY2FydCkgPT4gY2FydC5pZCAhPT0gcGF5bG9hZCk7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZShcInZ1ZS1lY29tbWVyY2VcIiwgcmVtb3ZlSXRlbSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydHM6IHJlbW92ZUl0ZW0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9XSVNITElTVDpcclxuICAgICAgY29uc3Qgd2lzaGxpc3QgPSBzdGF0ZS53aXNobGlzdC5maW5kKFxyXG4gICAgICAgICh3aXNobGlzdCkgPT4gd2lzaGxpc3QuaWQgPT09IHBheWxvYWQuaWRcclxuICAgICAgKVxyXG4gICAgICAgID8gc3RhdGUud2lzaGxpc3QuZmlsdGVyKCh3aXNobGlzdCkgPT4gd2lzaGxpc3QuaWQgIT09IHBheWxvYWQuaWQpXHJcbiAgICAgICAgOiBbLi4uc3RhdGUud2lzaGxpc3QsIHBheWxvYWRdO1xyXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UoXCJ2dWUtd2lzaGxpc3RcIiwgd2lzaGxpc3QpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHdpc2hsaXN0OiB3aXNobGlzdCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgR0VUX1dJU0hMSVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHdpc2hsaXN0OiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBHRVRfQ09NUEFSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wYXJlczogcGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIENPTVBBUkU6XHJcbiAgICAgIGNvbnN0IGNvbXBhcmUgPSBzdGF0ZS5jb21wYXJlcy5maW5kKFxyXG4gICAgICAgIChjb21wYXJlcykgPT4gY29tcGFyZXMuaWQgPT09IHBheWxvYWQuaWRcclxuICAgICAgKVxyXG4gICAgICAgID8gc3RhdGUuY29tcGFyZXMuZmlsdGVyKChjb21wYXJlcykgPT4gY29tcGFyZXMuaWQgIT09IHBheWxvYWQuaWQpXHJcbiAgICAgICAgOiBbLi4uc3RhdGUuY29tcGFyZXMsIHBheWxvYWRdO1xyXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UoXCJ2dWUtY29tcGFyZXNcIiwgY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGFyZXM6IGNvbXBhcmUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFJFTU9WRV9DT01QQVJFOlxyXG4gICAgICBjb25zdCBjb21wYXJlcmVtb3ZlID0gc3RhdGUuY29tcGFyZXMuZmlsdGVyKFxyXG4gICAgICAgIChjb21wYXJlKSA9PiBjb21wYXJlLmlkICE9PSBwYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZShcInZ1ZS1jb21wYXJlc1wiLCBjb21wYXJlcmVtb3ZlKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wYXJlczogY29tcGFyZXJlbW92ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIENIRUNLT1VUX1VTRVI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hjZWtvdXREYXRhOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxpcztcclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiaW1wb3J0IHsgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxzdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5RmlsdGVyID0gKGRhdGEsIGZpbHRlcnMpID0+IHtcclxuICBsZXQgZmlsdGVyZWRMaXN0ID0gZGF0YSAmJiBbLi4uZGF0YV07XHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIGZpbHRlcnMpIHtcclxuICAgIGlmIChrZXkgIT09IFwicHJpY2VcIikge1xyXG4gICAgICBpZiAoa2V5ID09PSBcInNlYXJjaFwiKSB7XHJcbiAgICAgICAgZmlsdGVyZWRMaXN0ID1cclxuICAgICAgICAgIGZpbHRlcmVkTGlzdCAmJlxyXG4gICAgICAgICAgZmlsdGVyZWRMaXN0LmZpbHRlcigoZGF0YSkgPT5cclxuICAgICAgICAgICAgZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyc1trZXldLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChrZXkgPT09IFwiY29sb3JzXCIgfHwga2V5ID09PSBcImNhdGVnb3J5XCIgfHwga2V5ID09PSBcInRhZ3NcIikge1xyXG4gICAgICAgICAgZmlsdGVyZWRMaXN0ID0gZmlsdGVySW5BcnJheShmaWx0ZXJlZExpc3QsIGZpbHRlcnNba2V5XSwga2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmlsdGVyZWRMaXN0ID0gZmlsdGVyQnlLZXkoZmlsdGVyZWRMaXN0LCBmaWx0ZXJzW2tleV0sIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJCeVByaWNlKGZpbHRlcmVkTGlzdCwgZmlsdGVyc1trZXldKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJ5S2V5KGZpbHRlcmVkTGlzdCwgc2l6ZSwga2V5KSB7XHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBpZiAoIXNpemUgfHwgc2l6ZS5sZW5ndGggPT09IDApIHJldHVybiBmaWx0ZXJlZExpc3Q7XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbHRlcmVkTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZExpc3RbaW5kZXhdO1xyXG4gICAgY29uc3QgaXNPayA9IHNpemUuaW5kZXhPZihwcm9kdWN0W2tleV0pO1xyXG4gICAgaWYgKGlzT2sgIT09IC0xKSB7XHJcbiAgICAgIGxpc3QucHVzaChwcm9kdWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeVByaWNlKGZpbHRlcmVkTGlzdCwgcHJpY2UpIHtcclxuICByZXR1cm4gKGZpbHRlcmVkTGlzdCA9XHJcbiAgICBmaWx0ZXJlZExpc3QgJiZcclxuICAgIGZpbHRlcmVkTGlzdC5maWx0ZXIoXHJcbiAgICAgIChwcm9kdWN0KSA9PlxyXG4gICAgICAgIE51bWJlcihwcm9kdWN0Lm1haW5QcmljZSkgPj0gcHJpY2UubWluICYmXHJcbiAgICAgICAgTnVtYmVyKHByb2R1Y3QubWFpblByaWNlKSA8PSBwcmljZS5tYXhcclxuICAgICkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJJbkFycmF5KGZpbHRlcmVkTGlzdCwgdmFsdWUsIGtleSkge1xyXG4gIHJldHVybiBmaWx0ZXJlZExpc3QgJiYgdmFsdWUubGVuZ3RoID4gMFxyXG4gICAgPyBmaWx0ZXJlZExpc3QuZmlsdGVyKFxyXG4gICAgICAgIChkYXRhKSA9PiBkYXRhW2tleV0gJiYgZGF0YVtrZXldLmZpbmQoKGYpID0+IHZhbHVlLmluY2x1ZGVzKGYpKVxyXG4gICAgICApXHJcbiAgICA6IGZpbHRlcmVkTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZVByb2R1Y3RGaWx0ZXIgPSAoa2V5LCBhcnIpID0+IHtcclxuICBsZXQgaXNBcnIgPSB0eXBlb2Yga2V5ICE9PSBcInN0cmluZ1wiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIHZhciBzb3J0ZWQgPSBpc0FyclxyXG4gICAgPyBrZXkgJiZcclxuICAgICAga2V5XHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNvcnQoKVxyXG4gICAgOiBba2V5LnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgYXJyICYmXHJcbiAgICBhcnIuZmlsdGVyKChhcnIpID0+XHJcbiAgICAgIGFyci5jYXRlZ29yeS5maW5kKChlKSA9PlxyXG4gICAgICAgIGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzb3J0ZWQgJiYgc29ydGVkLmpvaW4oXCIsXCIpKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBleGl0c1Byb2R1Y3QgPSAoc3RhdGUsIGl0ZW0pID0+IHtcclxuICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICBsZXQgdmFsdWUgPVxyXG4gICAgc3RhdGUgJiYgc3RhdGUuZmluZCgocHJvZHVjdCkgPT4gTnVtYmVyKHByb2R1Y3QuaWQpID09PSBOdW1iZXIoaXRlbS5pZCkpO1xyXG4gIHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJ0ID0gKHN0YXRlLCBpdGVtLCB0eXBlKSA9PiB7XHJcbiAgY29uc3QgZXhpdHNDYXJ0cyA9XHJcbiAgICBzdGF0ZS5jYXJ0cyAmJlxyXG4gICAgc3RhdGUuY2FydHMuZmluZCgocHJvZHVjdCkgPT4gTnVtYmVyKHByb2R1Y3QuaWQpID09PSBOdW1iZXIoaXRlbS5pZCkpO1xyXG4gIGxldCByZXN1bHQgPSB7fTtcclxuXHJcbiAgaWYgKHN0YXRlLmNhcnRzKSB7XHJcbiAgICBpZiAoZXhpdHNDYXJ0cykge1xyXG4gICAgICBleGl0c0NhcnRzLnF0eSA9XHJcbiAgICAgICAgdHlwZSA9PT0gXCIrXCIgPyAoZXhpdHNDYXJ0cy5xdHkgKz0gMSkgOiAoZXhpdHNDYXJ0cy5xdHkgLT0gMSk7XHJcbiAgICAgIGV4aXRzQ2FydHMudG90YWxQcmljZSA9XHJcbiAgICAgICAgTnVtYmVyKGV4aXRzQ2FydHMucXR5KSAqIE51bWJlcihleGl0c0NhcnRzLm1haW5QcmljZSk7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZShcInZ1ZS1lY29tbWVyY2VcIiwgc3RhdGUuY2FydHMpO1xyXG4gICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydHM6IFsuLi5zdGF0ZS5jYXJ0c10sXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLnF0eSA9IDE7XHJcbiAgICAgIGl0ZW0udG90YWxQcmljZSA9IE51bWJlcihpdGVtLm1haW5QcmljZSk7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZShcInZ1ZS1lY29tbWVyY2VcIiwgWy4uLnN0YXRlLmNhcnRzLCBpdGVtXSk7XHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0czogWy4uLnN0YXRlLmNhcnRzLCBpdGVtXSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChuYW1lLCBpdGVtcykgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAobmFtZSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgYWN0aXZlRGF0YSA9IChhY3RpdmUsIHNvcnQsIHByb2R1Y3RzKSA9PiB7XHJcbiAgZnVuY3Rpb24gXyhudW1iZXIpIHtcclxuICAgIHJldHVybiBudW1iZXIgPD0gOSA/IGAwJHtudW1iZXJ9YCA6IG51bWJlcjtcclxuICB9XHJcbiAgcmV0dXJuIGBTaG93aW5nICR7XHJcbiAgICBwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPyBfKGFjdGl2ZSAqIHNvcnQgKyAxKSA6IFwiMDBcIlxyXG4gIH3igJMke1xyXG4gICAgcHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID4gKGFjdGl2ZSArIDEpICogc29ydFxyXG4gICAgICA/IF8oKGFjdGl2ZSArIDEpICogc29ydClcclxuICAgICAgOiBfKHByb2R1Y3RzICYmIHByb2R1Y3RzLmxlbmd0aClcclxuICB9XHJcbiAgICAgb2YgJHtfKHByb2R1Y3RzICYmIHByb2R1Y3RzLmxlbmd0aCl9IHJlc3VsdHNgO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0YXRlID0gKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHN0YXRlICYmIHN0YXRlLmluY2x1ZGVzKHBheWxvYWQpXHJcbiAgICA/IHN0YXRlLmZpbHRlcigoYnJhbmQpID0+IGJyYW5kICE9PSBwYXlsb2FkKVxyXG4gICAgOiBbLi4uc3RhdGUsIHBheWxvYWRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWNrVG9BY3RpdmUgPSAoYWN0aXZlQXJyLCB2YWx1ZSwgc2V0QWN0aXZlQXJyKSA9PiB7XHJcbiAgaWYgKGFjdGl2ZUFyci5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgIHNldEFjdGl2ZUFycihhY3RpdmVBcnIuZmlsdGVyKChhY3RpdmUpID0+IGFjdGl2ZSAhPT0gdmFsdWUpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0QWN0aXZlQXJyKFsuLi5hY3RpdmVBcnIsIHZhbHVlXSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERpc2NvdW50ID0gKHZhbHVlLCBkaXNjb3VudCkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlQmVmb3JEaXNjb3VudCA9IHZhbHVlIC0gKHZhbHVlICogZGlzY291bnQpIC8gMTAwO1xyXG4gIHJldHVybiB2YWx1ZUJlZm9yRGlzY291bnQudG9GaXhlZCgyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XHJcbiAgbGV0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGNvbnN0IHN0aWNreSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXN0aWNreVwiKTtcclxuICBpZiAoc3RpY2t5KSB7XHJcbiAgICBpZiAob2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIHN0aWNreS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0aWNreS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGJsb2NrID0gKGFjdGl2ZSwgaWQsIHNvcnQpID0+IHtcclxuICBpZiAoYWN0aXZlID09PSAwKSB7XHJcbiAgICByZXR1cm4gaWQgKyAxID49IDAgJiYgaWQgKyAxIDw9IHNvcnQgPyBcImQtYmxvY2tcIiA6IFwiZC1ub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBpZCArIDEgPiBhY3RpdmUgKiBzb3J0ICYmIGlkICsgMSA8PSAoYWN0aXZlICsgMSkgKiBzb3J0XHJcbiAgICAgID8gXCJkLWJsb2NrXCJcclxuICAgICAgOiBcImQtbm9uZVwiO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhSW1hZ2UgPSAoKSA9PiB7XHJcbiAgbGV0IGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmFja2dyb3VuZFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkW2ldO1xyXG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbWVudC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwiZGF0YS1iYWNrZ3JvdW5kXCJcclxuICAgICl9KWA7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZFwiKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvdGFsUHJpY2UgPSAoaXRlbXMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgaXRlbXMgJiZcclxuICAgIGl0ZW1zXHJcbiAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0udG90YWxQcmljZSlcclxuICAgICAgLnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQsIDApXHJcbiAgICAgIC50b0ZpeGVkKDIpXHJcbiAgKTtcclxufTtcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvdC10b2FzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm92aWRlciIsIkFsbFRvYXN0ZXIiLCJQcmVMb2FkZXIiLCJTY3JvbGxUb3AiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJlbG9hZGVyIiwic2V0UHJlbG9hZGVyIiwic2V0VGltZW91dCIsIndpbmRvdyIsIldPVyIsInJlcXVpcmUiLCJpbml0IiwiVG9hc3RlciIsImR1cmF0aW9uIiwic2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsIm9mZnNldCIsInNjcm9sbFkiLCJzdGlja3kiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJkaXNwbGF5IiwiSE9NRV8xIiwiR0VUX0JMT0ciLCJHRVRfTUFTX0JMT0ciLCJHRVRfU0lOR0xFX0JMT0ciLCJORVhUX1BPU1QiLCJQUkVWX1BPU1QiLCJUT1BfU0VMTEVSIiwiR0VUX0ZFQVRVUkVTIiwiSE9NRV8yIiwiR0VUX1VQQ09NSU5HX1BST0RVQ1QiLCJIT01FXzMiLCJIT01FXzQiLCJIT01FXzUiLCJHRVRfUFJPRFVDVCIsIkdFVF9TSU5HTEUiLCJGSUxURVJfTkFNRSIsIkZJTFRFUl9CUkFORCIsIkZJTFRFUl9DQVRBR09SWSIsIkZJTFRFUl9TSVpFIiwiRklMVEVSX1BSSUNFIiwiRklMVEVSX0NPTE9SIiwiRklMVEVSX1RBRyIsIkdFVF9DQVJUUyIsIkFERF9UT19DQVJUIiwiUkVNT1ZFX0NBUlQiLCJERUNSRUFTRV9DQVJUIiwiQ0FSVF9BTU9VTlQiLCJDT01QQVJFIiwiR0VUX0NPTVBBUkUiLCJSRU1PVkVfQ09NUEFSRSIsIlFVSUNLX1ZJRVciLCJBRERfV0lTSExJU1QiLCJHRVRfV0lTSExJU1QiLCJDSEVDS09VVF9VU0VSIiwiYmxvZyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJibG9ncyIsInNpbmdsZUJsb2ciLCJzaW5nbGUiLCJmZWF0dXJlcyIsInVwZGF0ZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwic2VhcmNoIiwicHJpY2UiLCJtaW4iLCJtYXgiLCJicmFuZCIsInNpemUiLCJjb2xvcnMiLCJ0YWdzIiwiY2F0ZWdvcnkiLCJmaWx0ZXIiLCJob21lIiwiaG9tZTEiLCJob21lMiIsImhvbWUzIiwiaG9tZTQiLCJob21lNSIsImNvbWJpbmVSZWR1Y2VycyIsInByb2R1Y3QiLCJzZWxsZXIiLCJ1cGNvbWluZ1Byb2R1Y3QiLCJ1dGlsaXMiLCJwcm9kdWN0cyIsInNpbmdsZVByb2R1Y3QiLCJ0b3BTZWxsZXIiLCJ0b3BTZWxsZXJzIiwidXBkYXRlQ2FydCIsInNldExvY2FsU3RvcmFnZSIsImNhcnRzIiwiY29tcGFyZXMiLCJ3aXNobGlzdCIsInJlbW92ZUl0ZW0iLCJjYXJ0IiwiaWQiLCJmaW5kIiwiY29tcGFyZSIsImNvbXBhcmVyZW1vdmUiLCJjaGNla291dERhdGEiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJ0aHVuayIsInJvb3RSZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldFByb2R1Y3RCeUZpbHRlciIsImRhdGEiLCJmaWx0ZXJzIiwiZmlsdGVyZWRMaXN0Iiwia2V5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaWx0ZXJJbkFycmF5IiwiZmlsdGVyQnlLZXkiLCJmaWx0ZXJCeVByaWNlIiwibGlzdCIsImxlbmd0aCIsImluZGV4IiwiaXNPayIsImluZGV4T2YiLCJwdXNoIiwiTnVtYmVyIiwibWFpblByaWNlIiwidmFsdWUiLCJmIiwic2ltcGxlUHJvZHVjdEZpbHRlciIsImFyciIsImlzQXJyIiwic29ydGVkIiwibWFwIiwic29ydCIsImUiLCJqb2luIiwiZXhpdHNQcm9kdWN0IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJleGl0c0NhcnRzIiwicmVzdWx0IiwicXR5IiwidG90YWxQcmljZSIsIml0ZW1zIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRMb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJhY3RpdmVEYXRhIiwiYWN0aXZlIiwiXyIsIm51bWJlciIsImNsaWNrVG9BY3RpdmUiLCJhY3RpdmVBcnIiLCJzZXRBY3RpdmVBcnIiLCJnZXREaXNjb3VudCIsImRpc2NvdW50IiwidmFsdWVCZWZvckRpc2NvdW50IiwidG9GaXhlZCIsInNjcm9sbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImRibG9jayIsImRhdGFJbWFnZSIsImQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImdldEF0dHJpYnV0ZSIsInJlZHVjZSIsInByZXYiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==