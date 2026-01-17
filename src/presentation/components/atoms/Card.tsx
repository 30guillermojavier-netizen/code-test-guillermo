interface Props {
  children: React.ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className="bg-[#363636] rounded-xl p-4 shadow-md overflow-hidden">
      {children}
    </div>
  );
}
