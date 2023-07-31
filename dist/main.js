/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Default styles for all devices */
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: darkslateblue;
  color: white;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
}

.body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.09);
}

.form {
  margin-top: 5vh;
  width: 20vw;
  display: grid;
  align-items: center;

  height: 3vh;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3vw;
  background-color: white;
  border-radius: 20px;
}

.formContainer {
  display: flex;
  justify-content: center;
}

.form input {
  border: none;
  margin-left: 5px;
  padding-left: 0.5vw;
  font-size: 1rem;
  font-style: italic;
}

.form input:focus {
  outline: none;
}

.inputImage {
  height: 2.5vh;
  grid-row-start: 1;
  grid-column-start: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  justify-items: center;
  align-content: flex-start;
}

.country {
  font-size: 5rem;
}

.region {
  font-size: 2.5em;
}

.localtime,
.current,
.tempCelsius,
.tempFahrenheit {
  font-size: 1.5rem;
}

.pic {
  height: 6vh;
}

.unitSwitcherBtn {
  grid-row-start: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  color: black;
  width: 5vw;
  border: none;
  padding: 0.8vmin;
}

input:hover {
  cursor: pointer;
}

.errorDiv {
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 90vw;
}

.errorMsg {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
}

.tempCelsius,
.tempFahrenheit {
  font-weight: bold;
}

