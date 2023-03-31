import { Checkbox } from "antd";
import { Checklist } from "../../types/commonTypes";

type CheckListOrderProps = {
  checklist: Checklist[];
};

export function ChecklistOrder({ checklist }: CheckListOrderProps) {
  return (
    <div>
      {checklist.map((item: Checklist) => (
        <Checkbox>{item.task}</Checkbox>
      ))}
    </div>
  );
}
