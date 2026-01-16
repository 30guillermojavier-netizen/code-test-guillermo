interface Props {
  alertPrice: number;
  selectedSymbol: string;
  onAlertPriceChange: (price: number) => void;
  onSymbolChange: (symbol: string) => void;
}

const SYMBOLS = [
  { label: 'BTC-USD', value: 'BINANCE:BTCUSDT' },
  { label: 'ETH-USD', value: 'BINANCE:ETHUSDT' },
  { label: 'AAPL', value: 'AAPL' },
  { label: 'GOOGL', value: 'GOOGL' },
];

export function StockForm({
  alertPrice,
  selectedSymbol,
  onAlertPriceChange,
  onSymbolChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600 text-left">Alertprice</label>
        <input
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
          type="number"
          value={alertPrice}
          onChange={(event) => onAlertPriceChange(Number(event.target.value))}
        />
      </div>
      <div className="flex flex-col gap1">
        <label className="text-sm text-gray-600 text-left">Stock</label>
        <select
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
          value={selectedSymbol}
          onChange={(e) => onSymbolChange(e.target.value)}
        >
          {SYMBOLS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
