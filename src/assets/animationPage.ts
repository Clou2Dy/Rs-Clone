import {Security} from './types'
import {createElement} from './functions';
import {securitiesArray} from '../app';
import {updateStockBlock} from './updatePage'
import {moexGetTickerPrice} from './api'

export function displayListSecurities (obj: Security, container: HTMLElement) {
    if (obj.lastPrice) {
        const price = (obj.lastPrice * obj.amount).toFixed(2);
        const profit = ((obj.lastPrice - obj.purchasePrice) * obj.amount).toFixed(2);
        const procent = (100*(+profit / +price)).toFixed(2);
        const block = createElement('div', null, `security-block`);
        block.id = obj.ticker;
        container.appendChild(block);
            const secInfo = createElement('div', null, `security-info`);
            block.appendChild(secInfo);
                const secTickerName = createElement('div', `${obj.name}`, `security-ticker`);
                secInfo.appendChild(secTickerName);
                const secAmount = createElement('div', `${obj.amount} шт.`, `security-amount`);
                secInfo.appendChild(secAmount);
            const secFin = createElement('div', null, `security-fin`);
            block.appendChild(secFin);
                
                    const secPrice = createElement('div', `${price} ₽ `, `security-price`);
                    secFin.appendChild(secPrice);
                    const secProfit = createElement('div', null, `security-profit`);
                    secFin.appendChild(secProfit);
                    const secResult = createElement('div', `${profit} ₽ `, `security-result`);
                    secProfit.appendChild(secResult);
                    const secDot = createElement('span', `/`, 'dot-block');
                    secProfit.appendChild(secDot)
                    const secProcent = createElement('div', ` ${procent} %`, `security-procent`);
                    secProfit.appendChild(secProcent);
                    if (+profit < 0) {
                        secResult.classList.add('red-color');
                        secProcent.classList.add('red-color');
                    }  
    }
}

export function handleSecurityClick() {    
    const parentElement = document.querySelector('.main-block');
    
    if (parentElement) {
        parentElement.addEventListener('click', event => {
            const stockElement = (event.target as HTMLElement).closest('.security-block');
            if (stockElement) {
                const securityExists = securitiesArray.some(security => security.ticker === stockElement.id);
                if (securityExists) {
                    const security = securitiesArray.find(security => security.ticker === stockElement.id);
                    if (security) {
                        moexGetTickerPrice(stockElement.id).then(res => {
                            updateStockBlock(security, res.toString());
                        });
                    }
                }
                
            }
        })
    }
}