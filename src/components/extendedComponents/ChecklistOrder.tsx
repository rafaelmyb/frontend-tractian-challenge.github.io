import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checklist } from "../../types/commonTypes";

type CheckListOrderProps = {
  checklist: Checklist[];
};

export function ChecklistOrder({ checklist }: CheckListOrderProps) {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  console.log(checklist);

  return (
    <div>
      {checklist.map((item: Checklist) => (
        <Checkbox onChange={onChange}>{item.task}</Checkbox>
      ))}
    </div>
  );
}
