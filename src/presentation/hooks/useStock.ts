import { useEffect, useRef, useState } from 'react';
import type { Stock } from '../../domain/models/Stock';
import { stockRepository } from '../../domain/repository/StockRepositoryImpl';

export function useStock(symbol: string) {
  const [changePercent, setChangePercent] = useState(0);
  const [history, setHistory] = useState<Stock[]>([]);
  const [stock, setStock] = useState<Stock | null>(null);
  const [hasTrades, setHasTrades] = useState(false);
  const activeSymbolRef = useRef(symbol);
  const basePriceRef = useRef<number | null>(null);
  const previousPriceRef = useRef<number | null>(null);

  useEffect(() => {
    activeSymbolRef.current = symbol;
  }, [symbol]);

  function handleStock(newStock: Stock) {
    if (newStock.symbol !== activeSymbolRef.current) {
      return;
    }

    setHasTrades(true);
    setStock(newStock);
    setHistory((prev) => [...prev, newStock]);

    if (basePriceRef.current === null) {
      basePriceRef.current = newStock.price;
      previousPriceRef.current = newStock.price;
      return;
    }

    const base = basePriceRef.current;

    const percent = ((newStock.price - base) / base) * 100;
    setChangePercent(percent);

    previousPriceRef.current = newStock.price;
  }

  useEffect(() => {
    setStock(null);
    setHistory([]);
    setChangePercent(0);
    setHasTrades(false);
    previousPriceRef.current = null;
    basePriceRef.current = null;
  }, [symbol]);

  useEffect(() => {
    if (!symbol) return;

    const unsubscribe = stockRepository.subscribeToStock(symbol, handleStock);

    return () => unsubscribe();
  }, [symbol]);

  return { stock, history, changePercent, hasTrades };
}
