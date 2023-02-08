import {Security} from './types'
import {moexTickerLast} from './api'

export function createElement(tag: string, text: string | null, className: string) {
    const element = document.createElement(tag);
    if (text) {
        element.innerText = text;
    }
    if (className !== '') {
        element.classList.add(className);
    }
    return element;
}


export function calculateTotalSum (array: Security[]) {
    let sum = 0;
    array.forEach(el => {
        if (el.lastPrice) {
            sum += el.amount * el.lastPrice;
        }
    })
    return sum
}

export function calculateTotalProfit (array: Security[]) {
    let sum = 0;
    array.forEach(el => {
        if (el.lastPrice) {
            sum += el.amount * (el.lastPrice - el.purchasePrice);
        }
    })
    return sum
}