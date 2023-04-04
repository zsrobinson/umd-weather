type TempWidgetProps = {
  temp: number;
};

export function TempWidget({ temp }: TempWidgetProps) {
  return (
    <div className="w-48 h-48 rounded-3xl bg-gray-700 bg-opacity-50 p-6 text-6xl hover:bg-opacity-70 hover:scale-105 transition">
      {temp}°
    </div>
  );
}
