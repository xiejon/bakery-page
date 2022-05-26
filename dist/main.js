/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Parisienne/Parisienne-Regular.ttf */ "./src/Parisienne/Parisienne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Domine/Domine-VariableFont_wght.ttf */ "./src/Domine/Domine-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! bakery.jpg */ "./src/bakery.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Parisienne\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: \"Domine\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Domine';\n}\n\n.content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 4fr 0.5fr;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center fixed;\n    background-size: cover;\n}\n\n.header {\n    height: 70px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    background: rgba(20, 36, 37, 0.6);\n    font-size: 1.25rem;\n    color: rgb(244, 174, 25);\n}\n\n.header p:hover {\n    cursor: pointer;\n    color: rgb(255, 230, 177);\n    transition: 100ms;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.box {\n    position: absolute;\n    top: -5vh;\n    height: 400px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    background: rgba(20, 36, 37, 0.8);\n    position: relative;\n}\n\n.box p:first-of-type {\n    position: absolute;\n    top: 6%;\n    font-size: 4.5rem;\n    font-family: 'Parisienne';\n    color:rgb(244, 174, 25);\n}\n\n.box p:nth-child(2) {\n    position: absolute;\n    top: 28%;\n    font-family: 'Domine';\n    font-size: 4.5rem;\n    color: rgb(250, 206, 111);\n    z-index: 990;\n}\n\n/* styling div */\n.box div {\n    position: absolute;\n    top: 53%;\n    width: 500px;\n    border: 1px solid rgb(244, 174, 25);\n    border-radius: 1px;\n}\n\n.box p:last-of-type {\n    position: absolute;\n    top: 60%;\n    color: rgb(244, 174, 25);\n\n}\n\n.menu-button {\n    position: absolute;\n    top: 70%;\n    min-width: 190px;\n    width: 130px;\n    padding: 8px;\n    font-size: 20px;\n    font-weight: 800;\n    background-color: rgb(244, 174, 25);\n    border: none;\n    color: rgba(20, 36, 37, 0.8);\n}\n\n.menu-button:hover {\n    cursor: pointer;\n    color: rgb(255, 230, 177);\n    transition: 100ms;\n}\n\n.footer {\n    height: 30px;\n    align-self: flex-end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    background:rgba(20, 36, 37, 0.4);\n    color:rgb(244, 174, 25);\n}\n\n.footer svg {\n    display: flex;\n    align-items: center;\n    fill:rgb(244, 174, 25);\n}\n\n/* about page */\n.about {\n    min-height: 500px;\n    height: calc(100vh - 10vh - 100px);\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(20, 36, 37, 0.7);\n}\n\n.about p:first-of-type {\n    padding-top: 30px;\n    font-size: 70px;\n    font-family: \"Parisienne\";\n    font-weight: bold;\n    color:rgb(244, 174, 25);\n}\n\n.about p:last-of-type {\n    padding: 30px;\n    max-width: 700px;\n    font-size: 1.1rem;\n    text-align: center;\n    line-height: 1.5rem;\n    color: rgb(250, 206, 111);\n}\n\n/* menu page */\n.menu {\n    min-height: 500px;\n    height: calc(100vh - 10vh - 100px);\n    min-width: 650px;\n    width: 100%;\n    grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    background-color: rgba(20, 36, 37, 0.7);\n}\n\n.menu > p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: \"Parisienne\";\n    font-size: 70px;\n    color: rgb(244, 174, 25);\n}\n\n.menu div {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.menu div:first-of-type {\n    font-size: 26px;\n    color: rgb(244, 174, 25);\n}\n\n.menu div:not(:first-of-type) {\n    font-size: 20px;\n    color: rgb(250, 206, 111);\n}\n\n.menu div:last-of-type {\n    padding-bottom: 6vh;\n}\n\n.menu p {\n    justify-self: center;\n}\n\n.menu div p:first-child {\n    grid-column: 2;\n}\n\n/* contact page */\n.contact {\n    min-height: 500px;\n    height: calc(100vh - 10vh - 100px);\n    width: 100%;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    background-color: rgba(20, 36, 37, 0.7);\n    fill:rgb(244, 174, 25);\n}\n\n.contact > div:first-child {\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.contact div:last-child {\n    font-size: 17px;\n    color:rgb(250, 206, 111);\n}\n\n.contact div:last-child div {\n    padding-bottom: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.8rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA2C;AAC/C;;AAEA;IACI,qBAAqB;IACrB,4CAA6C;AACjD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,iCAAiC;IACjC,iFAA2D;IAC3D,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,iCAAiC;IACjC,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,iBAAiB;IACjB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,qBAAqB;IACrB,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;AAChB;;AAEA,gBAAgB;AAChB;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,wBAAwB;;AAE5B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,mCAAmC;IACnC,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,gCAAgC;IAChC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA,eAAe;AACf;IACI,iBAAiB;IACjB,kCAAkC;IAClC,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA,cAAc;AACd;IACI,iBAAiB;IACjB,kCAAkC;IAClC,gBAAgB;IAChB,WAAW;IACX,+CAA+C;IAC/C,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,cAAc;AAClB;;AAEA,iBAAiB;AACjB;IACI,iBAAiB;IACjB,kCAAkC;IAClC,WAAW;IACX,2BAA2B;IAC3B,uBAAuB;IACvB,uCAAuC;IACvC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: \"Parisienne\";\n    src: url(Parisienne/Parisienne-Regular.ttf);\n}\n\n@font-face {\n    font-family: \"Domine\";\n    src: url(Domine/Domine-VariableFont_wght.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Domine';\n}\n\n.content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 4fr 0.5fr;\n    background: url('bakery.jpg') no-repeat center center fixed;\n    background-size: cover;\n}\n\n.header {\n    height: 70px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    background: rgba(20, 36, 37, 0.6);\n    font-size: 1.25rem;\n    color: rgb(244, 174, 25);\n}\n\n.header p:hover {\n    cursor: pointer;\n    color: rgb(255, 230, 177);\n    transition: 100ms;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.box {\n    position: absolute;\n    top: -5vh;\n    height: 400px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    background: rgba(20, 36, 37, 0.8);\n    position: relative;\n}\n\n.box p:first-of-type {\n    position: absolute;\n    top: 6%;\n    font-size: 4.5rem;\n    font-family: 'Parisienne';\n    color:rgb(244, 174, 25);\n}\n\n.box p:nth-child(2) {\n    position: absolute;\n    top: 28%;\n    font-family: 'Domine';\n    font-size: 4.5rem;\n    color: rgb(250, 206, 111);\n    z-index: 990;\n}\n\n/* styling div */\n.box div {\n    position: absolute;\n    top: 53%;\n    width: 500px;\n    border: 1px solid rgb(244, 174, 25);\n    border-radius: 1px;\n}\n\n.box p:last-of-type {\n    position: absolute;\n    top: 60%;\n    color: rgb(244, 174, 25);\n\n}\n\n.menu-button {\n    position: absolute;\n    top: 70%;\n    min-width: 190px;\n    width: 130px;\n    padding: 8px;\n    font-size: 20px;\n    font-weight: 800;\n    background-color: rgb(244, 174, 25);\n    border: none;\n    color: rgba(20, 36, 37, 0.8);\n}\n\n.menu-button:hover {\n    cursor: pointer;\n    color: rgb(255, 230, 177);\n    transition: 100ms;\n}\n\n.footer {\n    height: 30px;\n    align-self: flex-end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    background:rgba(20, 36, 37, 0.4);\n    color:rgb(244, 174, 25);\n}\n\n.footer svg {\n    display: flex;\n    align-items: center;\n    fill:rgb(244, 174, 25);\n}\n\n/* about page */\n.about {\n    min-height: 500px;\n    height: calc(100vh - 10vh - 100px);\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(20, 36, 37, 0.7);\n}\n\n.about p:first-of-type {\n    padding-top: 30px;\n    font-size: 70px;\n    font-family: \"Parisienne\";\n    font-weight: bold;\n    color:rgb(244, 174, 25);\n}\n\n.about p:last-of-type {\n    padding: 30px;\n    max-width: 700px;\n    font-size: 1.1rem;\n    text-align: center;\n    line-height: 1.5rem;\n    color: rgb(250, 206, 111);\n}\n\n/* menu page */\n.menu {\n    min-height: 500px;\n    height: calc(100vh - 10vh - 100px);\n    min-width: 650px;\n    width: 100%;\n    grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    background-color: rgba(20, 36, 37, 0.7);\n}\n\n.menu > p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: \"Parisienne\";\n    font-size: 70px;\n    color: rgb(244, 174, 25);\n}\n\n.menu div {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.menu div:first-of-type {\n    font-size: 26px;\n    color: rgb(244, 174, 25);\n}\n\n.menu div:not(:first-of-type) {\n    font-size: 20px;\n    color: rgb(250, 206, 111);\n}\n\n.menu div:last-of-type {\n    padding-bottom: 6vh;\n}\n\n.menu p {\n    justify-self: center;\n}\n\n.menu div p:first-child {\n    grid-column: 2;\n}\n\n/* contact page */\n.contact {\n    min-height: 500px;\n    height: calc(100vh - 10vh - 100px);\n    width: 100%;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n    background-color: rgba(20, 36, 37, 0.7);\n    fill:rgb(244, 174, 25);\n}\n\n.contact > div:first-child {\n    padding-top: 30px;\n    padding-bottom: 10px;\n}\n\n.contact div:last-child {\n    font-size: 17px;\n    color:rgb(250, 206, 111);\n}\n\n.contact div:last-child div {\n    padding-bottom: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.8rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((module) => {

