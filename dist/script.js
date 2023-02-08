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

/***/ "./src/assets/animationPage.ts":
/*!*************************************!*\
  !*** ./src/assets/animationPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.displayListSecurities = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nfunction displayListSecurities(obj, container) {\n    const block = (0, functions_1.createElement)('div', null, `security-block`);\n    container.appendChild(block);\n    const secInfo = (0, functions_1.createElement)('div', null, `security-info`);\n    block.appendChild(secInfo);\n    const secTickerName = (0, functions_1.createElement)('div', `${obj.ticker}`, `security-ticker`);\n    secInfo.appendChild(secTickerName);\n    const secAmount = (0, functions_1.createElement)('div', `${obj.amount} шт.`, `security-amount`);\n    secInfo.appendChild(secAmount);\n    const secFin = (0, functions_1.createElement)('div', null, `security-fin`);\n    block.appendChild(secFin);\n    const secPrice = (0, functions_1.createElement)('div', `${obj.purchasePrice}`, `security-price`);\n    secFin.appendChild(secPrice);\n}\nexports.displayListSecurities = displayListSecurities;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/animationPage.ts?");

/***/ }),

/***/ "./src/assets/api.ts":
/*!***************************!*\
  !*** ./src/assets/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.moexGetTickerPrice = exports.moexTickerLast = void 0;\nfunction moexTickerLast(ticker) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const json = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function (res) { return res.json(); });\n        return json.marketdata.data.filter(function (d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];\n    });\n}\nexports.moexTickerLast = moexTickerLast;\nfunction moexGetTickerPrice(ticker) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json');\n        if (!response.ok) {\n            throw new Error(`Failed to retrieve data for ticker \"${ticker}\"`);\n        }\n        const data = yield response.json();\n        const targetArray = data.securities.data.find((subArray) => subArray[1] === 'TQBR');\n        if (!targetArray) {\n            throw new Error(`No data found for ticker \"${ticker}\" on TQBR`);\n        }\n        const price = targetArray[3];\n        return price;\n    });\n}\nexports.moexGetTickerPrice = moexGetTickerPrice;\n/*\nfunction extractTickersPrice(data: Array<Array<string | number>>, searchTerm: string): Array<[string, number, string]> {\n  return data.filter(subArray => (subArray[1] as string).toUpperCase() === searchTerm.toUpperCase())\n    .map(subArray => [subArray[0] as string, subArray[3] as number, subArray[2] as string]);\n}\n*/ \n\n\n//# sourceURL=webpack://rs-clone/./src/assets/api.ts?");

/***/ }),

/***/ "./src/assets/data.ts":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateSecuritiesArray = exports.securitiesArray = void 0;\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\nexports.securitiesArray = [\n    { name: 'Газпром ао', type: 'Stock', ticker: 'GAZP', purchaseDate: new Date(2022, 1, 1), purchasePrice: 140, amount: 50 },\n    { name: 'Сбербанк ао', type: 'Stock', ticker: 'SBER', purchaseDate: new Date(2022, 1, 2), purchasePrice: 100, amount: 70 },\n];\nfunction updateSecuritiesArray(securitiesArray) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const updatedArray = yield Promise.all(securitiesArray.map((security) => __awaiter(this, void 0, void 0, function* () {\n            const price = yield (0, api_1.moexGetTickerPrice)(security.ticker);\n            return Object.assign(Object.assign({}, security), { lastPrice: price });\n        })));\n        console.dir(updatedArray);\n        return updatedArray;\n    });\n}\nexports.updateSecuritiesArray = updateSecuritiesArray;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/data.ts?");

/***/ }),

/***/ "./src/assets/functions.ts":
/*!*********************************!*\
  !*** ./src/assets/functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.calculateValueSecurites = exports.calculateSumAmount = exports.createElement = void 0;\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\nfunction createElement(tag, text, className) {\n    const element = document.createElement(tag);\n    if (text) {\n        element.innerText = text;\n    }\n    if (className !== '') {\n        element.classList.add(className);\n    }\n    return element;\n}\nexports.createElement = createElement;\nfunction calculateSumAmount(type, array) {\n    let sum = 0;\n    array.filter(obj => {\n        if (obj.type === type) {\n            sum += obj.amount * obj.purchasePrice;\n        }\n    });\n    return sum;\n}\nexports.calculateSumAmount = calculateSumAmount;\nfunction calculateValueSecurites(type, array) {\n    array.filter(obj => {\n        let sum = 0;\n        if (obj.type === type) {\n            (0, api_1.moexTickerLast)(obj.ticker).then(res => {\n                console.log(res);\n                sum += obj.amount * res;\n                console.log(sum);\n            });\n        }\n        return sum;\n    });\n}\nexports.calculateValueSecurites = calculateValueSecurites;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/functions.ts?");

/***/ }),

