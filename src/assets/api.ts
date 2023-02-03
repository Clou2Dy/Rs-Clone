export async function moexTickerLast(ticker: string) {
    const json = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function(res) { return res.json()});
    return json.marketdata.data.filter(function(d: any) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];
}
/*
async function moexTickerLast(ticker: string): Promise<number | null> {
    try {
      const response = await fetch(
        `https://iss.moex.com/iss/engines/stock/markets/shares/securities/${ticker}.json`
      );
      if (!response.ok) {
        throw new Error(`Unable to retrieve data. Response status: ${response.status}`);
      }
      const json = await response.json();
      const filteredData = json.marketdata.data.filter(
        (d: Array<any>) => ["TQBR", "TQTF"].indexOf(d[1]) !== -1
      );
      if (!filteredData.length) {
        throw new Error(`No data found for ticker ${ticker}`);
      }
      return filteredData[0][12] as number;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  moexTickerLast("GAZP")
    .then((res) => console.log(`GAZP: ${res}`))
    .catch((error) => console.error(`Error: ${error}`));
*/

async function moexTickerLastForAll(): Promise<{ [ticker: string]: number | null }> {
    const tickers = await getListOfTickers();
    const data: { [ticker: string]: number | null } = {};
    for (const ticker of tickers) {
      data[ticker] = await moexTickerLast(ticker);
    }
    return data;
  }
  
  async function getListOfTickers(): Promise<Array<string>> {
    try {
      const response = await fetch(
        "https://iss.moex.com/iss/securities.json"
      );
      if (!response.ok) {
        throw new Error(`Unable to retrieve data. Response status: ${response.status}`);
      }
      const json = await response.json();
      return json.securities.data.map((d: Array<string>) => d[0]);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  moexTickerLastForAll()
    .then((data) => console.log(data))
    .catch((error) => console.error(`Error: ${error}`));
  