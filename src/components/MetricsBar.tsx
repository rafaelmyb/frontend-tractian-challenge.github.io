import {
  CalendarOutlined,
  HeartOutlined,
  HistoryOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import { Metric } from "./Metric";
import {
  dateTimeFormat,
  numberToHour,
  statusFormatIcon,
  statusFormatText,
} from "../utils/commonFunctions";

type MetricsBarProps = {
  metrics: any;
  healthScore: any;
  status: any;
};

export function MetricsBar({ metrics, healthScore, status }: MetricsBarProps) {
  return (
    <div className="flex flex-row justify-between gap-6 w-full">
      <Metric
        icon={
          <RiseOutlined
            style={{
              fontSize: 24,
              color: "#1D4ED8",
            }}
          />
        }
        label="Total de Coletas Uptime (Ligada)"
        value={metrics.totalCollectsUptime}
      />
      <Metric
        label="Total de Horas de Coletas Uptime (Ligada)"
        value={numberToHour(metrics.totalUptime)}
        icon={
          <HistoryOutlined
            style={{
              fontSize: 24,
              color: "#1D4ED8",
            }}
          />
        }
      />
      <Metric
        label="Data da Ultima Coleta Uptime (Ligada)"
        value={dateTimeFormat(metrics.lastUptimeAt)}
        icon={
          <CalendarOutlined
            style={{
              fontSize: 24,
              color: "#1D4ED8",
            }}
          />
        }
      />
      <Metric
        label="Saúde"
        value={`${healthScore}%`}
        icon={
          <HeartOutlined
            style={{
              fontSize: 24,
              color: "red",
            }}
          />
        }
      />
      <Metric
        icon={statusFormatIcon(status)}
        label="Status"
        value={statusFormatText(status)}
      />
    </div>
  );
}
