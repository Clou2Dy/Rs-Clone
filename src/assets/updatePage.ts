import {createElement} from './functions'
import {Security} from './types'
import {securitiesArray} from '../app'
import {createInputContainer} from './addPage'
import {totalPortfolioValue} from './renderPage'

export function updateStockBlock(security: Security, lastPrice: string | null) {
    const securityPage = document.querySelector('.security-page');
    const stockInfoBlock = updateStockInfoBlock(security.name, security.ticker, lastPrice, security.amount);
    const inputContainer = createInputContainer();
    const addToPortfolioButton = createElement('button', 'Добавить в портфель', 'add-to-portfolio-button');

    stockInfoBlock.appendChild(inputContainer);
    stockInfoBlock.appendChild(addToPortfolioButton);
    securityPage?.appendChild(stockInfoBlock);
    stockInfoBlock.classList.add('show'); /* add the 'show' class */
}

function updateStockInfoBlock(name: string | null, ticker: string, lastPrice: string | null, amount: number){
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
    const financialResultsText = createElement('div', `Фин. результат за все время`, 'financial-result-text');
    const finResult = calculateFinancialResult(securitiesArray, ticker, lastPrice);
    const financialResults = createElement('div', `${finResult} ₽`, 'financial-result');
    const amountText = createElement('div', `Количество ценных бумаг`, 'financial-result-text');
    const amountSecurity = createElement('div', `${amount} шт.`, 'financial-result');
    if (finResult > 0) {
      financialResults.classList.add('green');
    } else if (finResult < 0) {
      financialResults.classList.add('red');
    }
    const hrElement2 = createElement('hr', null, 'hr-line');
  
    row.appendChild(tickerBlock);
    row.appendChild(nameBlock);
    priceBlock.appendChild(priceText);
    priceBlock.appendChild(priceValue);
    priceBlock.appendChild(portfolioPercentage);
    priceBlock.appendChild(financialResultsText);
    priceBlock.appendChild(financialResults);
    priceBlock.appendChild(amountText);
    priceBlock.appendChild(amountSecurity);

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

function calculateFinancialResult(securities: Security[], ticker: string, lastPrice: string | null | undefined): number {
  console.log (securities);
  const matchingSecurities = securities.filter(security => security.ticker === ticker);
  const numLastPrice = parseFloat(lastPrice ?? '0');
  const result = matchingSecurities.reduce((result, security) => {
    return result + (numLastPrice - security.purchasePrice) * security.amount;
  }, 0);
  return parseFloat(result.toFixed(2));
}