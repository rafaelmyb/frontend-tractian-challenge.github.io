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
      description: "This is as Assets Health Score Chart",
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Health Score",
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
        name: "Health Score",
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
