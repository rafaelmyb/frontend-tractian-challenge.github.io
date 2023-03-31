import { useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  FormInstance,
  Input,
  Modal,
  Select,
  Upload,
} from "antd";
import { ExclamationCircleFilled, UploadOutlined } from "@ant-design/icons";
import { useModalsContext } from "../../contexts";
import { useUnits, useUsers } from "../../hooks/useReactQuery";
import { Asset } from "../../types/commonTypes";
import { SENSORS } from "../../utils/consts";

const { Option } = Select;

const { confirm } = Modal;

type UpdateAssetFormProps = {
  asset: Asset | undefined;
};

export function UpdateAssetForm({ asset }: UpdateAssetFormProps) {
  const { handleCloseIsUpdateAssetModal } = useModalsContext();
  const [selectedUnit, setSelectedUnit] = useState<number>();
  const formRef = useRef<FormInstance>(null);

  const { users } = useUsers();
  const { units } = useUnits();

  const formatFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  function handleSelectUnit(unit: string) {
    if (unit === "Jaguar Unit") {
      setSelectedUnit(1);
    } else {
      setSelectedUnit(2);
    }
  }

  function showDeleteConfirmation() {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: handleCloseIsUpdateAssetModal,
      className: "mt-6",
    });
  }

  useEffect(() => {
    if (asset?.unitId === 1) {
      setSelectedUnit(1);
    } else {
      setSelectedUnit(2);
    }
  }, []);

  return (
    <Form
      ref={formRef}
      initialValues={{
        sensors: asset?.sensors[0],
        maxTemp: asset?.specifications.maxTemp,
        power: asset?.specifications.power,
        rpm: asset?.specifications.rpm,
        name: asset?.name,
        model: asset?.model,
        unit: asset?.unitId === 1 ? "Jaguar Unit" : "Tobias Unit",
      }}
      name="control-ref"
      className="max-w-[600px] mt-6"
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="model" label="Model" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="sensors" label="Sensores" rules={[{ required: true }]}>
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
        <Upload
          maxCount={1}
          name="image"
          action="/upload.do"
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={(value) => handleSelectUnit(value)}
          allowClear
        >
          {units?.map((unit) => (
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
                <Checkbox
                  value={user.name}
                  disabled={selectedUnit !== user.unitId ? true : false}
                  style={{ lineHeight: "32px" }}
                >
                  {user.name}
                </Checkbox>
              </div>
            ))}
          </div>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item>
        <div className="flex flex-row justify-end gap-2">
          <Button className="mr-auto" danger onClick={showDeleteConfirmation}>
            Delete
          </Button>

          <Button className="bg-blue-500" type="primary" htmlType="submit">
            Update
          </Button>
          <Button
            danger
            htmlType="button"
            onClick={handleCloseIsUpdateAssetModal}
          >
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
