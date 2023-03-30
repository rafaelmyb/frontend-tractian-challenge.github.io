import { Link } from "react-router-dom";
import { MachineCard } from "../components/basicComponents";
import { useGeneralContext } from "../contexts";

import { useAssetByUnitId } from "../hooks/useReactQuery";

export function Home() {
  const { selectedUnit, setSelectedAssetId } = useGeneralContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  return (
    <div className="grid grid-cols-autoFit w-full gap-4 items-center justify-center">
      {!isLoading &&
        assetsByUnit.map((asset: any) => (
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
        ))}
    </div>
  );
}
