interface Props {
  value: string;
}

export function SymbolText({ value }: Props) {
  return (
    <h3 className="text-sm font-semibold break-words max-w-[160px] text-white">
      {value}
    </h3>
  );
}
