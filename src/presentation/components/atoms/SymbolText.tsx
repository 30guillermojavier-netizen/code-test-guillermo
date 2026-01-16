interface Props {
  value: string;
}

export function SymbolText({ value }: Props) {
  return <h3 className="text-sm font-semibold text-white">{value}</h3>;
}
