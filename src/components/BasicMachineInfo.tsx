import { MachineInfo } from "./MachineInfo";

type Props = {
  image: string;
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number | null;
  };
  assignedUserIds: number[];
};

export function BasicMachineInfo({
  image,
  model,
  name,
  sensors,
  specifications,
  assignedUserIds,
}: Props) {
  return (
    <aside className="w-[300px] h-full">
      <img
        src={image}
        alt="Image"
        className="w-full h-[200px] object-cover rounded-xl"
      />
      <strong className="flex text-xl mt-4 mb-8">{name}</strong>
      
      <MachineInfo label="Sensor" value={sensors} />
      <MachineInfo label="Modelo" value={model} />
      <MachineInfo label="Temperatura Limite" value={specifications.maxTemp} />
      {specifications.power && (
        <MachineInfo label="Força" value={specifications.power} />
      )}
      {specifications.rpm && (
        <MachineInfo label="Rotações por minuto" value={specifications.rpm} />
      )}
      <MachineInfo label="Responsáveis" value={assignedUserIds} />
    </aside>
  );
}