/***/ "./src/assets/renderPage.ts":
/*!**********************************!*\
  !*** ./src/assets/renderPage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.displaySecurityPage = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/assets/data.ts\");\nconst animationPage_1 = __webpack_require__(/*! ./animationPage */ \"./src/assets/animationPage.ts\");\nfunction displaySecurityPage() {\n    (0, data_1.updateSecuritiesArray)(data_1.securitiesArray);\n    const securitiesPage = (0, functions_1.createElement)('div', null, 'security-page');\n    document.body.appendChild(securitiesPage);\n    const securitiesPageContainer = (0, functions_1.createElement)('div', null, 'security-page__container');\n    securitiesPage.appendChild(securitiesPageContainer);\n    renderHeaderBlock(securitiesPageContainer);\n    renderSecurityBlock('Акции', 'stock', securitiesPageContainer);\n    renderSecurityBlock('Облигации', 'bond', securitiesPageContainer);\n    renderSecurityBlock('БПИФ', 'etf', securitiesPageContainer);\n}\nexports.displaySecurityPage = displaySecurityPage;\nfunction renderHeaderBlock(container) {\n    const headerPage = (0, functions_1.createElement)('div', null, 'header-block');\n    container.appendChild(headerPage);\n    const headerBlockName = (0, functions_1.createElement)('div', 'Ценные бумаги', 'header-block__name');\n    headerPage.appendChild(headerBlockName);\n    const headerBlockSum = (0, functions_1.createElement)('div', null, 'header-block__sum');\n    headerPage.appendChild(headerBlockSum);\n    const amountRubles = (0, functions_1.createElement)('span', '194 053', 'amount-rubles');\n    headerBlockSum.appendChild(amountRubles);\n    const amountKopecks = (0, functions_1.createElement)('span', ',53 ₽', 'amount-kopecks');\n    headerBlockSum.appendChild(amountKopecks);\n    const headerBlockProfit = (0, functions_1.createElement)('div', null, 'header-block__profit');\n    headerPage.appendChild(headerBlockProfit);\n    const profitBlock = (0, functions_1.createElement)('div', null, 'profit-block');\n    headerBlockProfit.appendChild(profitBlock);\n    const profitRubles = (0, functions_1.createElement)('span', '+1 102,53 ₽', 'profit-rubles');\n    profitBlock.appendChild(profitRubles);\n    const profitLine = (0, functions_1.createElement)('span', ' / ', 'profit-line');\n    profitBlock.appendChild(profitLine);\n    const profitProcent = (0, functions_1.createElement)('span', '0,58 %', 'profit-procent');\n    profitBlock.appendChild(profitProcent);\n    const periodBlock = (0, functions_1.createElement)('div', null, 'period-block');\n    headerBlockProfit.appendChild(periodBlock);\n    const periodAll = (0, functions_1.createElement)('span', 'за все время ', 'period-all');\n    periodBlock.appendChild(periodAll);\n    const periodArrowsDown = (0, functions_1.createElement)('i', null, 'period-arrows_down');\n    periodAll.appendChild(periodArrowsDown);\n    const periodMonth = (0, functions_1.createElement)('span', 'за месяц ', 'period-month');\n    periodBlock.appendChild(periodMonth);\n    periodMonth.style.display = 'none';\n    const periodArrowsUp = (0, functions_1.createElement)('i', null, 'period-arrows_up');\n    periodMonth.appendChild(periodArrowsUp);\n}\nfunction renderSecurityBlock(name, type, container) {\n    const block = (0, functions_1.createElement)('div', null, `${type}-block`);\n    container.appendChild(block);\n    const info = (0, functions_1.createElement)('div', null, `${type}-info`);\n    block.appendChild(info);\n    const titleBlock = (0, functions_1.createElement)('div', null, `title-${type}`);\n    info.appendChild(titleBlock);\n    const nameTitle = (0, functions_1.createElement)('div', `${name}`, `name-${type}`);\n    titleBlock.appendChild(nameTitle);\n    const profitTitle = (0, functions_1.createElement)('div', null, `profit-${type}`);\n    titleBlock.appendChild(profitTitle);\n    const resultBlock = (0, functions_1.createElement)('span', `11 537,56 ₽`, `result-${type}`);\n    profitTitle.appendChild(resultBlock);\n    const dotBlock = (0, functions_1.createElement)('span', ' / ', 'dot-block');\n    profitTitle.appendChild(dotBlock);\n    const procentBlock = (0, functions_1.createElement)('span', '0,56%', `procent-${type}`);\n    profitTitle.appendChild(procentBlock);\n    const arrowBlock = (0, functions_1.createElement)('div', null, 'arrow-block');\n    info.appendChild(arrowBlock);\n    const list = (0, functions_1.createElement)('div', null, `${type}-list`);\n    block.appendChild(list);\n    (0, animationPage_1.displayListSecurities)(data_1.securitiesArray[0], list);\n}\nfunction addAddStockButton(container) {\n    const addStockButton = (0, functions_1.createElement)('button', 'Добавить в портфель', 'add-stock-button');\n    container.appendChild(addStockButton);\n    const inputElement = (0, functions_1.createElement)('input', null, 'input-class');\n    ;\n    inputElement.setAttribute('type', 'text');\n    inputElement.addEventListener('input', () => {\n        //searchTickers(inputElement);\n    });\n    container.appendChild(inputElement);\n}\n/*\nfunction searchTickers(inputElement: HTMLInputElement) {\n    const searchTerm = inputElement.value.toLowerCase();\n    const filteredTickers = arrayAvailableTickers.filter(ticker => {\n      return ticker[2].toLowerCase().includes(searchTerm);\n    });\n    return filteredTickers;\n}\n\nfunction addStocksBlock(container: HTMLElement) {\n    const stocksBlock = createElement('div', 'Stocks', 'stocks-block');\n    container.appendChild(stocksBlock);\n}\n*/\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/renderPage.ts?");

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