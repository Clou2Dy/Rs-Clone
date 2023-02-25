import {createElement} from './functions'
import {Security} from './types'
import {securitiesArray} from '../app'
import {createInputContainer} from './addPage'
import {totalPortfolioValue} from './renderPage'

export function updateStockBlock(security: Security, lastPrice: string | null) {
    const securityPage = document.querySelector('.security-page');
    const stockInfoBlock = updateStockInfoBlock(security.name, security.ticker, lastPrice);
    const inputContainer = createInputContainer();
    const addToPortfolioButton = createElement('button', 'Добавить в портфель', 'add-to-portfolio-button');

    stockInfoBlock.appendChild(inputContainer);
    stockInfoBlock.appendChild(addToPortfolioButton);
    securityPage?.appendChild(stockInfoBlock);
    stockInfoBlock.classList.add('show'); /* add the 'show' class */
}

function updateStockInfoBlock(name: string | null, ticker: string, lastPrice: string | null){
    const typeBlock = createElement('div', `Акция`, 'type-information');
    const closeButton = createElement('div', null, 'close-button');
    const hrElement = createElement('hr', null, 'hr-line');
    const row = createElement('div', null, 'row-name-ticker');
    const tickerBlock = createElement('div', `${ticker || ''}`, 'ticker-information');
    const nameBlock = createElement('div', `${name || ''}`, 'name-information');
    const priceBlock = createElement('div', null, 'price-information');
    const priceText = createElement('div', 'Стоимость ценных бумаг', 'price-text');
    const purchasePrice = calculateTotalPurchasePrice(securitiesArray, ticker, lastPrice);
    const percentage = (100*(purchasePrice / totalPortfolioValue)).toFixed(2);
    const priceValue = createElement('div', `${purchasePrice || ''} ₽`, 'price-value');
    const portfolioPercentage = createElement('div', `${percentage} % от портфеля`, 'portfolio-percentage');
    const financialResultsText = createElement('div', `Финансовый результат за все время`, 'financial-result-text');
    const financialResults = createElement('div', `${calculateFinancialResult}`, 'financial-result');
    const hrElement2 = createElement('hr', null, 'hr-line');
  
    row.appendChild(tickerBlock);
    row.appendChild(nameBlock);
    priceBlock.appendChild(priceText);
    priceBlock.appendChild(priceValue);
    priceBlock.appendChild(portfolioPercentage);
    priceBlock.appendChild(financialResultsText);

    const backgroundDimming = createElement('div', null, 'background-dimming');
    const stockInfoBlock = createElement('div', null, 'stock-information');
    stockInfoBlock.appendChild(typeBlock);
    stockInfoBlock.appendChild(closeButton);
    stockInfoBlock.appendChild(hrElement);
    stockInfoBlock.appendChild(row);
    stockInfoBlock.appendChild(priceBlock);
    stockInfoBlock.appendChild(hrElement2);

    const securityPage = document.querySelector('.security-page')
    securityPage?.appendChild(backgroundDimming);
    closeButton.addEventListener('click', () => {
        securityPage?.removeChild(stockInfoBlock);
        securityPage?.removeChild(backgroundDimming);
    });
  
    return stockInfoBlock;
}

function calculateTotalPurchasePrice(securities: Security[], ticker: string, lastPrice: string | null | undefined): number {
  return securities.reduce((total: number, security: Security) => {
      if (security.ticker === ticker) {
        const numLastPrice = lastPrice ? parseFloat(lastPrice.slice(0, -2)) : 0;
        return total + (numLastPrice * security.amount);
      } else {
        return total;
      }
    }, 0);
}

function calculateFinancialResult () {
  
}