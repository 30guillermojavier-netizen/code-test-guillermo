import type { StockTradeDTO } from '../models/StockTradeDTO';
import type { Stock } from '../../domain/models/Stock';

export const mapTradeDTOToStock = (dto: StockTradeDTO): Stock => ({
  price: dto.p,
  symbol: dto.s,
  timestamp: dto.t,
});
