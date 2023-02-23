import {Security} from './types'
import {moexGetTickerPrice} from './api'



export async function updateSecuritiesArray(securitiesArray: Security[]) {
    const updatedArray = await Promise.all(
      securitiesArray.map(async (security) => {
        const price = await moexGetTickerPrice(security.ticker);
        return { ...security, lastPrice: price };
      })
    );
    return updatedArray;
}



