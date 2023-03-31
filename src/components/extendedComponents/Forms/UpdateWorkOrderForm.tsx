import { useRef } from "react";
import { Button, Checkbox, Form, FormInstance, Input, Select } from "antd";

import { useModalsContext } from "../../../contexts";
import {
  useAssetById,
  useUsers,
  useWorkOrderById,
} from "../../../hooks/useReactQuery";

type CreateWorkOrderForm = {
  workorderId: number;
};

export function UpdateWorkOrderForm({ workorderId }: CreateWorkOrderForm) {
  const formRef = useRef<FormInstance>(null);
  const { handleCloseIsCreateWorkOrderModal } = useModalsContext();

  const { workOrder } = useWorkOrderById(workorderId);
  const { users } = useUsers();

  return (
    <Form
      ref={formRef}
      initialValues={{
        title: workOrder?.title,
        checklist: workOrder?.checklist,
        description: workOrder?.description,
      }}
      name="control-ref"
      className="max-w-[600px] mt-6"
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="assign-users"
        label="Assign Users"
        rules={[{ required: true }]}
      >
        <Checkbox.Group>
          <div className="grid grid-cols-2">
            {users?.map((user) => (
              <div key={user.id}>
                <Checkbox value={user.name}>{user.name}</Checkbox>
              </div>
            ))}
          </div>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item>
        <div className="flex flex-row justify-end mb-[-32px] gap-2">
          <Button className="bg-blue-500" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            danger
            htmlType="button"
            onClick={handleCloseIsCreateWorkOrderModal}
          >
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
