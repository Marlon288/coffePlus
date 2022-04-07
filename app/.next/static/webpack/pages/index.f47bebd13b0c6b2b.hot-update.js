"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/map.tsx":
/*!****************************!*\
  !*** ./components/map.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var _places__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places */ \"./components/places.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar allCafes = [\n    {\n        lat: 50.882,\n        lng: 6.921301\n    },\n    {\n        lat: 50.995173,\n        lng: 6.863101\n    },\n    {\n        lat: 50.965173,\n        lng: 6.903101\n    },\n    {\n        lat: 50.845173,\n        lng: 6.953101\n    },\n    {\n        lat: 50.995173,\n        lng: 7.003101\n    },\n    {\n        lat: 50.735173,\n        lng: 6.753101\n    }\n]; //Get Values from Database\nfunction Map() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), loc = ref1[0], setLoc = ref1[1];\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            lat: 43,\n            lng: -80\n        };\n    }, []);\n    var options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            mapId: \"dddd1ac2f8095ba2\",\n            disableDefaultUI: true,\n            clickableIcon: false\n        };\n    }, []);\n    var onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(map) {\n        return mapRef.current = map;\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Cafe\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_places__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setLoc: function(position) {\n                            var ref;\n                            setLoc(position);\n                            (ref = mapRef.current) === null || ref === void 0 ? void 0 : ref.panTo(position);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                    zoom: 10,\n                    center: center,\n                    mapContainerClassName: \"map-container\",\n                    options: options,\n                    onLoad: onLoad,\n                    children: loc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                        position: center\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this));\n};\n_s(Map, \"E50uGXQ7eDkl+x1sKhWMtJADKKs=\");\n_c = Map;\nvar defaultOptions = {\n    strokeOpacity: 0.5,\n    strokeWeight: 2,\n    clickable: false,\n    draggable: false,\n    editable: false,\n    visible: true\n};\nvar closeOptions = _objectSpread({}, defaultOptions, {\n    zIndex: 3,\n    fillOpacity: 0.05,\n    strokeColor: \"#8BC34A\",\n    fillColor: \"#8BC34A\"\n});\nvar middleOptions = _objectSpread({}, defaultOptions, {\n    zIndex: 2,\n    fillOpacity: 0.05,\n    strokeColor: \"#FBC02D\",\n    fillColor: \"#FBC02D\"\n});\nvar farOptions = _objectSpread({}, defaultOptions, {\n    zIndex: 1,\n    fillOpacity: 0.05,\n    strokeColor: \"#FF5252\",\n    fillColor: \"#FF5252\"\n});\nvar generateHouses = function(position) {\n    var _houses = [];\n    for(var i = 0; i < 100; i++){\n        var direction = Math.random() < 0.5 ? -2 : 2;\n    }\n    return _houses;\n};\nvar getCafes = function(position) {\n    var cafes = [];\n    for(var i = 0; i < allCafes.length; i++){\n        cafes.push({\n            lat: position.lat + Math.random() / direction,\n            lng: position.lng + Math.random() / direction\n        });\n    }\n    return _houses;\n};\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVBLENBQUMsR0FBR3RDLFFBQVEsQ0FBQzRDLE1BQU0sRUFBRU4sQ0FBQyxHQUFJLENBQUM7UUFDekNLLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFDVjVDLEdBQUcsRUFBRWlCLFFBQVEsQ0FBQ2pCLEdBQUcsR0FBR3VDLElBQUksQ0FBQ0MsTUFBTSxLQUFLRixTQUFTO1lBQzdDckMsR0FBRyxFQUFFZ0IsUUFBUSxDQUFDaEIsR0FBRyxHQUFHc0MsSUFBSSxDQUFDQyxNQUFNLEtBQUtGLFNBQVM7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUNGLE9BQU87QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21hcC50c3g/ZTVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgR29vZ2xlTWFwLFxuICBNYXJrZXIsXG4gIERpcmVjdGlvbnNSZW5kZXJlcixcbiAgQ2lyY2xlLFxuICBNYXJrZXJDbHVzdGVyZXIsXG59IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG5pbXBvcnQgUGxhY2VzIGZyb20gXCIuL3BsYWNlc1wiO1xuaW1wb3J0IERpc3RhbmNlIGZyb20gXCIuL2Rpc3RhbmNlXCI7XG5cbnR5cGUgTGF0TG5nTGl0ZXJhbCA9IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw7XG50eXBlIERpcmVjdGlvbnNSZXN1bHQgPSBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0O1xudHlwZSBNYXBPcHRpb25zID0gZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucztcblxuY29uc3QgYWxsQ2FmZXM6IEFycmF5PExhdExuZ0xpdGVyYWw+ID0gW3tsYXQ6IDUwLjg4MiwgbG5nOiA2LjkyMTMwMX0sIHtsYXQ6IDUwLjk5NTE3MywgbG5nOiA2Ljg2MzEwMX0sIHtsYXQ6IDUwLjk2NTE3MywgbG5nOiA2LjkwMzEwMX0sIHtsYXQ6IDUwLjg0NTE3MywgbG5nOiA2Ljk1MzEwMX0sIHtsYXQ6IDUwLjk5NTE3MywgbG5nOiA3LjAwMzEwMX0sIHtsYXQ6IDUwLjczNTE3MywgbG5nOiA2Ljc1MzEwMX1dOyAvL0dldCBWYWx1ZXMgZnJvbSBEYXRhYmFzZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKSB7XG4gIGNvbnN0IFtsb2MsIHNldExvY10gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPigpO1xuICBjb25zdCBtYXBSZWYgPSB1c2VSZWY8R29vZ2xlTWFwPigpO1xuICBjb25zdCBjZW50ZXIgPSB1c2VNZW1vPExhdExuZ0xpdGVyYWw+KCgpID0+ICh7bGF0OiA0MywgbG5nOiAtODB9KSxbXSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vPE1hcE9wdGlvbnM+KFxuICAgICgpID0+ICh7XG4gICAgICBtYXBJZDogXCJkZGRkMWFjMmY4MDk1YmEyXCIsXG4gICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgY2xpY2thYmxlSWNvbjogZmFsc2UsXG4gICAgfSksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBvbkxvYWQgPSB1c2VDYWxsYmFjayhtYXAgPT4gKG1hcFJlZi5jdXJyZW50ID0gbWFwKSwgW10pO1xuXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuICAgICAgPGgxPkNhZmU8L2gxPlxuICAgICAgPFBsYWNlcyBzZXRMb2M9eyhwb3NpdGlvbikgPT4ge1xuICAgICAgICBzZXRMb2MocG9zaXRpb24pO1xuICAgICAgICBtYXBSZWYuY3VycmVudD8ucGFuVG8ocG9zaXRpb24pO1xuICAgICAgfX0gXG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuICAgICA8R29vZ2xlTWFwIFxuICAgICAgem9vbT17MTB9IFxuICAgICAgY2VudGVyPXtjZW50ZXJ9IFxuICAgICAgbWFwQ29udGFpbmVyQ2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSBcbiAgICAgIG9uTG9hZCA9IHtvbkxvYWR9XG4gICAgID5cbiAgICAgICB7bG9jICYmIDxNYXJrZXIgcG9zaXRpb249e2NlbnRlcn0vPiB9XG4gICAgIDwvR29vZ2xlTWFwPlxuICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgc3Ryb2tlT3BhY2l0eTogMC41LFxuICBzdHJva2VXZWlnaHQ6IDIsXG4gIGNsaWNrYWJsZTogZmFsc2UsXG4gIGRyYWdnYWJsZTogZmFsc2UsXG4gIGVkaXRhYmxlOiBmYWxzZSxcbiAgdmlzaWJsZTogdHJ1ZSxcbn07XG5jb25zdCBjbG9zZU9wdGlvbnMgPSB7XG4gIC4uLmRlZmF1bHRPcHRpb25zLFxuICB6SW5kZXg6IDMsXG4gIGZpbGxPcGFjaXR5OiAwLjA1LFxuICBzdHJva2VDb2xvcjogXCIjOEJDMzRBXCIsXG4gIGZpbGxDb2xvcjogXCIjOEJDMzRBXCIsXG59O1xuY29uc3QgbWlkZGxlT3B0aW9ucyA9IHtcbiAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gIHpJbmRleDogMixcbiAgZmlsbE9wYWNpdHk6IDAuMDUsXG4gIHN0cm9rZUNvbG9yOiBcIiNGQkMwMkRcIixcbiAgZmlsbENvbG9yOiBcIiNGQkMwMkRcIixcbn07XG5jb25zdCBmYXJPcHRpb25zID0ge1xuICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgekluZGV4OiAxLFxuICBmaWxsT3BhY2l0eTogMC4wNSxcbiAgc3Ryb2tlQ29sb3I6IFwiI0ZGNTI1MlwiLFxuICBmaWxsQ29sb3I6IFwiI0ZGNTI1MlwiLFxufTtcblxuY29uc3QgZ2VuZXJhdGVIb3VzZXMgPSAocG9zaXRpb246IExhdExuZ0xpdGVyYWwpID0+IHtcbiAgY29uc3QgX2hvdXNlczogQXJyYXk8TGF0TG5nTGl0ZXJhbD4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtMiA6IDI7XG4gICBcbiAgfVxuICByZXR1cm4gX2hvdXNlcztcbn07XG5cblxuY29uc3QgZ2V0Q2FmZXMgPSAocG9zaXRpb246IExhdExuZ0xpdGVyYWwpID0+IHtcbiAgY29uc3QgY2FmZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDYWZlcy5sZW5ndGg7IGkrKykge1xuICAgIGNhZmVzLnB1c2goe1xuICAgICAgbGF0OiBwb3NpdGlvbi5sYXQgKyBNYXRoLnJhbmRvbSgpIC8gZGlyZWN0aW9uLFxuICAgICAgbG5nOiBwb3NpdGlvbi5sbmcgKyBNYXRoLnJhbmRvbSgpIC8gZGlyZWN0aW9uLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBfaG91c2VzO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsIkdvb2dsZU1hcCIsIk1hcmtlciIsIlBsYWNlcyIsImFsbENhZmVzIiwibGF0IiwibG5nIiwiTWFwIiwibG9jIiwic2V0TG9jIiwibWFwUmVmIiwiY2VudGVyIiwib3B0aW9ucyIsIm1hcElkIiwiZGlzYWJsZURlZmF1bHRVSSIsImNsaWNrYWJsZUljb24iLCJvbkxvYWQiLCJtYXAiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwb3NpdGlvbiIsInBhblRvIiwiem9vbSIsIm1hcENvbnRhaW5lckNsYXNzTmFtZSIsImRlZmF1bHRPcHRpb25zIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsImVkaXRhYmxlIiwidmlzaWJsZSIsImNsb3NlT3B0aW9ucyIsInpJbmRleCIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlQ29sb3IiLCJmaWxsQ29sb3IiLCJtaWRkbGVPcHRpb25zIiwiZmFyT3B0aW9ucyIsImdlbmVyYXRlSG91c2VzIiwiX2hvdXNlcyIsImkiLCJkaXJlY3Rpb24iLCJNYXRoIiwicmFuZG9tIiwiZ2V0Q2FmZXMiLCJjYWZlcyIsImxlbmd0aCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/map.tsx\n");

/***/ })

});