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

/***/ "./src/createLoadingInd.js":
/*!*********************************!*\
  !*** ./src/createLoadingInd.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLoadingInd)
/* harmony export */ });
const container = document.querySelector('.container');

function createLoadingInd() {
  const loadingIndicator = document.createElement('div');
  loadingIndicator.classList.add('loadingIndicator');
  loadingIndicator.textContent = 'Loading...';
  container.appendChild(loadingIndicator);
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
/* harmony import */ var _createLoadingInd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createLoadingInd */ "./src/createLoadingInd.js");





const container = document.querySelector('.container');

function handleFormSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputElement = document.getElementById('location');
    const inputValue = inputElement.value;

    try {
      (0,_createLoadingInd__WEBPACK_IMPORTED_MODULE_3__["default"])();
      const weatherData = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])(inputValue);
      const loadingIndicator = document.querySelector('.loadingIndicator');
      if (loadingIndicator) {
        container.removeChild(loadingIndicator);
      }

      if (weatherData && Object.keys(weatherData).length > 0) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        (0,_createDataDivs__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
      }
    } catch (error) {
      const loadingIndicator = document.querySelector('.loadingIndicator');
      if (loadingIndicator) {
        container.removeChild(loadingIndicator);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDcEI7QUFDb0I7QUFDSjs7QUFFOUMsMkRBQWM7O0FBRWQsNkRBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NyZWF0ZURhdGFEaXZzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY3JlYXRlTG9hZGluZ0luZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2hhbmRsZUVycm9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGFuZGxlRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luaXRpYWxpemVQYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcGljR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdW5pdFN3aXRjaGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIERlZmF1bHQgc3R5bGVzIGZvciBhbGwgZGV2aWNlcyAqL1xuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIHdpZHRoOiAyMHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGhlaWdodDogM3ZoO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMC41dnc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZm9ybSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dEltYWdlIHtcbiAgaGVpZ2h0OiAyLjV2aDtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmNvdW50cnkge1xuICBmb250LXNpemU6IDVyZW07XG59XG5cbi5yZWdpb24ge1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4ubG9jYWx0aW1lLFxuLmN1cnJlbnQsXG4udGVtcENlbHNpdXMsXG4udGVtcEZhaHJlbmhlaXQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBpYyB7XG4gIGhlaWdodDogNnZoO1xufVxuXG4udW5pdFN3aXRjaGVyQnRuIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDV2dztcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjh2bWluO1xufVxuXG5pbnB1dDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVycm9yRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xufVxuXG4uZXJyb3JNc2cge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRlbXBDZWxzaXVzLFxuLnRlbXBGYWhyZW5oZWl0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIE1lZGlhIHF1ZXJ5IGZvciBwaG9uZXMvbW9iaWxlIGRldmljZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkge1xuICAgIC8qIE1vZGlmeSBib2R5IHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7IC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgbW9iaWxlIGRldmljZXMgKi9cbiAgfVxuXG4gIC5mb3JtIHtcbiAgICAvKiBNb2RpZnkgZm9ybSBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cbiAgICB3aWR0aDogODB2dzsgLyogTWFrZSB0aGUgZm9ybSB3aWRlciB0byBmaXQgYmV0dGVyIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBoZWlnaHQ6IDR2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogUmVtb3ZlIHRoZSBzZWNvbmQgZ3JpZCBjb2x1bW4gdG8gc3RhY2sgZWxlbWVudHMgKi9cbiAgfVxuXG4gIC5mb3JtIGlucHV0IHtcbiAgICAvKiBNb2RpZnkgZm9ybSBpbnB1dCBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cbiAgICBmb250LXNpemU6IDFyZW07IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuICB9XG5cbiAgLmlucHV0SW1hZ2Uge1xuICAgIC8qIE1vZGlmeSBpbnB1dEltYWdlIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGhlaWdodDogMy4ydmg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dEltYWdlIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xuICAgIG1hcmdpbi1yaWdodDogMnZtaW47XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICAvKiBNb2RpZnkgY29udGFpbmVyIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGdhcDogMTBweDsgLyogQWRkIHNvbWUgZ2FwIGJldHdlZW4gZWxlbWVudHMgdG8gaW1wcm92ZSBsYXlvdXQgKi9cbiAgfVxuXG4gIC5jb3VudHJ5IHtcbiAgICAvKiBNb2RpZnkgY291bnRyeSBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cbiAgICBmb250LXNpemU6IDNyZW07IC8qIFJlZHVjZSBmb250IHNpemUgZm9yIGJldHRlciBmaXQgb24gc21hbGxlciBzY3JlZW5zICovXG4gIH1cblxuICAucmVnaW9uIHtcbiAgICAvKiBNb2RpZnkgcmVnaW9uIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xuICAgIGZvbnQtc2l6ZTogMS4zZW07IC8qIFJlZHVjZSBmb250IHNpemUgZm9yIGJldHRlciBmaXQgb24gc21hbGxlciBzY3JlZW5zICovXG4gIH1cblxuICAubG9jYWx0aW1lLFxuICAuY3VycmVudCxcbiAgLnRlbXBDZWxzaXVzLFxuICAudGVtcEZhaHJlbmhlaXQge1xuICAgIC8qIE1vZGlmeSBzaGFyZWQgdGV4dCBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cbiAgICBmb250LXNpemU6IDEuMnJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuICB9XG5cbiAgLnBpYyB7XG4gICAgLyogTW9kaWZ5IHBpYyBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cbiAgICBoZWlnaHQ6IDh2aDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIHBpYyBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cbiAgfVxuXG4gIC51bml0U3dpdGNoZXJCdG4ge1xuICAgIC8qIE1vZGlmeSB1bml0U3dpdGNoZXJCdG4gc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXG4gICAgd2lkdGg6IDIwdnc7IC8qIE1ha2UgdGhlIGJ1dHRvbiB3aWRlciB0byBmaXQgYmV0dGVyIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBwYWRkaW5nOiAydm1pbjtcbiAgfVxuXG4gIC5lcnJvck1zZyB7XG4gICAgZm9udC1zaXplOiAwLjg5ZW07IC8qIEFkanVzdCBmb250IHNpemUgZm9yIGJldHRlciByZWFkYWJpbGl0eSBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLHlEQUE4QztFQUM5Qyw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBLDBDQUEwQztBQUMxQztFQUNFO0lBQ0UsK0NBQStDO0lBQy9DLGVBQWUsRUFBRSwrREFBK0Q7SUFDaEYsK0JBQStCLEVBQUUsbURBQW1EO0VBQ3RGOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLFdBQVcsRUFBRSx1REFBdUQ7SUFDcEUsV0FBVztJQUNYLDBCQUEwQixFQUFFLG9EQUFvRDtFQUNsRjs7RUFFQTtJQUNFLHFEQUFxRDtJQUNyRCxlQUFlLEVBQUUsaUVBQWlFO0VBQ3BGOztFQUVBO0lBQ0UscURBQXFEO0lBQ3JELGFBQWEsRUFBRSw4REFBOEQ7SUFDN0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usb0RBQW9EO0lBQ3BELFNBQVMsRUFBRSxvREFBb0Q7RUFDakU7O0VBRUE7SUFDRSxrREFBa0Q7SUFDbEQsZUFBZSxFQUFFLHVEQUF1RDtFQUMxRTs7RUFFQTtJQUNFLGlEQUFpRDtJQUNqRCxnQkFBZ0IsRUFBRSx1REFBdUQ7RUFDM0U7O0VBRUE7Ozs7SUFJRSxzREFBc0Q7SUFDdEQsaUJBQWlCLEVBQUUsK0RBQStEO0VBQ3BGOztFQUVBO0lBQ0UsOENBQThDO0lBQzlDLFdBQVcsRUFBRSx1REFBdUQ7RUFDdEU7O0VBRUE7SUFDRSwwREFBMEQ7SUFDMUQsV0FBVyxFQUFFLHlEQUF5RDtJQUN0RSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCLEVBQUUsK0RBQStEO0VBQ3BGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRGVmYXVsdCBzdHlsZXMgZm9yIGFsbCBkZXZpY2VzICovXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA5KTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogM3ZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5mb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dEltYWdlIHtcXG4gIGhlaWdodDogMi41dmg7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNvdW50cnkge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4ucmVnaW9uIHtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxufVxcblxcbi5sb2NhbHRpbWUsXFxuLmN1cnJlbnQsXFxuLnRlbXBDZWxzaXVzLFxcbi50ZW1wRmFocmVuaGVpdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnBpYyB7XFxuICBoZWlnaHQ6IDZ2aDtcXG59XFxuXFxuLnVuaXRTd2l0Y2hlckJ0biB7XFxuICBncmlkLXJvdy1zdGFydDogNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogNXZ3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC44dm1pbjtcXG59XFxuXFxuaW5wdXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXJyb3JEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uZXJyb3JNc2cge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRlbXBDZWxzaXVzLFxcbi50ZW1wRmFocmVuaGVpdCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgZm9yIHBob25lcy9tb2JpbGUgZGV2aWNlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgLyogTW9kaWZ5IGJvZHkgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5OyAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIG1vYmlsZSBkZXZpY2VzICovXFxuICB9XFxuXFxuICAuZm9ybSB7XFxuICAgIC8qIE1vZGlmeSBmb3JtIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xcbiAgICB3aWR0aDogODB2dzsgLyogTWFrZSB0aGUgZm9ybSB3aWRlciB0byBmaXQgYmV0dGVyIG9uIHNtYWxsIHNjcmVlbnMgKi9cXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBSZW1vdmUgdGhlIHNlY29uZCBncmlkIGNvbHVtbiB0byBzdGFjayBlbGVtZW50cyAqL1xcbiAgfVxcblxcbiAgLmZvcm0gaW5wdXQge1xcbiAgICAvKiBNb2RpZnkgZm9ybSBpbnB1dCBzdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzIGhlcmUgKi9cXG4gICAgZm9udC1zaXplOiAxcmVtOyAvKiBJbmNyZWFzZSBmb250IHNpemUgZm9yIGJldHRlciByZWFkYWJpbGl0eSBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gIH1cXG5cXG4gIC5pbnB1dEltYWdlIHtcXG4gICAgLyogTW9kaWZ5IGlucHV0SW1hZ2Ugc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGhlaWdodDogMy4ydmg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dEltYWdlIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2bWluO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIC8qIE1vZGlmeSBjb250YWluZXIgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGdhcDogMTBweDsgLyogQWRkIHNvbWUgZ2FwIGJldHdlZW4gZWxlbWVudHMgdG8gaW1wcm92ZSBsYXlvdXQgKi9cXG4gIH1cXG5cXG4gIC5jb3VudHJ5IHtcXG4gICAgLyogTW9kaWZ5IGNvdW50cnkgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGZvbnQtc2l6ZTogM3JlbTsgLyogUmVkdWNlIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIGZpdCBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gIH1cXG5cXG4gIC5yZWdpb24ge1xcbiAgICAvKiBNb2RpZnkgcmVnaW9uIHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xcbiAgICBmb250LXNpemU6IDEuM2VtOyAvKiBSZWR1Y2UgZm9udCBzaXplIGZvciBiZXR0ZXIgZml0IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcblxcbiAgLmxvY2FsdGltZSxcXG4gIC5jdXJyZW50LFxcbiAgLnRlbXBDZWxzaXVzLFxcbiAgLnRlbXBGYWhyZW5oZWl0IHtcXG4gICAgLyogTW9kaWZ5IHNoYXJlZCB0ZXh0IHN0eWxlcyBmb3IgbW9iaWxlIGRldmljZXMgaGVyZSAqL1xcbiAgICBmb250LXNpemU6IDEuMnJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcblxcbiAgLnBpYyB7XFxuICAgIC8qIE1vZGlmeSBwaWMgc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIGhlaWdodDogOHZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBvZiB0aGUgcGljIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xcbiAgfVxcblxcbiAgLnVuaXRTd2l0Y2hlckJ0biB7XFxuICAgIC8qIE1vZGlmeSB1bml0U3dpdGNoZXJCdG4gc3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyBoZXJlICovXFxuICAgIHdpZHRoOiAyMHZ3OyAvKiBNYWtlIHRoZSBidXR0b24gd2lkZXIgdG8gZml0IGJldHRlciBvbiBzbWFsbCBzY3JlZW5zICovXFxuICAgIHBhZGRpbmc6IDJ2bWluO1xcbiAgfVxcblxcbiAgLmVycm9yTXNnIHtcXG4gICAgZm9udC1zaXplOiAwLjg5ZW07IC8qIEFkanVzdCBmb250IHNpemUgZm9yIGJldHRlciByZWFkYWJpbGl0eSBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGljR2VuZXJhdG9yIGZyb20gJy4vcGljR2VuZXJhdG9yJztcbmltcG9ydCB1bml0U3dpdGNoZXIgZnJvbSAnLi91bml0U3dpdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEYXRhRGl2cyh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIE9iamVjdC5lbnRyaWVzKHdlYXRoZXJEYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgIGlmIChrZXkgPT09ICd0ZW1wQ2Vsc2l1cycpIHtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBgJHt2YWx1ZX3CsENgO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndGVtcEZhaHJlbmhlaXQnKSB7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gYCR7dmFsdWV9RmA7XG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LmlubmVySFRNTCA9IGAke3ZhbHVlfWA7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcblxuICBjb25zdCB3ZWF0aGVyUGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJQaWNEaXYuY2xhc3NMaXN0LmFkZCgncGljJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyUGljRGl2KTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHdlYXRoZXJQaWNEaXYuc3JjID0gcGljR2VuZXJhdG9yKGN1cnJlbnRDb25kaXRpb24pO1xuXG4gIGNvbnN0IHVuaXRTd2l0Y2hlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB1bml0U3dpdGNoZXJCdG4uY2xhc3NMaXN0LmFkZCgndW5pdFN3aXRjaGVyQnRuJyk7XG4gIHVuaXRTd2l0Y2hlcih1bml0U3dpdGNoZXJCdG4pO1xuICB1bml0U3dpdGNoZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdW5pdFN3aXRjaGVyKHVuaXRTd2l0Y2hlckJ0bik7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5pdFN3aXRjaGVyQnRuKTtcbn1cbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTG9hZGluZ0luZCgpIHtcbiAgY29uc3QgbG9hZGluZ0luZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2FkaW5nSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmdJbmRpY2F0b3InKTtcbiAgbG9hZGluZ0luZGljYXRvci50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRpbmdJbmRpY2F0b3IpO1xufVxuIiwiY29uc3QgcHJvY2Vzc0RhdGEgPSBkYXRhID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiAnbnVtZXJpYycsXG4gIH0pO1xuXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0ge1xuICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgIGxvY2FsdGltZTogZm9ybWF0dGVkVGltZSxcbiAgICBjdXJyZW50OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgdGVtcENlbHNpdXM6IGRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgdGVtcEZhaHJlbmhlaXQ6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gIH07XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MzMyNTRlYmI5NjkyNDUzYzhlNjE4Mjk0NTIzMTQwNiZxPSR7bG9jYXRpb259YFxuICAgICk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggd2VhdGhlciBkYXRhJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIHByb2Nlc3NEYXRhKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOicsIGVycm9yKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnZXJyb3JEaXYnKTtcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yTXNnJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gIGVycm9yRGl2LmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG4gIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgJ0xvY2F0aW9uIG5vdCBmb3VuZC4gU2VhcmNoIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgXCJDaXR5XCIsIFwiQ2l0eSwgU3RhdGVcIiBvciBcIkNpdHksIENvdW50cnlcIi4nO1xufVxuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vZmV0Y2hEYXRhJztcbmltcG9ydCBjcmVhdGVEYXRhRGl2cyBmcm9tICcuL2NyZWF0ZURhdGFEaXZzJztcbmltcG9ydCBoYW5kbGVFcnJvciBmcm9tICcuL2hhbmRsZUVycm9yJztcbmltcG9ydCBjcmVhdGVMb2FkaW5nSW5kIGZyb20gJy4vY3JlYXRlTG9hZGluZ0luZCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZTtcblxuICAgIHRyeSB7XG4gICAgICBjcmVhdGVMb2FkaW5nSW5kKCk7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGlucHV0VmFsdWUpO1xuICAgICAgY29uc3QgbG9hZGluZ0luZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nSW5kaWNhdG9yJyk7XG4gICAgICBpZiAobG9hZGluZ0luZGljYXRvcikge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobG9hZGluZ0luZGljYXRvcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh3ZWF0aGVyRGF0YSAmJiBPYmplY3Qua2V5cyh3ZWF0aGVyRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlRGF0YURpdnMod2VhdGhlckRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBsb2FkaW5nSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmdJbmRpY2F0b3InKTtcbiAgICAgIGlmIChsb2FkaW5nSW5kaWNhdG9yKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChsb2FkaW5nSW5kaWNhdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNc2cnKSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2ZldGNoRGF0YSc7XG5pbXBvcnQgY3JlYXRlRGF0YURpdnMgZnJvbSAnLi9jcmVhdGVEYXRhRGl2cyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZXMvaWNvbnM4LXNlYXJjaC01MC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXNlUGFnZSgpIHtcbiAgY29uc3Qgc3VibWl0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRJbWFnZScpO1xuICBzdWJtaXRJbWFnZS5zcmMgPSBpbWFnZTtcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQ291bnRyeSgpIHtcbiAgICBjb25zdCBjb3VudHJpZXMgPSBbJ1VTQScsICdDYW5hZGEnLCAnVUsnLCAnQXVzdHJhbGlhJywgJ0dlcm1hbnknLCAnRnJhbmNlJ107XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb3VudHJpZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gY291bnRyaWVzW3JhbmRvbUluZGV4XTtcbiAgfVxuXG4gIC8vIFBvcHVsYXRlIGRpdnMgd2l0aCByYW5kb20gY291bnRyeSBkYXRhIG9uIHBhZ2UgbG9hZFxuICBjb25zdCByYW5kb21Db3VudHJ5ID0gZ2V0UmFuZG9tQ291bnRyeSgpO1xuICBnZXRXZWF0aGVyRGF0YShyYW5kb21Db3VudHJ5KS50aGVuKHdlYXRoZXJEYXRhID0+IHtcbiAgICBjcmVhdGVEYXRhRGl2cyh3ZWF0aGVyRGF0YSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHN1bm55IGZyb20gJy4vaW1hZ2VzL3N1bm55LnBuZyc7XG5pbXBvcnQgcGFydGx5Q2xvdWR5IGZyb20gJy4vaW1hZ2VzL3BhcnRseUNsb3VkeS5wbmcnO1xuaW1wb3J0IHJhaW55IGZyb20gJy4vaW1hZ2VzL3JhaW4ucG5nJztcbmltcG9ydCBsaWdodFJhaW4gZnJvbSAnLi9pbWFnZXMvbGlnaHRSYWluLnBuZyc7XG5pbXBvcnQgbWlzdHkgZnJvbSAnLi9pbWFnZXMvbWlzdHkucG5nJztcbmltcG9ydCBPdmVyY2FzdCBmcm9tICcuL2ltYWdlcy9vdmVyY2FzdC5wbmcnO1xuaW1wb3J0IFRodW5kZXIgZnJvbSAnLi9pbWFnZXMvdGh1bmRlcnN0b3JtLnBuZyc7XG5cbmNvbnN0IGRlY2lkZVdlYXRoZXJQaWMgPSBjdXJyZW50Q29uZGl0aW9uID0+IHtcbiAgbGV0IHNyYztcblxuICBzd2l0Y2ggKGN1cnJlbnRDb25kaXRpb24pIHtcbiAgICBjYXNlICdTdW5ueSc6XG4gICAgICBzcmMgPSBzdW5ueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BhcnRseSBjbG91ZHknOlxuICAgICAgc3JjID0gcGFydGx5Q2xvdWR5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInOlxuICAgICAgc3JjID0gcmFpbnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdDbGVhcic6XG4gICAgICBzcmMgPSBzdW5ueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0xpZ2h0IHJhaW4nOlxuICAgICAgc3JjID0gbGlnaHRSYWluO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTWlzdCc6XG4gICAgICBzcmMgPSBtaXN0eTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ092ZXJjYXN0JzpcbiAgICAgIHNyYyA9IE92ZXJjYXN0O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChjdXJyZW50Q29uZGl0aW9uLmluY2x1ZGVzKCd0aHVuZGVyJykpIHtcbiAgICAgICAgLy8gSGFuZGxlIGNhc2VzIHdpdGggdGh1bmRlclxuICAgICAgICBzcmMgPSBUaHVuZGVyO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q29uZGl0aW9uLmluY2x1ZGVzKCdyYWluJykpIHtcbiAgICAgICAgc3JjID0gcmFpbnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcmMgPSBPdmVyY2FzdDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY2lkZVdlYXRoZXJQaWM7XG4iLCJsZXQgY3VycmVudFVuaXQgPSAnY2Vsc2l1cyc7IC8vIEFzc3VtaW5nIHRoZSBkZWZhdWx0IHVuaXQgaXMgQ2Vsc2l1c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pdFN3aXRjaGVyKHN3aXRjaGVyKSB7XG4gIGNvbnN0IHVuaXRTd2l0Y2hlckJ1dHRvbiA9IHN3aXRjaGVyO1xuICBjb25zdCBmYWhyZW5oZWl0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBGYWhyZW5oZWl0Jyk7XG4gIGNvbnN0IGNlbHNpdXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcENlbHNpdXMnKTtcblxuICBpZiAoY3VycmVudFVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgIC8vIElmIGN1cnJlbnQgdW5pdCBpcyBDZWxzaXVzLCBtYWtlIEZhaHJlbmhlaXQgZGl2IGludmlzaWJsZVxuICAgIGZhaHJlbmhlaXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjZWxzaXVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBNYWtlIENlbHNpdXMgZGl2IHZpc2libGVcbiAgICB1bml0U3dpdGNoZXJCdXR0b24uaW5uZXJUZXh0ID0gJ0ZhaHJlbmhlaXQnOyAvLyBTZXQgdGhlIHRleHQgb2YgdGhlIGJ1dHRvblxuICAgIGN1cnJlbnRVbml0ID0gJ2ZhaHJlbmhlaXQnOyAvLyBVcGRhdGUgY3VycmVudFVuaXQgdG8gRmFocmVuaGVpdFxuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1cnJlbnQgdW5pdCBpcyBGYWhyZW5oZWl0LCBtYWtlIENlbHNpdXMgZGl2IGludmlzaWJsZVxuICAgIGNlbHNpdXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBmYWhyZW5oZWl0RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBNYWtlIEZhaHJlbmhlaXQgZGl2IHZpc2libGVcbiAgICB1bml0U3dpdGNoZXJCdXR0b24uaW5uZXJUZXh0ID0gJ0NlbHNpdXMnOyAvLyBTZXQgdGhlIHRleHQgb2YgdGhlIGJ1dHRvblxuICAgIGN1cnJlbnRVbml0ID0gJ2NlbHNpdXMnOyAvLyBVcGRhdGUgY3VycmVudFVuaXQgdG8gQ2Vsc2l1c1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlcy9pY29uczgtc2VhcmNoLTUwLnBuZyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoYW5kbGVGb3JtU3VibWl0IGZyb20gJy4vaGFuZGxlRm9ybVN1Ym1pdCc7XG5pbXBvcnQgaW5pdGlhbGlzZVBhZ2UgZnJvbSAnLi9pbml0aWFsaXplUGFnZSc7XG5cbmluaXRpYWxpc2VQYWdlKCk7XG5cbmhhbmRsZUZvcm1TdWJtaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==