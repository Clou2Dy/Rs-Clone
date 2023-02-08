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

/***/ "./src/assets/animationPage.ts":
/*!*************************************!*\
  !*** ./src/assets/animationPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.displayListSecurities = void 0;\r\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nfunction displayListSecurities(obj, container) {\r\n    const block = (0, functions_1.createElement)('div', null, `security-block`);\r\n    container.appendChild(block);\r\n    const secInfo = (0, functions_1.createElement)('div', null, `security-info`);\r\n    block.appendChild(secInfo);\r\n    const secTickerName = (0, functions_1.createElement)('div', `${obj.ticker}`, `security-ticker`);\r\n    secInfo.appendChild(secTickerName);\r\n    const secAmount = (0, functions_1.createElement)('div', `${obj.amount} шт.`, `security-amount`);\r\n    secInfo.appendChild(secAmount);\r\n    const secFin = (0, functions_1.createElement)('div', null, `security-fin`);\r\n    block.appendChild(secFin);\r\n    const secPrice = (0, functions_1.createElement)('div', `${obj.purchasePrice}`, `security-price`);\r\n    secFin.appendChild(secPrice);\r\n}\r\nexports.displayListSecurities = displayListSecurities;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/animationPage.ts?");

/***/ }),

/***/ "./src/assets/api.ts":
/*!***************************!*\
  !*** ./src/assets/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.moexGetTickerPrice = exports.moexTickerLast = void 0;\r\nfunction moexTickerLast(ticker) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const json = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function (res) { return res.json(); });\r\n        return json.marketdata.data.filter(function (d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];\r\n    });\r\n}\r\nexports.moexTickerLast = moexTickerLast;\r\nfunction moexGetTickerPrice(ticker) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json');\r\n        if (!response.ok) {\r\n            throw new Error(`Failed to retrieve data for ticker \"${ticker}\"`);\r\n        }\r\n        const data = yield response.json();\r\n        const targetArray = data.securities.data.find((subArray) => subArray[1] === 'TQBR');\r\n        if (!targetArray) {\r\n            throw new Error(`No data found for ticker \"${ticker}\" on TQBR`);\r\n        }\r\n        const price = targetArray[3];\r\n        return price;\r\n    });\r\n}\r\nexports.moexGetTickerPrice = moexGetTickerPrice;\r\n/*\r\nfunction extractTickersPrice(data: Array<Array<string | number>>, searchTerm: string): Array<[string, number, string]> {\r\n  return data.filter(subArray => (subArray[1] as string).toUpperCase() === searchTerm.toUpperCase())\r\n    .map(subArray => [subArray[0] as string, subArray[3] as number, subArray[2] as string]);\r\n}\r\n*/ \r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/api.ts?");

/***/ }),

/***/ "./src/assets/data.ts":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateSecuritiesArray = exports.securitiesArray = void 0;\r\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\r\nexports.securitiesArray = [\r\n    { name: 'Газпром ао', type: 'Stock', ticker: 'GAZP', purchaseDate: new Date(2022, 1, 1), purchasePrice: 140, amount: 50 },\r\n    { name: 'Сбербанк ао', type: 'Stock', ticker: 'SBER', purchaseDate: new Date(2022, 1, 2), purchasePrice: 100, amount: 70 },\r\n];\r\nfunction updateSecuritiesArray(securitiesArray) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const updatedArray = yield Promise.all(securitiesArray.map((security) => __awaiter(this, void 0, void 0, function* () {\r\n            const price = yield (0, api_1.moexGetTickerPrice)(security.ticker);\r\n            return Object.assign(Object.assign({}, security), { lastPrice: price });\r\n        })));\r\n        return updatedArray;\r\n    });\r\n}\r\nexports.updateSecuritiesArray = updateSecuritiesArray;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/data.ts?");

/***/ }),

