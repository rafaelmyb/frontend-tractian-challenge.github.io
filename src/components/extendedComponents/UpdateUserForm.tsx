import { Button, Form, FormInstance, Input, Select, Skeleton } from "antd";
import { useRef } from "react";
import { useModalsContext } from "../../contexts";
import { useUnits, useUserById } from "../../hooks/useReactQuery";
import { User } from "../../types/commonTypes";

const { Option } = Select;

type UpdateUserForm = {
  userId: number;
};

export function UpdateUserForm({ userId }: UpdateUserForm) {
  const { handleCloseIsUpdateUserModal } = useModalsContext();
  const formRef = useRef<FormInstance>(null);

  const { units } = useUnits();

  const { user, isLoading, isRefetching } = useUserById(userId);

  function handleUnitName(unitId: number | undefined) {
    if (unitId === 1) {
      return "Jaguar Unit";
    }
    if (unitId === 2) {
      return "Tobias Unit";
    }
  }

  return (
    <div className="mt-6">
      {isLoading || isRefetching ? (
        <Skeleton active={isLoading || isRefetching} />
      ) : (
        <Form
          ref={formRef}
          name="control-ref"
          initialValues={{
            name: user?.name,
            email: user?.email,
            unit: handleUnitName(user?.unitId),
          }}
          className="max-w-[600px]"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {units?.map((unit) => (
                <Option key={unit.id} value={unit.name}>
                  {unit.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <div className="flex flex-row justify-end gap-2">
              <Button className="bg-blue-500" type="primary" htmlType="submit">
                Update
              </Button>
              <Button
                danger
                htmlType="button"
                onClick={handleCloseIsUpdateUserModal}
              >
                Cancel
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
