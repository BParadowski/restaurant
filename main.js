/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./frontImage.jpg */ "./src/frontImage.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n  --header-height: 4.5rem;\n  --light-gray: rgb(219, 220, 225);\n  --blueish-gray: rgb(90, 99, 104);\n  --blackish-brown: rgb(57, 50, 44);\n}\n\nbody, html {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.nav {\n  flex: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--header-height);\n  background-color: var(--light-gray);\n  border-bottom: 4px solid var(--blackish-brown);\n}\n.nav__links-list {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\n.nav__link {\n  position: relative;\n  font-size: 2rem;\n  text-transform: uppercase;\n  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  cursor: pointer;\n  user-select: none;\n  letter-spacing: 0.2rem;\n  z-index: 1;\n  padding: 8px 10px;\n  transition-delay: 300ms;\n  color: var(--blueish-gray);\n}\n.nav__link:hover {\n  color: var(--blackish-brown);\n}\n.nav__link::before, .nav__link::after {\n  content: \"\";\n  z-index: -1;\n  position: absolute;\n  transition: inherit;\n  left: 0;\n  height: 0;\n  width: 100%;\n}\n.nav__link::before {\n  bottom: 0;\n  box-shadow: -2px 0 0 0 white, 2px 0 0 0 white;\n}\n.nav__link::after {\n  top: 0;\n}\n.nav__link:hover::before {\n  transition-delay: 0s;\n  height: 100%;\n}\n.nav__link:hover::after {\n  transition-delay: 350ms;\n  height: 100%;\n  background-color: white;\n  opacity: 0.7;\n}\n\n#content {\n  height: 100%;\n  overflow-y: scroll;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n#content > div {\n  animation: fadeInAnimation ease 1s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n.home {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto auto;\n  align-items: center;\n  row-gap: 1rem;\n  padding: 2rem;\n  color: var(--blackish-brown);\n}\n.home__name {\n  background-color: var(--light-gray);\n  grid-column: 2/-1;\n  padding: 1rem;\n  border: 4px solid var(--blackish-brown);\n  width: auto;\n  text-align: center;\n  max-width: 63rem;\n  font-size: 2.2rem;\n  letter-spacing: 0.3rem;\n}\n.home__desc {\n  background-color: var(--light-gray);\n  max-width: 63rem;\n  grid-column: 2/-1;\n  padding: 1rem;\n  border: 4px solid var(--blackish-brown);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  line-height: 1.5;\n}\n.home p {\n  white-space: pre-line;\n}\n\n.menu {\n  background-color: rgba(255, 255, 255, 0.7);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));\n  gap: 2rem;\n  justify-items: center;\n  padding: 2rem;\n}\n.menu__card {\n  background-color: var(--light-gray);\n  border: 4px solid var(--blackish-brown);\n  padding: 1rem 0;\n  width: 20rem;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  font-size: 1.4rem;\n  color: var(--blackish-brown);\n}\n.menu__card img {\n  width: 16rem;\n  height: 16rem;\n  border: 4px solid var(--blackish-brown);\n}\n\n.contact {\n  background-color: var(--light-gray);\n  padding: 2rem;\n  font-size: 1.4rem;\n  line-height: 2;\n  letter-spacing: 0.1rem;\n  align-self: center;\n  white-space: pre-line;\n}\n\n@media only screen and (max-width: 1200px) {\n  .home {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@keyframes fadeInAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AACJ;;AAEA;EACI,eAAA;EAEA,uBAAA;EACA,gCAAA;EACA,gCAAA;EACA,iCAAA;AAAJ;;AAGA;EACE,YAAA;AAAF;;AAGA;EACI,aAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,UAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,4BAAA;EACA,mCAAA;EACA,8CAAA;AAFJ;AAII;EACI,gBAAA;EACA,aAAA;EACA,SAAA;AAFR;AAKI;EACI,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,yDAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,UAAA;EACA,iBAAA;EACA,uBAAA;EACA,0BAAA;AAHR;AAKQ;EACI,4BAAA;AAHZ;AAMQ;EACI,WAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;AAJZ;AAOQ;EACI,SAAA;EACA,6CAAA;AALZ;AAOQ;EACI,MAAA;AALZ;AAQQ;EACI,oBAAA;EACA,YAAA;AANZ;AASQ;EACI,uBAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;AAPZ;;AAYA;EACI,YAAA;EACA,kBAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;AATJ;AAWI;EACI,kCAAA;EACA,4BAAA;EACA,6BAAA;AATR;;AAaA;EACI,YAAA;EACA,WAAA;EAEA,aAAA;EACA,8BAAA;EACA,6BAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EAGA,4BAAA;AAbJ;AAcI;EACI,mCAAA;EACA,iBAAA;EACA,aAAA;EACA,uCAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EAEA,iBAAA;EACA,sBAAA;AAbR;AAgBI;EACI,mCAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,uCAAA;EAEA,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,iBAAA;EACA,sBAAA;EACA,gBAAA;AAhBR;AAmBI;EACI,qBAAA;AAjBR;;AAqBA;EACI,0CAAA;EACA,aAAA;EACA,2DAAA;EACA,SAAA;EACA,qBAAA;EAEA,aAAA;AAnBJ;AAqBI;EACI,mCAAA;EACA,uCAAA;EAEA,eAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,4BAAA;AApBR;AAsBQ;EACI,YAAA;EACA,aAAA;EACA,uCAAA;AApBZ;;AAyBA;EACI,mCAAA;EACA,aAAA;EACA,iBAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;AAtBJ;;AAwBA;EACI;IACE,8BAAA;EArBJ;AACF;AAwBE;EACE;IACI,UAAA;EAtBN;EAwBE;IACI,UAAA;EAtBN;AACF","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    font-size: 16px;\n\n    --header-height: 4.5rem;\n    --light-gray: rgb(219, 220, 225);\n    --blueish-gray: rgb(90, 99, 104);\n    --blackish-brown: rgb(57, 50, 44);\n}\n\nbody,html {\n  height: 100%;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n.nav{\n    flex: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    height: var(--header-height);\n    background-color: var(--light-gray);\n    border-bottom: 4px solid var(--blackish-brown);\n\n    &__links-list{\n        list-style: none;\n        display: flex;\n        gap: 3rem;\n    }\n\n    &__link{\n        position: relative;\n        font-size: 2rem;\n        text-transform: uppercase;\n        transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n        cursor: pointer;\n        user-select: none;\n        letter-spacing: 0.2rem;\n        z-index: 1;\n        padding: 8px 10px;\n        transition-delay: 300ms;\n        color: var(--blueish-gray);\n\n        &:hover{\n            color: var(--blackish-brown);\n        }\n\n        &::before, &::after{\n            content: \"\";\n            z-index: -1;\n            position: absolute;\n            transition: inherit;\n            left: 0;\n            height: 0;\n            width: 100%;\n        }\n\n        &::before{\n            bottom: 0;\n            box-shadow: -2px 0 0 0 white, 2px 0 0 0 white;\n        }\n        &::after{\n            top: 0;\n        }\n\n        &:hover::before{\n            transition-delay: 0s;\n            height: 100%;\n        }\n\n        &:hover::after{\n            transition-delay: 350ms;\n            height: 100%;\n            background-color: white;\n            opacity: 0.7;\n        }\n    }\n}\n\n#content{\n    height: 100%;\n    overflow-y: scroll;\n    background-image: url(./frontImage.jpg);\n    background-size:cover;\n    background-repeat: no-repeat;\n\n    &>div{\n        animation: fadeInAnimation ease 1s;\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n    }\n}\n\n.home{\n    height: 100%;\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: auto auto;\n    align-items: center;\n    row-gap: 1rem;\n    padding: 2rem;\n\n\n    color: var(--blackish-brown);\n    &__name{\n        background-color: var(--light-gray);\n        grid-column: 2/-1;\n        padding: 1rem;\n        border: 4px solid var(--blackish-brown);\n        width: auto;\n        text-align: center;\n        max-width: 63rem;\n\n        font-size: 2.2rem;\n        letter-spacing: 0.3rem;\n    }\n\n    &__desc{\n        background-color: var(--light-gray);\n        max-width: 63rem;\n        grid-column: 2/-1;\n        padding: 1rem;\n        border: 4px solid var(--blackish-brown);\n\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        font-size: 1.4rem;\n        letter-spacing: 0.1rem;\n        line-height: 1.5;\n    }\n\n    & p{\n        white-space: pre-line;\n    }\n}\n\n.menu{\n    background-color: rgb(255, 255, 255, 0.7);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));\n    gap: 2rem;\n    justify-items: center;\n\n    padding: 2rem;\n\n    &__card{\n        background-color:var(--light-gray);\n        border: 4px solid var(--blackish-brown);\n\n        padding: 1rem 0;\n        width: 20rem;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1rem;\n        text-align: center;\n        font-size: 1.4rem;\n        color: var(--blackish-brown);\n\n        & img{\n            width: 16rem;\n            height: 16rem;\n            border: 4px solid var(--blackish-brown);\n        }\n    }\n}\n\n.contact{\n    background-color: var(--light-gray);\n    padding: 2rem;\n    font-size: 1.4rem;\n    line-height: 2;\n    letter-spacing: 0.1rem;\n    align-self: center;\n    white-space: pre-line;\n}\n@media only screen and (max-width: 1200px) {\n    .home {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @keyframes fadeInAnimation {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n     }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let contactPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage = (function(){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = "Phone number: 234 9628 90\r\nE-mail adress: Beluga@watercreatures.com"

    return contact;
})());

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let homePage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage = (function (){

    const home = document.createElement('div');
    home.classList.add('home');

    const restaurantName = document.createElement('div');   
    restaurantName.textContent = 'Peaceful Cuisine';
    restaurantName.classList.add('home__name');

    const restaurantDesc = document.createElement('div');
    restaurantDesc.classList.add('home__desc');
    const para1 = document.createElement('p');
    para1.textContent = 'We serve organic, vegan food inspired by japanese cuisine. In our restaurant you will be able to taste delicious and beautiful plant-based dishes surrounded by aura of warm minimalism.'
    const headerOpen = document.createElement('h4');
    headerOpen.textContent = "Opening hours:"
    const para2 = document.createElement('p');
    para2.textContent = 'MON-THU: 10 AM - 9 PM\r\nFRI - SAT: 10AM - 11 PM\r\nSUN: 11 AM - 6 PM';
    const headerAdress = document.createElement('h4');
    headerAdress.textContent = 'Where to find us:';
    const para3 = document.createElement('p');
    para3.textContent = 'Heisenburg,\r\nRotsmund Strasse 27a,\r\n36-926';

    restaurantDesc.appendChild(para1);
    restaurantDesc.appendChild(headerOpen);
    restaurantDesc.appendChild(para2);
    restaurantDesc.appendChild(headerAdress);
    restaurantDesc.appendChild(para3);

    home.appendChild(restaurantName);
    home.appendChild(restaurantDesc);
    return home;
})());

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let menuPage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage = (function(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const addMenuItem = (dishName, imgUrl, description, price) => {
        const dishCard = document.createElement('div');
        dishCard.classList.add('menu__card');
        const nameHeader = document.createElement('h4');
        nameHeader.textContent = dishName;
        const dishImg = document.createElement('img');
        dishImg.src = imgUrl;
        const dishDesc = document.createElement('p');
        dishDesc.textContent = description;
        const dishPrice = document.createElement('h4');
        dishPrice.textContent = price + ' €';

        dishCard.replaceChildren(nameHeader, dishImg, dishDesc, dishPrice);
        menu.appendChild(dishCard);
    }

    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');

    return menu;
})());

