import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

import { Card } from "antd";
import { useMediaQuery } from "react-responsive";

type HealthHistoryChart = {
  healthHistory:
    | {
        status: string;
        timestamp: string;
      }[]
    | undefined;
  isLoading: boolean;
};

type Status = {
  [key: string]: number;
};

export function HealthHistoryChart({
  healthHistory,
  isLoading,
}: HealthHistoryChart) {
  const dates = healthHistory?.map((item) => item.timestamp);

  const formattedStatusKeys: Status = {
    inOperation: 0,
    plannedStop: 1,
    inAlert: 2,
    inDowntime: 3,
    unplannedStop: 4,
  };

  const formattedStatus = healthHistory?.map(
    (item) => formattedStatusKeys[item.status]
  );

  const isLargeDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const isDesktopScreen = useMediaQuery({ maxWidth: 1439 });
  const isLaptopScreen = useMediaQuery({ maxWidth: 1120 });
  const isTabletScreen = useMediaQuery({ maxWidth: 910 });
  const isMobileTabletScreen = useMediaQuery({ maxWidth: 767 });
  const isMobileScreen = useMediaQuery({ maxWidth: 488 });
  const isSmallMobileScreen = useMediaQuery({ maxWidth: 374 });

  function handleChartWidth() {
    if (isSmallMobileScreen) return 260;
    if (isMobileScreen) return 300;
    if (isMobileTabletScreen) return 400;
    if (isTabletScreen) return 650;
    if (isLaptopScreen) return 500;
    if (isDesktopScreen) return 700;
    if (isLargeDesktopScreen) return 1000;
  }

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
      width: handleChartWidth(),
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      description:
        "This chart describe the Health History of selected asset, with status and timestamp",
    },
    title: {
      text: "Health History",
    },
    xAxis: {
      type: "datetime",
      categories: dates?.map((date) => {
        return Highcharts.dateFormat("%d/%m", new Date(date).getTime());
      }),
    },
    yAxis: {
      max: 4,
      gridLineColor: "rgba(0,0,0,0.1)",
      min: 0,
      title: {
        text: null,
      },
      type: "category",
      categories: [
        "In Operation",
        "Planned Stop",
        "In Alert",
        "In Downtime",
        "Unplanned Stop",
      ],
    },
    series: [{ name: "Status", type: "line", data: formattedStatus }],
  };

  return (
    <Card className="mt-4">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Card>
  );
}
