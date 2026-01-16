import { useState } from 'react';
import { useStock } from '../hooks/useStock';
import { DashboardLayout } from '../components/templates/DashboardLayout';

export function StockDashboardPage() {
  const [symbol, setSymbol] = useState('BINANCE:BTCUSDT');
  const [alertPrice, setAlertPrice] = useState(150);

  const { stock, history, changePercent, hasTrades } = useStock(symbol);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Finnhub Stock Dashboard</h1>
      <DashboardLayout
        symbol={symbol}
        alertPrice={alertPrice}
        onSymbolChange={setSymbol}
        onAlertPriceChange={setAlertPrice}
        stock={stock}
        history={history}
        changePercent={changePercent}
        hasTrades={hasTrades}
      />
    </>
  );
}
