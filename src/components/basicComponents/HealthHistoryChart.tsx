import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

import { Card } from "antd";
import { Asset } from "../../types/commonTypes";

type HealthHistoryChart = {
  asset: Asset;
  isLoading: boolean;
}

export function HealthHistoryChart({ asset, isLoading }: HealthHistoryChart) {
  // const timeStamp =
  // !isLoading &&
  // asset.healthHistory.map((item: any) => ({
  //   timestamp: item.timestamp,
  // }));

  console.log(asset)


  const chartOptions = {
    chart: {
      type: "area",
    },
    accessibility: {
      description:
        "This chart describe the Health History of selected asset, with status and timestamp",
    },
    title: {
      text: "Nivel de Saúde",
    },
    xAxis: {
      labels: {
        text: ["2000", "2010", "2020"],
      },
    },
    yAxis: {
      title: {
        text: "Nuclear weapon states",
      },
      labels: {
        text: ["in", "2k", "3k"],
      },
    },
    series: [
      {
        name: "Health level",
        data: [1000, 2000, 3000],
      },
    ],
  };

  return (
    <Card className="mt-4">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Card>
  );
}
