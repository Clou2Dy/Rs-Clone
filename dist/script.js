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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.securitiesArray = void 0;\nconst renderPage_1 = __webpack_require__(/*! ./assets/renderPage */ \"./src/assets/renderPage.ts\");\nexports.securitiesArray = [\n    { name: 'Газпром ао', type: 'stock', ticker: 'GAZP', purchaseDate: new Date(2022, 1, 1), purchasePrice: 140, amount: 50 },\n    { name: 'Сбербанк ао', type: 'stock', ticker: 'SBER', purchaseDate: new Date(2022, 1, 2), purchasePrice: 100, amount: 70 },\n];\n(0, renderPage_1.displaySecurityPage)();\n\n\n//# sourceURL=webpack://rs-clone/./src/app.ts?");

/***/ }),

/***/ "./src/assets/addPage.ts":
/*!*******************************!*\
  !*** ./src/assets/addPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createStockBlock = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\nfunction createStockInfoBlock(name, ticker, last) {\n    const typeBlock = (0, functions_1.createElement)('div', `Акция`, 'type-information');\n    const closeButton = (0, functions_1.createElement)('div', null, 'close-button');\n    const hrElement = (0, functions_1.createElement)('hr', null, 'hr-line');\n    const row = (0, functions_1.createElement)('div', null, 'row-name-ticker');\n    const tickerBlock = (0, functions_1.createElement)('div', `${ticker || ''}`, 'ticker-information');\n    const nameBlock = (0, functions_1.createElement)('div', `${name || ''}`, 'name-information');\n    const priceBlock = (0, functions_1.createElement)('div', null, 'price-information');\n    const priceText = (0, functions_1.createElement)('div', 'Стоимость на Московской бирже', 'price-text');\n    const priceValue = (0, functions_1.createElement)('div', `${last || ''}`, 'price-value');\n    const hrElement2 = (0, functions_1.createElement)('hr', null, 'hr-line');\n    row.appendChild(tickerBlock);\n    row.appendChild(nameBlock);\n    priceBlock.appendChild(priceText);\n    priceBlock.appendChild(priceValue);\n    const stockInfoBlock = (0, functions_1.createElement)('div', null, 'stock-information');\n    stockInfoBlock.appendChild(typeBlock);\n    stockInfoBlock.appendChild(closeButton);\n    stockInfoBlock.appendChild(hrElement);\n    stockInfoBlock.appendChild(row);\n    stockInfoBlock.appendChild(priceBlock);\n    stockInfoBlock.appendChild(hrElement2);\n    return stockInfoBlock;\n}\nfunction createInputContainer() {\n    const inputContainer = (0, functions_1.createElement)('div', null, 'input-container');\n    const purchasePriceInput = (0, functions_1.createElement)('input', null, 'purchase-price-input');\n    purchasePriceInput.type = 'number';\n    purchasePriceInput.placeholder = 'Purchase Price';\n    const quantityInput = (0, functions_1.createElement)('input', null, 'quantity-input');\n    quantityInput.type = 'number';\n    quantityInput.placeholder = 'Quantity';\n    const dateInput = (0, functions_1.createElement)('input', null, 'date-input');\n    dateInput.type = 'date';\n    dateInput.value = new Date().toISOString().split('T')[0];\n    inputContainer.appendChild(purchasePriceInput);\n    inputContainer.appendChild(quantityInput);\n    inputContainer.appendChild(dateInput);\n    return inputContainer;\n}\nfunction createStockBlock(name, ticker, last) {\n    const securityPage = document.querySelector('.security-page');\n    const backgroundDimming = (0, functions_1.createElement)('div', null, 'background-dimming');\n    const stockInfoBlock = createStockInfoBlock(name, ticker, last);\n    const inputContainer = createInputContainer();\n    const addToPortfolioButton = (0, functions_1.createElement)('button', 'Add to Portfolio', 'add-to-portfolio-button');\n    addToPortfolioButton.id = 'add-stock-button';\n    addToPortfolioButton.addEventListener('click', () => {\n        const purchasePriceInput = document.querySelector('.purchase-price-input');\n        const quantityInput = document.querySelector('.quantity-input');\n        const dateInput = document.querySelector('.date-input');\n        const newSecurity = {\n            type: 'stock',\n            ticker: ticker || '',\n            name: name || '',\n            purchasePrice: Number(purchasePriceInput.value),\n            amount: Number(quantityInput.value),\n            purchaseDate: new Date(dateInput.value),\n        };\n        app_1.securitiesArray.push(newSecurity);\n        console.log(app_1.securitiesArray);\n    });\n    stockInfoBlock.appendChild(inputContainer);\n    stockInfoBlock.appendChild(addToPortfolioButton);\n    securityPage === null || securityPage === void 0 ? void 0 : securityPage.appendChild(stockInfoBlock);\n    securityPage === null || securityPage === void 0 ? void 0 : securityPage.appendChild(backgroundDimming);\n    stockInfoBlock.classList.add('show'); /* add the 'show' class */\n}\nexports.createStockBlock = createStockBlock;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/addPage.ts?");

