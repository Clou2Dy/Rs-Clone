import {createElement} from './functions'
import {getStocksTickers} from './api'

export async function renderSearchPage(){
    const searchPage = createElement('div', null, 'search-page');
    document.body.appendChild(searchPage);
    const searchPageContainer = createElement('div', null, 'search-page__container');
    searchPage.appendChild(searchPageContainer);
    const searchBlock = createElement('div', null, 'search-block');
    searchPageContainer.appendChild(searchBlock);
    const securitiesBlock = createElement('div', null, 'securities-block');
    searchPageContainer.appendChild(securitiesBlock);
    const searchInput = createElement('input', null, 'search-input') as HTMLInputElement;
    searchBlock.appendChild(searchInput);
    searchInput.defaultValue = 'Компания, тикер, ISIN';
    const cancelInput = createElement('div', 'Отменить', 'search-cancel');
    searchBlock.appendChild(cancelInput);

    const securityPage = document.querySelector('.security-page') as HTMLElement
    cancelInput.addEventListener('click', () => {
        searchPage.style.display = 'none';
        securityPage.style.display = 'block';
    });

    const arrayStocksTickers = await getStocksTickers()
    searchInput.addEventListener('click', () => {
        searchInput.value = ''
    })
    searchInput.addEventListener('input', () => {
        renderTickers(searchTickers(searchInput, arrayStocksTickers));
    });
}

function searchTickers(inputElement: HTMLInputElement, array: Array<Array<string | number>>) {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredTickers = array.filter((elem: Array<string | number>) => {
      return ((elem[2] as string).toLowerCase().includes(searchTerm) ||
              (elem[0] as string).toLowerCase().includes(searchTerm) ||
              (elem[19] as string).toLowerCase().includes(searchTerm));
    });
    console.log(filteredTickers)
    return filteredTickers;
}

function renderTickers(filteredStoks: Array<Array<string | number>>) {
    const parentElement = document.querySelector('.securities-block');
    while (parentElement?.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    const headerStocks = createElement ('div', 'Акции', 'header-stocks')
    parentElement?.appendChild(headerStocks);

    filteredStoks.forEach((stock: Array<string | number>) => {
        const stockElement = createElement('div', null, 'stock-info');

        const stockName = createElement('div', `${stock[2]}`, 'stock-name');
        stockElement.appendChild(stockName);

        const stockTicker = createElement('div', `${stock[0]}`, 'stock-ticker');
        stockElement.appendChild(stockTicker);

        const stockLastPrice = createElement('div', `${stock[15]}`, 'stock-last');
        stockElement.appendChild(stockLastPrice);

        const stockPrevPrice = createElement('div', `${stock[3]}`, 'stock-prev');
        stockElement.appendChild(stockPrevPrice);

        parentElement?.appendChild(stockElement);
    });
}
