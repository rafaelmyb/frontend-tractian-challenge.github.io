import { Link } from "react-router-dom";
import { Button, Modal } from "antd";

import { Asset } from "../types/commonTypes";
import { useAssetByUnitId } from "../hooks/useReactQuery";
import { MachineCard } from "../components/basicComponents";
import { AssetsSkeleton } from "../components/skeletonsLoadings";
import { useGeneralContext, useModalsContext } from "../contexts";
import { CreateAssetForm } from "../components/extendedComponents/Forms";

export function Assets() {
  const { isCreateAssetOpen, handleCloseIsCreateAssetModal, handleOpenIsCreateAssetModal } = useModalsContext();
  const { selectedUnit, setSelectedAssetId } = useGeneralContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  return (
    <div className="flex flex-col gap-6">
      <Button type="primary" ghost onClick={handleOpenIsCreateAssetModal} className="ml-auto">
        Create Asset
      </Button>

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

      <Modal
        title="Create Unit"
        open={isCreateAssetOpen}
        onCancel={handleCloseIsCreateAssetModal}
        footer={false}
      >
        <CreateAssetForm />
      </Modal>
    </div>
  );
}