function generateAboutPage(element) {
    const about = document.createElement('div');
    const title = document.createElement('p');
    const body = document.createElement('p');
    about.classList.add('about');
    title.classList.add('about-title');
    body.classList.add('about-body');

    title.textContent = 'Our Story';
    body.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in. Purus gravida quis blandit turpis cursus in hac. A pellentesque sit amet porttitor. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Risus at ultrices mi tempus imperdiet nulla malesuada. Suspendisse faucibus interdum posuere lorem ipsum. Arcu odio ut sem nulla pharetra. Amet tellus cras adipiscing enim.';
    
    element.appendChild(about);
    about.appendChild(title);
    about.appendChild(body);

     // hide page until called
     about.style.display = 'none';
}

module.exports = {
    generateAboutPage: generateAboutPage
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((module) => {

function generateContactPage(element) {
    const container = document.createElement('div');
    const mapRow = document.createElement('div');
    const textRow = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    const row4 = document.createElement('div');

    const address = document.createElement('p');
    const phone = document.createElement('p');
    const hours = document.createElement('p');

    container.classList.add('contact');

    address.textContent = 'Greenwich Village, New York, NY 10012, USA';
    phone.textContent = '(212) 893-9938';
    hours.textContent = 'Mon-Fri 08:00-17:00 | Sat-Sun 10:00-14:00';

    element.appendChild(container);
    container.append(mapRow, textRow);
    textRow.append(row2, row3, row4);
    embedMap(mapRow);
    // address section
    markerSvg(row2);
    row2.appendChild(address);
    // phone
    phoneSvg(row3);
    row3.appendChild(phone);
    // hours
    clockSvg(row4);
    row4.appendChild(hours);

    // hide until called
    container.style.display = 'none';
}

function embedMap(node) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4409029361013!2d-73.9991135162869!3d40.730322887823405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfd34f9508043192!2zNDDCsDQzJzQ5LjIiTiA3M8KwNTknNDkuMiJX!5e0!3m2!1sen!2suk!4v1653591468137!5m2!1sen!2suk");
    iframe.setAttribute('width', '400');
    iframe.setAttribute('height', '300');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    return node.appendChild(iframe);
}

const clockSvg = (node) => {
    renderSvg(node, 
        "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z",
        "M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z");
}

const markerSvg = (node) => {
    renderSvg(node, 
        "M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z",
        "M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z");
}

const phoneSvg = (node) => {
    renderSvg(node, 
        "M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z");
}

function renderSvg(node, d1, d2) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    iconSvg.setAttribute('width', '24');
    iconSvg.setAttribute('height', '24');
    iconSvg.setAttribute('viewbox', `0 0 24 24`);
    iconPath1.setAttribute('d', d1);

    iconSvg.appendChild(iconPath1);

    if (d2) {
        const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        iconPath2.setAttribute('d', d2);
        iconSvg.appendChild(iconPath2);
    }

    return node.appendChild(iconSvg);
}

module.exports = {
    generateContactPage: generateContactPage
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((module) => {

function contentWrapper() {
    const content = document.createElement('div');
    content.classList.add('content');

    document.body.appendChild(content);
}

function generateFrontPage() {
    // header
    const header = document.createElement('div');
    header.classList.add('header');
    
    const about = document.createElement('p');
    const menu = document.createElement('p');
    const contact = document.createElement('p');

    about.textContent = 'ABOUT';
    menu.textContent = 'MENU';
    contact.textContent = 'CONTACT';

    header.appendChild(menu);
    header.appendChild(about);
    header.appendChild(contact);

    // main
    const main = document.createElement('div');
    const box = document.createElement('div');

    main.classList.add('main');
    box.classList.add('box');

    main.appendChild(box);

    const welcome = document.createElement('p');
    const title = document.createElement('p');
    const stylingDiv = document.createElement('div');
    const subtitle = document.createElement('p');
    const menuButton = document.createElement('button');

    menuButton.classList.add('menu-button');

    welcome.textContent = 'Welcome';
    title.textContent = `THE LAUGENSTANGE`;
    subtitle.textContent = `Lower Manhattan's award-winning pretzel shop.`
    menuButton.textContent = 'VIEW MENU';

    box.appendChild(welcome);
    box.appendChild(title);
    box.appendChild(stylingDiv);
    box.appendChild(subtitle);
    box.appendChild(menuButton);

    // footer
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    const sig = document.createElement('p');
    const a = document.createElement('a');

    sig.textContent = 'Built by xiejon';
    a.href = 'https://github.com/xiejon';
    renderGithubIcon(a);

    footer.appendChild(sig);
    footer.appendChild(a);

    // append content
    const content = document.querySelector('.content');
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

function renderGithubIcon(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    iconSvg.setAttribute('width', '24');
    iconSvg.setAttribute('height', '24');
    iconSvg.setAttribute('viewbox', '0 0 24 24');
    iconPath.setAttribute('d', "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z");

    iconSvg.appendChild(iconPath);

    return node.appendChild(iconSvg);
}

module.exports = {
    contentWrapper: contentWrapper,
    generateFrontPage: generateFrontPage
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((module) => {

function generateMenu(element) {
    const container = document.createElement('div');
    const menu = document.createElement('p');
    const title = document.createElement('p');
    
    const titleContainer = document.createElement('div');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');

    // flavors
    const plain = document.createElement('p');
    const pumpkin = document.createElement('p');
    const nutella = document.createElement('p');
    const rosemary = document.createElement('p');
    const lox = document.createElement('p');
    const truffle = document.createElement('p');

    // prices
    const sample = document.createElement('p');
    const price1 = document.createElement('p');
    const price2 = document.createElement('p');
    const price3 = document.createElement('p');
    const price4 = document.createElement('p');
    const price5 = document.createElement('p');
    const price6 = document.createElement('p');

    container.classList.add('menu');

    menu.textContent = 'Menu';
    title.textContent = 'Pretzels';
    plain.textContent = 'Plain';
    pumpkin.textContent = 'Pumpkin Seed';
    nutella.textContent = 'Nutella';
    rosemary.textContent = 'Rosemary';
    lox.textContent = 'Lox';
    truffle.textContent = 'Black Truffle';
    sample.textContent = 'Small | Large';
    price1.textContent = '2 | 3.5';
    price2.textContent = '2.5 | 4';
    price3.textContent = '2.5 | 4';
    price4.textContent = '3 | 4.5';
    price5.textContent = '4 | 5.5';
    price6.textContent = '8.5 | 10';

    element.appendChild(container);
    container.appendChild(menu);
    container.appendChild(titleContainer);
    container.appendChild(item1);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
    container.appendChild(item5);
    container.appendChild(item6);
    titleContainer.append(title, sample);
    item1.append(plain, price1);
    item2.append(pumpkin, price2);
    item3.append(nutella, price3);
    item4.append(rosemary, price4);
    item5.append(lox, price5);
    item6.append(truffle, price6);

    // hide until called
    container.style.display = 'none';
}

module.exports = {
    generateMenu: generateMenu
}

/***/ }),

/***/ "./src/Domine/Domine-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./src/Domine/Domine-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b6da7c95c470a0f0ba29.ttf";

/***/ }),

/***/ "./src/Parisienne/Parisienne-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/Parisienne/Parisienne-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "82a775783a33ce6f911d.ttf";

/***/ }),

/***/ "./src/bakery.jpg":
/*!************************!*\
  !*** ./src/bakery.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2f1b06b3d56376f3b5ea.jpg";

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
/******/ 			"index": 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homepage_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contact_js__WEBPACK_IMPORTED_MODULE_4__);






const homePage = (() => {
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.contentWrapper)(); 
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.generateFrontPage)();
})();

