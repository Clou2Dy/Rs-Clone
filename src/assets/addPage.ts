import {createElement} from './functions'
import {Security} from './types'
import {securitiesArray} from '../app'

function createStockInfoBlock(name: string | null, ticker: string | null, last: string | null): HTMLElement {
    const typeBlock = createElement('div', `Акция`, 'type-information');
    const hrElement = createElement('hr', null, 'hr-line');
    const row = createElement('div', null, 'row-name-ticker');
    const tickerBlock = createElement('div', `${ticker || ''}`, 'ticker-information');
    const nameBlock = createElement('div', `${name || ''}`, 'name-information');
    const priceBlock = createElement('div', null, 'price-information');
    const priceText = createElement('div', 'Стоимость на Московской бирже', 'price-text');
    const priceValue = createElement('div', `${last || ''}`, 'price-value');
    const hrElement2 = createElement('hr', null, 'hr-line');
  
    row.appendChild(tickerBlock);
    row.appendChild(nameBlock);
    priceBlock.appendChild(priceText);
    priceBlock.appendChild(priceValue);

    
    const stockInfoBlock = createElement('div', null, 'stock-information');
    stockInfoBlock.appendChild(typeBlock);
    stockInfoBlock.appendChild(hrElement);
    stockInfoBlock.appendChild(row);
    stockInfoBlock.appendChild(priceBlock);
    stockInfoBlock.appendChild(hrElement2);

    return stockInfoBlock;
  }
  
export function createInputContainer(): HTMLElement {
    const inputContainer = createElement('div', null, 'input-container');
    const purchasePriceInput = createElement('input', null, 'purchase-price-input') as HTMLInputElement;
    purchasePriceInput.type = 'number';
    purchasePriceInput.placeholder = 'Цена покупки';
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
  
  export function createStockBlock(name: string | null, ticker: string | null, last: string | null) {
    const securityPage = document.querySelector('.security-page')
    const backgroundDimming = createElement('div', null, 'background-dimming');
    const stockInfoBlock = createStockInfoBlock(name, ticker, last);
    const inputContainer = createInputContainer();
    const closeButton = createElement('div', null, 'close-button');
  
    const addToPortfolioButton = createElement('button', 'Покупка', 'add-to-portfolio-button');
    addToPortfolioButton.id = 'add-stock-button';
    addToPortfolioButton.addEventListener('click', () => {
      const purchasePriceInput = document.querySelector('.purchase-price-input') as HTMLInputElement;
      const quantityInput = document.querySelector('.quantity-input') as HTMLInputElement;
      const dateInput = document.querySelector('.date-input') as HTMLInputElement;

      const newSecurity: Security = {
        type: 'stock',
        ticker: ticker || '',
        name: name || '',
        purchasePrice: Number(purchasePriceInput.value),
        amount: Number(quantityInput.value),
        purchaseDate: new Date(dateInput.value),
      };

      alert(`Вы приобрели ценные бумаги на сумму ${Number(purchasePriceInput.value) * Number(quantityInput.value)} ₽`)
      securityPage?.removeChild(stockInfoBlock);
      securityPage?.removeChild(backgroundDimming);
      addSecurityToPortfolio(newSecurity);
    });

    closeButton.addEventListener('click', () => {
      securityPage?.removeChild(stockInfoBlock);
      securityPage?.removeChild(backgroundDimming);
    });
  
    stockInfoBlock.appendChild(inputContainer);
    stockInfoBlock.appendChild(addToPortfolioButton);
    securityPage?.appendChild(stockInfoBlock);
    securityPage?.appendChild(backgroundDimming);
    stockInfoBlock.classList.add('show'); /* add the 'show' class */
}

export function addSecurityToPortfolio(security: Security) {
    securitiesArray.push(security);
    localStorage.setItem('securitiesArray', JSON.stringify(securitiesArray));
}