/* Media query for phones/mobile devices */
@media screen and (max-width: 768px) {
  body {
    /* Modify body styles for mobile devices here */
    font-size: 16px; /* Adjust font size for better readability on smaller screens */
    background-color: darkslategray; /* Change the background color for mobile devices */
  }

  .form {
    /* Modify form styles for mobile devices here */
    width: 80vw; /* Make the form wider to fit better on small screens */
    height: 4vh;
    grid-template-columns: 1fr; /* Remove the second grid column to stack elements */
  }

  .form input {
    /* Modify form input styles for mobile devices here */
    font-size: 1rem; /* Increase font size for better readability on smaller screens */
  }

  .inputImage {
    /* Modify inputImage styles for mobile devices here */
    height: 3.2vh; /* Adjust the height of the inputImage for better visibility */
    margin-right: 2vmin;
  }

  .container {
    /* Modify container styles for mobile devices here */
    gap: 10px; /* Add some gap between elements to improve layout */
  }

  .country {
    /* Modify country styles for mobile devices here */
    font-size: 3rem; /* Reduce font size for better fit on smaller screens */
  }

  .region {
    /* Modify region styles for mobile devices here */
    font-size: 1.3em; /* Reduce font size for better fit on smaller screens */
  }

  .localtime,
  .current,
  .tempCelsius,
  .tempFahrenheit {
    /* Modify shared text styles for mobile devices here */
    font-size: 1.2rem; /* Adjust font size for better readability on smaller screens */
  }

  .pic {
    /* Modify pic styles for mobile devices here */
    height: 8vh; /* Adjust the height of the pic for better visibility */
  }

  .unitSwitcherBtn {
    /* Modify unitSwitcherBtn styles for mobile devices here */
    width: 20vw; /* Make the button wider to fit better on small screens */
    padding: 2vmin;
  }

  .errorMsg {
    font-size: 0.89em; /* Adjust font size for better readability on smaller screens */
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;EACV,+BAA+B;EAC/B,YAAY;EACZ,yDAA8C;EAC9C,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,mBAAmB;;EAEnB,WAAW;EACX,uBAAuB;EACvB,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;EAIE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA,0CAA0C;AAC1C;EACE;IACE,+CAA+C;IAC/C,eAAe,EAAE,+DAA+D;IAChF,+BAA+B,EAAE,mDAAmD;EACtF;;EAEA;IACE,+CAA+C;IAC/C,WAAW,EAAE,uDAAuD;IACpE,WAAW;IACX,0BAA0B,EAAE,oDAAoD;EAClF;;EAEA;IACE,qDAAqD;IACrD,eAAe,EAAE,iEAAiE;EACpF;;EAEA;IACE,qDAAqD;IACrD,aAAa,EAAE,8DAA8D;IAC7E,mBAAmB;EACrB;;EAEA;IACE,oDAAoD;IACpD,SAAS,EAAE,oDAAoD;EACjE;;EAEA;IACE,kDAAkD;IAClD,eAAe,EAAE,uDAAuD;EAC1E;;EAEA;IACE,iDAAiD;IACjD,gBAAgB,EAAE,uDAAuD;EAC3E;;EAEA;;;;IAIE,sDAAsD;IACtD,iBAAiB,EAAE,+DAA+D;EACpF;;EAEA;IACE,8CAA8C;IAC9C,WAAW,EAAE,uDAAuD;EACtE;;EAEA;IACE,0DAA0D;IAC1D,WAAW,EAAE,yDAAyD;IACtE,cAAc;EAChB;;EAEA;IACE,iBAAiB,EAAE,+DAA+D;EACpF;AACF","sourcesContent":["/* Default styles for all devices */\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n  background-color: darkslateblue;\n  color: white;\n  background-image: url(./images/background.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.body {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.09);\n}\n\n.form {\n  margin-top: 5vh;\n  width: 20vw;\n  display: grid;\n  align-items: center;\n\n  height: 3vh;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 3vw;\n  background-color: white;\n  border-radius: 20px;\n}\n\n.formContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.form input {\n  border: none;\n  margin-left: 5px;\n  padding-left: 0.5vw;\n  font-size: 1rem;\n  font-style: italic;\n}\n\n.form input:focus {\n  outline: none;\n}\n\n.inputImage {\n  height: 2.5vh;\n  grid-row-start: 1;\n  grid-column-start: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  display: grid;\n  justify-items: center;\n  align-content: flex-start;\n}\n\n.country {\n  font-size: 5rem;\n}\n\n.region {\n  font-size: 2.5em;\n}\n\n.localtime,\n.current,\n.tempCelsius,\n.tempFahrenheit {\n  font-size: 1.5rem;\n}\n\n.pic {\n  height: 6vh;\n}\n\n.unitSwitcherBtn {\n  grid-row-start: 7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightblue;\n  color: black;\n  width: 5vw;\n  border: none;\n  padding: 0.8vmin;\n}\n\ninput:hover {\n  cursor: pointer;\n}\n\n.errorDiv {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  max-width: 90vw;\n}\n\n.errorMsg {\n  color: black;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.tempCelsius,\n.tempFahrenheit {\n  font-weight: bold;\n}\n\n/* Media query for phones/mobile devices */\n@media screen and (max-width: 768px) {\n  body {\n    /* Modify body styles for mobile devices here */\n    font-size: 16px; /* Adjust font size for better readability on smaller screens */\n    background-color: darkslategray; /* Change the background color for mobile devices */\n  }\n\n  .form {\n    /* Modify form styles for mobile devices here */\n    width: 80vw; /* Make the form wider to fit better on small screens */\n    height: 4vh;\n    grid-template-columns: 1fr; /* Remove the second grid column to stack elements */\n  }\n\n  .form input {\n    /* Modify form input styles for mobile devices here */\n    font-size: 1rem; /* Increase font size for better readability on smaller screens */\n  }\n\n  .inputImage {\n    /* Modify inputImage styles for mobile devices here */\n    height: 3.2vh; /* Adjust the height of the inputImage for better visibility */\n    margin-right: 2vmin;\n  }\n\n  .container {\n    /* Modify container styles for mobile devices here */\n    gap: 10px; /* Add some gap between elements to improve layout */\n  }\n\n  .country {\n    /* Modify country styles for mobile devices here */\n    font-size: 3rem; /* Reduce font size for better fit on smaller screens */\n  }\n\n  .region {\n    /* Modify region styles for mobile devices here */\n    font-size: 1.3em; /* Reduce font size for better fit on smaller screens */\n  }\n\n  .localtime,\n  .current,\n  .tempCelsius,\n  .tempFahrenheit {\n    /* Modify shared text styles for mobile devices here */\n    font-size: 1.2rem; /* Adjust font size for better readability on smaller screens */\n  }\n\n  .pic {\n    /* Modify pic styles for mobile devices here */\n    height: 8vh; /* Adjust the height of the pic for better visibility */\n  }\n\n  .unitSwitcherBtn {\n    /* Modify unitSwitcherBtn styles for mobile devices here */\n    width: 20vw; /* Make the button wider to fit better on small screens */\n    padding: 2vmin;\n  }\n\n  .errorMsg {\n    font-size: 0.89em; /* Adjust font size for better readability on smaller screens */\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/createDataDivs.js":
/*!*******************************!*\
  !*** ./src/createDataDivs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDataDivs)
/* harmony export */ });
/* harmony import */ var _picGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picGenerator */ "./src/picGenerator.js");
/* harmony import */ var _unitSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitSwitcher */ "./src/unitSwitcher.js");



function createDataDivs(weatherData) {
  const container = document.querySelector('.container');
  Object.entries(weatherData).forEach(([key, value]) => {
    const div = document.createElement('div');
    div.classList.add(key);
    if (key === 'tempCelsius') {
      div.innerHTML = `${value}°C`;
    } else if (key === 'tempFahrenheit') {
      div.innerHTML = `${value}F`;
      div.style.display = 'none';
    } else {
      div.innerHTML = `${value}`;
    }
    container.appendChild(div);
  });

  const loadingIndicator = document.createElement('div');
  loadingIndicator.classList.add('loadingIndicator');
  loadingIndicator.textContent = 'Loading...';
  container.appendChild(loadingIndicator);

  const weatherPicDiv = document.createElement('img');
  weatherPicDiv.classList.add('pic');
  container.appendChild(weatherPicDiv);
  const currentCondition = weatherData.current;
  weatherPicDiv.src = (0,_picGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(currentCondition);

  const unitSwitcherBtn = document.createElement('button');
  unitSwitcherBtn.classList.add('unitSwitcherBtn');
  (0,_unitSwitcher__WEBPACK_IMPORTED_MODULE_1__["default"])(unitSwitcherBtn);
  unitSwitcherBtn.addEventListener('click', () => {
    (0,_unitSwitcher__WEBPACK_IMPORTED_MODULE_1__["default"])(unitSwitcherBtn);
  });
  container.appendChild(unitSwitcherBtn);
}


/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
const processData = data => {
  const date = new Date(data.location.localtime);
  const formattedTime = date.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const weatherData = {
    country: data.location.country,
    region: data.location.region,
    localtime: formattedTime,
    current: data.current.condition.text,
    tempCelsius: data.current.temp_c,
    tempFahrenheit: data.current.temp_f,
  };

  return weatherData;
};

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=33254ebb9692453c8e6182945231406&q=${location}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    console.log(data);
    return processData(data);
  } catch (error) {
    throw new Error('An error occurred while fetching weather data:', error);
  }
}


