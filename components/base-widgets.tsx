type BaseWidgetProps = {
  children: React.ReactNode;
  className?: string;
};

export function OneByOne({ children, className }: BaseWidgetProps) {
  return (
    <div
      className={`h-48 w-48 rounded-3xl bg-gray-700 bg-opacity-50 p-6 transition hover:scale-105 hover:bg-opacity-70 hover:drop-shadow-2xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

export function OneByTwo({ children, className }: BaseWidgetProps) {
  return (
    <div
      className={`col-span-2 h-48 w-104 rounded-3xl bg-gray-700 bg-opacity-50 p-6 transition hover:scale-[1.025] hover:bg-opacity-70 hover:drop-shadow-2xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

export function TwoByTwo({ children, className }: BaseWidgetProps) {
  return (
    <div
      className={`col-span-2 row-span-2 h-104 w-104 rounded-3xl bg-gray-700 bg-opacity-50 p-6 transition hover:scale-[1.025] hover:bg-opacity-70 hover:drop-shadow-2xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
