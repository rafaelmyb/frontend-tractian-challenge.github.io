import { Button, Divider, Modal, Skeleton } from "antd";

import {
  AssetsHealthScoreChart,
  AssetsStatusChart,
} from "../components/basicComponents";
import { Asset } from "../types/commonTypes";
import { useGeneralContext, useModalsContext } from "../contexts";
import { useAssetByUnitId } from "../hooks/useReactQuery";
import {
  CreateUnitForm,
  UpdateUnitForm,
} from "../components/extendedComponents/Forms";

export function Dashboard() {
  const { selectedUnit } = useGeneralContext();
  const {
    isCreateUnitOpen,
    isUpdateUnitOpen,
    handleCloseIsUpdateUnitModal,
    handleOpenIsUpdateUnitModal,
    handleOpenIsCreateUnitModal,
    handleCloseIsCreateUnitModal,
  } = useModalsContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  const assetsByStatus = assetsByUnit?.reduce((acc: any, asset: any) => {
    const status = asset.status;
    if (acc[status]) {
      acc[status] += 1;
    } else {
      acc[status] = 1;
    }
    return acc;
  }, {} as Record<string, number>);

  function formatToChartData(data: Record<string, number> | undefined) {
    const chartData =
      data &&
      Object.entries(data).map(([key, value]) => {
        return {
          name: key,
          y: value,
        };
      });
    return chartData;
  }

  const assetPieChartData = formatToChartData(assetsByStatus);

  const assetsByHealth = assetsByUnit?.map((asset: Asset) => {
    return {
      name: asset.name,
      y: asset.healthscore,
    };
  });

  return (
    <div>
      {isLoading ? (
        <Skeleton active={isLoading} className="mt-4" />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-2xl font-medium max-[425px]:text-lg">
              Dashboard
            </h1>
            <div className="flex flex-row gap-2 ml-auto">
              <Button
                type="primary"
                ghost
                onClick={handleOpenIsCreateUnitModal}
              >
                Create Unit
              </Button>

              <Button
                type="primary"
                ghost
                onClick={handleOpenIsUpdateUnitModal}
              >
                Update Unit
              </Button>
            </div>
          </div>

          <Divider
            type="horizontal"
            className="mt-0 mb-2 border max-[768px]:mb-4"
          />

          <AssetsStatusChart data={assetPieChartData} />
          <AssetsHealthScoreChart data={assetsByHealth} />

          <Modal
            title="Create Unit"
            open={isCreateUnitOpen}
            onCancel={handleCloseIsCreateUnitModal}
            footer={false}
          >
            <CreateUnitForm />
          </Modal>

          <Modal
            title="Update Unit"
            open={isUpdateUnitOpen}
            onCancel={handleCloseIsUpdateUnitModal}
            footer={false}
          >
            <UpdateUnitForm unitId={selectedUnit} />
          </Modal>
        </div>
      )}
    </div>
  );
}