/***/ }),

/***/ "./src/assets/animationPage.ts":
/*!*************************************!*\
  !*** ./src/assets/animationPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.displayListSecurities = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nfunction displayListSecurities(obj, container) {\n    if (obj.lastPrice) {\n        const price = (obj.lastPrice * obj.amount).toFixed(2);\n        const profit = ((obj.lastPrice - obj.purchasePrice) * obj.amount).toFixed(2);\n        const procent = (100 * (+profit / +price)).toFixed(2);\n        const block = (0, functions_1.createElement)('div', null, `security-block`);\n        container.appendChild(block);\n        const secInfo = (0, functions_1.createElement)('div', null, `security-info`);\n        block.appendChild(secInfo);\n        const secTickerName = (0, functions_1.createElement)('div', `${obj.name}`, `security-ticker`);\n        secInfo.appendChild(secTickerName);\n        const secAmount = (0, functions_1.createElement)('div', `${obj.amount} шт.`, `security-amount`);\n        secInfo.appendChild(secAmount);\n        const secFin = (0, functions_1.createElement)('div', null, `security-fin`);\n        block.appendChild(secFin);\n        const secPrice = (0, functions_1.createElement)('div', `${price} ₽ `, `security-price`);\n        secFin.appendChild(secPrice);\n        const secProfit = (0, functions_1.createElement)('div', null, `security-profit`);\n        secFin.appendChild(secProfit);\n        const secResult = (0, functions_1.createElement)('div', `${profit} ₽`, `security-result`);\n        secProfit.appendChild(secResult);\n        const secDot = (0, functions_1.createElement)('span', `/`, 'dot-block');\n        secProfit.appendChild(secDot);\n        const secProcent = (0, functions_1.createElement)('div', ` ${procent} %`, `security-procent`);\n        secProfit.appendChild(secProcent);\n    }\n}\nexports.displayListSecurities = displayListSecurities;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/animationPage.ts?");

/***/ }),

/***/ "./src/assets/api.ts":
/*!***************************!*\
  !*** ./src/assets/api.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getStocksTickers = exports.moexGetTickerPrice = exports.moexTickerLast = void 0;\nfunction moexTickerLast(ticker) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const json = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function (res) { return res.json(); });\n        return json.marketdata.data.filter(function (d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];\n    });\n}\nexports.moexTickerLast = moexTickerLast;\nfunction moexGetTickerPrice(ticker) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json');\n        if (!response.ok) {\n            throw new Error(`Failed to retrieve data for ticker \"${ticker}\"`);\n        }\n        const data = yield response.json();\n        const targetArray = data.securities.data.find((subArray) => subArray[1] === 'TQBR');\n        if (!targetArray) {\n            throw new Error(`No data found for ticker \"${ticker}\" on TQBR`);\n        }\n        const price = targetArray[3];\n        return price;\n    });\n}\nexports.moexGetTickerPrice = moexGetTickerPrice;\nfunction getStocksTickers() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json');\n            const json = yield response.json();\n            const data = json.securities.data;\n            const tqbr = data.filter((elem) => elem[1] === 'TQBR');\n            return tqbr;\n        }\n        catch (error) {\n            console.error(error);\n            return [];\n        }\n    });\n}\nexports.getStocksTickers = getStocksTickers;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/api.ts?");

/***/ }),

/***/ "./src/assets/data.ts":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateSecuritiesArray = void 0;\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\nfunction updateSecuritiesArray(securitiesArray) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const updatedArray = yield Promise.all(securitiesArray.map((security) => __awaiter(this, void 0, void 0, function* () {\n            const price = yield (0, api_1.moexGetTickerPrice)(security.ticker);\n            return Object.assign(Object.assign({}, security), { lastPrice: price });\n        })));\n        return updatedArray;\n    });\n}\nexports.updateSecuritiesArray = updateSecuritiesArray;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/data.ts?");

