import {createElement} from './functions'
import {getStocksTickers} from './api'

export async function renderSearchPage(){
    const pageContainer = document.querySelector('.security-page__container');
    const searchBlock = createElement('div', null, 'search-block');
    if (pageContainer) {
        const existingSearchBlock = pageContainer.querySelector('.search-block');
        if (existingSearchBlock) {
            while (existingSearchBlock.firstChild) {
                existingSearchBlock.removeChild(existingSearchBlock.firstChild);
            }
            pageContainer.removeChild(existingSearchBlock);
        }
        pageContainer.appendChild(searchBlock);
        
        const arrayStocksTickers = await getStocksTickers();
        const searchInput = document.querySelector('.input-sec') as HTMLInputElement;
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                renderTickers(searchTickers(searchInput, arrayStocksTickers));
            });
        } 
    }
}

function searchTickers(inputElement: HTMLInputElement, array: Array<Array<string | number>>) {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredTickers = array.filter((elem: Array<string | number>) => {
      return ((elem[2] as string).toLowerCase().includes(searchTerm) ||
              (elem[0] as string).toLowerCase().includes(searchTerm) ||
              (elem[19] as string).toLowerCase().includes(searchTerm));
    });
    return filteredTickers;
}

function renderTickers(filteredStoks: Array<Array<string | number>>) {
    const parentElement = document.querySelector('.search-block');
    if (parentElement) {
        while (parentElement?.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
        const headerStocks = createElement ('div', 'АКЦИИ', 'header-stocks')
        parentElement.appendChild(headerStocks);
        const stocksBlock = createElement ('div', null, 'stocks-block')
        parentElement.appendChild(stocksBlock);
        const stocksBlocContainer = createElement ('div', null, 'stocks-block__container')
        stocksBlock.appendChild(stocksBlocContainer);       
    
        filteredStoks.forEach((stock: Array<string | number>) => {
            const stockElement = createElement('div', null, 'stock-element');
            stockElement.id = stock[0].toString();
            stocksBlocContainer.appendChild(stockElement);
            
            const stockRow = createElement('div', null, 'stock-row');
            stockElement.appendChild(stockRow);

            const stockInform = createElement('div', null, 'stock-inform');
            stockRow.appendChild(stockInform);
                const stockName = createElement('div', `${stock[2]}`, 'stock-name');
                stockInform.appendChild(stockName);
                const stockTicker = createElement('div', `${stock[0]}`, 'stock-ticker');
                stockInform.appendChild(stockTicker);
                
            const stockQuotes = createElement('div', null, 'stock-quotes');
            stockRow.appendChild(stockQuotes);
                const stockLastPrice = createElement('div', `${stock[15]} ₽`, 'stock-last');
                stockQuotes.appendChild(stockLastPrice);
                const procent = (100 * (+stock[3] - +stock[15]) / (+stock[15])).toFixed(2);
                if (+procent > 0) {
                    const stockPrevPrice = createElement('div', `${procent} %`, 'stock-prev_green');
                    stockQuotes.appendChild(stockPrevPrice);
                } else {
                    const stockPrevPrice = createElement('div', `${procent} %`, 'stock-prev_red');
                    stockQuotes.appendChild(stockPrevPrice);
                }  
        });
    }
}

export function choiceOfSecurity () {
    const stockBlockContainer = document.querySelector('.search-page');
    if (stockBlockContainer) {
        stockBlockContainer.addEventListener ('click', function(event) {
            const targetElement = event.target as HTMLElement;
            if (targetElement.closest('.stock-element')) {
                const selectedElement = targetElement.closest('.stock-element')?.children[0].children[0].children[1].innerHTML;
                //renderOfSecurity (selectedElement);
            }
        })
    }
}