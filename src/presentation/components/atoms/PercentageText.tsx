interface Props {
  isPositive: boolean;
  value: number;
}

export function PercentageText({ value, isPositive }: Props) {
  return (
    <div
      className={`flex items-center gap-1 text-sm font-medium ${
        isPositive ? 'text-green-600' : 'text-[#f45b5b]'
      }`}
    >
      <span>{isPositive ? '▲' : '▼'}</span>
      <span>{value.toFixed(2)}%</span>
    </div>
  );
}
