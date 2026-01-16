import type { Stock } from '../models/Stock';

export interface StockRepository {
  subscribeToStock(
    symbol: string,
    onUpdate: (stock: Stock) => void
  ): () => void;
}
