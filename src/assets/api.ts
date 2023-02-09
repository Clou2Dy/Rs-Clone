export async function moexTickerLast(ticker: string) {
    const json = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function(res) { return res.json()});
    return json.marketdata.data.filter(function(d: any) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];
}

export async function moexGetTickerPrice(ticker: string): Promise<number> {
  const response = await fetch(
    'https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json'
  );
  if (!response.ok) {
    throw new Error(`Failed to retrieve data for ticker "${ticker}"`);
  }
  const data = await response.json();
  const targetArray = data.securities.data.find((subArray: string) => subArray[1] === 'TQBR');
  if (!targetArray) {
    throw new Error(`No data found for ticker "${ticker}" on TQBR`);
  }
  const price = targetArray[3];
  return price;
}

export async function getStocksTickers () {
  const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json');
  const json = await response.json();
  const data =  json.securities.data;
  const tqbr = data.filter((elem: Array<string | number>) => elem[1] === 'TQBR')
  return tqbr
}

export async function moexGetTickers(bord: string) {
  const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json').then(function(res) { return res.json()});
  const data =  response.securities.data;
  //const tickersName = extractTickersName(data, bord)
  //return tickersName;
}

/*
function extractTickersPrice(data: Array<Array<string | number>>, searchTerm: string): Array<[string, number, string]> {
  return data.filter(subArray => (subArray[1] as string).toUpperCase() === searchTerm.toUpperCase())
    .map(subArray => [subArray[0] as string, subArray[3] as number, subArray[2] as string]);
}
*/