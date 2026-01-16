import { mapTradeDTOToStock } from '../mappers/stockMapper';
import type { Stock } from '../../domain/models/Stock';

interface StockListener {
  (stock: Stock): void;
}

export class StockSocket {
  private pendingSymbol: string | null = null;
  private socket: WebSocket | null = null;
  private listener?: StockListener;

  connect(token: string) {
    this.socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`);

    this.socket.onopen = () => {
      if (this.pendingSymbol) {
        this.socket?.send(
          JSON.stringify({
            type: 'subscribe',
            symbol: this.pendingSymbol,
          })
        );

        this.pendingSymbol = null;
      }
    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'trade' && message.data?.length) {
        const trade = message.data[0];
        const stock = mapTradeDTOToStock(trade);
        this.listener?.(stock);
      }
    };
  }

  subscribe(symbol: string, listener: StockListener) {
    if (!this.socket) return;

    this.listener = listener;

    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ type: 'subscribe', symbol }));
    } else {
      this.pendingSymbol = symbol;
    }
  }

  unsubscribe(symbol: string) {
    if (!this.socket) return;

    if (this.socket.readyState !== WebSocket.OPEN) {
      return;
    }
    this.socket?.send(JSON.stringify({ type: 'unsubscribe', symbol }));
  }

  disconnect() {
    this.socket?.close();
  }
}
