import {createElement} from './functions';
import {moexGetTickers} from './api';

let arrayAvailableTickers: Array<[string, string, string]> = [];
const main = async () => {
  arrayAvailableTickers = await moexGetTickers('TQBR');
};
main();

export function displaySecurityPage() {
    const securitiesPage = createElement('div', 'Ценные бумаги', 'security-page');
    document.body.appendChild(securitiesPage);
    const securitiesPageContainer = createElement('div', null, 'security-page__container');
    securitiesPage.appendChild(securitiesPageContainer);

    const stockBlock = createElement('div', 'Акции', 'stock-block');
    securitiesPageContainer.appendChild(stockBlock);
    const bondsBlock = createElement('div', 'Облигации', 'bonds-block');
    securitiesPageContainer.appendChild(bondsBlock);
    const etfBlock = createElement('div', 'БПИФ', 'etf-block');
    securitiesPageContainer.appendChild(etfBlock);

    addAddStockButton(securitiesPageContainer);
}

function addAddStockButton(container: HTMLElement) {
    const addStockButton = createElement('button', 'Добавить', 'add-stock-button');
    container.appendChild(addStockButton);
    const inputElement = createElement('input', null, 'input-class') as HTMLInputElement;;
    inputElement.setAttribute('type', 'text');
    inputElement.addEventListener('input', () => {
        searchTickers(inputElement);
    });
    container.appendChild(inputElement);

    addStockButton.addEventListener('click', () => {
        addStocksBlock(container);
    });
}

function searchTickers(inputElement: HTMLInputElement) {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredTickers = arrayAvailableTickers.filter(ticker => {
      return ticker[2].toLowerCase().includes(searchTerm);
    });
    console.log(filteredTickers);
}

function addStocksBlock(container: HTMLElement) {
    const stocksBlock = createElement('div', 'Stocks', 'stocks-block');
    container.appendChild(stocksBlock);
}
