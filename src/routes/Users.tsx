import { useState } from "react";
import { Button, Card, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { useUnitById, useUsers } from "../hooks/useReactQuery";
import { UsersSkeleton } from "../components/skeletonsLoadings";
import { useGeneralContext, useModalsContext } from "../contexts";
import { CreateUserForm, UpdateUserForm } from "../components/extendedComponents/Forms";

type UserProps = {
  companyId: number;
  email: string;
  id: number;
  name: string;
  unitId: number;
};

export function Users() {
  const { selectedUnit } = useGeneralContext();
  const {
    handleCloseIsUpdateUserModal,
    handleOpenIsUpdateUserModal,
    isUpdateUserOpen,
    isCreateUserOpen,
    handleOpenIsCreateUserModal,
    handleCloseIsCreateUserModal,
  } = useModalsContext();
  const { users, isLoading: isUsersLoading } = useUsers();
  const { unit, isLoading: isUnitLoading } = useUnitById(selectedUnit);
  const [selectedUser, setSelectedUser] = useState<number>(0);

  const usersBySelectedUnit = users?.filter(
    (user: UserProps) => user.unitId === selectedUnit
  );

  return (
    <div className="flex flex-col gap-6">
      <Button
        type="primary"
        ghost
        className="ml-auto"
        onClick={handleOpenIsCreateUserModal}
      >
        Create User
      </Button>
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
              <div className="flex flex-col w-full gap-2">
                <EditOutlined
                  className="ml-auto"
                  onClick={() => {
                    setSelectedUser(user.id);
                    handleOpenIsUpdateUserModal();
                  }}
                />
                <div className="flex flex-row gap-6">
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
              </div>
            </Card>
          ))
        )}
        <Modal
          title="Create User"
          open={isCreateUserOpen}
          onCancel={handleCloseIsCreateUserModal}
          footer={false}
        >
          <CreateUserForm />
        </Modal>
        <Modal
          title="Update User"
          open={isUpdateUserOpen}
          onCancel={handleCloseIsUpdateUserModal}
          footer={false}
        >
          <UpdateUserForm userId={selectedUser} />
        </Modal>
      </div>
    </div>
  );
}
