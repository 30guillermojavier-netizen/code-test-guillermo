import { StockForm } from '../molecules/StockForm';
import { StockPriceInfo } from '../molecules/StockPriceInfo';
import { StockChart } from '../molecules/StockChart';
import type { Stock } from '../../../domain/models/Stock';

interface Props {
  symbol: string;
  alertPrice: number;
  onSymbolChange: (v: string) => void;
  onAlertPriceChange: (v: number) => void;
  stock: Stock | null;
  history: Stock[];
  changePercent: number;
  hasTrades: boolean;
}

export function DashboardLayout({
  symbol,
  alertPrice,
  onSymbolChange,
  onAlertPriceChange,
  stock,
  history,
  changePercent,
  hasTrades,
}: Props) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-6xl bg-white rounded-2xl shadow-md p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT FORM */}
          <div className="order-3 lg:order-1 lg:col-span-3">
            <StockForm
              selectedSymbol={symbol}
              alertPrice={alertPrice}
              onSymbolChange={onSymbolChange}
              onAlertPriceChange={onAlertPriceChange}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2 lg:col-span-9 space-y-6">
            {hasTrades && stock ? (
              <>
                <StockPriceInfo
                  stock={stock}
                  symbol={symbol}
                  alertPrice={alertPrice}
                  changePercent={changePercent}
                />

                <StockChart data={history} />
              </>
            ) : (
              <p className="text-gray-400">Waiting for trades...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
