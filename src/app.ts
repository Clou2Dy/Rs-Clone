import './style.scss';
import data from './data';
import {addUnd, block} from './addSpending';
import income from './income';
import progress from './progressbar';
import addSpending from './changeStyle';
import {displaySecurityPage} from './renderPage'
import {Security} from './types'

export let securitiesArray: Security[] = JSON.parse(localStorage.getItem('securitiesArray') || '[]');
export let totalPortfolioValue: number;
export function setTotalPortfolioValue(value: number) {
    totalPortfolioValue = value;
}
export function getTotalPortfolioValue() {
    return totalPortfolioValue;
}

displaySecurityPage(securitiesArray);

progress()
data()
block()
addSpending()
addUnd()
income()

//alert('Доброго врмени суток, не могли бы вы проверить нашу работу в конце кросс чека. Заранее благодарим и целуем. ♡♡♡')