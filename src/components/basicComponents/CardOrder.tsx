import { AuditOutlined } from "@ant-design/icons";
import { colorPriorityOrder } from "../../utils/commonFunctions";

type CardOrderProps = {
  title: string;
  status: string;
  priority: string;
};

export function CardOrder({ title, status, priority }: CardOrderProps) {
  return (
    <div className="cardOrder flex flex-row items-center w-full rounded-2xl bg-white p-4 cursor-pointer border transition duration-200 hover:bg-blue-500">
      <AuditOutlined className="text-[50px] text-blue-100" />
      <div className="flex flex-col gap-2 ml-2 w-full">
        <strong className="text-gray-700 transition duration-200">{title}</strong>

        <div className="flex flex-row justify-between">
          <span className="rounded-3xl bg-blue-100 px-2 h-4 text-[10px] font-semibold text-blue-500">
            {status}
          </span>
          <span
            className={`rounded-3xl ${colorPriorityOrder(
              priority
            )} px-2 h-4 text-[10px] font-semibold text-white capitalize`}
          >
            {priority}
          </span>
        </div>
      </div>
    </div>
  );
}
