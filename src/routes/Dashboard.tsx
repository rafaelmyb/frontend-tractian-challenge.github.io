import { Skeleton } from "antd";
import {
  AssetsHealthScoreChart,
  AssetsStatusChart,
} from "../components/basicComponents";
import { useGeneralContext } from "../contexts";
import { useAssetByUnitId } from "../hooks/useReactQuery";
import { Asset } from "../types/commonTypes";

export function Dashboard() {
  const { selectedUnit } = useGeneralContext();
  const { assetsByUnit, isLoading } = useAssetByUnitId(selectedUnit);

  const assetsByStatus =
    !isLoading &&
    // @ts-ignore o reduce existe no assetsByUnit sim
    assetsByUnit?.reduce((acc: any, asset: any) => {
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

  const assetsByHealth =
    !isLoading &&
    // @ts-ignore o reduce existe no assetsByUnit sim
    assetsByUnit?.map((asset: Asset) => {
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
        <div className="mt-4 flex flex-col gap-6">
          <AssetsStatusChart data={assetPieChartData} />
          <AssetsHealthScoreChart data={assetsByHealth} />
        </div>
      )}
    </div>
  );
}
