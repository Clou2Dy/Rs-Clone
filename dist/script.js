/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst renderPage_1 = __webpack_require__(/*! ./assets/renderPage */ \"./src/assets/renderPage.ts\");\r\n(0, renderPage_1.displaySecurityPage)();\r\n\n\n//# sourceURL=webpack://rs-clone/./src/app.ts?");

/***/ }),

/***/ "./src/assets/api.ts":
/*!***************************!*\
  !*** ./src/assets/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.moexGetTickers = exports.moexTickerLast = void 0;\r\nfunction moexTickerLast(ticker) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const json = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function (res) { return res.json(); });\r\n        return json.marketdata.data.filter(function (d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];\r\n    });\r\n}\r\nexports.moexTickerLast = moexTickerLast;\r\nfunction moexGetTickers(bord) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json').then(function (res) { return res.json(); });\r\n        const data = response.securities.data;\r\n        const tickersName = extractTickersName(data, bord);\r\n        return tickersName;\r\n    });\r\n}\r\nexports.moexGetTickers = moexGetTickers;\r\nfunction extractTickersName(data, searchTerm) {\r\n    return data.filter(subArray => subArray[1].toUpperCase() === searchTerm.toUpperCase())\r\n        .map(subArray => [subArray[0], subArray[3], subArray[2]]);\r\n}\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/api.ts?");

/***/ }),

/***/ "./src/assets/functions.ts":
/*!*********************************!*\
  !*** ./src/assets/functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createElement = void 0;\r\nfunction createElement(tag, text, className) {\r\n    const element = document.createElement(tag);\r\n    if (text) {\r\n        element.innerText = text;\r\n    }\r\n    if (className !== '') {\r\n        element.classList.add(className);\r\n    }\r\n    return element;\r\n}\r\nexports.createElement = createElement;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/functions.ts?");

/***/ }),

/***/ "./src/assets/renderPage.ts":
/*!**********************************!*\
  !*** ./src/assets/renderPage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.displaySecurityPage = void 0;\r\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\r\nlet arrayAvailableTickers = [];\r\nconst main = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    arrayAvailableTickers = yield (0, api_1.moexGetTickers)('TQBR');\r\n});\r\nmain();\r\nfunction displaySecurityPage() {\r\n    const securitiesPage = (0, functions_1.createElement)('div', null, 'security-page');\r\n    document.body.appendChild(securitiesPage);\r\n    const securitiesPageContainer = (0, functions_1.createElement)('div', null, 'security-page__container');\r\n    securitiesPage.appendChild(securitiesPageContainer);\r\n    const headerPage = (0, functions_1.createElement)('div', null, 'header-block');\r\n    securitiesPageContainer.appendChild(headerPage);\r\n    const headerBlockName = (0, functions_1.createElement)('div', 'Ценные бумаги', 'header-block__name');\r\n    headerPage.appendChild(headerBlockName);\r\n    const headerBlockSum = (0, functions_1.createElement)('div', null, 'header-block__sum');\r\n    headerPage.appendChild(headerBlockSum);\r\n    const amountRubles = (0, functions_1.createElement)('span', '194 053', 'amount-rubles');\r\n    headerBlockSum.appendChild(amountRubles);\r\n    const amountKopecks = (0, functions_1.createElement)('span', ',53 ₽', 'amount-kopecks');\r\n    headerBlockSum.appendChild(amountKopecks);\r\n    const headerBlockProfit = (0, functions_1.createElement)('div', null, 'header-block__profit');\r\n    headerPage.appendChild(headerBlockProfit);\r\n    const profitBlock = (0, functions_1.createElement)('div', null, 'profit-block');\r\n    headerBlockProfit.appendChild(profitBlock);\r\n    const profitRubles = (0, functions_1.createElement)('span', '+1 102,53 ₽', 'profit-rubles');\r\n    profitBlock.appendChild(profitRubles);\r\n    const profitLine = (0, functions_1.createElement)('span', ' / ', 'profit-line');\r\n    profitBlock.appendChild(profitLine);\r\n    const profitProcent = (0, functions_1.createElement)('span', '0,58 %', 'profit-procent');\r\n    profitBlock.appendChild(profitProcent);\r\n    const periodBlock = (0, functions_1.createElement)('div', null, 'period-block');\r\n    headerBlockProfit.appendChild(periodBlock);\r\n    const periodAll = (0, functions_1.createElement)('span', 'за все время ', 'period-all');\r\n    periodBlock.appendChild(periodAll);\r\n    const periodArrowsDown = (0, functions_1.createElement)('i', null, 'period-arrows_down');\r\n    periodAll.appendChild(periodArrowsDown);\r\n    const periodMonth = (0, functions_1.createElement)('span', 'за месяц ', 'period-month');\r\n    periodBlock.appendChild(periodMonth);\r\n    periodMonth.style.display = 'none';\r\n    const periodArrowsUp = (0, functions_1.createElement)('i', null, 'period-arrows_up');\r\n    periodMonth.appendChild(periodArrowsUp);\r\n    const stockBlock = (0, functions_1.createElement)('div', 'Акции', 'stock-block');\r\n    securitiesPageContainer.appendChild(stockBlock);\r\n    const bondsBlock = (0, functions_1.createElement)('div', 'Облигации', 'bonds-block');\r\n    securitiesPageContainer.appendChild(bondsBlock);\r\n    const etfBlock = (0, functions_1.createElement)('div', 'БПИФ', 'etf-block');\r\n    securitiesPageContainer.appendChild(etfBlock);\r\n    addAddStockButton(securitiesPageContainer);\r\n}\r\nexports.displaySecurityPage = displaySecurityPage;\r\nfunction addAddStockButton(container) {\r\n    const addStockButton = (0, functions_1.createElement)('button', 'Добавить в портфель', 'add-stock-button');\r\n    container.appendChild(addStockButton);\r\n    const inputElement = (0, functions_1.createElement)('input', null, 'input-class');\r\n    ;\r\n    inputElement.setAttribute('type', 'text');\r\n    inputElement.addEventListener('input', () => {\r\n        searchTickers(inputElement);\r\n    });\r\n    container.appendChild(inputElement);\r\n}\r\nfunction searchTickers(inputElement) {\r\n    const searchTerm = inputElement.value.toLowerCase();\r\n    const filteredTickers = arrayAvailableTickers.filter(ticker => {\r\n        return ticker[2].toLowerCase().includes(searchTerm);\r\n    });\r\n    return filteredTickers;\r\n}\r\nfunction addStocksBlock(container) {\r\n    const stocksBlock = (0, functions_1.createElement)('div', 'Stocks', 'stocks-block');\r\n    container.appendChild(stocksBlock);\r\n}\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/renderPage.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;