const aboutSection = (() => {
    const main = document.querySelector('.main');
    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.generateAboutPage)(main);

    const aboutLink = document.querySelector('.header p:nth-of-type(2)');
    const aboutPage = document.querySelector('.about');

    aboutLink.addEventListener('click', () => {
        const toggle = togglePage(aboutPage, menuSection.menuPage, contactSection.contactPage, 'flex');
    });

    return {
        aboutPage: aboutPage
    }
})();

const menuSection = (() => {
    const main = document.querySelector('.main');
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.generateMenu)(main);

    const menuLink = document.querySelector('.header p:nth-of-type(1)');
    const menuPage = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-button');

    const toggle = () => togglePage(menuPage, aboutSection.aboutPage, contactSection.contactPage, 'grid');

    menuLink.addEventListener('click', toggle);
    menuButton.addEventListener('click', toggle);

    return {
        menuPage: menuPage
    }
})();

const contactSection = (() => {
    const main = document.querySelector('.main');
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.generateContactPage)(main);

    const contactLink = document.querySelector('.header p:last-of-type');
    const contactPage = document.querySelector('.contact');

    contactLink.addEventListener('click', () => {
        const toggle = togglePage(contactPage, aboutSection.aboutPage, menuSection.menuPage, 'grid');
    });

    return {
        contactPage: contactPage
    }
})();

