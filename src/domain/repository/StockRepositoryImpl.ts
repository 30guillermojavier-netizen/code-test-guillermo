import type { StockRepository } from './StockRepository';
import { StockSocket } from '../../data/remote/stockSocket';
import type { Stock } from '../models/Stock';

export class StockRepositoryImpl implements StockRepository {
  private socket = new StockSocket();

  constructor(token: string) {
    this.socket.connect(token);
  }

  subscribeToStock(
    symbol: string,
    onUpdate: (stock: Stock) => void
  ): () => void {
    this.socket.subscribe(symbol, onUpdate);

    return () => {
      this.socket.unsubscribe(symbol);
    };
  }
}

export const stockRepository = new StockRepositoryImpl(
  import.meta.env.VITE_FINNHUB_TOKEN
);