/***/ }),

/***/ "./src/handleError.js":
/*!****************************!*\
  !*** ./src/handleError.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleError)
/* harmony export */ });
function handleError(error) {
  console.log(error);
  const container = document.querySelector('.container');
  const errorDiv = document.createElement('div');
  const errorMessage = document.createElement('p');
  errorDiv.classList.add('errorDiv');
  errorMessage.classList.add('errorMsg');
  container.appendChild(errorDiv);
  errorDiv.appendChild(errorMessage);
  errorMessage.textContent =
    'Location not found. Search must be in the form of "City", "City, State" or "City, Country".';
}


/***/ }),

/***/ "./src/handleFormSubmit.js":
/*!*********************************!*\
  !*** ./src/handleFormSubmit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleFormSubmit)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");
/* harmony import */ var _createDataDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDataDivs */ "./src/createDataDivs.js");
/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleError */ "./src/handleError.js");




const container = document.querySelector('.container');

function handleFormSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const inputElement = document.getElementById('location');
    const inputValue = inputElement.value;

    try {
      // Fetch weather data
      const weatherData = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])(inputValue);

      // Check if weatherData is valid
      if (weatherData && Object.keys(weatherData).length > 0) {
        // Clear existing divs
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        // Create new divs with weather data
        (0,_createDataDivs__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
      } else {
        // Handle case where there is no weather data
      }
    } catch (error) {
      // Handle error
      if (!document.querySelector('.errorMsg')) {
        (0,_handleError__WEBPACK_IMPORTED_MODULE_2__["default"])(error);
      }
    }
  });
}


/***/ }),

/***/ "./src/initializePage.js":
/*!*******************************!*\
  !*** ./src/initializePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialisePage)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");
/* harmony import */ var _createDataDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDataDivs */ "./src/createDataDivs.js");
/* harmony import */ var _images_icons8_search_50_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons8-search-50.png */ "./src/images/icons8-search-50.png");




function initialisePage() {
  const submitImage = document.querySelector('.inputImage');
  submitImage.src = _images_icons8_search_50_png__WEBPACK_IMPORTED_MODULE_2__;
  function getRandomCountry() {
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  }

  // Populate divs with random country data on page load
  const randomCountry = getRandomCountry();
  (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])(randomCountry).then(weatherData => {
    (0,_createDataDivs__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
  });
}


/***/ }),

/***/ "./src/picGenerator.js":
/*!*****************************!*\
  !*** ./src/picGenerator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_sunny_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sunny.png */ "./src/images/sunny.png");
/* harmony import */ var _images_partlyCloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/partlyCloudy.png */ "./src/images/partlyCloudy.png");
/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/rain.png */ "./src/images/rain.png");
/* harmony import */ var _images_lightRain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lightRain.png */ "./src/images/lightRain.png");
/* harmony import */ var _images_misty_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/misty.png */ "./src/images/misty.png");
/* harmony import */ var _images_overcast_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/overcast.png */ "./src/images/overcast.png");
/* harmony import */ var _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/thunderstorm.png */ "./src/images/thunderstorm.png");








const decideWeatherPic = currentCondition => {
  let src;

  switch (currentCondition) {
    case 'Sunny':
      src = _images_sunny_png__WEBPACK_IMPORTED_MODULE_0__;
      break;
    case 'Partly cloudy':
      src = _images_partlyCloudy_png__WEBPACK_IMPORTED_MODULE_1__;
      break;
    case 'Moderate or heavy rain shower':
      src = _images_rain_png__WEBPACK_IMPORTED_MODULE_2__;
      break;
    case 'Clear':
      src = _images_sunny_png__WEBPACK_IMPORTED_MODULE_0__;
      break;
    case 'Light rain':
      src = _images_lightRain_png__WEBPACK_IMPORTED_MODULE_3__;
      break;
    case 'Mist':
      src = _images_misty_png__WEBPACK_IMPORTED_MODULE_4__;
      break;
    case 'Overcast':
      src = _images_overcast_png__WEBPACK_IMPORTED_MODULE_5__;
      break;
    default:
      if (currentCondition.includes('thunder')) {
        // Handle cases with thunder
        src = _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_6__;
      } else if (currentCondition.includes('rain')) {
        src = _images_rain_png__WEBPACK_IMPORTED_MODULE_2__;
      } else {
        src = _images_overcast_png__WEBPACK_IMPORTED_MODULE_5__;
      }
      break;
  }

  return src;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decideWeatherPic);


