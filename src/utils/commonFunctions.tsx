import {
  AlertOutlined,
  CheckCircleOutlined,
  StopOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

export function numberToHour(value: number) {
  var hours = Math.floor(value / 60);
  return `${hours}h`;
}

export function dateTimeFormat(value: string, format: string) {
  const dateTime = dayjs(value).format(format);
  return `${dateTime}h`;
}

export function statusFormatText(status: string) {
  switch (status) {
    case "inAlert":
      return "Em Alerta";
    case "inOperation":
      return "Em Operação";
    case "inDowntime":
      return "Em Parada";
    default:
      return "Processando...";
  }
}

export function statusFormatIcon(status: string) {
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
      return "Processando...";
  }
}
