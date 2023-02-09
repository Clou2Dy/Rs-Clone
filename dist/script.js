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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.displayListSecurities = void 0;\r\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nfunction displayListSecurities(obj, container) {\r\n    if (obj.lastPrice) {\r\n        const price = (obj.lastPrice * obj.amount).toFixed(2);\r\n        const profit = ((obj.lastPrice - obj.purchasePrice) * obj.amount).toFixed(2);\r\n        const procent = (100 * (+profit / +price)).toFixed(2);\r\n        const block = (0, functions_1.createElement)('div', null, `security-block`);\r\n        container.appendChild(block);\r\n        const secInfo = (0, functions_1.createElement)('div', null, `security-info`);\r\n        block.appendChild(secInfo);\r\n        const secTickerName = (0, functions_1.createElement)('div', `${obj.name}`, `security-ticker`);\r\n        secInfo.appendChild(secTickerName);\r\n        const secAmount = (0, functions_1.createElement)('div', `${obj.amount} шт.`, `security-amount`);\r\n        secInfo.appendChild(secAmount);\r\n        const secFin = (0, functions_1.createElement)('div', null, `security-fin`);\r\n        block.appendChild(secFin);\r\n        const secPrice = (0, functions_1.createElement)('div', `${price} ₽ `, `security-price`);\r\n        secFin.appendChild(secPrice);\r\n        const secProfit = (0, functions_1.createElement)('div', null, `security-profit`);\r\n        secFin.appendChild(secProfit);\r\n        const secResult = (0, functions_1.createElement)('div', `${profit} ₽`, `security-result`);\r\n        secProfit.appendChild(secResult);\r\n        const secDot = (0, functions_1.createElement)('span', `/`, 'dot-block');\r\n        secProfit.appendChild(secDot);\r\n        const secProcent = (0, functions_1.createElement)('div', ` ${procent} %`, `security-procent`);\r\n        secProfit.appendChild(secProcent);\r\n    }\r\n}\r\nexports.displayListSecurities = displayListSecurities;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/animationPage.ts?");

/***/ }),

/***/ "./src/assets/api.ts":
/*!***************************!*\
  !*** ./src/assets/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.moexGetTickers = exports.getStocksTickers = exports.moexGetTickerPrice = exports.moexTickerLast = void 0;\r\nfunction moexTickerLast(ticker) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const json = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function (res) { return res.json(); });\r\n        return json.marketdata.data.filter(function (d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];\r\n    });\r\n}\r\nexports.moexTickerLast = moexTickerLast;\r\nfunction moexGetTickerPrice(ticker) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json');\r\n        if (!response.ok) {\r\n            throw new Error(`Failed to retrieve data for ticker \"${ticker}\"`);\r\n        }\r\n        const data = yield response.json();\r\n        const targetArray = data.securities.data.find((subArray) => subArray[1] === 'TQBR');\r\n        if (!targetArray) {\r\n            throw new Error(`No data found for ticker \"${ticker}\" on TQBR`);\r\n        }\r\n        const price = targetArray[3];\r\n        return price;\r\n    });\r\n}\r\nexports.moexGetTickerPrice = moexGetTickerPrice;\r\nfunction getStocksTickers() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json');\r\n        const json = yield response.json();\r\n        const data = json.securities.data;\r\n        const tqbr = data.filter((elem) => elem[1] === 'TQBR');\r\n        return tqbr;\r\n    });\r\n}\r\nexports.getStocksTickers = getStocksTickers;\r\nfunction moexGetTickers(bord) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json').then(function (res) { return res.json(); });\r\n        const data = response.securities.data;\r\n        //const tickersName = extractTickersName(data, bord)\r\n        //return tickersName;\r\n    });\r\n}\r\nexports.moexGetTickers = moexGetTickers;\r\n/*\r\nfunction extractTickersPrice(data: Array<Array<string | number>>, searchTerm: string): Array<[string, number, string]> {\r\n  return data.filter(subArray => (subArray[1] as string).toUpperCase() === searchTerm.toUpperCase())\r\n    .map(subArray => [subArray[0] as string, subArray[3] as number, subArray[2] as string]);\r\n}\r\n*/ \r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/api.ts?");

/***/ }),

