import {createElement} from './functions';
import {calculateTotalSum, calculateTotalProfit} from './functions'
import {updateSecuritiesArray} from './datta'
import {securitiesArray} from './app'
import {displayListSecurities, handleSecurityClick} from './animationPage'
import {renderSearchPage} from './searchPage'
export let totalPortfolioValue: number;

export async function displaySecurityPage() {
    const securitiesPage = createElement('div', null, 'security-page');
    document.body.appendChild(securitiesPage);
    const securitiesPageContainer = createElement('div', null, 'security-page__container');   
    securitiesPage.appendChild(securitiesPageContainer);

    const headerBlock = createElement('div', null, 'header-block');
    securitiesPageContainer.appendChild(headerBlock);
    const mainBlock = createElement('div', null, 'main-block');
    securitiesPageContainer.appendChild(mainBlock);

    await renderHeaderBlock(headerBlock);
    await renderAddButton(headerBlock);
    await renderSecurityBlock('Акции', 'stock', mainBlock);
    await renderSecurityBlock('Облигации','bond', mainBlock);
    await renderSecurityBlock('БПИФ', 'etf', mainBlock);
    handleSecurityClick();
}

async function renderHeaderBlock(container: HTMLElement){
    const lastPriceArray = await updateSecuritiesArray(securitiesArray);
    totalPortfolioValue = calculateTotalSum (lastPriceArray);
    const totalResult  = +calculateTotalProfit(lastPriceArray).toFixed(2);
    const headerPage = createElement('div', null, 'header-information');
    container.appendChild(headerPage);
        const headerBlockName = createElement('div', 'Ценные бумаги', 'header-information__name');
        headerPage.appendChild(headerBlockName);

        const headerBlockSum = createElement('div', null, 'header-information__sum');
        headerPage.appendChild(headerBlockSum);
            const amountRubles = createElement('span', `${Math.trunc(totalPortfolioValue)}`, 'amount-rubles');
            headerBlockSum.appendChild(amountRubles);
            const amountKopecks = createElement('span', `,${Math.floor((totalPortfolioValue % 1) * Math.pow(10, 2))} ₽`, 'amount-kopecks');
            headerBlockSum.appendChild(amountKopecks);

        const headerBlockProfit = createElement('div', null, 'header-information__profit');
        headerPage.appendChild(headerBlockProfit);
            const profitBlock = createElement('div', null, 'profit-block');
            headerBlockProfit.appendChild(profitBlock);
                const profitRubles = createElement('span', `${totalResult} ₽`, 'profit-rubles');
                profitBlock.appendChild(profitRubles);
                const profitLine = createElement('span', ' / ', 'profit-line');
                profitBlock.appendChild(profitLine);
                const profitProcent = createElement('span', `${(100*(totalResult / totalPortfolioValue)).toFixed(2)} %`, 'profit-procent');
                profitBlock.appendChild(profitProcent);
                if (totalResult < 0) {
                    profitRubles.classList.add('red-color');
                    profitProcent.classList.add('red-color');
                } 

            const periodBlock = createElement('div', null, 'period-block');
                headerBlockProfit.appendChild(periodBlock);
                const periodAll = createElement('span', 'фин. результат за все время ', 'period-all');
                periodBlock.appendChild(periodAll);
}

async function renderSecurityBlock(name: string, type: string, container: HTMLElement) {
    const getTypeArray = securitiesArray.filter(el => el.type === type)
    const lastPriceArray = await updateSecuritiesArray(getTypeArray);
    const totalSum = calculateTotalSum (lastPriceArray);
    const totalResult = +calculateTotalProfit(lastPriceArray).toFixed(2);
    const block = createElement('div', null, `${type}-block`);
    container.appendChild(block);
    const info = createElement('div', null, `${type}-info`);
    block.appendChild(info);
        const titleBlock = createElement('div', null, `title-${type}`);
        info.appendChild(titleBlock)
            const nameTitle = createElement('div', `${name}`, `name-${type}`);
            titleBlock.appendChild(nameTitle);
            const profitTitle = createElement('div', null, `profit-${type}`);
            titleBlock.appendChild(profitTitle);
                const resultBlock = createElement('span', `${totalSum.toFixed(2)} ₽`, `result-${type}`);
                profitTitle.appendChild(resultBlock)
                const dotBlock = createElement('span', ' / ', 'dot-block');
                profitTitle.appendChild(dotBlock)
                let procent;
                if (totalSum === 0) {
                    procent = 0;
                } else {
                    procent = (100*(totalResult / totalSum)).toFixed(2)
                }
                const procentBlock = createElement('span', `${procent } %`, `procent-${type}`);
                if (totalResult < 0) {
                    procentBlock.classList.add ('red-color');
                }
                profitTitle.appendChild(procentBlock)
        const arrowBlock = createElement('div', null, 'arrow-block');
        info.appendChild(arrowBlock)
    const list = createElement('div', null, `${type}-list`);
    block.appendChild(list);
    lastPriceArray.forEach(el => displayListSecurities(el, list));
}

function renderAddButton(container: HTMLElement) {
    const addButtonContainer = createElement('div', null, 'add-button__container');
    container.appendChild(addButtonContainer);
    const inputElement = createElement('input', null, 'input-sec') as HTMLInputElement;
    inputElement.defaultValue = 'Компания, тикер, ISIN';
    inputElement.setAttribute('type', 'text');
    const closeButtonInput = createElement('div', null, 'close-button-input');
    const mainBlock = document.querySelector('.main-block') as HTMLElement;
    addButtonContainer.appendChild(inputElement);
    addButtonContainer.appendChild(closeButtonInput);

    inputElement.addEventListener('click', () => {
        inputElement.defaultValue = '';
        mainBlock.style.display = 'none';
        renderSearchPage();
        closeButtonInput.style.display = 'block';
    });

    closeButtonInput.addEventListener('click', () => {
        inputElement.defaultValue = 'Компания, тикер, ISIN';
        mainBlock.style.display = 'block';
        const searchBlock = document.querySelector('.search-block') as HTMLElement;
        searchBlock.style.display = 'none';
        closeButtonInput.style.display = 'none';
    });
}