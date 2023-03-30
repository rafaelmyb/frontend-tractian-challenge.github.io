import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Drawer } from "antd";
import {
  BasicAssetInfo,
  MetricsBar,
  AssetDetailsMobileActions,
} from "../components/extendedComponents";
import { useDrawerContext } from "../contexts";
import { useAssetById } from "../hooks/useReactQuery";
import {
  BasicAssetInfoSkeleton,
  MetricsBarSkeleton,
} from "../components/SkeletonsLoadings";
import { AssetDetailsMobileActionsSkeleton } from "../components/SkeletonsLoadings/AssetDetailsMobileActionsSkeleton";
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
  const isMobile = useMediaQuery({ maxWidth: 378 });
  const isMediumAndSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMinorThanLaptopScreen = useMediaQuery({ maxWidth: 910 });

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
                image={asset.image}
                model={asset.model}
                name={asset.name}
                sensors={asset.sensors}
                specifications={asset.specifications}
                assignedUserIds={asset.assignedUserIds}
              />
            </div>
          )}
          <div className="ml-4 w-full max-[910px]:ml-0">
            {isMinorThanLaptopScreen && <AssetDetailsMobileActions />}

            {!isMediumAndSmallScreen && (
              <div>
                <MetricsBar
                  metrics={asset.metrics}
                  healthScore={asset.healthscore}
                  status={asset.status}
                />
              </div>
            )}

            <HealthHistoryChart asset={asset} isLoading={isLoading} />

            {isMediumAndSmallScreen && (
              <Drawer
                title="Métricas do Ativo"
                open={isMetricsDrawerOpen}
                onClose={handleCloseMetricsDrawer}
                placement="left"
                width={isMobile ? 320 : 378}
              >
                <MetricsBar
                  metrics={asset.metrics}
                  healthScore={asset.healthscore}
                  status={asset.status}
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
                  image={asset.image}
                  model={asset.model}
                  name={asset.name}
                  sensors={asset.sensors}
                  specifications={asset.specifications}
                  assignedUserIds={asset.assignedUserIds}
                />
              </Drawer>
            )}
          </div>
        </div>
      )}
    </div>
  );
}