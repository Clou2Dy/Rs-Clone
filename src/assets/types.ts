export interface Security {
    type: 'Stock' | 'Bond' | 'ETF';
    ticker: string;
    name: string;
    purchaseDate: Date;
    purchasePrice: number;
    amount: number;
}

