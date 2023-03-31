import { Card } from "antd";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { ChartProps } from "../../types/commonTypes";

export function AssetsHealthScoreChart({ data }: ChartProps) {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      events: {
        render: function () {
          this.reflow();
        },
      },
    },
    title: {
      text: undefined,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Porcentagem de Saúde",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },
    series: [
      {
        type: "column",
        name: "Porcentagem de Saúde",
        colorByPoint: true,
        data: data,
      },
    ],
  };

  return (
    <div className="p-6 border rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
