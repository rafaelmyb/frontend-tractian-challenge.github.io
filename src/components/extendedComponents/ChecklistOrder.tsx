import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

type CheckListOrderProps = {
  checklist: any;
};

export function ChecklistOrder({ checklist }: CheckListOrderProps) {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  console.log(checklist)

  return (
    <div>
      {checklist.map((item: any) => (
        <Checkbox onChange={onChange}>{item.task}</Checkbox>
      ))}
    </div>
  );
}
