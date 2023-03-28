interface Props {
  label: string;
  value: string | string[] | number | number[] | undefined;
}

export function MachineInfo({ label, value }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        {/* <img src="" alt="" /> */}
        <span className="color-black">{label}</span>
      </div>
      <span className="color-black">{value}</span>
    </div>
  );
}
