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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var _places__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places */ \"./components/places.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\n//Get CafeData from DataBase \nvar allCafes = [\n    {\n        \"id\": 0,\n        \"name\": \"Cafe Sur\",\n        latlng: {\n            lat: 50.882,\n            lng: 6.921301\n        },\n        \"categories\": [\n            1,\n            2,\n            3\n        ]\n    },\n    {\n        \"id\": 1,\n        \"name\": \"Cafe del Norte\",\n        latlng: {\n            lat: 50.995173,\n            lng: 6.863101\n        },\n        \"categories\": [\n            1,\n            3\n        ]\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Cafe de oeste\",\n        latlng: {\n            lat: 50.965173,\n            lng: 6.903101\n        },\n        \"categories\": [\n            2,\n            3\n        ]\n    },\n    {\n        \"id\": 3,\n        \"name\": \"Cafe de colonia\",\n        latlng: {\n            lat: 50.845173,\n            lng: 6.953101\n        },\n        \"categories\": [\n            2\n        ]\n    },\n    {\n        \"id\": 4,\n        \"name\": \"Cafe de Alemania\",\n        latlng: {\n            lat: 50.995173,\n            lng: 7.003101\n        },\n        \"categories\": [\n            1\n        ]\n    },\n    {\n        \"id\": 5,\n        \"name\": \"cruz del sur\",\n        latlng: {\n            lat: 50.735173,\n            lng: 6.753101\n        },\n        \"categories\": []\n    }, \n];\n//Get Categories from Database\nvar categories = [\n    {\n        \"id\": 0,\n        \"name\": \"Lactose-Free milk\",\n        \"definition\": \"The cafe offers a lactose free alternative milk, this could include any lactose fre milk\"\n    },\n    {\n        \"id\": 1,\n        \"name\": \"No disposable plastic\",\n        \"definition\": \"The cafe does not use one-use plastic, this includes bags, cups, straws and more\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Fairtrade Coffee\",\n        \"definition\": \"The cafe only uses Fairtrade coffee certified by either Fair Trade Original or Fair Trade Certified\"\n    }\n];\nfunction Map() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), loc = ref1[0], setLoc = ref1[1];\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            lat: 43,\n            lng: -80\n        };\n    }, []);\n    var options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            mapId: \"dddd1ac2f8095ba2\",\n            disableDefaultUI: true,\n            clickableIcon: false\n        };\n    }, []);\n    var onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(map) {\n        return mapRef.current = map;\n    }, []);\n    var cafes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return getCafes({\n            lat: loc.lat,\n            lng: loc.lng\n        });\n    }, [\n        loc\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Cafe\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_places__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setLoc: function(position) {\n                            var ref;\n                            setLoc(position);\n                            (ref = mapRef.current) === null || ref === void 0 ? void 0 : ref.panTo(position);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"containerCheckBoxen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"containerCheckBox\",\n                                children: [\n                                    \"Lactose-Free Milk\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"checkmark\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"containerCheckBox\",\n                                children: [\n                                    \"No disposable plastic\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"checkmark\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"containerCheckBox\",\n                                children: [\n                                    \"Fairtrade Coffee\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"checkmark\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                    zoom: 5,\n                    defaultCenter: center,\n                    mapContainerClassName: \"map-container\",\n                    options: options,\n                    onLoad: onLoad,\n                    children: loc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                position: loc,\n                                icon: \"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 10\n                            }, this),\n                            cafes.map(function(cafe) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                    position: cafe\n                                }, cafe.lat + cafe.lng, false, {\n                                    fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 28\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n                lineNumber: 80,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\marlo\\\\coffePlus\\\\app\\\\components\\\\map.tsx\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, this));\n};\n_s(Map, \"Mj+/Cm4+lxt9g+aUigUPMl1cvnA=\");\n_c = Map;\nvar getCafes = function(position) {\n    var cafes = [];\n    for(var i = 0; i < allCafes.length; i++){\n        var latDiff = Math.sqrt(Math.pow(allCafes[i].latlng.lat - position.lat, 2));\n        var lngDiff = Math.sqrt(Math.pow(allCafes[i].latlng.lng - position.lng, 2));\n        if (latDiff < 0.1 && lngDiff < 0.1) {\n            cafes.push({\n                lat: allCafes[i].latlng.lat,\n                lng: allCafes[i].latlng.lng\n            });\n        }\n    }\n    return cafes;\n};\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEIsR0FBRyxDQUFFLEdBQUcsQ0FBQ2dCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2pDLFFBQVEsQ0FBQ2tDLE1BQU0sRUFBRUQsQ0FBQyxHQUFJLENBQUM7UUFDekMsR0FBRyxDQUFDRSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ3RDLFFBQVEsQ0FBQ2lDLENBQUMsRUFBRWhDLE1BQU0sQ0FBQ0MsR0FBRyxHQUFHb0IsUUFBUSxDQUFDcEIsR0FBRyxFQUFFLENBQUM7UUFDekUsR0FBRyxDQUFDcUMsT0FBTyxHQUFHSCxJQUFJLENBQUNDLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxHQUFHLENBQUN0QyxRQUFRLENBQUNpQyxDQUFDLEVBQUVoQyxNQUFNLENBQUNFLEdBQUcsR0FBR21CLFFBQVEsQ0FBQ25CLEdBQUcsRUFBRSxDQUFDO1FBQ3pFLEVBQUUsRUFBRWdDLE9BQU8sR0FBRyxHQUFHLElBQUlJLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNuQ3RCLEtBQUssQ0FBQ3VCLElBQUksQ0FBQyxDQUFDO2dCQUNWdEMsR0FBRyxFQUFFRixRQUFRLENBQUNpQyxDQUFDLEVBQUVoQyxNQUFNLENBQUNDLEdBQUc7Z0JBQzNCQyxHQUFHLEVBQUVILFFBQVEsQ0FBQ2lDLENBQUMsRUFBRWhDLE1BQU0sQ0FBQ0UsR0FBRztZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUNjLEtBQUs7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFwLnRzeD9lNWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHb29nbGVNYXAsXG4gIE1hcmtlcixcbiAgRGlyZWN0aW9uc1JlbmRlcmVyLFxuICBDaXJjbGUsXG4gIE1hcmtlckNsdXN0ZXJlcixcbn0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcbmltcG9ydCBQbGFjZXMgZnJvbSBcIi4vcGxhY2VzXCI7XG5pbXBvcnQgRGlzdGFuY2UgZnJvbSBcIi4vZGlzdGFuY2VcIjtcblxudHlwZSBMYXRMbmdMaXRlcmFsID0gZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbDtcbnR5cGUgRGlyZWN0aW9uc1Jlc3VsdCA9IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZXN1bHQ7XG50eXBlIE1hcE9wdGlvbnMgPSBnb29nbGUubWFwcy5NYXBPcHRpb25zO1xuXG5cblxuXG5cblxuLy9HZXQgQ2FmZURhdGEgZnJvbSBEYXRhQmFzZSBcbmNvbnN0IGFsbENhZmVzOiB7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBsYXRsbmc6IExhdExuZ0xpdGVyYWwsIGNhdGVnb3JpZXM6IG51bWJlcltdfVtdID0gW1xuICB7XCJpZFwiOiAwLCBcIm5hbWVcIjogXCJDYWZlIFN1clwiLCBsYXRsbmc6IHtsYXQ6IDUwLjg4MiwgbG5nOiA2LjkyMTMwMX0sIFwiY2F0ZWdvcmllc1wiOiBbMSwyLDNdfSxcbiAge1wiaWRcIjogMSwgXCJuYW1lXCI6IFwiQ2FmZSBkZWwgTm9ydGVcIiwgbGF0bG5nOiB7bGF0OiA1MC45OTUxNzMsIGxuZzogNi44NjMxMDF9LCBcImNhdGVnb3JpZXNcIjogWzEsM119LFxuICB7XCJpZFwiOiAyLCBcIm5hbWVcIjogXCJDYWZlIGRlIG9lc3RlXCIsIGxhdGxuZzoge2xhdDogNTAuOTY1MTczLCBsbmc6IDYuOTAzMTAxfSwgXCJjYXRlZ29yaWVzXCI6IFsyLDNdfSxcbiAge1wiaWRcIjogMywgXCJuYW1lXCI6IFwiQ2FmZSBkZSBjb2xvbmlhXCIsIGxhdGxuZzoge2xhdDogNTAuODQ1MTczLCBsbmc6IDYuOTUzMTAxfSwgXCJjYXRlZ29yaWVzXCI6IFsyXX0sXG4gIHtcImlkXCI6IDQsIFwibmFtZVwiOiBcIkNhZmUgZGUgQWxlbWFuaWFcIiwgbGF0bG5nOiB7bGF0OiA1MC45OTUxNzMsIGxuZzogNy4wMDMxMDF9LCBcImNhdGVnb3JpZXNcIjogWzFdfSxcbiAge1wiaWRcIjogNSwgXCJuYW1lXCI6IFwiY3J1eiBkZWwgc3VyXCIsIGxhdGxuZzoge2xhdDogNTAuNzM1MTczLCBsbmc6IDYuNzUzMTAxfSwgXCJjYXRlZ29yaWVzXCI6IFtdfSxcbl07IFxuXG4vL0dldCBDYXRlZ29yaWVzIGZyb20gRGF0YWJhc2VcbmNvbnN0IGNhdGVnb3JpZXM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkZWZpbml0aW9uOiBzdHJpbmcgfVtdID0gW1xuICB7IFwiaWRcIjogMCwgXCJuYW1lXCI6IFwiTGFjdG9zZS1GcmVlIG1pbGtcIiwgXCJkZWZpbml0aW9uXCI6IFwiVGhlIGNhZmUgb2ZmZXJzIGEgbGFjdG9zZSBmcmVlIGFsdGVybmF0aXZlIG1pbGssIHRoaXMgY291bGQgaW5jbHVkZSBhbnkgbGFjdG9zZSBmcmUgbWlsa1wifSxcbiAgeyBcImlkXCI6IDEsIFwibmFtZVwiOiBcIk5vIGRpc3Bvc2FibGUgcGxhc3RpY1wiLCBcImRlZmluaXRpb25cIjogXCJUaGUgY2FmZSBkb2VzIG5vdCB1c2Ugb25lLXVzZSBwbGFzdGljLCB0aGlzIGluY2x1ZGVzIGJhZ3MsIGN1cHMsIHN0cmF3cyBhbmQgbW9yZVwifSxcbiAgeyBcImlkXCI6IDIsIFwibmFtZVwiOiBcIkZhaXJ0cmFkZSBDb2ZmZWVcIiwgXCJkZWZpbml0aW9uXCI6XCJUaGUgY2FmZSBvbmx5IHVzZXMgRmFpcnRyYWRlIGNvZmZlZSBjZXJ0aWZpZWQgYnkgZWl0aGVyIEZhaXIgVHJhZGUgT3JpZ2luYWwgb3IgRmFpciBUcmFkZSBDZXJ0aWZpZWRcIn1cbl07IFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3QgW2xvYywgc2V0TG9jXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KCk7XG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZjxHb29nbGVNYXA+KCk7XG4gIGNvbnN0IGNlbnRlciA9IHVzZU1lbW88TGF0TG5nTGl0ZXJhbD4oKCkgPT4gKHtsYXQ6IDQzLCBsbmc6IC04MH0pLFtdKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW88TWFwT3B0aW9ucz4oXG4gICAgKCkgPT4gKHtcbiAgICAgIG1hcElkOiBcImRkZGQxYWMyZjgwOTViYTJcIixcbiAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXG4gICAgICBjbGlja2FibGVJY29uOiBmYWxzZSxcbiAgICB9KSxcbiAgICBbXVxuICApO1xuXG5cblxuICBjb25zdCBvbkxvYWQgPSB1c2VDYWxsYmFjayhtYXAgPT4gKG1hcFJlZi5jdXJyZW50ID0gbWFwKSwgW10pO1xuICBjb25zdCBjYWZlcyA9IHVzZU1lbW8oKCkgPT4gZ2V0Q2FmZXMoe2xhdDogbG9jLmxhdCwgbG5nOiBsb2MubG5nfSksIFtsb2NdKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICA8aDE+Q2FmZTwvaDE+XG4gICAgICA8UGxhY2VzIHNldExvYz17KHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHNldExvYyhwb3NpdGlvbik7XG4gICAgICAgIG1hcFJlZi5jdXJyZW50Py5wYW5Ubyhwb3NpdGlvbik7XG4gICAgICB9fSBcbiAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJDaGVja0JveGVuXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXJDaGVja0JveFwiPkxhY3Rvc2UtRnJlZSBNaWxrXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXJDaGVja0JveFwiPk5vIGRpc3Bvc2FibGUgcGxhc3RpY1xuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyQ2hlY2tCb3hcIj5GYWlydHJhZGUgQ29mZmVlXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuICAgICA8R29vZ2xlTWFwIFxuICAgICAgem9vbT17NX0gXG4gICAgICBkZWZhdWx0Q2VudGVyPXtjZW50ZXJ9IFxuICAgICAgbWFwQ29udGFpbmVyQ2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiXG4gICAgICBvcHRpb25zPXtvcHRpb25zfSBcbiAgICAgIG9uTG9hZCA9IHtvbkxvYWR9XG4gICAgID5cbiAgICAgICB7bG9jICYmIChcbiAgICAgICAgIDw+XG4gICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICBwb3NpdGlvbj17bG9jfVxuICAgICAgICAgICAgaWNvbj1cImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2V4YW1wbGVzL2Z1bGwvaW1hZ2VzL2JlYWNoZmxhZy5wbmdcIlxuICAgICAgICAgLz5cbiAgICAgICAge2NhZmVzLm1hcChjYWZlID0+IDxNYXJrZXIga2V5PXtjYWZlLmxhdCArIGNhZmUubG5nfSBwb3NpdGlvbj17Y2FmZX0vPil9XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICA8L0dvb2dsZU1hcD5cbiAgICAgXG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn1cblxuXG5jb25zdCBnZXRDYWZlcyA9IChwb3NpdGlvbjogTGF0TG5nTGl0ZXJhbCkgPT4ge1xuICBjb25zdCBjYWZlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENhZmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxhdERpZmYgPSBNYXRoLnNxcnQoTWF0aC5wb3coYWxsQ2FmZXNbaV0ubGF0bG5nLmxhdCAtIHBvc2l0aW9uLmxhdCwgMikpO1xuICAgIGxldCBsbmdEaWZmID0gTWF0aC5zcXJ0KE1hdGgucG93KGFsbENhZmVzW2ldLmxhdGxuZy5sbmcgLSBwb3NpdGlvbi5sbmcsIDIpKTtcbiAgICBpZigobGF0RGlmZiA8IDAuMSAmJiBsbmdEaWZmIDwgMC4xKSl7XG4gICAgICBjYWZlcy5wdXNoKHtcbiAgICAgICAgbGF0OiBhbGxDYWZlc1tpXS5sYXRsbmcubGF0LFxuICAgICAgICBsbmc6IGFsbENhZmVzW2ldLmxhdGxuZy5sbmcsXG4gICAgICB9KTtcbiAgICB9ICAgIFxuICB9XG4gIHJldHVybiBjYWZlcztcbn07XG5cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiR29vZ2xlTWFwIiwiTWFya2VyIiwiUGxhY2VzIiwiYWxsQ2FmZXMiLCJsYXRsbmciLCJsYXQiLCJsbmciLCJjYXRlZ29yaWVzIiwiTWFwIiwibG9jIiwic2V0TG9jIiwibWFwUmVmIiwiY2VudGVyIiwib3B0aW9ucyIsIm1hcElkIiwiZGlzYWJsZURlZmF1bHRVSSIsImNsaWNrYWJsZUljb24iLCJvbkxvYWQiLCJtYXAiLCJjdXJyZW50IiwiY2FmZXMiLCJnZXRDYWZlcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicG9zaXRpb24iLCJwYW5UbyIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwic3BhbiIsInpvb20iLCJkZWZhdWx0Q2VudGVyIiwibWFwQ29udGFpbmVyQ2xhc3NOYW1lIiwiaWNvbiIsImNhZmUiLCJpIiwibGVuZ3RoIiwibGF0RGlmZiIsIk1hdGgiLCJzcXJ0IiwicG93IiwibG5nRGlmZiIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/map.tsx\n");

/***/ })

});