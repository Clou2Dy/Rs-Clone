import {createElement} from './functions'
import {Security} from './types'
import {securitiesArray} from '../app'
import {addSecurityToPortfolio} from './addPage'
import {totalPortfolioValue} from './renderPage'

export function updateStockBlock(security: Security, lastPrice: string | null) {
    const securityPage = document.querySelector('.security-page');
    const stockInfoBlock = updateStockInfoBlock(security.name, security.ticker, lastPrice, security.amount);
    const inputContainer = createUpdateContainer();
    const addToPortfolioButton = createElement('button', 'Покупка', 'add-to-portfolio-button');
    const removeToPortfolioButton = createElement('button', 'Продажа', 'remove-to-portfolio-button');

    const purchasePriceInput = document.querySelector('.purchase-price-input') as HTMLInputElement;
    const quantityInput = document.querySelector('.quantity-input') as HTMLInputElement;
    const dateInput = document.querySelector('.date-input') as HTMLInputElement;
    
    addToPortfolioButton.addEventListener('click', () => {
      const newSecurity: Security = {
        type: 'stock',
        ticker: security.ticker || '',
        name: security.name|| '',
        purchasePrice: Number(purchasePriceInput.value),
        amount: Number(quantityInput.value),
        purchaseDate: new Date(dateInput.value),
      };
      addSecurityToPortfolio(newSecurity);
    });

    removeToPortfolioButton.addEventListener('click', () => {
      removeSecurityFromPortfolio(security.ticker, Number(quantityInput.value), Number(purchasePriceInput.value))
    })

    stockInfoBlock.appendChild(inputContainer);
    stockInfoBlock.appendChild(addToPortfolioButton);
    stockInfoBlock.appendChild(removeToPortfolioButton);
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
  const matchingSecurities = securities.filter(security => security.ticker === ticker);
  const numLastPrice = parseFloat(lastPrice ?? '0');
  const result = matchingSecurities.reduce((result, security) => {
    return result + (numLastPrice - security.purchasePrice) * security.amount;
  }, 0);
  return parseFloat(result.toFixed(2));
}

function createUpdateContainer(): HTMLElement {
  const inputContainer = createElement('div', null, 'input-container');
  const purchasePriceInput = createElement('input', null, 'purchase-price-input') as HTMLInputElement;
  purchasePriceInput.type = 'number';
  purchasePriceInput.placeholder = 'Цена';
  const quantityInput = createElement('input', null, 'quantity-input') as HTMLInputElement;
  quantityInput.type = 'number';
  quantityInput.placeholder = 'Количество';
  const dateInput = createElement('input', null, 'date-input') as HTMLInputElement;
  dateInput.type = 'date';
  dateInput.value = new Date().toISOString().split('T')[0];

  inputContainer.appendChild(purchasePriceInput);
  inputContainer.appendChild(quantityInput);
  inputContainer.appendChild(dateInput);

  return inputContainer;
}

export function removeSecurityFromPortfolio(ticker: string, amount: number): void {
  const securitiesToSell: Security[] = [];
  let remainingAmountToSell = amount;

  // First, find all securities with the given ticker
  const matchingSecurities = securitiesArray.filter(security => security.ticker === ticker);

  // Sort the securities by purchase date (oldest first)
  matchingSecurities.sort((a, b) => a.purchaseDate?.getTime()! - b.purchaseDate?.getTime()!);

  // Sell the securities with the lowest purchase date first, until the required amount is sold
  for (const security of matchingSecurities) {
    if (security.amount <= remainingAmountToSell) {
      securitiesToSell.push(security);
      remainingAmountToSell -= security.amount;
    } else {
      // Sell the remaining amount from this security, and exit the loop
      const remainingSecurity = { ...security, amount: remainingAmountToSell };
      securitiesToSell.push(remainingSecurity);
      remainingAmountToSell = 0;
      break;
    }
  }

  // If there is still amount to sell, look for securities with a later purchase date
  if (remainingAmountToSell > 0) {
    const remainingSecurities = matchingSecurities.slice(securitiesToSell.length);
    for (const security of remainingSecurities) {
      if (security.amount <= remainingAmountToSell) {
        securitiesToSell.push(security);
        remainingAmountToSell -= security.amount;
      } else {
        // Sell the remaining amount from this security, and exit the loop
        const remainingSecurity = { ...security, amount: remainingAmountToSell };
        securitiesToSell.push(remainingSecurity);
        remainingAmountToSell = 0;
        break;
      }
    }
  }

  // Update the portfolio by removing the sold securities
  for (const security of securitiesToSell) {
    const index = securitiesArray.findIndex(s => s === security);
    if (index >= 0) {
      securitiesArray.splice(index, 1);
    }
  }

  localStorage.setItem('securitiesArray', JSON.stringify(securitiesArray));
}
