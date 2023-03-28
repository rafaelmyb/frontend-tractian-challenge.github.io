import { useParams } from "react-router-dom";

import { BasicMachineInfo } from "../components/BasicMachineInfo";
import { MetricsBar } from "../components/MetricsBar";
import { useAssetById } from "../hooks/useReactQuery";

export function AssetDetails() {
  const { id } = useParams();
  const { data, isLoading, isRefetching } = useAssetById(Number(id));

  return (
    <div>
      {isLoading || isRefetching ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row">
          <BasicMachineInfo
            image={data.image}
            model={data.model}
            name={data.name}
            sensors={data.sensors}
            specifications={data.specifications}
            assignedUserIds={data.assignedUserIds}
          />
          <div className="ml-4 w-full">
            <MetricsBar
              metrics={data.metrics}
              healthScore={data.healthscore}
              status={data.status}
            />
          </div>
        </div>
      )}
    </div>
  );
}
