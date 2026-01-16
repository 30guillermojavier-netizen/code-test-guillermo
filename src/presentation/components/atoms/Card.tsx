interface Props {
  children: React.ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className="bg-[#363636] rounded-xl shadow-sm px-6 py-4">
      {children}
    </div>
  );
}
