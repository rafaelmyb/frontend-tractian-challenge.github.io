import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Checkbox, Divider, Skeleton } from "antd";

import { User } from "../../types/commonTypes";
import { getUserById } from "../../hooks/useApi";
import { useGeneralContext, useModalsContext } from "../../contexts";
import { useWorkOrderById } from "../../hooks/useReactQuery";
import { OrderDetailsSkeleton } from "../SkeletonLoadings";
import { EditOutlined } from "@ant-design/icons";

type CheckListItemProps = {
  completed: boolean;
  task: string;
};

export function OrderDetails({ setWorkOrderId }: any) {
  const { handleOpenIsUpdateWorkOrderModal } = useModalsContext();
  const { selectedOrderId } = useGeneralContext();
  const { workOrder, isLoading } = useWorkOrderById(selectedOrderId);
  const [users, setUsers] = useState<User[]>([]);

  async function handleUsers() {
    const users = await Promise.all(
      // @ts-ignore
      workOrder.assignedUserIds.map(async (userId: number) => {
        const user = await getUserById(userId);
        return user;
      })
    );

    return users;
  }

  useEffect(() => {
    !isLoading && handleUsers().then((response) => setUsers(response));
  }, [workOrder]);

  return (
    <div className="w-full rounded-2xl border h-full p-4">
      {isLoading ? (
        <OrderDetailsSkeleton isLoading={isLoading} />
      ) : (
        <div>
          <header className="flex flex-row">
            <div className="flex flex-col">
              <h1 className="text-3xl font-medium max-[425px]:text-2xl">
                {workOrder?.title}
              </h1>
              <p className="mt-4">{workOrder?.description}</p>
            </div>
            <EditOutlined
              className="ml-auto"
              onClick={() => {
                setWorkOrderId(workOrder?.id);
                handleOpenIsUpdateWorkOrderModal();
              }}
            />
          </header>

          <Divider type="horizontal" className="mt-4 mb-6 border" />

          <div className="flex flex-col gap-4 items-start">
            {workOrder?.checklist.map((item: CheckListItemProps) => (
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
            <h2 className="text-lg mb-2">Responsible</h2>
            {isLoading ? (
              <Skeleton active={isLoading} />
            ) : (
              users.map((user: User) => <div key={user.id}>{user.name}</div>)
            )}
          </div>
        </div>
      )}
    </div>
  );
}
