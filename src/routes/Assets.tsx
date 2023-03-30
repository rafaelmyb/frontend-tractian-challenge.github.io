import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { MachineCard } from "../components/basicComponents";
import { AssetsSkeleton } from "../components/SkeletonsLoadings";
import { useGeneralContext } from "../contexts";

import { useAssetByUnitId } from "../hooks/useReactQuery";
import { Asset } from "../types/commonTypes";

export function Assets() {
  const { selectedUnit, setSelectedAssetId } = useGeneralContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  return (
    <div className="grid grid-cols-autoFit w-full gap-4 items-center justify-center max-[360px]:grid-cols-1">
      {isLoading ? (
        <AssetsSkeleton isLoading={isLoading} />
      ) : (
        assetsByUnit.map((asset: Asset) => (
          <Link
            key={asset.id}
            to={`/ativo/${asset.id}`}
            onClick={() => setSelectedAssetId(asset.id)}
          >
            <MachineCard
              image={asset.image}
              name={asset.name}
              status={asset.status}
            />
          </Link>
        ))
      )}
    </div>
  );
}