/***/ }),

/***/ "./src/unitSwitcher.js":
/*!*****************************!*\
  !*** ./src/unitSwitcher.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitSwitcher)
/* harmony export */ });
let currentUnit = 'celsius'; // Assuming the default unit is Celsius
function unitSwitcher(switcher) {
  const unitSwitcherButton = switcher;
  const fahrenheitDiv = document.querySelector('.tempFahrenheit');
  const celsiusDiv = document.querySelector('.tempCelsius');

  if (currentUnit === 'celsius') {
    // If current unit is Celsius, make Fahrenheit div invisible
    fahrenheitDiv.style.display = 'none';
    celsiusDiv.style.display = 'block'; // Make Celsius div visible
    unitSwitcherButton.innerText = 'Fahrenheit'; // Set the text of the button
    currentUnit = 'fahrenheit'; // Update currentUnit to Fahrenheit
  } else {
    // If current unit is Fahrenheit, make Celsius div invisible
    celsiusDiv.style.display = 'none';
    fahrenheitDiv.style.display = 'block'; // Make Fahrenheit div visible
    unitSwitcherButton.innerText = 'Celsius'; // Set the text of the button
    currentUnit = 'celsius'; // Update currentUnit to Celsius
  }
}


/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfc6a07d14a844038898.jpg";

/***/ }),

/***/ "./src/images/icons8-search-50.png":
/*!*****************************************!*\
  !*** ./src/images/icons8-search-50.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b6162614179dd07501f.png";

/***/ }),

/***/ "./src/images/lightRain.png":
/*!**********************************!*\
  !*** ./src/images/lightRain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b326d41fe858346cf8e.png";

/***/ }),

/***/ "./src/images/misty.png":
/*!******************************!*\
  !*** ./src/images/misty.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39aee7b2e67f22c27159.png";

/***/ }),

/***/ "./src/images/overcast.png":
/*!*********************************!*\
  !*** ./src/images/overcast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d16f826c96d1b8173c6.png";

/***/ }),

/***/ "./src/images/partlyCloudy.png":
/*!*************************************!*\
  !*** ./src/images/partlyCloudy.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22bcc7239e1a859725cf.png";

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed28102bcdb940a1dd9c.png";

/***/ }),

/***/ "./src/images/sunny.png":
/*!******************************!*\
  !*** ./src/images/sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "080ffa5941401265365f.png";

/***/ }),

/***/ "./src/images/thunderstorm.png":
/*!*************************************!*\
  !*** ./src/images/thunderstorm.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45f203968a3b3a786451.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _images_icons8_search_50_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons8-search-50.png */ "./src/images/icons8-search-50.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handleFormSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleFormSubmit */ "./src/handleFormSubmit.js");
/* harmony import */ var _initializePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initializePage */ "./src/initializePage.js");





(0,_initializePage__WEBPACK_IMPORTED_MODULE_3__["default"])();