/***/ }),

/***/ "./src/assets/functions.ts":
/*!*********************************!*\
  !*** ./src/assets/functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.calculateTotalProfit = exports.calculateTotalSum = exports.createElement = void 0;\nfunction createElement(tag, text, className) {\n    const element = document.createElement(tag);\n    if (text) {\n        element.innerText = text;\n    }\n    if (className !== '') {\n        element.classList.add(className);\n    }\n    return element;\n}\nexports.createElement = createElement;\nfunction calculateTotalSum(array) {\n    let sum = 0;\n    array.forEach(el => {\n        if (el.lastPrice) {\n            sum += el.amount * el.lastPrice;\n        }\n    });\n    return sum;\n}\nexports.calculateTotalSum = calculateTotalSum;\nfunction calculateTotalProfit(array) {\n    let sum = 0;\n    array.forEach(el => {\n        if (el.lastPrice) {\n            sum += el.amount * (el.lastPrice - el.purchasePrice);\n        }\n    });\n    return sum;\n}\nexports.calculateTotalProfit = calculateTotalProfit;\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/functions.ts?");

/***/ }),

/***/ "./src/assets/renderPage.ts":
/*!**********************************!*\
  !*** ./src/assets/renderPage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.displaySecurityPage = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nconst functions_2 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/assets/data.ts\");\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\nconst animationPage_1 = __webpack_require__(/*! ./animationPage */ \"./src/assets/animationPage.ts\");\nconst searchPage_1 = __webpack_require__(/*! ./searchPage */ \"./src/assets/searchPage.ts\");\nfunction displaySecurityPage() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const securitiesPage = (0, functions_1.createElement)('div', null, 'security-page');\n        document.body.appendChild(securitiesPage);\n        const securitiesPageContainer = (0, functions_1.createElement)('div', null, 'security-page__container');\n        securitiesPage.appendChild(securitiesPageContainer);\n        const headerBlock = (0, functions_1.createElement)('div', null, 'header-block');\n        securitiesPageContainer.appendChild(headerBlock);\n        const mainBlock = (0, functions_1.createElement)('div', null, 'main-block');\n        securitiesPageContainer.appendChild(mainBlock);\n        yield renderHeaderBlock(headerBlock);\n        yield renderAddButton(headerBlock);\n        yield renderSecurityBlock('Акции', 'stock', mainBlock);\n        yield renderSecurityBlock('Облигации', 'bond', mainBlock);\n        yield renderSecurityBlock('БПИФ', 'etf', mainBlock);\n    });\n}\nexports.displaySecurityPage = displaySecurityPage;\nfunction renderHeaderBlock(container) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const lastPriceArray = yield (0, data_1.updateSecuritiesArray)(app_1.securitiesArray);\n        const totalSum = (0, functions_2.calculateTotalSum)(lastPriceArray);\n        const totalResult = +(0, functions_2.calculateTotalProfit)(lastPriceArray).toFixed(2);\n        const headerPage = (0, functions_1.createElement)('div', null, 'header-information');\n        container.appendChild(headerPage);\n        const headerBlockName = (0, functions_1.createElement)('div', 'Ценные бумаги', 'header-information__name');\n        headerPage.appendChild(headerBlockName);\n        const headerBlockSum = (0, functions_1.createElement)('div', null, 'header-information__sum');\n        headerPage.appendChild(headerBlockSum);\n        const amountRubles = (0, functions_1.createElement)('span', `${Math.trunc(totalSum)}`, 'amount-rubles');\n        headerBlockSum.appendChild(amountRubles);\n        const amountKopecks = (0, functions_1.createElement)('span', `,${Math.floor((totalSum % 1) * Math.pow(10, 2))} ₽`, 'amount-kopecks');\n        headerBlockSum.appendChild(amountKopecks);\n        const headerBlockProfit = (0, functions_1.createElement)('div', null, 'header-information__profit');\n        headerPage.appendChild(headerBlockProfit);\n        const profitBlock = (0, functions_1.createElement)('div', null, 'profit-block');\n        headerBlockProfit.appendChild(profitBlock);\n        const profitRubles = (0, functions_1.createElement)('span', `${totalResult} ₽`, 'profit-rubles');\n        profitBlock.appendChild(profitRubles);\n        const profitLine = (0, functions_1.createElement)('span', ' / ', 'profit-line');\n        profitBlock.appendChild(profitLine);\n        const profitProcent = (0, functions_1.createElement)('span', `${(100 * (totalResult / totalSum)).toFixed(2)} %`, 'profit-procent');\n        profitBlock.appendChild(profitProcent);\n        const periodBlock = (0, functions_1.createElement)('div', null, 'period-block');\n        headerBlockProfit.appendChild(periodBlock);\n        const periodAll = (0, functions_1.createElement)('span', 'за все время ', 'period-all');\n        periodBlock.appendChild(periodAll);\n        const periodArrowsDown = (0, functions_1.createElement)('i', null, 'period-arrows_down');\n        periodAll.appendChild(periodArrowsDown);\n        const periodMonth = (0, functions_1.createElement)('span', 'за месяц ', 'period-month');\n        periodBlock.appendChild(periodMonth);\n        periodMonth.style.display = 'none';\n        const periodArrowsUp = (0, functions_1.createElement)('i', null, 'period-arrows_up');\n        periodMonth.appendChild(periodArrowsUp);\n    });\n}\nfunction renderSecurityBlock(name, type, container) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const getTypeArray = app_1.securitiesArray.filter(el => el.type === type);\n        const lastPriceArray = yield (0, data_1.updateSecuritiesArray)(getTypeArray);\n        const totalSum = (0, functions_2.calculateTotalSum)(lastPriceArray);\n        const totalResult = +(0, functions_2.calculateTotalProfit)(lastPriceArray).toFixed(2);\n        const block = (0, functions_1.createElement)('div', null, `${type}-block`);\n        container.appendChild(block);\n        const info = (0, functions_1.createElement)('div', null, `${type}-info`);\n        block.appendChild(info);\n        const titleBlock = (0, functions_1.createElement)('div', null, `title-${type}`);\n        info.appendChild(titleBlock);\n        const nameTitle = (0, functions_1.createElement)('div', `${name}`, `name-${type}`);\n        titleBlock.appendChild(nameTitle);\n        const profitTitle = (0, functions_1.createElement)('div', null, `profit-${type}`);\n        titleBlock.appendChild(profitTitle);\n        const resultBlock = (0, functions_1.createElement)('span', `${totalSum.toFixed(2)} ₽`, `result-${type}`);\n        profitTitle.appendChild(resultBlock);\n        const dotBlock = (0, functions_1.createElement)('span', ' / ', 'dot-block');\n        profitTitle.appendChild(dotBlock);\n        const procentBlock = (0, functions_1.createElement)('span', `${(100 * (totalResult / totalSum)).toFixed(2)} %`, `procent-${type}`);\n        profitTitle.appendChild(procentBlock);\n        const arrowBlock = (0, functions_1.createElement)('div', null, 'arrow-block');\n        info.appendChild(arrowBlock);\n        const list = (0, functions_1.createElement)('div', null, `${type}-list`);\n        block.appendChild(list);\n        lastPriceArray.forEach(el => (0, animationPage_1.displayListSecurities)(el, list));\n    });\n}\nfunction renderAddButton(container) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const addButtonContainer = (0, functions_1.createElement)('div', null, 'add-button__container');\n        container.appendChild(addButtonContainer);\n        const inputElement = (0, functions_1.createElement)('input', null, 'input-sec');\n        inputElement.defaultValue = 'Компания, тикер, ISIN';\n        inputElement.setAttribute('type', 'text');\n        const mainBlock = document.querySelector('.main-block');\n        inputElement.addEventListener('click', () => {\n            inputElement.defaultValue = '';\n            mainBlock.style.display = 'none';\n            (0, searchPage_1.renderSearchPage)();\n            //choiceOfSecurity();\n        });\n        addButtonContainer.appendChild(inputElement);\n    });\n}\nfunction searchTickers(inputElement, array) {\n    const searchTerm = inputElement.value.toLowerCase();\n    const filteredTickers = array.filter((elem) => {\n        return elem[2].toLowerCase().includes(searchTerm);\n    });\n    console.log(filteredTickers);\n    return filteredTickers;\n}\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/renderPage.ts?");

