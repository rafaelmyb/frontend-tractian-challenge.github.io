import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Modal, Skeleton } from "antd";

import {
  useDrawerContext,
  useGeneralContext,
  useModalsContext,
} from "../contexts";
import { Asset, User, WorkOrder } from "../types/commonTypes";
import {
  useAssetByUnitId,
  useUsers,
  useWorkOrders,
} from "../hooks/useReactQuery";
import {
  CreateWorkOrderForm,
  OrderDetails,
  OrdersList,
} from "../components/extendedComponents";
import { getUserById } from "../hooks/useApi";

export function WorkOrders() {
  const {
    isWorkOrdersListDrawerOpen,
    handleOpenWorkOrdersListDrawer,
    handleCloseWorkOrdersListDrawer,
  } = useDrawerContext();
  const {
    isCreateWorkOrderOpen,
    handleCloseIsCreateWorkOrderModal,
    handleOpenIsCreateWorkOrderModal,
  } = useModalsContext();

  const isMobile = useMediaQuery({ maxWidth: 378 });
  const isMediumAndSmallScreen = useMediaQuery({ maxWidth: 768 });

  const { selectedUnit, oldUnit, setSelectedOrderId, selectedOrderId } =
    useGeneralContext();
  const { assetsByUnit, isLoading: isAssetsLoading } =
    useAssetByUnitId(selectedUnit);
  const { workOrders, isLoading: isWorkOrdersLoading } = useWorkOrders();
  const { users } = useUsers();

  const orders = useMemo(
    () =>
      assetsByUnit
        ?.map((asset: Asset) =>
          workOrders?.find((order: WorkOrder) => order.assetId === asset.id)
        )
        .filter((item: WorkOrder | undefined) => item !== undefined),
    [assetsByUnit, workOrders]
  );

  useEffect(() => {
    if (
      (selectedOrderId === 0 && !isAssetsLoading && !isWorkOrdersLoading) ||
      oldUnit !== selectedUnit
    ) {
      // @ts-ignore
      setSelectedOrderId(orders[0].id);
    }
  }, [orders, selectedUnit]);

  const usersByUnit = useMemo(
    () => users?.filter((user: User) => user.unitId === selectedUnit),
    [users, selectedUnit]
  );

  return (
    <div>
      <header className="flex flex-row items-center justify-between w-full">
        <h1 className="text-2xl font-medium max-[425px]:text-lg">
          Work Orders
        </h1>
        <Button
          type="primary"
          className="bg-blue-500 items-center"
          onClick={handleOpenIsCreateWorkOrderModal}
        >
          <PlusOutlined className="text-sm" />
          Create Work Order
        </Button>
      </header>
      <Divider
        type="horizontal"
        className="mt-4 mb-6 border max-[768px]:mb-4"
      />

      <div className="flex flex-row gap-4 max-[768px]:flex-col">
        {!orders ? (
          <div className="min-[769px]:hidden ml-auto">
            <Skeleton.Button
              active={!orders}
              size={"default"}
              shape={"square"}
              style={{
                width: 100,
              }}
            />
          </div>
        ) : (
          <Button
            type="primary"
            ghost
            className="ml-auto min-[769px]:hidden"
            onClick={handleOpenWorkOrdersListDrawer}
          >
            {isMobile ? "Ordens" : "Lista de Ordens"}
          </Button>
        )}

        {!isMediumAndSmallScreen && (
          <div>
            {
              // @ts-ignore
              <OrdersList orders={orders} />
            }
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
            {
              // @ts-ignore
              <OrdersList orders={orders} />
            }
          </Drawer>
        )}
      </div>
      <Modal
        title="Create Work Order"
        open={isCreateWorkOrderOpen}
        onOk={handleCloseIsCreateWorkOrderModal}
        onCancel={handleCloseIsCreateWorkOrderModal}
        footer={false}
      >
        <CreateWorkOrderForm assets={assetsByUnit} users={usersByUnit} />
      </Modal>
    </div>
  );
}
