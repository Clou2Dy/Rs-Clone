import {createElement} from './functions'
import {Security} from './types'
import {securitiesArray, getTotalPortfolioValue} from './app'
import {displaySecurityPage} from './renderPage'

export function updateStockBlock(security: Security, lastPrice: string | null) {
    const securityPage = document.querySelector('.security-page');
    const stockInfoBlock = updateStockInfoBlock(security.name, security.ticker, lastPrice, security.amount);
    const inputContainer = createUpdateContainer();
    const backgroundDimming = createElement('div', null, 'background-dimming');
    const closeButton = createElement('div', null, 'close-button');
    const buttonsWrapper = createElement('div', null, 'buttons-wrapper');
    const addToPortfolioButton = createElement('button', 'Покупка', 'add-to-portfolio-button');
    const removeToPortfolioButton = createElement('button', 'Продажа', 'remove-to-portfolio-button');

    stockInfoBlock.appendChild(inputContainer);
    stockInfoBlock.appendChild(closeButton);
    stockInfoBlock.appendChild(buttonsWrapper);
    buttonsWrapper.appendChild(addToPortfolioButton);
    buttonsWrapper.appendChild(removeToPortfolioButton);
    securityPage?.appendChild(stockInfoBlock);
    securityPage?.appendChild(backgroundDimming);
    stockInfoBlock.classList.add('show'); /* add the 'show' class */

    addToPortfolioButton.addEventListener('click', () => {
      const purchasePriceInput = document.querySelector('.purchase-price-input') as HTMLInputElement;
      const quantityInput = document.querySelector('.quantity-input') as HTMLInputElement;
      displaySecurityPage(updateSecurityToPortfolio(security.ticker, Number(purchasePriceInput.value), Number(quantityInput.value)));
      alert(`Вы приобрели ценные бумаги на сумму ${Number(purchasePriceInput.value) * Number(quantityInput.value)} ₽`)
      securityPage?.removeChild(stockInfoBlock);
      securityPage?.removeChild(backgroundDimming);

    });

    removeToPortfolioButton.addEventListener('click', () => {
      const purchasePriceInput = document.querySelector('.purchase-price-input') as HTMLInputElement;
      const quantityInput = document.querySelector('.quantity-input') as HTMLInputElement;
      displaySecurityPage(removeSecurityFromPortfolio(security.ticker, Number(purchasePriceInput.value), Number(quantityInput.value)));
      alert(`Вы продали ценные бумаги на сумму ${Number(purchasePriceInput.value) * Number(quantityInput.value)} ₽`)
      securityPage?.removeChild(stockInfoBlock);
      securityPage?.removeChild(backgroundDimming);
    })

    closeButton.addEventListener('click', () => {
      securityPage?.removeChild(stockInfoBlock);
      securityPage?.removeChild(backgroundDimming);
    });
}

function updateStockInfoBlock(name: string | null, ticker: string, lastPrice: string | null, amount: number){
    const typeBlock = createElement('div', `Акция`, 'type-information');   
    const hrElement = createElement('div', null, 'hr-line');
    const row = createElement('div', null, 'row-name-ticker');
    const tickerBlock = createElement('div', `${ticker || ''}`, 'ticker-information');
    const nameBlock = createElement('div', `${name || ''}`, 'name-information');
    const priceBlock = createElement('div', null, 'price-information');
    const priceText = createElement('div', 'Стоимость ценных бумаг', 'price-text');
    const purchasePrice = calculateTotalPurchasePrice(securitiesArray, ticker, lastPrice);
    const percentage = (100*(purchasePrice / getTotalPortfolioValue())).toFixed(2);
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
    const hrElement2 = createElement('div', null, 'hr-line');
  
    row.appendChild(tickerBlock);
    row.appendChild(nameBlock);
    priceBlock.appendChild(priceText);
    priceBlock.appendChild(priceValue);
    priceBlock.appendChild(portfolioPercentage);
    priceBlock.appendChild(financialResultsText);
    priceBlock.appendChild(financialResults);
    priceBlock.appendChild(amountText);
    priceBlock.appendChild(amountSecurity);

    const stockInfoBlock = createElement('div', null, 'stock-information');
    stockInfoBlock.appendChild(typeBlock);
    
    stockInfoBlock.appendChild(hrElement);
    stockInfoBlock.appendChild(row);
    stockInfoBlock.appendChild(priceBlock);
    stockInfoBlock.appendChild(hrElement2);

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

function updateSecurityToPortfolio(ticker: string, purchasePrice: number, quantity: number) {
  const matchingSecurity = securitiesArray.find(security => security.ticker === ticker);
  
  if (matchingSecurity) {
    const newAmount = matchingSecurity.amount + quantity;
    const newPurchasePrice = (matchingSecurity.purchasePrice * matchingSecurity.amount + purchasePrice * quantity) / newAmount;

    matchingSecurity.amount = newAmount;
    matchingSecurity.purchasePrice = newPurchasePrice;

    localStorage.setItem('securitiesArray', JSON.stringify(securitiesArray));
    return securitiesArray;
  }
}

function removeSecurityFromPortfolio(ticker: string, purchasePrice: number, quantity: number) {
  const matchingSecurity = securitiesArray.find(security => security.ticker === ticker);
  if (matchingSecurity) {
    const newAmount = matchingSecurity.amount - quantity;
    if (newAmount === 0) {
      securitiesArray.splice(securitiesArray.indexOf(matchingSecurity), 1);
    } else if (newAmount > 0) {
      matchingSecurity.amount = newAmount;
    }
    localStorage.setItem('securitiesArray', JSON.stringify(securitiesArray));
    return securitiesArray;
  }
}
