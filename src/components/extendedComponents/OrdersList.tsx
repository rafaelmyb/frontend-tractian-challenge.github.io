import { InputFilter } from "./InputFilter";
import { CardOrder } from "../basicComponents";
import { useGeneralContext } from "../../contexts";
import { WorkOrder } from "../../types/commonTypes";
import { OrdersListSkeleton } from "../SkeletonLoadings";

type OrdersListProps = {
  orders: WorkOrder[] | undefined;
};

export function OrdersList({ orders }: OrdersListProps) {
  const { setSelectedOrderId, filteredOrders } = useGeneralContext();

  return (
    <div className="flex flex-col min-w-[300px] w-full h-full rounded-2xl border p-4 max-[768px]:border-0 max-[768px]:p-0 max-[768px]:min-w-full">
      <InputFilter orders={orders} />

      <div className="flex flex-col gap-3 mt-6">
        {!orders ? (
          <OrdersListSkeleton isLoading={!orders} />
        ) : (
          (filteredOrders?.length !== 0 && filteredOrders !== undefined ? filteredOrders : orders).map(
            (order: WorkOrder) => (
              <div key={order.id} onClick={() => setSelectedOrderId(order.id)}>
                <CardOrder
                  title={order.title}
                  priority={order.priority}
                  status={order.status}
                />
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
