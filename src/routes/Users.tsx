import { Card } from "antd";
import { UsersSkeleton } from "../components/SkeletonsLoadings";
import { useGeneralContext } from "../contexts";
import { useUnitById, useUsers } from "../hooks/useReactQuery";

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

  const usersBySelectedUnit =
    !isUsersLoading &&
    // @ts-ignore acusa undefined por ser promise, mas por conta do !isUsersLoading nunca vai dar undefined
    users.filter((user: UserProps) => user.unitId === selectedUnit);

  return (
    <div className="grid grid-cols-autoFit w-full gap-4 items-center justify-center max-[360px]:grid-cols-1">
      {isUsersLoading || isUnitLoading ? (
        <UsersSkeleton isLoading={isUsersLoading || isUnitLoading} />
      ) : (
        // @ts-ignore acusa false mas nesse ponto o usersBySelectedUnit já tem valor
        usersBySelectedUnit.map((user: any) => (
          <Card
            key={user.id}
            style={{
              flex: 1,
              width: "100%",
            }}
          >
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col justify-start gap-2">
                <p>Nome:</p>
                <p>E-mail:</p>
                <p>Unidade:</p>
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
