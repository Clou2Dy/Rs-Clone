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

export async function getStocksTickers() {
  try {
    const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/.json');
    const json = await response.json();
    const data =  json.securities.data;
    console.dir (data)
    const tqbr = data.filter((elem: Array<string | number>) => elem[1] === 'TQBR');
    return tqbr;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBondsTickers() {
  try {
    const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/bonds/securities/.json');
    const json = await response.json();
    const data =  json.securities.data;
    console.dir (data)
    const tqob = data.filter((elem: Array<string | number>) => elem[1] === 'TQOB');
    return tqob;
  } catch (error) {
    console.error(error);
    return [];
  }
}