import type { Stock } from '../../../domain/models/Stock';
import { Card } from '../atoms/Card';
import { SymbolText } from '../atoms/SymbolText';
import { PriceText } from '../atoms/PriceText';
import { PercentageText } from '../atoms/PercentageText';

interface Props {
  alertPrice: number;
  changePercent: number;
  stock: Stock | null;
  symbol: string;
}

export function StockPriceInfo({
  alertPrice,
  changePercent,
  symbol,
  stock,
}: Props) {
  const isAboveAlert = stock ? stock.price >= alertPrice : false;

  if (!stock) return null;

  return (
    <div className="w-fit">
      <Card>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-row gap-4">
          {/* LEFT */}
          <div>
            <SymbolText value={symbol} />

            <PercentageText value={changePercent} isPositive={isAboveAlert} />
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <PriceText value={stock.price} isUp={isAboveAlert} />
          </div>
        </div>
      </Card>
    </div>
  );
}
