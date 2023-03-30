import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import { OrderDetails, OrdersList } from "../components/extendedComponents";
import { useDrawerContext, useGeneralContext } from "../contexts";
import { useAssetByUnitId, useWorkOrders } from "../hooks/useReactQuery";

export function WorkOrders() {
  const { selectedUnit, oldUnit, setSelectedOrderId, selectedOrderId } =
    useGeneralContext();
  const {
    isWorkOrdersListDrawerOpen,
    handleOpenWorkOrdersListDrawer,
    handleCloseWorkOrdersListDrawer,
  } = useDrawerContext();
  const isMobile = useMediaQuery({ maxWidth: 378 });
  const isMediumAndSmallScreen = useMediaQuery({ maxWidth: 768 });

  const { assetsByUnit, isLoading: isAssetsLoading } =
    useAssetByUnitId(selectedUnit);
  const { workOrders, isLoading: isWorkOrdersLoading } = useWorkOrders();

  const isLoading = isAssetsLoading && isWorkOrdersLoading;

  const orders = useMemo(
    () =>
      !isAssetsLoading &&
      !isWorkOrdersLoading &&
      assetsByUnit
        .map((asset: any) =>
          workOrders.find((order: any) => order.assetId === asset.id)
        )
        .filter((item: any) => item !== undefined),
    [assetsByUnit, workOrders]
  );

  // melhorar esses dois useEffects
  useEffect(() => {
    if (selectedOrderId === 0 && !isLoading) {
      setSelectedOrderId(orders[0].id);
    }
  }, [orders]);

  useEffect(() => {
    if (oldUnit !== selectedUnit) {
      setSelectedOrderId(orders[0].id);
    }
  }, [selectedUnit]);
  
  return (
    <div>
      <header className="flex flex-row items-center justify-between w-full">
        <h1 className="text-2xl font-medium max-[425px]:text-lg">
          Ordens de Serviço
        </h1>
        <Button type="primary" className="bg-blue-500 items-center">
          <PlusOutlined className="text-sm" />
          Criar ordem
        </Button>
      </header>
      <Divider
        type="horizontal"
        className="mt-4 mb-6 border max-[768px]:mb-4"
      />

      <div className="flex flex-row gap-4 max-[768px]:flex-col">
        <Button
          type="primary"
          ghost
          className="ml-auto min-[769px]:hidden"
          onClick={handleOpenWorkOrdersListDrawer}
        >
          {isMobile ? "Ordens" : "Lista de Ordens"}
        </Button>

        {!isMediumAndSmallScreen && (
          <div>
            <OrdersList orders={orders} />
          </div>
        )}

        {selectedOrderId !== 0 && <OrderDetails />}

        {isMediumAndSmallScreen && (
          <Drawer
            title="Lista de Ordens"
            open={isWorkOrdersListDrawerOpen}
            onClose={handleCloseWorkOrdersListDrawer}
            placement="right"
            width={isMobile ? 320 : 378}
          >
            <OrdersList orders={orders} />
          </Drawer>
        )}
      </div>
    </div>
  );
}
