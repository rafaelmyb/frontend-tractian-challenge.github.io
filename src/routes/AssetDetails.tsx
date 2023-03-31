import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Drawer } from "antd";
import {
  BasicAssetInfo,
  MetricsBar,
  AssetDetailsMobileActions,
} from "../components/extendedComponents";
import { useDrawerContext } from "../contexts";
import { useAssetById, useUserById } from "../hooks/useReactQuery";
import {
  BasicAssetInfoSkeleton,
  MetricsBarSkeleton,
} from "../components/skeletonsLoadings";
import { AssetDetailsMobileActionsSkeleton } from "../components/skeletonsLoadings/AssetDetailsMobileActionsSkeleton";
import { HealthHistoryChart } from "../components/basicComponents";
import { useEffect, useState } from "react";
import { getUserById } from "../hooks/useApi";

export function AssetDetails() {
  const { id } = useParams();
  const { asset, isLoading, isRefetching } = useAssetById(Number(id));
  const {
    isBasicInfoDrawerOpen,
    isMetricsDrawerOpen,
    handleCloseBasicInfoDrawer,
    handleCloseMetricsDrawer,
  } = useDrawerContext();
  const isMobile = useMediaQuery({ maxWidth: 378 });
  const isMediumAndSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMinorThanLaptopScreen = useMediaQuery({ maxWidth: 910 });
  const [users, setUsersState] = useState([]);

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
      handleUserId().then((response: any) => setUsersState(response));
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
        </div>
      )}
    </div>
  );
}
