interface Props {
  value: number; //ms timestamp
}

export function TimeText({ value }: Props) {
  const date = new Date(value);

  return <small className="text-gray-500">{date.toLocaleTimeString()}</small>;
}
