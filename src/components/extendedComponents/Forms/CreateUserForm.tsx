import { useRef } from "react";

import { Button, Form, FormInstance, Input } from "antd";
import { useModalsContext } from "../../../contexts";

export function CreateUserForm() {
  const { handleCloseIsCreateUserModal } = useModalsContext();
  const formRef = useRef<FormInstance>(null);

  return (
    <Form ref={formRef} name="control-ref" className="max-w-[600px] mt-6">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <div className="flex flex-row gap-2 justify-end">
          <Button className="bg-blue-500" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            danger
            htmlType="button"
            onClick={handleCloseIsCreateUserModal}
          >
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
