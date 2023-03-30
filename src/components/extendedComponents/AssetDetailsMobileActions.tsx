import { useMediaQuery } from "react-responsive";

import { Button } from "antd";
import { useDrawerContext } from "../../contexts/DrawerContext";

export function AssetDetailsMobileActions() {
  const { handleOpenMetricsDrawer, handleOpenBasicInfoDrawer } =
    useDrawerContext();
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <div className="flex flex-row items-center justify-between mb-4 min-[910px]:hidden">
      <Button
        type="primary"
        ghost
        className="min-[769px]:hidden"
        onClick={handleOpenMetricsDrawer}
      >
        {isMobile ? "Métricas" : "Métricas do Ativo"}
      </Button>
      <Button
        type="primary"
        ghost
        className="min-[910px]:hidden min-[768px]:ml-auto"
        onClick={handleOpenBasicInfoDrawer}
      >
        {isMobile ? "Informações" : "Informações do Ativo"}
      </Button>
    </div>
  );
}