/***/ }),

/***/ "./src/assets/searchPage.ts":
/*!**********************************!*\
  !*** ./src/assets/searchPage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderSearchPage = void 0;\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/assets/functions.ts\");\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/assets/api.ts\");\nconst addPage_1 = __webpack_require__(/*! ./addPage */ \"./src/assets/addPage.ts\");\nfunction renderSearchPage() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const pageContainer = document.querySelector('.security-page__container');\n        const searchBlock = (0, functions_1.createElement)('div', null, 'search-block');\n        if (pageContainer) {\n            const existingSearchBlock = pageContainer.querySelector('.search-block');\n            if (existingSearchBlock) {\n                while (existingSearchBlock.firstChild) {\n                    existingSearchBlock.removeChild(existingSearchBlock.firstChild);\n                }\n                pageContainer.removeChild(existingSearchBlock);\n            }\n            pageContainer.appendChild(searchBlock);\n            const arrayStocksTickers = yield (0, api_1.getStocksTickers)();\n            const searchInput = document.querySelector('.input-sec');\n            if (searchInput) {\n                searchInput.addEventListener('input', () => {\n                    renderTickers(searchTickers(searchInput, arrayStocksTickers));\n                });\n            }\n            handleStockClick();\n        }\n    });\n}\nexports.renderSearchPage = renderSearchPage;\nfunction searchTickers(inputElement, array) {\n    const searchTerm = inputElement.value.toLowerCase();\n    const filteredTickers = array.filter((elem) => {\n        return (elem[2].toLowerCase().includes(searchTerm) ||\n            elem[0].toLowerCase().includes(searchTerm) ||\n            elem[19].toLowerCase().includes(searchTerm));\n    });\n    return filteredTickers;\n}\nfunction renderTickers(filteredStoks) {\n    const parentElement = document.querySelector('.search-block');\n    if (parentElement) {\n        while (parentElement === null || parentElement === void 0 ? void 0 : parentElement.firstChild) {\n            parentElement.removeChild(parentElement.firstChild);\n        }\n        const headerStocks = (0, functions_1.createElement)('div', 'АКЦИИ', 'header-stocks');\n        parentElement.appendChild(headerStocks);\n        const stocksBlock = (0, functions_1.createElement)('div', null, 'stocks-block');\n        parentElement.appendChild(stocksBlock);\n        const stocksBlocContainer = (0, functions_1.createElement)('div', null, 'stocks-block__container');\n        stocksBlock.appendChild(stocksBlocContainer);\n        console.dir(filteredStoks);\n        filteredStoks.forEach((stock) => {\n            const stockElement = (0, functions_1.createElement)('div', null, 'stock-element');\n            stockElement.id = stock[0].toString();\n            stocksBlocContainer.appendChild(stockElement);\n            const stockRow = (0, functions_1.createElement)('div', null, 'stock-row');\n            stockElement.appendChild(stockRow);\n            const stockInform = (0, functions_1.createElement)('div', null, 'stock-inform');\n            stockRow.appendChild(stockInform);\n            const stockName = (0, functions_1.createElement)('div', `${stock[2]}`, 'stock-name');\n            stockInform.appendChild(stockName);\n            const stockTicker = (0, functions_1.createElement)('div', `${stock[0]}`, 'stock-ticker');\n            stockInform.appendChild(stockTicker);\n            const stockQuotes = (0, functions_1.createElement)('div', null, 'stock-quotes');\n            stockRow.appendChild(stockQuotes);\n            const stockLastPrice = (0, functions_1.createElement)('div', `${stock[15]} ₽`, 'stock-last');\n            stockQuotes.appendChild(stockLastPrice);\n            const procent = (100 * (+stock[3] - +stock[15]) / (+stock[15])).toFixed(2);\n            if (+procent > 0) {\n                const stockPrevPrice = (0, functions_1.createElement)('div', `${procent} %`, 'stock-prev_green');\n                stockQuotes.appendChild(stockPrevPrice);\n            }\n            else {\n                const stockPrevPrice = (0, functions_1.createElement)('div', `${procent} %`, 'stock-prev_red');\n                stockQuotes.appendChild(stockPrevPrice);\n            }\n        });\n    }\n}\nfunction handleStockClick() {\n    const parentElement = document.querySelector('.search-block');\n    if (parentElement) {\n        parentElement.addEventListener('click', event => {\n            const stockElement = event.target.closest('.stock-element');\n            if (stockElement) {\n                const stockTicker = stockElement.id;\n                const stockName = stockElement.querySelector('.stock-name').textContent;\n                const stockLast = stockElement.querySelector('.stock-last').textContent;\n                (0, addPage_1.createStockBlock)(stockName, stockTicker, stockLast);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://rs-clone/./src/assets/searchPage.ts?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;