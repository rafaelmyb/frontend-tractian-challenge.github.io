import { Link } from "react-router-dom";

import { Asset } from "../types/commonTypes";
import { useGeneralContext } from "../contexts";
import { useAssetByUnitId } from "../hooks/useReactQuery";
import { MachineCard } from "../components/basicComponents";
import { AssetsSkeleton } from "../components/skeletonsLoadings";

export function Assets() {
  const { selectedUnit, setSelectedAssetId } = useGeneralContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  return (
    <div className="grid grid-cols-autoFit w-full gap-4 items-center justify-center max-[360px]:grid-cols-1">
      {isLoading ? (
        <AssetsSkeleton isLoading={isLoading} />
      ) : (
        assetsByUnit?.map((asset: Asset) => (
          <Link
            key={asset.id}
            to={`/asset/${asset.id}`}
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
