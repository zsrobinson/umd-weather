type TempWidgetProps = {
  temp: number;
};

export function TempWidget({ temp }: TempWidgetProps) {
  return (
    <div className="h-48 w-48 rounded-3xl bg-gray-700 bg-opacity-50 p-6 text-6xl transition hover:scale-105 hover:bg-opacity-70">
      {temp}°
    </div>
  );
}
