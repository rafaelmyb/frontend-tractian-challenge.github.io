import { ReactElement } from "react";

interface Props {
  icon?: ReactElement;
  label: string;
  value: string | string[] | number | number[] | undefined;
}

export function Info({ icon, label, value }: Props) {
  return (
    <div className="flex flex-row justify-between items-center w-full h-12 border-b">
      <div className="flex flex-row items-center w-full gap-2 text-blue-500">
        {icon}
        <div className="flex flex-row items-center justify-between w-full">
          <span className="flex text-sm text-black">{label}</span>
          <span className="flex text-sm text-gray-500 capitalize">{value}</span>
        </div>
      </div>
    </div>
  );
}
