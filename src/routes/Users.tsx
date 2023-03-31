import { Card } from "antd";

import { useGeneralContext } from "../contexts";
import { useUnitById, useUsers } from "../hooks/useReactQuery";
import { UsersSkeleton } from "../components/skeletonsLoadings";

type UserProps = {
  companyId: number;
  email: string;
  id: number;
  name: string;
  unitId: number;
};

export function Users() {
  const { selectedUnit } = useGeneralContext();
  const { users, isLoading: isUsersLoading } = useUsers();
  const { unit, isLoading: isUnitLoading } = useUnitById(selectedUnit);

  const usersBySelectedUnit = users?.filter(
    (user: UserProps) => user.unitId === selectedUnit
  );

  return (
    <div className="grid grid-cols-autoFit w-full gap-4 items-center justify-center max-[360px]:grid-cols-1">
      {isUsersLoading || isUnitLoading ? (
        <UsersSkeleton isLoading={isUsersLoading || isUnitLoading} />
      ) : (
        usersBySelectedUnit?.map((user: any) => (
          <Card
            key={user.id}
            style={{
              flex: 1,
              width: "100%",
            }}
          >
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col justify-start gap-2">
                <p>Name:</p>
                <p>Email:</p>
                <p>Unit:</p>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <strong>{user.name}</strong>
                <strong>{user.email}</strong>
                <strong>{unit?.name}</strong>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
