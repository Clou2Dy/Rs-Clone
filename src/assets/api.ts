export async function moexTickerLast(ticker: string) {
    const json = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function(res) { return res.json()});
    return json.marketdata.data.filter(function(d: any) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];
}

export async function moexGetTickers() {
  const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json').then(function(res) { return res.json()});
  const data =  response.securities.data;
  const tickersName = extractTickersName(data, 'TQBR')
  return tickersName;
}

function extractTickersName(data: Array<Array<string | number>>, searchTerm: string): Array<[string, string, number]> {
  return data.filter(subArray => (subArray[1] as string).toUpperCase() === searchTerm.toUpperCase())
    .map(subArray => [subArray[0] as string, subArray[1] as string, subArray[2] as number]);
}