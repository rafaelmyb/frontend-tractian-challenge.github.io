import { ReactElement } from "react";

type MetricProps = {
  label: string;
  icon?: string | ReactElement;
  value: number | string | undefined;
  className?: string;
};

export function Metric({ label, icon, value, className }: MetricProps) {
  return (
    <div className={className}>
      <span className="text-sm text-gray-500 max-[1350px]:text-center">
        {label}
      </span>
      <div className="flex flex-row gap-3 items-center mt-2 max-[1620px]:items-start">
        <div className="max-[1620px]:mt-[2px]">{icon}</div>
        <strong className="flex text-2xl text-black max-[1440px]:text-lg">
          {value}
        </strong>
      </div>
    </div>
  );
}
