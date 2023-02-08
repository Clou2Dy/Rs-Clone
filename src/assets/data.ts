import {Security} from './types'
import {moexGetTickerPrice} from './api'

export const securitiesArray: Security[] = [
    { name: 'Газпром ао', type:'Stock', ticker: 'GAZP', purchaseDate: new Date(2022, 1, 1), purchasePrice: 140, amount: 50},
    { name: 'Сбербанк ао', type:'Stock', ticker: 'SBER', purchaseDate: new Date(2022, 1, 2), purchasePrice: 100, amount: 70},
]

export async function updateSecuritiesArray(securitiesArray: Security[]) {
    const updatedArray = await Promise.all(
      securitiesArray.map(async (security) => {
        const price = await moexGetTickerPrice(security.ticker);
        return { ...security, lastPrice: price };
      })
    );
    console.dir(updatedArray);
    return updatedArray;
}