/***/ "./src/assets/data.ts":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateSecuritiesArray = exports.securitiesArray = void 0;\r\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\r\nexports.securitiesArray = [\r\n    { name: 'Газпром ао', type: 'stock', ticker: 'GAZP', purchaseDate: new Date(2022, 1, 1), purchasePrice: 140, amount: 50 },\r\n    { name: 'Сбербанк ао', type: 'stock', ticker: 'SBER', purchaseDate: new Date(2022, 1, 2), purchasePrice: 100, amount: 70 },\r\n];\r\nfunction updateSecuritiesArray(securitiesArray) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const updatedArray = yield Promise.all(securitiesArray.map((security) => __awaiter(this, void 0, void 0, function* () {\r\n            const price = yield (0, api_1.moexGetTickerPrice)(security.ticker);\r\n            return Object.assign(Object.assign({}, security), { lastPrice: price });\r\n        })));\r\n        return updatedArray;\r\n    });\r\n}\r\nexports.updateSecuritiesArray = updateSecuritiesArray;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/data.ts?");

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

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.displaySecurityPage = void 0;\r\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nconst functions_2 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/assets/data.ts\");\r\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\r\nconst animationPage_1 = __webpack_require__(/*! ./animationPage */ \"./src/assets/animationPage.ts\");\r\nconst searchPage_1 = __webpack_require__(/*! ./searchPage */ \"./src/assets/searchPage.ts\");\r\nfunction displaySecurityPage() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const securitiesPage = (0, functions_1.createElement)('div', null, 'security-page');\r\n        document.body.appendChild(securitiesPage);\r\n        const securitiesPageContainer = (0, functions_1.createElement)('div', null, 'security-page__container');\r\n        securitiesPage.appendChild(securitiesPageContainer);\r\n        yield renderHeaderBlock(securitiesPageContainer);\r\n        yield renderAddButton(securitiesPageContainer);\r\n        yield renderSecurityBlock('Акции', 'stock', securitiesPageContainer);\r\n        yield renderSecurityBlock('Облигации', 'bond', securitiesPageContainer);\r\n        yield renderSecurityBlock('БПИФ', 'etf', securitiesPageContainer);\r\n    });\r\n}\r\nexports.displaySecurityPage = displaySecurityPage;\r\nfunction renderHeaderBlock(container) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const lastPriceArray = yield (0, data_1.updateSecuritiesArray)(data_1.securitiesArray);\r\n        const totalSum = (0, functions_2.calculateTotalSum)(lastPriceArray);\r\n        const totalResult = +(0, functions_2.calculateTotalProfit)(lastPriceArray).toFixed(2);\r\n        const headerPage = (0, functions_1.createElement)('div', null, 'header-block');\r\n        container.appendChild(headerPage);\r\n        const headerBlockName = (0, functions_1.createElement)('div', 'Ценные бумаги', 'header-block__name');\r\n        headerPage.appendChild(headerBlockName);\r\n        const headerBlockSum = (0, functions_1.createElement)('div', null, 'header-block__sum');\r\n        headerPage.appendChild(headerBlockSum);\r\n        const amountRubles = (0, functions_1.createElement)('span', `${Math.trunc(totalSum)}`, 'amount-rubles');\r\n        headerBlockSum.appendChild(amountRubles);\r\n        const amountKopecks = (0, functions_1.createElement)('span', `,${Math.floor((totalSum % 1) * Math.pow(10, 2))} ₽`, 'amount-kopecks');\r\n        headerBlockSum.appendChild(amountKopecks);\r\n        const headerBlockProfit = (0, functions_1.createElement)('div', null, 'header-block__profit');\r\n        headerPage.appendChild(headerBlockProfit);\r\n        const profitBlock = (0, functions_1.createElement)('div', null, 'profit-block');\r\n        headerBlockProfit.appendChild(profitBlock);\r\n        const profitRubles = (0, functions_1.createElement)('span', `${totalResult} ₽`, 'profit-rubles');\r\n        profitBlock.appendChild(profitRubles);\r\n        const profitLine = (0, functions_1.createElement)('span', ' / ', 'profit-line');\r\n        profitBlock.appendChild(profitLine);\r\n        const profitProcent = (0, functions_1.createElement)('span', `${(100 * (totalResult / totalSum)).toFixed(2)} %`, 'profit-procent');\r\n        profitBlock.appendChild(profitProcent);\r\n        const periodBlock = (0, functions_1.createElement)('div', null, 'period-block');\r\n        headerBlockProfit.appendChild(periodBlock);\r\n        const periodAll = (0, functions_1.createElement)('span', 'за все время ', 'period-all');\r\n        periodBlock.appendChild(periodAll);\r\n        const periodArrowsDown = (0, functions_1.createElement)('i', null, 'period-arrows_down');\r\n        periodAll.appendChild(periodArrowsDown);\r\n        const periodMonth = (0, functions_1.createElement)('span', 'за месяц ', 'period-month');\r\n        periodBlock.appendChild(periodMonth);\r\n        periodMonth.style.display = 'none';\r\n        const periodArrowsUp = (0, functions_1.createElement)('i', null, 'period-arrows_up');\r\n        periodMonth.appendChild(periodArrowsUp);\r\n    });\r\n}\r\nfunction renderSecurityBlock(name, type, container) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const getTypeArray = data_1.securitiesArray.filter(el => el.type === type);\r\n        const lastPriceArray = yield (0, data_1.updateSecuritiesArray)(getTypeArray);\r\n        const totalSum = (0, functions_2.calculateTotalSum)(lastPriceArray);\r\n        const totalResult = +(0, functions_2.calculateTotalProfit)(lastPriceArray).toFixed(2);\r\n        const block = (0, functions_1.createElement)('div', null, `${type}-block`);\r\n        container.appendChild(block);\r\n        const info = (0, functions_1.createElement)('div', null, `${type}-info`);\r\n        block.appendChild(info);\r\n        const titleBlock = (0, functions_1.createElement)('div', null, `title-${type}`);\r\n        info.appendChild(titleBlock);\r\n        const nameTitle = (0, functions_1.createElement)('div', `${name}`, `name-${type}`);\r\n        titleBlock.appendChild(nameTitle);\r\n        const profitTitle = (0, functions_1.createElement)('div', null, `profit-${type}`);\r\n        titleBlock.appendChild(profitTitle);\r\n        const resultBlock = (0, functions_1.createElement)('span', `${totalSum.toFixed(2)} ₽`, `result-${type}`);\r\n        profitTitle.appendChild(resultBlock);\r\n        const dotBlock = (0, functions_1.createElement)('span', ' / ', 'dot-block');\r\n        profitTitle.appendChild(dotBlock);\r\n        const procentBlock = (0, functions_1.createElement)('span', `${(100 * (totalResult / totalSum)).toFixed(2)} %`, `procent-${type}`);\r\n        profitTitle.appendChild(procentBlock);\r\n        const arrowBlock = (0, functions_1.createElement)('div', null, 'arrow-block');\r\n        info.appendChild(arrowBlock);\r\n        const list = (0, functions_1.createElement)('div', null, `${type}-list`);\r\n        block.appendChild(list);\r\n        lastPriceArray.forEach(el => (0, animationPage_1.displayListSecurities)(el, list));\r\n    });\r\n}\r\nfunction renderAddButton(container) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const addButtonContainer = (0, functions_1.createElement)('div', null, 'add-button__container');\r\n        container.appendChild(addButtonContainer);\r\n        const inputElement = (0, functions_1.createElement)('input', null, 'input-sec');\r\n        inputElement.defaultValue = 'Компания, тикер, ISIN';\r\n        inputElement.setAttribute('type', 'text');\r\n        const securityPage = document.querySelector('.security-page');\r\n        const searchPage = document.querySelector('.search-page');\r\n        const arrayAvailableTickers = yield (0, api_1.getStocksTickers)();\r\n        inputElement.addEventListener('click', () => {\r\n            securityPage.style.display = 'none';\r\n            (0, searchPage_1.renderSearchPage)();\r\n        });\r\n        addButtonContainer.appendChild(inputElement);\r\n    });\r\n}\r\nfunction searchTickers(inputElement, array) {\r\n    const searchTerm = inputElement.value.toLowerCase();\r\n    const filteredTickers = array.filter((elem) => {\r\n        return elem[2].toLowerCase().includes(searchTerm);\r\n    });\r\n    console.log(filteredTickers);\r\n    return filteredTickers;\r\n}\r\n/*\r\nfunction addStocksBlock(container: HTMLElement) {\r\n    const stocksBlock = createElement('div', 'Stocks', 'stocks-block');\r\n    container.appendChild(stocksBlock);\r\n}\r\n*/\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/renderPage.ts?");

