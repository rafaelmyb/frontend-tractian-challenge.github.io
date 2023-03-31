import { useRef } from "react";
import { Checkbox, Col, Form, FormInstance, Input, Row, Select } from "antd";

import { Asset, User } from "../../types/commonTypes";

const { Option } = Select;

type CreateWorkOrderForm = {
  assets: Asset[];
  users: User[];
};

export function CreateWorkOrderForm({ assets, users }: CreateWorkOrderForm) {
  const formRef = useRef<FormInstance>(null);

  return (
    <Form ref={formRef} name="control-ref" style={{ maxWidth: 600 }}>
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
          <Row>
            {users?.map((user) => (
              <Col key={user.id} span={8}>
                <Checkbox value={user.name}>{user.name}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
}
