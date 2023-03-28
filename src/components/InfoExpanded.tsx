type Props = {
  icon: any;
  label: string;
  value: any;
};

export function InfoExpanded({ icon, value, label }: Props) {
  return (
    <div className="flex flex-row justify-between items-center py-4 border-b">
      <div className="flex flex-row items-start w-full gap-2 text-blue-500">
        {icon}
        <div className="flex flex-col items-start gap-[2px] justify-between w-full">
          <span className="flex text-sm text-black">{label}</span>
          {value.map(
            (item: any) =>
              item.data !== undefined && (
                <span
                  key={item.data.id}
                  className="flex text-sm text-gray-500 capitalize"
                >
                  {item.data.name}
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
}