/***/ }),

/***/ "./src/frontImage.jpg":
/*!****************************!*\
  !*** ./src/frontImage.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3d358743c63acd4214a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const contentDiv = document.getElementById('content');
const navHome = document.getElementById('home-button')
const navMenu = document.getElementById('menu-button')
const navContact = document.getElementById('contact-button')
let currentPage;

const displayHome = () => {
    if (currentPage !== 'homePage') contentDiv.replaceChildren(_home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    currentPage = 'homePage';
}
const displayMenu = () => {
    if (currentPage !== 'menuPage') contentDiv.replaceChildren(_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    currentPage = 'menuPage';
}

const displayContactInfo = () => {
    if (currentPage !== 'contactPage') contentDiv.replaceChildren(_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    currentPage = 'contactPage';
}

navHome.addEventListener('click', displayHome);
navMenu.addEventListener('click', displayMenu);
navContact.addEventListener('click', displayContactInfo);

displayHome();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDVztBQUNBO0FBQ0s7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsZ0RBQVE7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGdEQUFRO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsbURBQVc7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Zyb250SW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS1oZWFkZXItaGVpZ2h0OiA0LjVyZW07XFxuICAtLWxpZ2h0LWdyYXk6IHJnYigyMTksIDIyMCwgMjI1KTtcXG4gIC0tYmx1ZWlzaC1ncmF5OiByZ2IoOTAsIDk5LCAxMDQpO1xcbiAgLS1ibGFja2lzaC1icm93bjogcmdiKDU3LCA1MCwgNDQpO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdiB7XFxuICBmbGV4OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ibGFja2lzaC1icm93bik7XFxufVxcbi5uYXZfX2xpbmtzLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbi5uYXZfX2xpbmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgY29sb3I6IHZhcigtLWJsdWVpc2gtZ3JheSk7XFxufVxcbi5uYXZfX2xpbms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNraXNoLWJyb3duKTtcXG59XFxuLm5hdl9fbGluazo6YmVmb3JlLCAubmF2X19saW5rOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdl9fbGluazo6YmVmb3JlIHtcXG4gIGJvdHRvbTogMDtcXG4gIGJveC1zaGFkb3c6IC0ycHggMCAwIDAgd2hpdGUsIDJweCAwIDAgMCB3aGl0ZTtcXG59XFxuLm5hdl9fbGluazo6YWZ0ZXIge1xcbiAgdG9wOiAwO1xcbn1cXG4ubmF2X19saW5rOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5uYXZfX2xpbms6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDM1MG1zO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuI2NvbnRlbnQgPiBkaXYge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gZWFzZSAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcbn1cXG4uaG9tZV9fbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJsYWNraXNoLWJyb3duKTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA2M3JlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG59XFxuLmhvbWVfX2Rlc2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBtYXgtd2lkdGg6IDYzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uaG9tZSBwIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjRyZW0sIDFmcikpO1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLm1lbnVfX2NhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ibGFja2lzaC1icm93bik7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFja2lzaC1icm93bik7XFxufVxcbi5tZW51X19jYXJkIGltZyB7XFxuICB3aWR0aDogMTZyZW07XFxuICBoZWlnaHQ6IDE2cmVtO1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5ob21lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBRUEsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUFBSjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0FBRko7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQUhSO0FBS1E7RUFDSSw0QkFBQTtBQUhaO0FBTVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFKWjtBQU9RO0VBQ0ksU0FBQTtFQUNBLDZDQUFBO0FBTFo7QUFPUTtFQUNJLE1BQUE7QUFMWjtBQVFRO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBTlo7QUFTUTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQVBaOztBQVlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBVEo7QUFXSTtFQUNJLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQVRSOztBQWFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFHQSw0QkFBQTtBQWJKO0FBY0k7RUFDSSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLHNCQUFBO0FBYlI7QUFnQkk7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBRUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBaEJSO0FBbUJJO0VBQ0kscUJBQUE7QUFqQlI7O0FBcUJBO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FBbkJKO0FBcUJJO0VBQ0ksbUNBQUE7RUFDQSx1Q0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQXBCUjtBQXNCUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUFwQlo7O0FBeUJBO0VBQ0ksbUNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBdEJKOztBQXdCQTtFQUNJO0lBQ0UsOEJBQUE7RUFyQko7QUFDRjtBQXdCRTtFQUNFO0lBQ0ksVUFBQTtFQXRCTjtFQXdCRTtJQUNJLFVBQUE7RUF0Qk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290e1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIC0taGVhZGVyLWhlaWdodDogNC41cmVtO1xcbiAgICAtLWxpZ2h0LWdyYXk6IHJnYigyMTksIDIyMCwgMjI1KTtcXG4gICAgLS1ibHVlaXNoLWdyYXk6IHJnYig5MCwgOTksIDEwNCk7XFxuICAgIC0tYmxhY2tpc2gtYnJvd246IHJnYig1NywgNTAsIDQ0KTtcXG59XFxuXFxuYm9keSxodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdntcXG4gICAgZmxleDogbm9uZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcblxcbiAgICAmX19saW5rcy1saXN0e1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fbGlua3tcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtcztcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlaXNoLWdyYXkpO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlcntcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaW5oZXJpdDtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmJlZm9yZXtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTJweCAwIDAgMCB3aGl0ZSwgMnB4IDAgMCAwIHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3Zlcjo6YmVmb3Jle1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXI6OmFmdGVye1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDM1MG1zO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9mcm9udEltYWdlLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgJj5kaXZ7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDFzO1xcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICB9XFxufVxcblxcbi5ob21le1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcblxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcbiAgICAmX19uYW1le1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8tMTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ibGFja2lzaC1icm93bik7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogNjNyZW07XFxuXFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fZGVzY3tcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICAgICAgbWF4LXdpZHRoOiA2M3JlbTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJsYWNraXNoLWJyb3duKTtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgfVxcblxcbiAgICAmIHB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIH1cXG59XFxuXFxuLm1lbnV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0cmVtLCAxZnIpKTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgICZfX2NhcmR7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcblxcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcblxcbiAgICAgICAgJiBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDE2cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogMTZyZW07XFxuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYmxhY2tpc2gtYnJvd24pO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5jb250YWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmhvbWUge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY29udGFjdFBhZ2U7XG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZSA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXI6IDIzNCA5NjI4IDkwXFxyXFxuRS1tYWlsIGFkcmVzczogQmVsdWdhQHdhdGVyY3JlYXR1cmVzLmNvbVwiXG5cbiAgICByZXR1cm4gY29udGFjdDtcbn0pKCk7IiwibGV0IGhvbWVQYWdlO1xuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2UgPSAoZnVuY3Rpb24gKCl7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ1BlYWNlZnVsIEN1aXNpbmUnO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX25hbWUnKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdGF1cmFudERlc2MuY2xhc3NMaXN0LmFkZCgnaG9tZV9fZGVzYycpO1xuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmExLnRleHRDb250ZW50ID0gJ1dlIHNlcnZlIG9yZ2FuaWMsIHZlZ2FuIGZvb2QgaW5zcGlyZWQgYnkgamFwYW5lc2UgY3Vpc2luZS4gSW4gb3VyIHJlc3RhdXJhbnQgeW91IHdpbGwgYmUgYWJsZSB0byB0YXN0ZSBkZWxpY2lvdXMgYW5kIGJlYXV0aWZ1bCBwbGFudC1iYXNlZCBkaXNoZXMgc3Vycm91bmRlZCBieSBhdXJhIG9mIHdhcm0gbWluaW1hbGlzbS4nXG4gICAgY29uc3QgaGVhZGVyT3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGVyT3Blbi50ZXh0Q29udGVudCA9IFwiT3BlbmluZyBob3VyczpcIlxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEyLnRleHRDb250ZW50ID0gJ01PTi1USFU6IDEwIEFNIC0gOSBQTVxcclxcbkZSSSAtIFNBVDogMTBBTSAtIDExIFBNXFxyXFxuU1VOOiAxMSBBTSAtIDYgUE0nO1xuICAgIGNvbnN0IGhlYWRlckFkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGVyQWRyZXNzLnRleHRDb250ZW50ID0gJ1doZXJlIHRvIGZpbmQgdXM6JztcbiAgICBjb25zdCBwYXJhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhMy50ZXh0Q29udGVudCA9ICdIZWlzZW5idXJnLFxcclxcblJvdHNtdW5kIFN0cmFzc2UgMjdhLFxcclxcbjM2LTkyNic7XG5cbiAgICByZXN0YXVyYW50RGVzYy5hcHBlbmRDaGlsZChwYXJhMSk7XG4gICAgcmVzdGF1cmFudERlc2MuYXBwZW5kQ2hpbGQoaGVhZGVyT3Blbik7XG4gICAgcmVzdGF1cmFudERlc2MuYXBwZW5kQ2hpbGQocGFyYTIpO1xuICAgIHJlc3RhdXJhbnREZXNjLmFwcGVuZENoaWxkKGhlYWRlckFkcmVzcyk7XG4gICAgcmVzdGF1cmFudERlc2MuYXBwZW5kQ2hpbGQocGFyYTMpO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzYyk7XG4gICAgcmV0dXJuIGhvbWU7XG59KSgpOyIsImxldCBtZW51UGFnZTtcbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgYWRkTWVudUl0ZW0gPSAoZGlzaE5hbWUsIGltZ1VybCwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc2hDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpc2hDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQnKTtcbiAgICAgICAgY29uc3QgbmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIG5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBkaXNoTmFtZTtcbiAgICAgICAgY29uc3QgZGlzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBkaXNoSW1nLnNyYyA9IGltZ1VybDtcbiAgICAgICAgY29uc3QgZGlzaERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRpc2hEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGRpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGRpc2hQcmljZS50ZXh0Q29udGVudCA9IHByaWNlICsgJyDigqwnO1xuXG4gICAgICAgIGRpc2hDYXJkLnJlcGxhY2VDaGlsZHJlbihuYW1lSGVhZGVyLCBkaXNoSW1nLCBkaXNoRGVzYywgZGlzaFByaWNlKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChkaXNoQ2FyZCk7XG4gICAgfVxuXG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG4gICAgYWRkTWVudUl0ZW0oJ0NvY29udXQgcG9ycmlkZ2Ugd2l0aCBwZWFyJywgJy4vcG9ycmlkZ2VXaXRoUGVhci5qcGcnLCAnT2F0cywgc295IG1pbGssIG51dHMgYW5kIHNlZWRzLCBjb2NvbnV0IGZsYWtlcywgY2FybWVsaXplZCBwZWFyLicsICc4Jyk7XG5cbiAgICByZXR1cm4gbWVudTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC5qc1wiXG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ1dHRvbicpXG5jb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnV0dG9uJylcbmNvbnN0IG5hdkNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1idXR0b24nKVxubGV0IGN1cnJlbnRQYWdlO1xuXG5jb25zdCBkaXNwbGF5SG9tZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09ICdob21lUGFnZScpIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKGhvbWVQYWdlKTtcbiAgICBjdXJyZW50UGFnZSA9ICdob21lUGFnZSc7XG59XG5jb25zdCBkaXNwbGF5TWVudSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09ICdtZW51UGFnZScpIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKG1lbnVQYWdlKTtcbiAgICBjdXJyZW50UGFnZSA9ICdtZW51UGFnZSc7XG59XG5cbmNvbnN0IGRpc3BsYXlDb250YWN0SW5mbyA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09ICdjb250YWN0UGFnZScpIGNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKGNvbnRhY3RQYWdlKTtcbiAgICBjdXJyZW50UGFnZSA9ICdjb250YWN0UGFnZSc7XG59XG5cbm5hdkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SG9tZSk7XG5uYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUpO1xubmF2Q29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlDb250YWN0SW5mbyk7XG5cbmRpc3BsYXlIb21lKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==