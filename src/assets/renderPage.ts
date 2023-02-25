import {createElement} from './functions';
import {calculateTotalSum, calculateTotalProfit} from './functions'
import {updateSecuritiesArray} from './data'
import {securitiesArray} from '../app'
import {displayListSecurities} from './animationPage'
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

            const periodBlock = createElement('div', null, 'period-block');
                headerBlockProfit.appendChild(periodBlock);
                const periodAll = createElement('span', 'за все время ', 'period-all');
                periodBlock.appendChild(periodAll);
                    const periodArrowsDown = createElement('i', null, 'period-arrows_down');
                    periodAll.appendChild(periodArrowsDown);

                const periodMonth = createElement('span', 'за месяц ', 'period-month');
                periodBlock.appendChild(periodMonth);
                periodMonth.style.display = 'none';
                    const periodArrowsUp = createElement('i', null, 'period-arrows_up');
                    periodMonth.appendChild(periodArrowsUp);
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
                const procentBlock = createElement('span', `${(100*(totalResult / totalSum)).toFixed(2)} %`, `procent-${type}`);
                profitTitle.appendChild(procentBlock)
        const arrowBlock = createElement('div', null, 'arrow-block');
        info.appendChild(arrowBlock)
    const list = createElement('div', null, `${type}-list`);
    block.appendChild(list);
    lastPriceArray.forEach(el => displayListSecurities(el, list))
}

async function renderAddButton(container: HTMLElement) {
    const addButtonContainer = createElement('div', null, 'add-button__container');
    container.appendChild(addButtonContainer);
    const inputElement = createElement('input', null, 'input-sec') as HTMLInputElement;
    inputElement.defaultValue = 'Компания, тикер, ISIN';
    inputElement.setAttribute('type', 'text');
    const mainBlock = document.querySelector('.main-block') as HTMLElement;
    inputElement.addEventListener('click', () => {
        inputElement.defaultValue = '';
        mainBlock.style.display = 'none';
        renderSearchPage();
    });
    addButtonContainer.appendChild(inputElement);
}