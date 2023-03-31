import { useMediaQuery } from "react-responsive";

import { Button } from "antd";
import { useDrawerContext } from "../../contexts/DrawerContext";

export function AssetDetailsMobileActions() {
  const { handleOpenMetricsDrawer, handleOpenBasicInfoDrawer } =
    useDrawerContext();
    
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <div className="flex flex-row items-center justify-between mb-4">
      <Button
        type="primary"
        ghost
        className="min-[769px]:hidden"
        onClick={handleOpenMetricsDrawer}
      >
        {isMobile ? "Metrics" : "Asset Metrics"}
      </Button>
      <Button
        type="primary"
        ghost
        className="min-[768px]:ml-auto"
        onClick={handleOpenBasicInfoDrawer}
      >
        {isMobile ? "Infomartions" : "Asset Information"}
      </Button>
    </div>
  );
}
