import {
  AppstoreOutlined,
  CloudSyncOutlined,
  DashboardOutlined,
  EditOutlined,
  FireOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { Info, InfoExpanded } from "../basicComponents";
import { User } from "../../types/commonTypes";
import { useModalsContext } from "../../contexts";

type BasicAssetInfoProps = {
  image: string | undefined;
  model: string | undefined;
  name: string | undefined;
  sensors: string[] | undefined;
  specifications:
    | {
        maxTemp: number;
        power?: number;
        rpm?: number | null;
      }
    | undefined;
  users: User[];
};

export function BasicAssetInfo({
  image,
  model,
  name,
  sensors,
  specifications,
  users,
}: BasicAssetInfoProps) {
  const { handleOpenIsUpdateAssetModal } = useModalsContext();

  return (
    <aside className="w-[300px] h-full max-[910px]:w-full">
      <img
        src={image}
        alt="Image"
        className="w-full h-[200px] object-cover rounded-xl"
      />
      <div className="flex flex-row justify-between items-center">
        <strong className="flex text-xl mt-4 mb-4">{name}</strong>
        <EditOutlined
          className="cursor-pointer text-blue-500"
          onClick={handleOpenIsUpdateAssetModal}
        />
      </div>

      <Info
        icon={
          <CloudSyncOutlined
            style={{
              fontSize: 18,
            }}
          />
        }
        label="Sensor"
        value={sensors}
      />
      <Info
        icon={
          <AppstoreOutlined
            style={{
              fontSize: 18,
            }}
          />
        }
        label="Model"
        value={model}
      />
      <Info
        icon={
          <FireOutlined
            style={{
              fontSize: 18,
            }}
          />
        }
        label="Max Temperature"
        value={`${specifications?.maxTemp} °C`}
      />
      {specifications?.power !== undefined && (
        <Info
          icon={
            <ThunderboltOutlined
              style={{
                fontSize: 18,
              }}
            />
          }
          label="Power"
          value={`${specifications.power} kWh`}
        />
      )}
      {specifications?.rpm && (
        <Info
          icon={
            <DashboardOutlined
              style={{
                fontSize: 18,
              }}
            />
          }
          label="Rotations per minute"
          value={`${specifications.rpm}RPM`}
        />
      )}
      <InfoExpanded
        icon={
          <TeamOutlined
            style={{
              fontSize: 18,
            }}
          />
        }
        label="Responsible"
        value={users}
      />
    </aside>
  );
}
