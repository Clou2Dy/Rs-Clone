import {createElement} from './functions'

export function createStockBlock(name: string | null, ticker: string | null, last: string | null) {
    const securityPage = document.querySelector('.security-page')
    const stockInformation = createElement('div', null, 'stock-information');
    const backgroundDimming = createElement('div', null, 'background-dimming');
    securityPage?.appendChild(stockInformation);
    securityPage?.appendChild(backgroundDimming);

    const typeBlock = createElement('div', `Акция`, 'type-information');
    stockInformation.appendChild(typeBlock);
    const closeButton = createElement('div', null, 'close-button');
    closeButton.addEventListener('click', () => {
        securityPage?.removeChild(stockInformation);
        securityPage?.removeChild(backgroundDimming);
    });
    stockInformation.appendChild(closeButton);
    const hrElement = createElement('hr', null, 'hr-line');
    stockInformation.appendChild(hrElement);

    const row = createElement('div', null, 'row-name-ticker');
    stockInformation.appendChild(row);
    const tickerBlock = createElement('div', `${ticker || ''}`, 'ticker-information');
    row.appendChild(tickerBlock);
    const nameBlock = createElement('div', `${name || ''}`, 'name-information');
    row.appendChild(nameBlock);

    const priceBlock = createElement('div', null, 'price-information');
    const priceText = createElement('div', 'Стоимость на Московской бирже', 'price-text');
    const priceValue = createElement('div', `${last || ''}`, 'price-value');
    priceBlock.appendChild(priceText);
    priceBlock.appendChild(priceValue);
    stockInformation.appendChild(priceBlock);
    const hrElement2 = createElement('hr', null, 'hr-line');
    stockInformation.appendChild(hrElement2);

    stockInformation.classList.add('show'); /* add the 'show' class */
}