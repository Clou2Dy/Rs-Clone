export interface Security {
    type: 'Stock' | 'Bond' | 'ETF';
    ticker: string;
    purchaseDate: Date;
    purchasePrice: number;
    amount: number;
}

