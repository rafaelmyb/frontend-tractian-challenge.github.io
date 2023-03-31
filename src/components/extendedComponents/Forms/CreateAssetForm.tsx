import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  FormInstance,
  Input,
  Select,
  Upload,
} from "antd";
import { useRef } from "react";
import { useModalsContext } from "../../../contexts";
import { formatFile } from "../../../utils/commonFunctions";

import { SENSORS } from "../../../utils/consts";

const { Option } = Select;

export function CreateAssetForm() {
  const { handleCloseIsCreateAssetModal } = useModalsContext();
  const formRef = useRef<FormInstance>(null);

  return (
    <Form ref={formRef} name="control-ref" style={{ maxWidth: 600 }}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="model" label="Model" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="sensors" label="Sensors" rules={[{ required: true }]}>
        <Select mode="tags" allowClear placeholder="Choose sensors">
          {SENSORS.map((sensor: string) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="maxTemp"
        label="Max Temperature"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="power" label="Power" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="rpm" label="RPM" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={formatFile}
        rules={[{ required: true }]}
      >
        <Upload name="assetImage" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <div className="flex flex-row md:flex-row gap-2 flex-wrap">
          <Button className="bg-blue-500" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            danger
            htmlType="button"
            onClick={handleCloseIsCreateAssetModal}
          >
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
