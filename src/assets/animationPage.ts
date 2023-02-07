import {Security} from './types'
import {createElement} from './functions';

export function displayListSecurities (obj: Security, container: HTMLElement) {
    const block = createElement('div', null, `security-block`);
    container.appendChild(block);
        const secInfo = createElement('div', null, `security-info`);
        block.appendChild(secInfo);
            const secTickerName = createElement('div', `${obj.ticker}`, `security-ticker`);
            secInfo.appendChild(secTickerName);
            const secAmount = createElement('div', `${obj.amount} шт.`, `security-amount`);
            secInfo.appendChild(secAmount);
        const secFin = createElement('div', null, `security-fin`);
        block.appendChild(secFin);
            const secPrice = createElement('div', `${obj.purchasePrice}`, `security-price`);
            secFin.appendChild(secPrice);         
}