function togglePage(element, pageB, pageC, displayType) {
    const box = document.querySelector('.box');

    if (element.style.display === 'none') {
        element.style.display = displayType;
        // clear other pages
        pageB.style.display = 'none';
        pageC.style.display = 'none';
        box.style.display = 'none';
        
    } else {
        element.style.display = 'none';
        // display homepage
        box.style.display = 'flex';
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUM0QztBQUNuQjtBQUNOO0FBQ1U7O0FBRW5EO0FBQ0EsSUFBSSw0REFBYztBQUNsQixJQUFJLCtEQUFpQjtBQUNyQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDREQUFpQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHNEQUFZOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJQYXJpc2llbm5lL1BhcmlzaWVubmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJEb21pbmUvRG9taW5lLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImJha2VyeS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhcmlzaWVubmVcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvbWluZVxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUnO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAwLjVmcjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMzYsIDM3LCAwLjYpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMjQ0LCAxNzQsIDI1KTtcXG59XFxuXFxuLmhlYWRlciBwOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjMwLCAxNzcpO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXZoO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAzNiwgMzcsIDAuOCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJveCBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNiU7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BhcmlzaWVubmUnO1xcbiAgICBjb2xvcjpyZ2IoMjQ0LCAxNzQsIDI1KTtcXG59XFxuXFxuLmJveCBwOm50aC1jaGlsZCgyKSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyOCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJztcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMjUwLCAyMDYsIDExMSk7XFxuICAgIHotaW5kZXg6IDk5MDtcXG59XFxuXFxuLyogc3R5bGluZyBkaXYgKi9cXG4uYm94IGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MyU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0NCwgMTc0LCAyNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuXFxuLmJveCBwOmxhc3Qtb2YtdHlwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MCU7XFxuICAgIGNvbG9yOiByZ2IoMjQ0LCAxNzQsIDI1KTtcXG5cXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwJTtcXG4gICAgbWluLXdpZHRoOiAxOTBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMTc0LCAyNSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMjAsIDM2LCAzNywgMC44KTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjMwLCAxNzcpO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDIwLCAzNiwgMzcsIDAuNCk7XFxuICAgIGNvbG9yOnJnYigyNDQsIDE3NCwgMjUpO1xcbn1cXG5cXG4uZm9vdGVyIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZpbGw6cmdiKDI0NCwgMTc0LCAyNSk7XFxufVxcblxcbi8qIGFib3V0IHBhZ2UgKi9cXG4uYWJvdXQge1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTB2aCAtIDEwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDM2LCAzNywgMC43KTtcXG59XFxuXFxuLmFib3V0IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGFyaXNpZW5uZVxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjpyZ2IoMjQ0LCAxNzQsIDI1KTtcXG59XFxuXFxuLmFib3V0IHA6bGFzdC1vZi10eXBlIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyNTAsIDIwNiwgMTExKTtcXG59XFxuXFxuLyogbWVudSBwYWdlICovXFxuLm1lbnUge1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTB2aCAtIDEwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA2NTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAzNiwgMzcsIDAuNyk7XFxufVxcblxcbi5tZW51ID4gcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhcmlzaWVubmVcXFwiO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjQ0LCAxNzQsIDI1KTtcXG59XFxuXFxuLm1lbnUgZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbi5tZW51IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBjb2xvcjogcmdiKDI0NCwgMTc0LCAyNSk7XFxufVxcblxcbi5tZW51IGRpdjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDI1MCwgMjA2LCAxMTEpO1xcbn1cXG5cXG4ubWVudSBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDZ2aDtcXG59XFxuXFxuLm1lbnUgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSBkaXYgcDpmaXJzdC1jaGlsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4vKiBjb250YWN0IHBhZ2UgKi9cXG4uY29udGFjdCB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHZoIC0gMTAwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMzYsIDM3LCAwLjcpO1xcbiAgICBmaWxsOnJnYigyNDQsIDE3NCwgMjUpO1xcbn1cXG5cXG4uY29udGFjdCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QgZGl2Omxhc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGNvbG9yOnJnYigyNTAsIDIwNiwgMTExKTtcXG59XFxuXFxuLmNvbnRhY3QgZGl2Omxhc3QtY2hpbGQgZGl2IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMC44cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7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SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhcmlzaWVubmVcXFwiO1xcbiAgICBzcmM6IHVybChQYXJpc2llbm5lL1BhcmlzaWVubmUtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb21pbmVcXFwiO1xcbiAgICBzcmM6IHVybChEb21pbmUvRG9taW5lLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lJztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC41ZnI7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnYmFrZXJ5LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAzNiwgMzcsIDAuNik7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHJnYigyNDQsIDE3NCwgMjUpO1xcbn1cXG5cXG4uaGVhZGVyIHA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyMzAsIDE3Nyk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01dmg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAsIDM2LCAzNywgMC44KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm94IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2JTtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFyaXNpZW5uZSc7XFxuICAgIGNvbG9yOnJnYigyNDQsIDE3NCwgMjUpO1xcbn1cXG5cXG4uYm94IHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI4JTtcXG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUnO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyNTAsIDIwNiwgMTExKTtcXG4gICAgei1pbmRleDogOTkwO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGRpdiAqL1xcbi5ib3ggZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUzJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ0LCAxNzQsIDI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG4uYm94IHA6bGFzdC1vZi10eXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG4gICAgY29sb3I6IHJnYigyNDQsIDE3NCwgMjUpO1xcblxcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzAlO1xcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAxNzQsIDI1KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogcmdiYSgyMCwgMzYsIDM3LCAwLjgpO1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyMzAsIDE3Nyk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjAsIDM2LCAzNywgMC40KTtcXG4gICAgY29sb3I6cmdiKDI0NCwgMTc0LCAyNSk7XFxufVxcblxcbi5mb290ZXIgc3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmlsbDpyZ2IoMjQ0LCAxNzQsIDI1KTtcXG59XFxuXFxuLyogYWJvdXQgcGFnZSAqL1xcbi5hYm91dCB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHZoIC0gMTAwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMzYsIDM3LCAwLjcpO1xcbn1cXG5cXG4uYWJvdXQgcDpmaXJzdC1vZi10eXBlIHtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQYXJpc2llbm5lXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOnJnYigyNDQsIDE3NCwgMjUpO1xcbn1cXG5cXG4uYWJvdXQgcDpsYXN0LW9mLXR5cGUge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICBjb2xvcjogcmdiKDI1MCwgMjA2LCAxMTEpO1xcbn1cXG5cXG4vKiBtZW51IHBhZ2UgKi9cXG4ubWVudSB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHZoIC0gMTAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDM2LCAzNywgMC43KTtcXG59XFxuXFxuLm1lbnUgPiBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGFyaXNpZW5uZVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgY29sb3I6IHJnYigyNDQsIDE3NCwgMjUpO1xcbn1cXG5cXG4ubWVudSBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLm1lbnUgZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGNvbG9yOiByZ2IoMjQ0LCAxNzQsIDI1KTtcXG59XFxuXFxuLm1lbnUgZGl2Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjUwLCAyMDYsIDExMSk7XFxufVxcblxcbi5tZW51IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnZoO1xcbn1cXG5cXG4ubWVudSBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IGRpdiBwOmZpcnN0LWNoaWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi8qIGNvbnRhY3QgcGFnZSAqL1xcbi5jb250YWN0IHtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwdmggLSAxMDBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAzNiwgMzcsIDAuNyk7XFxuICAgIGZpbGw6cmdiKDI0NCwgMTc0LCAyNSk7XFxufVxcblxcbi5jb250YWN0ID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdCBkaXY6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgY29sb3I6cmdiKDI1MCwgMjA2LCAxMTEpO1xcbn1cXG5cXG4uY29udGFjdCBkaXY6bGFzdC1jaGlsZCBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAwLjhyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGdlbmVyYXRlQWJvdXRQYWdlKGVsZW1lbnQpIHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10aXRsZScpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYWJvdXQtYm9keScpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgICBib2R5LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBFdCB0b3J0b3IgYXQgcmlzdXMgdml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluLiBQdXJ1cyBncmF2aWRhIHF1aXMgYmxhbmRpdCB0dXJwaXMgY3Vyc3VzIGluIGhhYy4gQSBwZWxsZW50ZXNxdWUgc2l0IGFtZXQgcG9ydHRpdG9yLiBBYyBwbGFjZXJhdCB2ZXN0aWJ1bHVtIGxlY3R1cyBtYXVyaXMgdWx0cmljZXMgZXJvcyBpbiBjdXJzdXMuIFJpc3VzIGF0IHVsdHJpY2VzIG1pIHRlbXB1cyBpbXBlcmRpZXQgbnVsbGEgbWFsZXN1YWRhLiBTdXNwZW5kaXNzZSBmYXVjaWJ1cyBpbnRlcmR1bSBwb3N1ZXJlIGxvcmVtIGlwc3VtLiBBcmN1IG9kaW8gdXQgc2VtIG51bGxhIHBoYXJldHJhLiBBbWV0IHRlbGx1cyBjcmFzIGFkaXBpc2NpbmcgZW5pbS4nO1xuICAgIFxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChib2R5KTtcblxuICAgICAvLyBoaWRlIHBhZ2UgdW50aWwgY2FsbGVkXG4gICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdlbmVyYXRlQWJvdXRQYWdlOiBnZW5lcmF0ZUFib3V0UGFnZVxufVxuIiwiZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0UGFnZShlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFwUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0dyZWVud2ljaCBWaWxsYWdlLCBOZXcgWW9yaywgTlkgMTAwMTIsIFVTQSc7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnKDIxMikgODkzLTk5MzgnO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gJ01vbi1GcmkgMDg6MDAtMTc6MDAgfCBTYXQtU3VuIDEwOjAwLTE0OjAwJztcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kKG1hcFJvdywgdGV4dFJvdyk7XG4gICAgdGV4dFJvdy5hcHBlbmQocm93Miwgcm93Mywgcm93NCk7XG4gICAgZW1iZWRNYXAobWFwUm93KTtcbiAgICAvLyBhZGRyZXNzIHNlY3Rpb25cbiAgICBtYXJrZXJTdmcocm93Mik7XG4gICAgcm93Mi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICAvLyBwaG9uZVxuICAgIHBob25lU3ZnKHJvdzMpO1xuICAgIHJvdzMuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIC8vIGhvdXJzXG4gICAgY2xvY2tTdmcocm93NCk7XG4gICAgcm93NC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAvLyBoaWRlIHVudGlsIGNhbGxlZFxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBlbWJlZE1hcChub2RlKSB7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMDIzLjQ0MDkwMjkzNjEwMTMhMmQtNzMuOTk5MTEzNTE2Mjg2OSEzZDQwLjczMDMyMjg4NzgyMzQwNSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4ZGZkMzRmOTUwODA0MzE5MiEyek5ERENzRFF6SnpRNUxqSWlUaUEzTThLd05Ua25ORGt1TWlKWCE1ZTAhM20yITFzZW4hMnN1ayE0djE2NTM1OTE0NjgxMzchNW0yITFzZW4hMnN1a1wiKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc0MDAnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMzAwJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3JlZmVycmVycG9saWN5JywgJ25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJyk7XG5cbiAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChpZnJhbWUpO1xufVxuXG5jb25zdCBjbG9ja1N2ZyA9IChub2RlKSA9PiB7XG4gICAgcmVuZGVyU3ZnKG5vZGUsIFxuICAgICAgICBcIk0xMiwwQTEyLDEyLDAsMSwwLDI0LDEyLDEyLjAxMywxMi4wMTMsMCwwLDAsMTIsMFptMCwyMkExMCwxMCwwLDEsMSwyMiwxMiwxMC4wMTEsMTAuMDExLDAsMCwxLDEyLDIyWlwiLFxuICAgICAgICBcIk0xMiw2YTEsMSwwLDAsMC0xLDF2NC4zMjVMNy42MjksMTMuNDM3YTEsMSwwLDAsMCwxLjA2MiwxLjdsMy44NC0yLjRBMSwxLDAsMCwwLDEzLDExLjg3OVY3QTEsMSwwLDAsMCwxMiw2WlwiKTtcbn1cblxuY29uc3QgbWFya2VyU3ZnID0gKG5vZGUpID0+IHtcbiAgICByZW5kZXJTdmcobm9kZSwgXG4gICAgICAgIFwiTTEyLDZhNCw0LDAsMSwwLDQsNEE0LDQsMCwwLDAsMTIsNlptMCw2YTIsMiwwLDEsMSwyLTJBMiwyLDAsMCwxLDEyLDEyWlwiLFxuICAgICAgICBcIk0xMiwyNGE1LjI3MSw1LjI3MSwwLDAsMS00LjMxMS0yLjJjLTMuODExLTUuMjU3LTUuNzQ0LTkuMjA5LTUuNzQ0LTExLjc0N2ExMC4wNTUsMTAuMDU1LDAsMCwxLDIwLjExLDBjMCwyLjUzOC0xLjkzMyw2LjQ5LTUuNzQ0LDExLjc0N0E1LjI3MSw1LjI3MSwwLDAsMSwxMiwyNFpNMTIsMi4xODFhNy44ODMsNy44ODMsMCwwLDAtNy44NzQsNy44NzRjMCwyLjAxLDEuODkzLDUuNzI3LDUuMzI5LDEwLjQ2NmEzLjE0NSwzLjE0NSwwLDAsMCw1LjA5LDBjMy40MzYtNC43MzksNS4zMjktOC40NTYsNS4zMjktMTAuNDY2QTcuODgzLDcuODgzLDAsMCwwLDEyLDIuMTgxWlwiKTtcbn1cblxuY29uc3QgcGhvbmVTdmcgPSAobm9kZSkgPT4ge1xuICAgIHJlbmRlclN2Zyhub2RlLCBcbiAgICAgICAgXCJNMTMsMWExLDEsMCwwLDEsMS0xQTEwLjAxMSwxMC4wMTEsMCwwLDEsMjQsMTBhMSwxLDAsMCwxLTIsMCw4LjAwOSw4LjAwOSwwLDAsMC04LThBMSwxLDAsMCwxLDEzLDFabTEsNWE0LDQsMCwwLDEsNCw0LDEsMSwwLDAsMCwyLDAsNi4wMDYsNi4wMDYsMCwwLDAtNi02LDEsMSwwLDAsMCwwLDJabTkuMDkzLDEwLjczOWEzLjEsMy4xLDAsMCwxLDAsNC4zNzhsLS45MSwxLjA0OWMtOC4xOSw3Ljg0MS0yOC4xMi0xMi4wODQtMjAuNC0yMC4zbDEuMTUtMUEzLjA4MSwzLjA4MSwwLDAsMSw3LjI2LjkwNmMuMDMxLjAzMSwxLjg4NCwyLjQzOCwxLjg4NCwyLjQzOGEzLjEsMy4xLDAsMCwxLS4wMDcsNC4yODJMNy45NzksOS4wODJhMTIuNzgxLDEyLjc4MSwwLDAsMCw2LjkzMSw2Ljk0NWwxLjQ2NS0xLjE2NWEzLjEsMy4xLDAsMCwxLDQuMjgxLS4wMDZTMjMuMDYyLDE2LjcwOCwyMy4wOTMsMTYuNzM5Wm0tMS4zNzYsMS40NTRzLTIuMzkzLTEuODQxLTIuNDI0LTEuODcyYTEuMSwxLjEsMCwwLDAtMS41NDksMGMtLjAyNy4wMjgtMi4wNDQsMS42MzUtMi4wNDQsMS42MzVhMSwxLDAsMCwxLS45NzkuMTUyQTE1LjAwOSwxNS4wMDksMCwwLDEsNS45LDkuM2ExLDEsMCwwLDEsLjE0NS0xUzcuNjUyLDYuMjgyLDcuNjc5LDYuMjU2YTEuMSwxLjEsMCwwLDAsMC0xLjU0OWMtLjAzMS0uMDMtMS44NzItMi40MjUtMS44NzItMi40MjVhMS4xLDEuMSwwLDAsMC0xLjUxLjAzOWwtMS4xNSwxQy0yLjQ5NSwxMC4xMDUsMTQuNzc2LDI2LjQxOCwyMC43MjEsMjAuOGwuOTExLTEuMDVBMS4xMjEsMS4xMjEsMCwwLDAsMjEuNzE3LDE4LjE5M1pcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN2Zyhub2RlLCBkMSwgZDIpIHtcbiAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjb25zdCBpY29uUGF0aDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcblxuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcyNCcpO1xuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMjQnKTtcbiAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld2JveCcsIGAwIDAgMjQgMjRgKTtcbiAgICBpY29uUGF0aDEuc2V0QXR0cmlidXRlKCdkJywgZDEpO1xuXG4gICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aDEpO1xuXG4gICAgaWYgKGQyKSB7XG4gICAgICAgIGNvbnN0IGljb25QYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICBpY29uUGF0aDIuc2V0QXR0cmlidXRlKCdkJywgZDIpO1xuICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdlbmVyYXRlQ29udGFjdFBhZ2U6IGdlbmVyYXRlQ29udGFjdFBhZ2Vcbn0iLCJmdW5jdGlvbiBjb250ZW50V3JhcHBlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZyb250UGFnZSgpIHtcbiAgICAvLyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYWJvdXQudGV4dENvbnRlbnQgPSAnQUJPVVQnO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIC8vIG1haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJveCk7XG5cbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHN0eWxpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG5cbiAgICB3ZWxjb21lLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFRIRSBMQVVHRU5TVEFOR0VgO1xuICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gYExvd2VyIE1hbmhhdHRhbidzIGF3YXJkLXdpbm5pbmcgcHJldHplbCBzaG9wLmBcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ1ZJRVcgTUVOVSc7XG5cbiAgICBib3guYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgYm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBib3guYXBwZW5kQ2hpbGQoc3R5bGluZ0Rpdik7XG4gICAgYm94LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgICBib3guYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICAvLyBmb290ZXJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgXG4gICAgY29uc3Qgc2lnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBzaWcudGV4dENvbnRlbnQgPSAnQnVpbHQgYnkgeGllam9uJztcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3hpZWpvbic7XG4gICAgcmVuZGVyR2l0aHViSWNvbihhKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzaWcpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICAgIC8vIGFwcGVuZCBjb250ZW50XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHaXRodWJJY29uKG5vZGUpIHtcbiAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuXG4gICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzI0Jyk7XG4gICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcyNCcpO1xuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Ym94JywgJzAgMCAyNCAyNCcpO1xuICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsIFwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIik7XG5cbiAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcblxuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGljb25TdmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb250ZW50V3JhcHBlcjogY29udGVudFdyYXBwZXIsXG4gICAgZ2VuZXJhdGVGcm9udFBhZ2U6IGdlbmVyYXRlRnJvbnRQYWdlXG59XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZU1lbnUoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGZsYXZvcnNcbiAgICBjb25zdCBwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwdW1wa2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG51dGVsbGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgcm9zZW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbG94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRydWZmbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAvLyBwcmljZXNcbiAgICBjb25zdCBzYW1wbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaWNlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmljZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcmV0emVscyc7XG4gICAgcGxhaW4udGV4dENvbnRlbnQgPSAnUGxhaW4nO1xuICAgIHB1bXBraW4udGV4dENvbnRlbnQgPSAnUHVtcGtpbiBTZWVkJztcbiAgICBudXRlbGxhLnRleHRDb250ZW50ID0gJ051dGVsbGEnO1xuICAgIHJvc2VtYXJ5LnRleHRDb250ZW50ID0gJ1Jvc2VtYXJ5JztcbiAgICBsb3gudGV4dENvbnRlbnQgPSAnTG94JztcbiAgICB0cnVmZmxlLnRleHRDb250ZW50ID0gJ0JsYWNrIFRydWZmbGUnO1xuICAgIHNhbXBsZS50ZXh0Q29udGVudCA9ICdTbWFsbCB8IExhcmdlJztcbiAgICBwcmljZTEudGV4dENvbnRlbnQgPSAnMiB8IDMuNSc7XG4gICAgcHJpY2UyLnRleHRDb250ZW50ID0gJzIuNSB8IDQnO1xuICAgIHByaWNlMy50ZXh0Q29udGVudCA9ICcyLjUgfCA0JztcbiAgICBwcmljZTQudGV4dENvbnRlbnQgPSAnMyB8IDQuNSc7XG4gICAgcHJpY2U1LnRleHRDb250ZW50ID0gJzQgfCA1LjUnO1xuICAgIHByaWNlNi50ZXh0Q29udGVudCA9ICc4LjUgfCAxMCc7XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW00KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNik7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlLCBzYW1wbGUpO1xuICAgIGl0ZW0xLmFwcGVuZChwbGFpbiwgcHJpY2UxKTtcbiAgICBpdGVtMi5hcHBlbmQocHVtcGtpbiwgcHJpY2UyKTtcbiAgICBpdGVtMy5hcHBlbmQobnV0ZWxsYSwgcHJpY2UzKTtcbiAgICBpdGVtNC5hcHBlbmQocm9zZW1hcnksIHByaWNlNCk7XG4gICAgaXRlbTUuYXBwZW5kKGxveCwgcHJpY2U1KTtcbiAgICBpdGVtNi5hcHBlbmQodHJ1ZmZsZSwgcHJpY2U2KTtcblxuICAgIC8vIGhpZGUgdW50aWwgY2FsbGVkXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdlbmVyYXRlTWVudTogZ2VuZXJhdGVNZW51XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBjb250ZW50V3JhcHBlciwgZ2VuZXJhdGVGcm9udFBhZ2UgfSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlQWJvdXRQYWdlIH0gZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCgpID0+IHtcbiAgICBjb250ZW50V3JhcHBlcigpOyBcbiAgICBnZW5lcmF0ZUZyb250UGFnZSgpO1xufSkoKTtcblxuY29uc3QgYWJvdXRTZWN0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBnZW5lcmF0ZUFib3V0UGFnZShtYWluKTtcblxuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgcDpudGgtb2YtdHlwZSgyKScpO1xuICAgIGNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuXG4gICAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVQYWdlKGFib3V0UGFnZSwgbWVudVNlY3Rpb24ubWVudVBhZ2UsIGNvbnRhY3RTZWN0aW9uLmNvbnRhY3RQYWdlLCAnZmxleCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWJvdXRQYWdlOiBhYm91dFBhZ2VcbiAgICB9XG59KSgpO1xuXG5jb25zdCBtZW51U2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgZ2VuZXJhdGVNZW51KG1haW4pO1xuXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIHA6bnRoLW9mLXR5cGUoMSknKTtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gdG9nZ2xlUGFnZShtZW51UGFnZSwgYWJvdXRTZWN0aW9uLmFib3V0UGFnZSwgY29udGFjdFNlY3Rpb24uY29udGFjdFBhZ2UsICdncmlkJyk7XG5cbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZW51UGFnZTogbWVudVBhZ2VcbiAgICB9XG59KSgpO1xuXG5jb25zdCBjb250YWN0U2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgZ2VuZXJhdGVDb250YWN0UGFnZShtYWluKTtcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlciBwOmxhc3Qtb2YtdHlwZScpO1xuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVQYWdlKGNvbnRhY3RQYWdlLCBhYm91dFNlY3Rpb24uYWJvdXRQYWdlLCBtZW51U2VjdGlvbi5tZW51UGFnZSwgJ2dyaWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhY3RQYWdlOiBjb250YWN0UGFnZVxuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhZ2UoZWxlbWVudCwgcGFnZUIsIHBhZ2VDLCBkaXNwbGF5VHlwZSkge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gnKTtcblxuICAgIGlmIChlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5VHlwZTtcbiAgICAgICAgLy8gY2xlYXIgb3RoZXIgcGFnZXNcbiAgICAgICAgcGFnZUIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcGFnZUMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gZGlzcGxheSBob21lcGFnZVxuICAgICAgICBib3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9