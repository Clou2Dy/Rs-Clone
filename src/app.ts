import {displaySecurityPage} from './assets/renderPage'
import {Security} from './assets/types'

export const securitiesArray: Security[] = [
    { name: 'Газпром ао', type:'stock', ticker: 'GAZP', purchaseDate: new Date(2022, 1, 1), purchasePrice: 140, amount: 50},
    { name: 'Сбербанк ао', type:'stock', ticker: 'SBER', purchaseDate: new Date(2022, 1, 2), purchasePrice: 100, amount: 70},
]

displaySecurityPage();