import {
  CalendarOutlined,
  HeartOutlined,
  HistoryOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import { Card } from "antd";
import { Metric } from "../basicComponents";
import {
  dateTimeFormat,
  numberToHour,
  statusFormatIcon,
  statusFormatText,
} from "../../utils/commonFunctions";

type MetricsBarProps = {
  metrics: any;
  healthScore: any;
  status: any;
};

export function MetricsBar({ metrics, healthScore, status }: MetricsBarProps) {
  return (
    <div className="flex flex-row justify-start gap-6 w-full max-[1440px]:gap-2 max-[1164px]:grid max-[1164px]:grid-cols-2 max-[768px]:grid-cols-1">
      <Card>
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
      </Card>
      <Card>
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
      </Card>
      <Card>
        <Metric
          label="Data da Ultima Coleta Uptime (Ligada)"
          value={dateTimeFormat(metrics.lastUptimeAt, "DD/MM/YYYY HH:mm")}
          icon={
            <CalendarOutlined
              style={{
                fontSize: 24,
                color: "#1D4ED8",
              }}
            />
          }
        />
      </Card>
      <Card>
        <Metric
          label="Saúde"
          value={`${healthScore}%`}
          className="mr-6"
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
      </Card>
    </div>
  );
}
