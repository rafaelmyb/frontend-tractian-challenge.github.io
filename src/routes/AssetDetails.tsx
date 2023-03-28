import { useParams } from "react-router-dom";

import { BasicMachineInfo } from "../components/BasicMachineInfo";
import { useAssets } from "../hooks/useReactQuery";

export function AssetDetails() {
  const { id } = useParams();
  const { data, isLoading, isRefetching } = useAssets({ id: Number(id) });

  console.log(data);

  return (
    <div>
      {isLoading || isRefetching ? (
        <p>Loading...</p>
      ) : (
        <BasicMachineInfo
          image={data.image}
          model={data.model}
          name={data.name}
          sensors={data.sensors}
          specifications={data.specifications}
          assignedUserIds={data.assignedUserIds}
        />
      )}
    </div>
  );
}
