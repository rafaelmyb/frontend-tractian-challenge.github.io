import {
  AppstoreOutlined,
  CloudSyncOutlined,
  DashboardOutlined,
  FireOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { Info, InfoExpanded } from "../basicComponents";
import { useUserById } from "../../hooks/useReactQuery";

type BasicAssetInfoProps = {
  image: string;
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp: number;
    power?: number;
    rpm?: number | null;
  };
  assignedUserIds: number[];
};

export function BasicAssetInfo({
  image,
  model,
  name,
  sensors,
  specifications,
  assignedUserIds,
}: BasicAssetInfoProps) {
  function handleUserId() {
    const users = assignedUserIds.map((id: number) => {
      const { user } = useUserById(id);
      return user;
    });

    return users;
  }

  const users = handleUserId();

  return (
    <aside className="w-[300px] h-full max-[910px]:w-full">
      <img
        src={image}
        alt="Image"
        className="w-full h-[200px] object-cover rounded-xl"
      />
      <strong className="flex text-xl mt-4 mb-4">{name}</strong>

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
        label="Modelo"
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
        label="Temperatura Limite"
        value={`${specifications.maxTemp} °C`}
      />
      {specifications.power !== undefined && (
        <Info
          icon={
            <ThunderboltOutlined
              style={{
                fontSize: 18,
              }}
            />
          }
          label="Força"
          value={`${specifications.power} kWh`}
        />
      )}
      {specifications.rpm && (
        <Info
          icon={
            <DashboardOutlined
              style={{
                fontSize: 18,
              }}
            />
          }
          label="Rotações por minuto"
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
        label="Responsáveis"
        value={users ? users : null}
      />
    </aside>
  );
}
