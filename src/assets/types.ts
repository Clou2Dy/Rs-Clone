export interface Security {
    type: 'stock' | 'bond' | 'etf';
    ticker: string;
    name: string;
    purchaseDate: Date;
    purchasePrice: number;
    amount: number;
    lastPrice?: number;
}

