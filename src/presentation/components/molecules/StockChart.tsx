import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { Stock } from '../../../domain/models/Stock';

interface Props {
  data: Stock[];
}

export function StockChart({ data }: Props) {
  const chartData = data.map((item) => ({
    time: new Date(item.timestamp).toLocaleTimeString(),
    price: item.price,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="time" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line dataKey="price" dot={false} stroke="#2563eb" type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  );
}