/***/ }),

/***/ "./src/assets/searchPage.ts":
/*!**********************************!*\
  !*** ./src/assets/searchPage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.renderSearchPage = void 0;\r\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\r\nfunction renderSearchPage() {\r\n    const searchPage = (0, functions_1.createElement)('div', null, 'search-page');\r\n    document.body.appendChild(searchPage);\r\n    const searchPageContainer = (0, functions_1.createElement)('div', null, 'search-page__container');\r\n    searchPage.appendChild(searchPageContainer);\r\n    const searchBlock = (0, functions_1.createElement)('div', null, 'search-block');\r\n    searchPageContainer.appendChild(searchBlock);\r\n    const searchInput = (0, functions_1.createElement)('input', null, 'search-input');\r\n    searchBlock.appendChild(searchInput);\r\n    searchInput.defaultValue = 'Компания, тикер, ISIN';\r\n    const cancelInput = (0, functions_1.createElement)('div', 'Отменить', 'search-cancel');\r\n    searchBlock.appendChild(cancelInput);\r\n    const securityPage = document.querySelector('.security-page');\r\n    cancelInput.addEventListener('click', () => {\r\n        searchPage.style.display = 'none';\r\n        securityPage.style.display = 'block';\r\n    });\r\n}\r\nexports.renderSearchPage = renderSearchPage;\r\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/searchPage.ts?");

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