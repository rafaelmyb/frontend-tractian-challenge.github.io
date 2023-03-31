import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Drawer, Modal } from "antd";
import {
  BasicAssetInfo,
  MetricsBar,
  UpdateAssetForm,
  AssetDetailsMobileActions,
} from "../components/extendedComponents";
import {
  BasicAssetInfoSkeleton,
  MetricsBarSkeleton,
  AssetDetailsMobileActionsSkeleton,
} from "../components/skeletonsLoadings";
import { getUserById } from "../hooks/useApi";
import { useAssetById } from "../hooks/useReactQuery";
import {
  useDrawerContext,
  useGeneralContext,
  useModalsContext,
} from "../contexts";
import { HealthHistoryChart } from "../components/basicComponents";

export function AssetDetails() {
  const { id } = useParams();
  const { asset, isLoading, isRefetching } = useAssetById(Number(id));
  const {
    isBasicInfoDrawerOpen,
    isMetricsDrawerOpen,
    handleCloseBasicInfoDrawer,
    handleCloseMetricsDrawer,
  } = useDrawerContext();
  const { handleCloseIsUpdateAssetModal, isUpdateAssetOpen } =
    useModalsContext();
  const isMobile = useMediaQuery({ maxWidth: 378 });
  const isMediumAndSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMinorThanLaptopScreen = useMediaQuery({ maxWidth: 910 });
  const { users, setUsers } = useGeneralContext();

  useEffect(() => {
    async function handleUserId() {
      const users = await Promise.all(
        // @ts-ignore
        asset.assignedUserIds.map(async (id: number) => {
          const user = await getUserById(id);
          return user;
        })
      );

      return users;
    }

    if (!isLoading) {
      handleUserId().then((response: any) => setUsers(response));
    }
  }, [asset]);

  return (
    <div>
      {isLoading || isRefetching ? (
        <div className="flex flex-row">
          {!isMinorThanLaptopScreen && (
            <BasicAssetInfoSkeleton isLoading={isLoading} />
          )}
          <div className="flex flex-col ml-4 w-full max-[910px]:ml-0">
            {isMinorThanLaptopScreen && (
              <AssetDetailsMobileActionsSkeleton
                isLoading={isLoading || isRefetching}
              />
            )}

            {!isMediumAndSmallScreen && (
              <MetricsBarSkeleton isLoading={isLoading} />
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row">
          {!isMinorThanLaptopScreen && (
            <div>
              <BasicAssetInfo
                image={asset?.image}
                model={asset?.model}
                name={asset?.name}
                sensors={asset?.sensors}
                specifications={asset?.specifications}
                users={users}
              />
            </div>
          )}
          <div className="ml-4 w-full max-[910px]:ml-0">
            {isMinorThanLaptopScreen && <AssetDetailsMobileActions />}

            {!isMediumAndSmallScreen && (
              <div>
                <MetricsBar
                  metrics={asset?.metrics}
                  healthScore={asset?.healthscore}
                  status={asset?.status}
                />
              </div>
            )}

            <HealthHistoryChart
              healthHistory={asset?.healthHistory}
              isLoading={isLoading}
            />

            {isMediumAndSmallScreen && (
              <Drawer
                title="Métricas do Ativo"
                open={isMetricsDrawerOpen}
                onClose={handleCloseMetricsDrawer}
                placement="left"
                width={isMobile ? 320 : 378}
              >
                <MetricsBar
                  metrics={asset?.metrics}
                  healthScore={asset?.healthscore}
                  status={asset?.status}
                />
              </Drawer>
            )}

            {isMinorThanLaptopScreen && (
              <Drawer
                title="Informações do Ativo"
                open={isBasicInfoDrawerOpen}
                onClose={handleCloseBasicInfoDrawer}
                placement="right"
                width={isMobile ? 320 : 378}
              >
                <BasicAssetInfo
                  image={asset?.image}
                  model={asset?.model}
                  name={asset?.name}
                  sensors={asset?.sensors}
                  specifications={asset?.specifications}
                  users={users}
                />
              </Drawer>
            )}
          </div>

          <Modal
            title="Update Asset"
            open={isUpdateAssetOpen}
            onOk={handleCloseIsUpdateAssetModal}
            onCancel={handleCloseIsUpdateAssetModal}
            footer={false}
          >
            <UpdateAssetForm asset={asset} />
          </Modal>
        </div>
      )}
    </div>
  );
}