/***/ "./src/assets/functions.ts":
/*!*********************************!*\
  !*** ./src/assets/functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.calculateTotalProfit = exports.calculateTotalSum = exports.createElement = void 0;\r\nfunction createElement(tag, text, className) {\r\n    const element = document.createElement(tag);\r\n    if (text) {\r\n        element.innerText = text;\r\n    }\r\n    if (className !== '') {\r\n        element.classList.add(className);\r\n    }\r\n    return element;\r\n}\r\nexports.createElement = createElement;\r\nfunction calculateTotalSum(array) {\r\n    let sum = 0;\r\n    array.forEach(el => {\r\n        if (el.lastPrice) {\r\n            sum += el.amount * el.lastPrice;\r\n        }\r\n    });\r\n    return sum;\r\n}\r\nexports.calculateTotalSum = calculateTotalSum;\r\nfunction calculateTotalProfit(array) {\r\n    let sum = 0;\r\n    array.forEach(el => {\r\n        if (el.lastPrice) {\r\n            sum += el.amount * (el.lastPrice - el.purchasePrice);\r\n        }\r\n    });\r\n    return sum;\r\n}\r\nexports.calculateTotalProfit = calculateTotalProfit;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/functions.ts?");

/***/ }),

/***/ "./src/assets/renderPage.ts":
/*!**********************************!*\
  !*** ./src/assets/renderPage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.displaySecurityPage = void 0;\r\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nconst functions_2 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/assets/data.ts\");\r\nconst animationPage_1 = __webpack_require__(/*! ./animationPage */ \"./src/assets/animationPage.ts\");\r\nfunction displaySecurityPage() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const securitiesPage = (0, functions_1.createElement)('div', null, 'security-page');\r\n        document.body.appendChild(securitiesPage);\r\n        const securitiesPageContainer = (0, functions_1.createElement)('div', null, 'security-page__container');\r\n        securitiesPage.appendChild(securitiesPageContainer);\r\n        yield renderHeaderBlock(securitiesPageContainer);\r\n        renderSecurityBlock('Акции', 'stock', securitiesPageContainer);\r\n        renderSecurityBlock('Облигации', 'bond', securitiesPageContainer);\r\n        renderSecurityBlock('БПИФ', 'etf', securitiesPageContainer);\r\n    });\r\n}\r\nexports.displaySecurityPage = displaySecurityPage;\r\nfunction renderHeaderBlock(container) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const lastPriceArray = yield (0, data_1.updateSecuritiesArray)(data_1.securitiesArray);\r\n        const totalSum = (0, functions_2.calculateTotalSum)(lastPriceArray);\r\n        const totalResult = +(0, functions_2.calculateTotalProfit)(lastPriceArray).toFixed(2);\r\n        const headerPage = (0, functions_1.createElement)('div', null, 'header-block');\r\n        container.appendChild(headerPage);\r\n        const headerBlockName = (0, functions_1.createElement)('div', 'Ценные бумаги', 'header-block__name');\r\n        headerPage.appendChild(headerBlockName);\r\n        const headerBlockSum = (0, functions_1.createElement)('div', null, 'header-block__sum');\r\n        headerPage.appendChild(headerBlockSum);\r\n        const amountRubles = (0, functions_1.createElement)('span', `${Math.trunc(totalSum)}`, 'amount-rubles');\r\n        headerBlockSum.appendChild(amountRubles);\r\n        const amountKopecks = (0, functions_1.createElement)('span', `,${Math.floor((totalSum % 1) * Math.pow(10, 2))} ₽`, 'amount-kopecks');\r\n        headerBlockSum.appendChild(amountKopecks);\r\n        const headerBlockProfit = (0, functions_1.createElement)('div', null, 'header-block__profit');\r\n        headerPage.appendChild(headerBlockProfit);\r\n        const profitBlock = (0, functions_1.createElement)('div', null, 'profit-block');\r\n        headerBlockProfit.appendChild(profitBlock);\r\n        const profitRubles = (0, functions_1.createElement)('span', `${totalResult} ₽`, 'profit-rubles');\r\n        profitBlock.appendChild(profitRubles);\r\n        const profitLine = (0, functions_1.createElement)('span', ' / ', 'profit-line');\r\n        profitBlock.appendChild(profitLine);\r\n        const profitProcent = (0, functions_1.createElement)('span', `${(100 * (totalResult / totalSum)).toFixed(2)} %`, 'profit-procent');\r\n        profitBlock.appendChild(profitProcent);\r\n        const periodBlock = (0, functions_1.createElement)('div', null, 'period-block');\r\n        headerBlockProfit.appendChild(periodBlock);\r\n        const periodAll = (0, functions_1.createElement)('span', 'за все время ', 'period-all');\r\n        periodBlock.appendChild(periodAll);\r\n        const periodArrowsDown = (0, functions_1.createElement)('i', null, 'period-arrows_down');\r\n        periodAll.appendChild(periodArrowsDown);\r\n        const periodMonth = (0, functions_1.createElement)('span', 'за месяц ', 'period-month');\r\n        periodBlock.appendChild(periodMonth);\r\n        periodMonth.style.display = 'none';\r\n        const periodArrowsUp = (0, functions_1.createElement)('i', null, 'period-arrows_up');\r\n        periodMonth.appendChild(periodArrowsUp);\r\n    });\r\n}\r\nfunction renderSecurityBlock(name, type, container) {\r\n    const block = (0, functions_1.createElement)('div', null, `${type}-block`);\r\n    container.appendChild(block);\r\n    const info = (0, functions_1.createElement)('div', null, `${type}-info`);\r\n    block.appendChild(info);\r\n    const titleBlock = (0, functions_1.createElement)('div', null, `title-${type}`);\r\n    info.appendChild(titleBlock);\r\n    const nameTitle = (0, functions_1.createElement)('div', `${name}`, `name-${type}`);\r\n    titleBlock.appendChild(nameTitle);\r\n    const profitTitle = (0, functions_1.createElement)('div', null, `profit-${type}`);\r\n    titleBlock.appendChild(profitTitle);\r\n    const resultBlock = (0, functions_1.createElement)('span', `11 537,56 ₽`, `result-${type}`);\r\n    profitTitle.appendChild(resultBlock);\r\n    const dotBlock = (0, functions_1.createElement)('span', ' / ', 'dot-block');\r\n    profitTitle.appendChild(dotBlock);\r\n    const procentBlock = (0, functions_1.createElement)('span', '0,56%', `procent-${type}`);\r\n    profitTitle.appendChild(procentBlock);\r\n    const arrowBlock = (0, functions_1.createElement)('div', null, 'arrow-block');\r\n    info.appendChild(arrowBlock);\r\n    const list = (0, functions_1.createElement)('div', null, `${type}-list`);\r\n    block.appendChild(list);\r\n    (0, animationPage_1.displayListSecurities)(data_1.securitiesArray[0], list);\r\n}\r\nfunction addAddStockButton(container) {\r\n    const addStockButton = (0, functions_1.createElement)('button', 'Добавить в портфель', 'add-stock-button');\r\n    container.appendChild(addStockButton);\r\n    const inputElement = (0, functions_1.createElement)('input', null, 'input-class');\r\n    ;\r\n    inputElement.setAttribute('type', 'text');\r\n    inputElement.addEventListener('input', () => {\r\n        //searchTickers(inputElement);\r\n    });\r\n    container.appendChild(inputElement);\r\n}\r\n/*\r\nfunction searchTickers(inputElement: HTMLInputElement) {\r\n    const searchTerm = inputElement.value.toLowerCase();\r\n    const filteredTickers = arrayAvailableTickers.filter(ticker => {\r\n      return ticker[2].toLowerCase().includes(searchTerm);\r\n    });\r\n    return filteredTickers;\r\n}\r\n\r\nfunction addStocksBlock(container: HTMLElement) {\r\n    const stocksBlock = createElement('div', 'Stocks', 'stocks-block');\r\n    container.appendChild(stocksBlock);\r\n}\r\n*/\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/renderPage.ts?");

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