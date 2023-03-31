import { useRef } from "react";
import { Button, Checkbox, Form, FormInstance, Input, Select } from "antd";

import { Asset, User } from "../../../types/commonTypes";
import { useModalsContext } from "../../../contexts";

const { Option } = Select;

type CreateWorkOrderForm = {
  assets: Asset[] | undefined;
  users: User[] | undefined;
};

export function CreateWorkOrderForm({ assets, users }: CreateWorkOrderForm) {
  const formRef = useRef<FormInstance>(null);
  const { handleCloseIsCreateWorkOrderModal } = useModalsContext();

  return (
    <Form ref={formRef} name="control-ref" className="max-w-[600px] mt-6">
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
      <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="high">High</Option>
          <Option value="medium">Medium</Option>
          <Option value="low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item name="asset" label="Asset" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          {assets?.map((unit) => (
            <Option key={unit.id} value={unit.name}>
              {unit.name}
            </Option>
          ))}
        </Select>
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
