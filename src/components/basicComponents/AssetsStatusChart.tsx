import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { ChartProps } from "../../types/commonTypes";

export function AssetsStatusChart({ data }: ChartProps) {
  const formattedData = data?.map((item: any) => {
    if (item.name === "inOperation") {
      item.name = "Em Operação";
    } else if (item.name === "inAlert") {
      item.name = "Em Alerta";
    } else if (item.name === "inDowntime") {
      item.name = "Em Parada";
    }
    return item;
  });

  const chartOptions: Highcharts.Options = {
    chart: {
      plotShadow: false,
      type: "pie",
      events: {
        render: function () {
          this.reflow();
        },
      },
    },
    title: {
      text: "Asset Status",
    },
    accessibility: {
      description: "This chart describe the Status of Assets",
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Asset Status",
        colorByPoint: true,
        data: formattedData,
      },
    ],
  };

  return (
    <div className="p-6 border rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
