import {createElement} from './functions';
import {moexGetTickers} from './api';

let arrayAvailableTickers: Array<[string, number, string]> = [];
const main = async () => {
  arrayAvailableTickers = await moexGetTickers('TQBR');
};
main();

export function displaySecurityPage() {
    const securitiesPage = createElement('div', null, 'security-page');
    document.body.appendChild(securitiesPage);
    const securitiesPageContainer = createElement('div', null, 'security-page__container');
    securitiesPage.appendChild(securitiesPageContainer);
    renderHeaderBlock(securitiesPageContainer);
    renderStocksBlock(securitiesPageContainer);
    

    const bondsBlock = createElement('div', 'Облигации', 'bonds-block');
    securitiesPageContainer.appendChild(bondsBlock);
    const etfBlock = createElement('div', 'БПИФ', 'etf-block');
    securitiesPageContainer.appendChild(etfBlock);

    addAddStockButton(securitiesPageContainer);
}

function renderHeaderBlock(container: HTMLElement){
    const headerPage = createElement('div', null, 'header-block');
    container.appendChild(headerPage);
        const headerBlockName = createElement('div', 'Ценные бумаги', 'header-block__name');
        headerPage.appendChild(headerBlockName);

        const headerBlockSum = createElement('div', null, 'header-block__sum');
        headerPage.appendChild(headerBlockSum);
            const amountRubles = createElement('span', '194 053', 'amount-rubles');
            headerBlockSum.appendChild(amountRubles);
            const amountKopecks = createElement('span', ',53 ₽', 'amount-kopecks');
            headerBlockSum.appendChild(amountKopecks);

        const headerBlockProfit = createElement('div', null, 'header-block__profit');
        headerPage.appendChild(headerBlockProfit);
            const profitBlock = createElement('div', null, 'profit-block');
            headerBlockProfit.appendChild(profitBlock);
                const profitRubles = createElement('span', '+1 102,53 ₽', 'profit-rubles');
                profitBlock.appendChild(profitRubles);
                const profitLine = createElement('span', ' / ', 'profit-line');
                profitBlock.appendChild(profitLine);
                const profitProcent = createElement('span', '0,58 %', 'profit-procent');
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

function renderStocksBlock(container: HTMLElement) {
    const stocksBlock = createElement('div', null, 'stock-block');
    container.appendChild(stocksBlock);

        const titleBlock = createElement('div', null, 'title-stock');
        stocksBlock.appendChild(titleBlock)
            const nameTitle = createElement('div', 'Акции', 'name-stock');
            titleBlock.appendChild(nameTitle);
            const profitTitle = createElement('div', null, 'profit-stock');
            titleBlock.appendChild(profitTitle);
                const resultStock = createElement('span', '+1 102,53 ₽', 'result-stock');
                profitTitle.appendChild(resultStock)
                const dotStock = createElement('span', ' / ', 'dot-stock');
                profitTitle.appendChild(dotStock)
                const procentStock = createElement('span', '0,56% ', 'procent-stock');
                profitTitle.appendChild(procentStock)
        const arrowBlock = createElement('div', null, 'arrow-stock');
        stocksBlock.appendChild(arrowBlock)
}

function addAddStockButton(container: HTMLElement) {
    const addStockButton = createElement('button', 'Добавить в портфель', 'add-stock-button');
    container.appendChild(addStockButton);
    const inputElement = createElement('input', null, 'input-class') as HTMLInputElement;;
    inputElement.setAttribute('type', 'text');
    inputElement.addEventListener('input', () => {
        searchTickers(inputElement);
    });
    container.appendChild(inputElement);

}

function searchTickers(inputElement: HTMLInputElement) {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredTickers = arrayAvailableTickers.filter(ticker => {
      return ticker[2].toLowerCase().includes(searchTerm);
    });
    return filteredTickers;
}

function addStocksBlock(container: HTMLElement) {
    const stocksBlock = createElement('div', 'Stocks', 'stocks-block');
    container.appendChild(stocksBlock);
}