(0,_handleFormSubmit__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDcEI7QUFDb0I7QUFDSjs7QUFFOUMsMkRBQWM7O0FBRWQsNkRBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NyZWF0ZURhdGFEaXZzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGFuZGxlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9oYW5kbGVGb3JtU3VibWl0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5pdGlhbGl6ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9waWNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy91bml0U3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRGVmYXVsdCBzdHlsZXMgZm9yIGFsbCBkZXZpY2VzICovXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgd2lkdGg6IDIwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiAzdmg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uZm9ybUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjV2dztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5mb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0SW1hZ2Uge1xuICBoZWlnaHQ6IDIuNXZoO1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLnJlZ2lvbiB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5sb2NhbHRpbWUsXG4uY3VycmVudCxcbi50ZW1wQ2Vsc2l1cyxcbi50ZW1wRmFocmVuaGVpdCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGljIHtcbiAgaGVpZ2h0OiA2dmg7XG59XG5cbi51bml0U3dpdGNoZXJCdG4ge1xuICBncmlkLXJvdy1zdGFydDogNztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNXZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuOHZtaW47XG59XG5cbmlucHV0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXJyb3JEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDkwdnc7XG59XG5cbi5lcnJvck1zZyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGVtcENlbHNpdXMsXG4udGVtcEZhaHJlbmhlaXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogTWVkaWEgcXVlcnkgZm9yIHBob25lcy9tb2JpbGUgZGV2aWNlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSB7XG4gICAgLyogTW9kaWZ5IGJvZHkgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgb24gc21hbGxlciBzY3JlZW5zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBtb2JpbGUgZGV2aWNlcyAqL1xuICB9XG5cbiAgLmZvcm0ge1xuICAgIC8qIE1vZGlmeSBmb3JtIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIHdpZHRoOiA4MHZ3OyAvKiBNYWtlIHRoZSBmb3JtIHdpZGVyIHRvIGZpdCBiZXR0ZXIgb24gc21hbGwgc2NyZWVucyAqL1xuICAgIGhlaWdodDogNHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBSZW1vdmUgdGhlIHNlY29uZCBncmlkIGNvbHVtbiB0byBzdGFjayBlbGVtZW50cyAqL1xuICB9XG5cbiAgLmZvcm0gaW5wdXQge1xuICAgIC8qIE1vZGlmeSBmb3JtIGlucHV0IHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogSW5jcmVhc2UgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgb24gc21hbGxlciBzY3JlZW5zICovXG4gIH1cblxuICAuaW5wdXRJbWFnZSB7XG4gICAgLyogTW9kaWZ5IGlucHV0SW1hZ2Ugc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXG4gICAgaGVpZ2h0OiAzLjJ2aDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGlucHV0SW1hZ2UgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXG4gICAgbWFyZ2luLXJpZ2h0OiAydm1pbjtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIC8qIE1vZGlmeSBjb250YWluZXIgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXG4gICAgZ2FwOiAxMHB4OyAvKiBBZGQgc29tZSBnYXAgYmV0d2VlbiBlbGVtZW50cyB0byBpbXByb3ZlIGxheW91dCAqL1xuICB9XG5cbiAgLmNvdW50cnkge1xuICAgIC8qIE1vZGlmeSBjb3VudHJ5IHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGZvbnQtc2l6ZTogM3JlbTsgLyogUmVkdWNlIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxuXG4gIC5yZWdpb24ge1xuICAgIC8qIE1vZGlmeSByZWdpb24gc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXG4gICAgZm9udC1zaXplOiAxLjNlbTsgLyogUmVkdWNlIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxuXG4gIC5sb2NhbHRpbWUsXG4gIC5jdXJyZW50LFxuICAudGVtcENlbHNpdXMsXG4gIC50ZW1wRmFocmVuaGVpdCB7XG4gICAgLyogTW9kaWZ5IHNoYXJlZCB0ZXh0IHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgb24gc21hbGxlciBzY3JlZW5zICovXG4gIH1cblxuICAucGljIHtcbiAgICAvKiBNb2RpZnkgcGljIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGhlaWdodDogOHZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBvZiB0aGUgcGljIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xuICB9XG5cbiAgLnVuaXRTd2l0Y2hlckJ0biB7XG4gICAgLyogTW9kaWZ5IHVuaXRTd2l0Y2hlckJ0biBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cbiAgICB3aWR0aDogMjB2dzsgLyogTWFrZSB0aGUgYnV0dG9uIHdpZGVyIHRvIGZpdCBiZXR0ZXIgb24gc21hbGwgc2NyZWVucyAqL1xuICAgIHBhZGRpbmc6IDJ2bWluO1xuICB9XG5cbiAgLmVycm9yTXNnIHtcbiAgICBmb250LXNpemU6IDAuODllbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixZQUFZO0VBQ1oseURBQThDO0VBQzlDLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztFQUlFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsZUFBZSxFQUFFLCtEQUErRDtJQUNoRiwrQkFBK0IsRUFBRSxtREFBbUQ7RUFDdEY7O0VBRUE7SUFDRSwrQ0FBK0M7SUFDL0MsV0FBVyxFQUFFLHVEQUF1RDtJQUNwRSxXQUFXO0lBQ1gsMEJBQTBCLEVBQUUsb0RBQW9EO0VBQ2xGOztFQUVBO0lBQ0UscURBQXFEO0lBQ3JELGVBQWUsRUFBRSxpRUFBaUU7RUFDcEY7O0VBRUE7SUFDRSxxREFBcUQ7SUFDckQsYUFBYSxFQUFFLDhEQUE4RDtJQUM3RSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxvREFBb0Q7SUFDcEQsU0FBUyxFQUFFLG9EQUFvRDtFQUNqRTs7RUFFQTtJQUNFLGtEQUFrRDtJQUNsRCxlQUFlLEVBQUUsdURBQXVEO0VBQzFFOztFQUVBO0lBQ0UsaURBQWlEO0lBQ2pELGdCQUFnQixFQUFFLHVEQUF1RDtFQUMzRTs7RUFFQTs7OztJQUlFLHNEQUFzRDtJQUN0RCxpQkFBaUIsRUFBRSwrREFBK0Q7RUFDcEY7O0VBRUE7SUFDRSw4Q0FBOEM7SUFDOUMsV0FBVyxFQUFFLHVEQUF1RDtFQUN0RTs7RUFFQTtJQUNFLDBEQUEwRDtJQUMxRCxXQUFXLEVBQUUseURBQXlEO0lBQ3RFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUIsRUFBRSwrREFBK0Q7RUFDcEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEZWZhdWx0IHN0eWxlcyBmb3IgYWxsIGRldmljZXMgKi9cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiAzdmg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDN2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjV2dztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0SW1hZ2Uge1xcbiAgaGVpZ2h0OiAyLjV2aDtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5yZWdpb24ge1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuLmxvY2FsdGltZSxcXG4uY3VycmVudCxcXG4udGVtcENlbHNpdXMsXFxuLnRlbXBGYWhyZW5oZWl0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucGljIHtcXG4gIGhlaWdodDogNnZoO1xcbn1cXG5cXG4udW5pdFN3aXRjaGVyQnRuIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiA3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiA1dnc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjh2bWluO1xcbn1cXG5cXG5pbnB1dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxufVxcblxcbi5lcnJvck1zZyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGVtcENlbHNpdXMsXFxuLnRlbXBGYWhyZW5oZWl0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyeSBmb3IgcGhvbmVzL21vYmlsZSBkZXZpY2VzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICAvKiBNb2RpZnkgYm9keSBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7IC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgbW9iaWxlIGRldmljZXMgKi9cXG4gIH1cXG5cXG4gIC5mb3JtIHtcXG4gICAgLyogTW9kaWZ5IGZvcm0gc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIHdpZHRoOiA4MHZ3OyAvKiBNYWtlIHRoZSBmb3JtIHdpZGVyIHRvIGZpdCBiZXR0ZXIgb24gc21hbGwgc2NyZWVucyAqL1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIFJlbW92ZSB0aGUgc2Vjb25kIGdyaWQgY29sdW1uIHRvIHN0YWNrIGVsZW1lbnRzICovXFxuICB9XFxuXFxuICAuZm9ybSBpbnB1dCB7XFxuICAgIC8qIE1vZGlmeSBmb3JtIGlucHV0IHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xcbiAgICBmb250LXNpemU6IDFyZW07IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcblxcbiAgLmlucHV0SW1hZ2Uge1xcbiAgICAvKiBNb2RpZnkgaW5wdXRJbWFnZSBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgaGVpZ2h0OiAzLjJ2aDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGlucHV0SW1hZ2UgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXFxuICAgIG1hcmdpbi1yaWdodDogMnZtaW47XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgLyogTW9kaWZ5IGNvbnRhaW5lciBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgZ2FwOiAxMHB4OyAvKiBBZGQgc29tZSBnYXAgYmV0d2VlbiBlbGVtZW50cyB0byBpbXByb3ZlIGxheW91dCAqL1xcbiAgfVxcblxcbiAgLmNvdW50cnkge1xcbiAgICAvKiBNb2RpZnkgY291bnRyeSBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgZm9udC1zaXplOiAzcmVtOyAvKiBSZWR1Y2UgZm9udCBzaXplIGZvciBiZXR0ZXIgZml0IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcblxcbiAgLnJlZ2lvbiB7XFxuICAgIC8qIE1vZGlmeSByZWdpb24gc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07IC8qIFJlZHVjZSBmb250IHNpemUgZm9yIGJldHRlciBmaXQgb24gc21hbGxlciBzY3JlZW5zICovXFxuICB9XFxuXFxuICAubG9jYWx0aW1lLFxcbiAgLmN1cnJlbnQsXFxuICAudGVtcENlbHNpdXMsXFxuICAudGVtcEZhaHJlbmhlaXQge1xcbiAgICAvKiBNb2RpZnkgc2hhcmVkIHRleHQgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgb24gc21hbGxlciBzY3JlZW5zICovXFxuICB9XFxuXFxuICAucGljIHtcXG4gICAgLyogTW9kaWZ5IHBpYyBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgaGVpZ2h0OiA4dmg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBwaWMgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXFxuICB9XFxuXFxuICAudW5pdFN3aXRjaGVyQnRuIHtcXG4gICAgLyogTW9kaWZ5IHVuaXRTd2l0Y2hlckJ0biBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgd2lkdGg6IDIwdnc7IC8qIE1ha2UgdGhlIGJ1dHRvbiB3aWRlciB0byBmaXQgYmV0dGVyIG9uIHNtYWxsIHNjcmVlbnMgKi9cXG4gICAgcGFkZGluZzogMnZtaW47XFxuICB9XFxuXFxuICAuZXJyb3JNc2cge1xcbiAgICBmb250LXNpemU6IDAuODllbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwaWNHZW5lcmF0b3IgZnJvbSAnLi9waWNHZW5lcmF0b3InO1xuaW1wb3J0IHVuaXRTd2l0Y2hlciBmcm9tICcuL3VuaXRTd2l0Y2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURhdGFEaXZzKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgT2JqZWN0LmVudHJpZXMod2VhdGhlckRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgaWYgKGtleSA9PT0gJ3RlbXBDZWxzaXVzJykge1xuICAgICAgZGl2LmlubmVySFRNTCA9IGAke3ZhbHVlfcKwQ2A7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICd0ZW1wRmFocmVuaGVpdCcpIHtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBgJHt2YWx1ZX1GYDtcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xuXG4gIGNvbnN0IGxvYWRpbmdJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9hZGluZ0luZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nSW5kaWNhdG9yJyk7XG4gIGxvYWRpbmdJbmRpY2F0b3IudGV4dENvbnRlbnQgPSAnTG9hZGluZy4uLic7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkaW5nSW5kaWNhdG9yKTtcblxuICBjb25zdCB3ZWF0aGVyUGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJQaWNEaXYuY2xhc3NMaXN0LmFkZCgncGljJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyUGljRGl2KTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHdlYXRoZXJQaWNEaXYuc3JjID0gcGljR2VuZXJhdG9yKGN1cnJlbnRDb25kaXRpb24pO1xuXG4gIGNvbnN0IHVuaXRTd2l0Y2hlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB1bml0U3dpdGNoZXJCdG4uY2xhc3NMaXN0LmFkZCgndW5pdFN3aXRjaGVyQnRuJyk7XG4gIHVuaXRTd2l0Y2hlcih1bml0U3dpdGNoZXJCdG4pO1xuICB1bml0U3dpdGNoZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdW5pdFN3aXRjaGVyKHVuaXRTd2l0Y2hlckJ0bik7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5pdFN3aXRjaGVyQnRuKTtcbn1cbiIsImNvbnN0IHByb2Nlc3NEYXRhID0gZGF0YSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICB9KTtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICBsb2NhbHRpbWU6IGZvcm1hdHRlZFRpbWUsXG4gICAgY3VycmVudDogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIHRlbXBDZWxzaXVzOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgIHRlbXBGYWhyZW5oZWl0OiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICB9O1xuXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTMzMjU0ZWJiOTY5MjQ1M2M4ZTYxODI5NDUyMzE0MDYmcT0ke2xvY2F0aW9ufWBcbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHdlYXRoZXIgZGF0YScpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBwcm9jZXNzRGF0YShkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHdlYXRoZXIgZGF0YTonLCBlcnJvcik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2Vycm9yRGl2Jyk7XG4gIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvck1zZycpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuICBlcnJvckRpdi5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICdMb2NhdGlvbiBub3QgZm91bmQuIFNlYXJjaCBtdXN0IGJlIGluIHRoZSBmb3JtIG9mIFwiQ2l0eVwiLCBcIkNpdHksIFN0YXRlXCIgb3IgXCJDaXR5LCBDb3VudHJ5XCIuJztcbn1cbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2ZldGNoRGF0YSc7XG5pbXBvcnQgY3JlYXRlRGF0YURpdnMgZnJvbSAnLi9jcmVhdGVEYXRhRGl2cyc7XG5pbXBvcnQgaGFuZGxlRXJyb3IgZnJvbSAnLi9oYW5kbGVFcnJvcic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dEVsZW1lbnQudmFsdWU7XG5cbiAgICB0cnkge1xuICAgICAgLy8gRmV0Y2ggd2VhdGhlciBkYXRhXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGlucHV0VmFsdWUpO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZWF0aGVyRGF0YSBpcyB2YWxpZFxuICAgICAgaWYgKHdlYXRoZXJEYXRhICYmIE9iamVjdC5rZXlzKHdlYXRoZXJEYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGRpdnNcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZGl2cyB3aXRoIHdlYXRoZXIgZGF0YVxuICAgICAgICBjcmVhdGVEYXRhRGl2cyh3ZWF0aGVyRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0aGVyZSBpcyBubyB3ZWF0aGVyIGRhdGFcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSGFuZGxlIGVycm9yXG4gICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1zZycpKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vZmV0Y2hEYXRhJztcbmltcG9ydCBjcmVhdGVEYXRhRGl2cyBmcm9tICcuL2NyZWF0ZURhdGFEaXZzJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlcy9pY29uczgtc2VhcmNoLTUwLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpc2VQYWdlKCkge1xuICBjb25zdCBzdWJtaXRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dEltYWdlJyk7XG4gIHN1Ym1pdEltYWdlLnNyYyA9IGltYWdlO1xuICBmdW5jdGlvbiBnZXRSYW5kb21Db3VudHJ5KCkge1xuICAgIGNvbnN0IGNvdW50cmllcyA9IFsnVVNBJywgJ0NhbmFkYScsICdVSycsICdBdXN0cmFsaWEnLCAnR2VybWFueScsICdGcmFuY2UnXTtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvdW50cmllcy5sZW5ndGgpO1xuICAgIHJldHVybiBjb3VudHJpZXNbcmFuZG9tSW5kZXhdO1xuICB9XG5cbiAgLy8gUG9wdWxhdGUgZGl2cyB3aXRoIHJhbmRvbSBjb3VudHJ5IGRhdGEgb24gcGFnZSBsb2FkXG4gIGNvbnN0IHJhbmRvbUNvdW50cnkgPSBnZXRSYW5kb21Db3VudHJ5KCk7XG4gIGdldFdlYXRoZXJEYXRhKHJhbmRvbUNvdW50cnkpLnRoZW4od2VhdGhlckRhdGEgPT4ge1xuICAgIGNyZWF0ZURhdGFEaXZzKHdlYXRoZXJEYXRhKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgc3VubnkgZnJvbSAnLi9pbWFnZXMvc3VubnkucG5nJztcbmltcG9ydCBwYXJ0bHlDbG91ZHkgZnJvbSAnLi9pbWFnZXMvcGFydGx5Q2xvdWR5LnBuZyc7XG5pbXBvcnQgcmFpbnkgZnJvbSAnLi9pbWFnZXMvcmFpbi5wbmcnO1xuaW1wb3J0IGxpZ2h0UmFpbiBmcm9tICcuL2ltYWdlcy9saWdodFJhaW4ucG5nJztcbmltcG9ydCBtaXN0eSBmcm9tICcuL2ltYWdlcy9taXN0eS5wbmcnO1xuaW1wb3J0IE92ZXJjYXN0IGZyb20gJy4vaW1hZ2VzL292ZXJjYXN0LnBuZyc7XG5pbXBvcnQgVGh1bmRlciBmcm9tICcuL2ltYWdlcy90aHVuZGVyc3Rvcm0ucG5nJztcblxuY29uc3QgZGVjaWRlV2VhdGhlclBpYyA9IGN1cnJlbnRDb25kaXRpb24gPT4ge1xuICBsZXQgc3JjO1xuXG4gIHN3aXRjaCAoY3VycmVudENvbmRpdGlvbikge1xuICAgIGNhc2UgJ1N1bm55JzpcbiAgICAgIHNyYyA9IHN1bm55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUGFydGx5IGNsb3VkeSc6XG4gICAgICBzcmMgPSBwYXJ0bHlDbG91ZHk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcic6XG4gICAgICBzcmMgPSByYWlueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0NsZWFyJzpcbiAgICAgIHNyYyA9IHN1bm55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTGlnaHQgcmFpbic6XG4gICAgICBzcmMgPSBsaWdodFJhaW47XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNaXN0JzpcbiAgICAgIHNyYyA9IG1pc3R5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnT3ZlcmNhc3QnOlxuICAgICAgc3JjID0gT3ZlcmNhc3Q7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGN1cnJlbnRDb25kaXRpb24uaW5jbHVkZXMoJ3RodW5kZXInKSkge1xuICAgICAgICAvLyBIYW5kbGUgY2FzZXMgd2l0aCB0aHVuZGVyXG4gICAgICAgIHNyYyA9IFRodW5kZXI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb25kaXRpb24uaW5jbHVkZXMoJ3JhaW4nKSkge1xuICAgICAgICBzcmMgPSByYWlueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNyYyA9IE92ZXJjYXN0O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjaWRlV2VhdGhlclBpYztcbiIsImxldCBjdXJyZW50VW5pdCA9ICdjZWxzaXVzJzsgLy8gQXNzdW1pbmcgdGhlIGRlZmF1bHQgdW5pdCBpcyBDZWxzaXVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bml0U3dpdGNoZXIoc3dpdGNoZXIpIHtcbiAgY29uc3QgdW5pdFN3aXRjaGVyQnV0dG9uID0gc3dpdGNoZXI7XG4gIGNvbnN0IGZhaHJlbmhlaXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcEZhaHJlbmhlaXQnKTtcbiAgY29uc3QgY2Vsc2l1c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wQ2Vsc2l1cycpO1xuXG4gIGlmIChjdXJyZW50VW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgLy8gSWYgY3VycmVudCB1bml0IGlzIENlbHNpdXMsIG1ha2UgRmFocmVuaGVpdCBkaXYgaW52aXNpYmxlXG4gICAgZmFocmVuaGVpdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNlbHNpdXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIE1ha2UgQ2Vsc2l1cyBkaXYgdmlzaWJsZVxuICAgIHVuaXRTd2l0Y2hlckJ1dHRvbi5pbm5lclRleHQgPSAnRmFocmVuaGVpdCc7IC8vIFNldCB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uXG4gICAgY3VycmVudFVuaXQgPSAnZmFocmVuaGVpdCc7IC8vIFVwZGF0ZSBjdXJyZW50VW5pdCB0byBGYWhyZW5oZWl0XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VycmVudCB1bml0IGlzIEZhaHJlbmhlaXQsIG1ha2UgQ2Vsc2l1cyBkaXYgaW52aXNpYmxlXG4gICAgY2Vsc2l1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGZhaHJlbmhlaXREaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIE1ha2UgRmFocmVuaGVpdCBkaXYgdmlzaWJsZVxuICAgIHVuaXRTd2l0Y2hlckJ1dHRvbi5pbm5lclRleHQgPSAnQ2Vsc2l1cyc7IC8vIFNldCB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uXG4gICAgY3VycmVudFVuaXQgPSAnY2Vsc2l1cyc7IC8vIFVwZGF0ZSBjdXJyZW50VW5pdCB0byBDZWxzaXVzXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1zZWFyY2gtNTAucG5nJztcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhhbmRsZUZvcm1TdWJtaXQgZnJvbSAnLi9oYW5kbGVGb3JtU3VibWl0JztcbmltcG9ydCBpbml0aWFsaXNlUGFnZSBmcm9tICcuL2luaXRpYWxpemVQYWdlJztcblxuaW5pdGlhbGlzZVBhZ2UoKTtcblxuaGFuZGxlRm9ybVN1Ym1pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9