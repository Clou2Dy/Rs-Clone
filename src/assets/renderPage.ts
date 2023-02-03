import {createElement} from './functions';
import {moexTickerLast} from './api';

moexTickerLast('GAZP').then(console.log);

export function displaySecurityPage() {
    const securityPage = createElement('div', 'Ценные бумаги', 'security-page');
    document.body.appendChild(securityPage);
    const securityPageContainer = createElement('div', null, 'security-page__container');
    securityPage.appendChild(securityPageContainer);

    const stockBlock = createElement('div', 'Акции', 'stock-block');
    securityPageContainer.appendChild(stockBlock);
    const bondsBlock = createElement('div', 'Облигации', 'bonds-block');
    securityPageContainer.appendChild(bondsBlock);
    const etfBlock = createElement('div', 'БПИФ', 'etf-block');
    securityPageContainer.appendChild(etfBlock);

    addAddStockButton(securityPageContainer);
}

function addAddStockButton(container: HTMLElement) {
    const addStockButton = createElement('button', 'Add stock', 'add-stock-button');
    container.appendChild(addStockButton);

    addStockButton.addEventListener('click', () => {
        addStocksBlock(container);
    });
}

function addStocksBlock(container: HTMLElement) {
    const stocksBlock = createElement('div', 'Stocks', 'stocks-block');
    container.appendChild(stocksBlock);
}
