interface Props {
  isUp?: boolean;
  value: number;
}

export function PriceText({ value }: Props) {
  return <p className="text-sm font-bold text-white">${value.toFixed(2)}</p>;
}
