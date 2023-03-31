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
  statusFormatIcon,
  statusFormatText,
} from "../../utils/commonFunctions";
import { Metrics } from "../../types/commonTypes";

type MetricsBarProps = {
  metrics: Metrics | undefined;
  healthScore: number | undefined;
  status: string | undefined;
};

export function MetricsBar({ metrics, healthScore, status }: MetricsBarProps) {
  return (
    <div className="flex flex-row justify-start gap-6 w-full max-[1440px]:gap-2 max-[1164px]:grid max-[1164px]:grid-cols-2 max-[768px]:grid-cols-1">
      <Card>
        <Metric
          icon={<RiseOutlined className="text-[24px] text-blue-500" />}
          label="Total Collects Uptime"
          value={metrics?.totalCollectsUptime}
        />
      </Card>
      <Card>
        <Metric
          label="Total Uptime"
          value={`${metrics?.totalUptime.toFixed(0)} horas`}
          icon={<HistoryOutlined className="text-[24px] text-blue-500" />}
        />
      </Card>
      <Card>
        <Metric
          label="Last Uptime At"
          value={dateTimeFormat(metrics?.lastUptimeAt, "DD/MM/YYYY HH:mm")}
          icon={<CalendarOutlined className="text-[24px] text-blue-500" />}
        />
      </Card>
      <Card>
        <Metric
          label="Health"
          value={`${healthScore}%`}
          className="mr-6"
          icon={<HeartOutlined className="text-[24px] text-red-500" />}
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
