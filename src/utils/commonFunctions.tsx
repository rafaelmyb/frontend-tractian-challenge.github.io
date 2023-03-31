import {
  CheckCircleOutlined,
  StopOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

export function dateTimeFormat(value: string | undefined, format: string) {
  const dateTime = dayjs(value).format(format);
  return `${dateTime}h`;
}

export function statusFormatText(status: string | undefined) {
  switch (status) {
    case "inAlert":
      return "In Alert";
    case "inOperation":
      return "In Operation";
    case "inDowntime":
      return "Em Downtime";
    default:
      return "Processing...";
  }
}

export function statusFormatIcon(status: string | undefined) {
  switch (status) {
    case "inAlert":
      return (
        <WarningOutlined
          style={{
            fontSize: 24,
            color: "rgb(234 179 8)",
          }}
        />
      );
    case "inOperation":
      return (
        <CheckCircleOutlined
          style={{
            fontSize: 24,
            color: "rgb(21 128 61)",
          }}
        />
      );
    case "inDowntime":
      return (
        <StopOutlined
          style={{
            fontSize: 24,
            color: "rgb(185 28 28)",
          }}
        />
      );
    default:
      return "Processing...";
  }
}

export function colorPriorityOrder(priority: string | undefined) {
  switch (priority) {
    case "high":
      return "bg-red-500";
    case "medium":
      return "bg-orange-500";
    case "low":
      return "bg-yellow-500";
    default:
      return "bg-green-500";
  }
}
