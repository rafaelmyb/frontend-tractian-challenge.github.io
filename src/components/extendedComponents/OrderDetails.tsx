import { Checkbox, Divider } from "antd";
import { useMemo, useState } from "react";
import { useGeneralContext } from "../../contexts";
import { useUserById, useWorkOrderById } from "../../hooks/useReactQuery";

type CheckListItemProps = {
  completed: boolean;
  task: string;
};

export function OrderDetails() {
  const { selectedOrderId } = useGeneralContext();
  const { workOrder, isLoading } = useWorkOrderById(selectedOrderId);

  // useCallback?

  // const users = !isLoading && workOrder.assignedUserIds.map((id: number) => {
  //   const { user, isLoading, isRefetching } = useUserById(id);
  //   return { user, isLoading, isRefetching };
  // });

  // console.log(users)

  return (
    <div className="w-full rounded-2xl border h-full p-4">
      {!isLoading && (
        <div>
          <header>
            <h1 className="text-3xl font-medium max-[425px]:text-2xl">
              {workOrder.title}
            </h1>
            <p className="mt-4">{workOrder.description}</p>
          </header>

          <Divider type="horizontal" className="mt-4 mb-6 border" />

          <div className="flex flex-col gap-4 items-start">
            {workOrder.checklist.map((item: CheckListItemProps) => (
              <Checkbox
                key={item.task}
                defaultChecked={item.completed}
                style={{
                  marginInlineStart: 0,
                }}
              >
                {item.task}
              </Checkbox>
            ))}
          </div>

          <Divider type="horizontal" className="mt-6 mb-4 border" />

          <div>
            <h2 className="text-lg">Responsáveis</h2>
            {/* {users ? users.map((user: any) => <div>{user.name}</div>) : null} */}
          </div>
        </div>
      )}
    </div>
  );
}
