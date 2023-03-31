import { useRef } from "react";
import { Button, Form, FormInstance, Input, Skeleton } from "antd";
import { useModalsContext } from "../../../contexts";
import { useUnitById } from "../../../hooks/useReactQuery";

type UpdateUnitProps = {
  unitId: number;
};

export function UpdateUnitForm({ unitId }: UpdateUnitProps) {
  const { handleCloseIsUpdateUnitModal } = useModalsContext();
  const formRef = useRef<FormInstance>(null);

  const { unit, isLoading, isRefetching } = useUnitById(unitId);

  return (
    <div className="mt-6">
      {isLoading || isRefetching ? (
        <Skeleton active={isLoading || isRefetching} title={false} />
      ) : (
        <Form
          ref={formRef}
          name="control-ref"
          initialValues={{ name: unit?.name }}
          className="max-w-[600px]"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <div className="flex flex-row justify-end gap-2">
              <Button className="bg-blue-500" type="primary" htmlType="submit">
                Update
              </Button>
              <Button
                danger
                htmlType="button"
                onClick={handleCloseIsUpdateUnitModal}
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
