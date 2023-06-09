import { Link } from "react-router-dom";
import { Button, Divider, Modal } from "antd";

import { Asset } from "../types/commonTypes";
import { useAssetByUnitId } from "../hooks/useReactQuery";
import { MachineCard } from "../components/basicComponents";
import { useGeneralContext, useModalsContext } from "../contexts";
import { CreateAssetForm } from "../components/extendedComponents/Forms";
import { AssetsSkeleton } from "../components/SkeletonLoadings";

export function Assets() {
  const {
    isCreateAssetOpen,
    handleCloseIsCreateAssetModal,
    handleOpenIsCreateAssetModal,
  } = useModalsContext();
  const { selectedUnit, setSelectedAssetId } = useGeneralContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-2xl font-medium max-[425px]:text-lg">Assets</h1>
        <div className="flex flex-row gap-2 ml-auto">
          <Button
            type="primary"
            ghost
            onClick={handleOpenIsCreateAssetModal}
            className="ml-auto"
          >
            Create Asset
          </Button>
        </div>
      </div>

      <Divider
        type="horizontal"
        className="mt-4 mb-6 border max-[768px]:mb-4"
      />

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
