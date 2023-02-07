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

export function calculateSumAmount (type: 'Stock' | 'Bond' | 'ETF', array: Security[]) {
    let sum = 0;
    array.filter(obj => {
        if(obj.type === type) {
            sum += obj.amount * obj.purchasePrice;
        }
    })
    return sum
}

export function calculateValueSecurites (type: 'Stock' | 'Bond' | 'ETG', array: Security[]) {
    array.filter(obj => {
        let sum = 0;
        if(obj.type === type) {
            moexTickerLast(obj.ticker).then(res => {
                console.log(res)
                sum += obj.amount * res
                console.log(sum)       
            });          
        }
        return sum;
    })
}