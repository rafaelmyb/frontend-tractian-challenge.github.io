type MetricProps = {
  label: string;
  icon?: any;
  value: any;
};

export function Metric({ label, icon, value }: MetricProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm text-gray-500 max-[1350px]:text-center">
        {label}
      </span>
      <div className="flex flex-row gap-3 items-center max-[1332px]:items-start">
        {icon}
        <strong className="flex text-2xl text-black max-[1440px]:text-lg max-[1332px]:text-center">
          {value}
        </strong>
      </div>
    </div>
  );
}
