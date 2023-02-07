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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst renderPage_1 = __webpack_require__(/*! ./assets/renderPage */ \"./src/assets/renderPage.ts\");\n(0, renderPage_1.displaySecurityPage)();\n\n\n//# sourceURL=webpack://rs-clone/./src/app.ts?");

/***/ }),

/***/ "./src/assets/api.ts":
/*!***************************!*\
  !*** ./src/assets/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.moexGetTickers = exports.moexTickerLast = void 0;\nfunction moexTickerLast(ticker) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const json = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function (res) { return res.json(); });\n        return json.marketdata.data.filter(function (d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];\n    });\n}\nexports.moexTickerLast = moexTickerLast;\nfunction moexGetTickers(bord) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json').then(function (res) { return res.json(); });\n        const data = response.securities.data;\n        const tickersName = extractTickersName(data, bord);\n        return tickersName;\n    });\n}\nexports.moexGetTickers = moexGetTickers;\nfunction extractTickersName(data, searchTerm) {\n    return data.filter(subArray => subArray[1].toUpperCase() === searchTerm.toUpperCase())\n        .map(subArray => [subArray[0], subArray[3], subArray[2]]);\n}\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/api.ts?");

/***/ }),

/***/ "./src/assets/functions.ts":
/*!*********************************!*\
  !*** ./src/assets/functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createElement = void 0;\nfunction createElement(tag, text, className) {\n    const element = document.createElement(tag);\n    if (text) {\n        element.innerText = text;\n    }\n    if (className !== '') {\n        element.classList.add(className);\n    }\n    return element;\n}\nexports.createElement = createElement;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/functions.ts?");

/***/ }),

/***/ "./src/assets/renderPage.ts":
/*!**********************************!*\
  !*** ./src/assets/renderPage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.displaySecurityPage = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\nlet arrayAvailableTickers = [];\nconst main = () => __awaiter(void 0, void 0, void 0, function* () {\n    arrayAvailableTickers = yield (0, api_1.moexGetTickers)('TQBR');\n});\nmain();\nfunction displaySecurityPage() {\n    const securitiesPage = (0, functions_1.createElement)('div', null, 'security-page');\n    document.body.appendChild(securitiesPage);\n    const securitiesPageContainer = (0, functions_1.createElement)('div', null, 'security-page__container');\n    securitiesPage.appendChild(securitiesPageContainer);\n    renderHeaderBlock(securitiesPageContainer);\n    renderStocksBlock(securitiesPageContainer);\n    const bondsBlock = (0, functions_1.createElement)('div', 'Облигации', 'bonds-block');\n    securitiesPageContainer.appendChild(bondsBlock);\n    const etfBlock = (0, functions_1.createElement)('div', 'БПИФ', 'etf-block');\n    securitiesPageContainer.appendChild(etfBlock);\n    addAddStockButton(securitiesPageContainer);\n}\nexports.displaySecurityPage = displaySecurityPage;\nfunction renderHeaderBlock(container) {\n    const headerPage = (0, functions_1.createElement)('div', null, 'header-block');\n    container.appendChild(headerPage);\n    const headerBlockName = (0, functions_1.createElement)('div', 'Ценные бумаги', 'header-block__name');\n    headerPage.appendChild(headerBlockName);\n    const headerBlockSum = (0, functions_1.createElement)('div', null, 'header-block__sum');\n    headerPage.appendChild(headerBlockSum);\n    const amountRubles = (0, functions_1.createElement)('span', '194 053', 'amount-rubles');\n    headerBlockSum.appendChild(amountRubles);\n    const amountKopecks = (0, functions_1.createElement)('span', ',53 ₽', 'amount-kopecks');\n    headerBlockSum.appendChild(amountKopecks);\n    const headerBlockProfit = (0, functions_1.createElement)('div', null, 'header-block__profit');\n    headerPage.appendChild(headerBlockProfit);\n    const profitBlock = (0, functions_1.createElement)('div', null, 'profit-block');\n    headerBlockProfit.appendChild(profitBlock);\n    const profitRubles = (0, functions_1.createElement)('span', '+1 102,53 ₽', 'profit-rubles');\n    profitBlock.appendChild(profitRubles);\n    const profitLine = (0, functions_1.createElement)('span', ' / ', 'profit-line');\n    profitBlock.appendChild(profitLine);\n    const profitProcent = (0, functions_1.createElement)('span', '0,58 %', 'profit-procent');\n    profitBlock.appendChild(profitProcent);\n    const periodBlock = (0, functions_1.createElement)('div', null, 'period-block');\n    headerBlockProfit.appendChild(periodBlock);\n    const periodAll = (0, functions_1.createElement)('span', 'за все время ', 'period-all');\n    periodBlock.appendChild(periodAll);\n    const periodArrowsDown = (0, functions_1.createElement)('i', null, 'period-arrows_down');\n    periodAll.appendChild(periodArrowsDown);\n    const periodMonth = (0, functions_1.createElement)('span', 'за месяц ', 'period-month');\n    periodBlock.appendChild(periodMonth);\n    periodMonth.style.display = 'none';\n    const periodArrowsUp = (0, functions_1.createElement)('i', null, 'period-arrows_up');\n    periodMonth.appendChild(periodArrowsUp);\n}\nfunction renderStocksBlock(container) {\n    const stocksBlock = (0, functions_1.createElement)('div', null, 'stock-block');\n    container.appendChild(stocksBlock);\n    const titleBlock = (0, functions_1.createElement)('div', null, 'title-stock');\n    stocksBlock.appendChild(titleBlock);\n    const nameTitle = (0, functions_1.createElement)('div', 'Акции', 'name-stock');\n    titleBlock.appendChild(nameTitle);\n    const profitTitle = (0, functions_1.createElement)('div', null, 'profit-stock');\n    titleBlock.appendChild(profitTitle);\n    const resultStock = (0, functions_1.createElement)('span', '+1 102,53 ₽', 'result-stock');\n    profitTitle.appendChild(resultStock);\n    const dotStock = (0, functions_1.createElement)('span', ' / ', 'dot-stock');\n    profitTitle.appendChild(dotStock);\n    const procentStock = (0, functions_1.createElement)('span', '0,56% ', 'procent-stock');\n    profitTitle.appendChild(procentStock);\n    const arrowBlock = (0, functions_1.createElement)('div', null, 'arrow-stock');\n    stocksBlock.appendChild(arrowBlock);\n}\nfunction addAddStockButton(container) {\n    const addStockButton = (0, functions_1.createElement)('button', 'Добавить в портфель', 'add-stock-button');\n    container.appendChild(addStockButton);\n    const inputElement = (0, functions_1.createElement)('input', null, 'input-class');\n    ;\n    inputElement.setAttribute('type', 'text');\n    inputElement.addEventListener('input', () => {\n        searchTickers(inputElement);\n    });\n    container.appendChild(inputElement);\n}\nfunction searchTickers(inputElement) {\n    const searchTerm = inputElement.value.toLowerCase();\n    const filteredTickers = arrayAvailableTickers.filter(ticker => {\n        return ticker[2].toLowerCase().includes(searchTerm);\n    });\n    return filteredTickers;\n}\nfunction addStocksBlock(container) {\n    const stocksBlock = (0, functions_1.createElement)('div', 'Stocks', 'stocks-block');\n    container.appendChild(stocksBlock);\n}\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/renderPage.ts?");

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