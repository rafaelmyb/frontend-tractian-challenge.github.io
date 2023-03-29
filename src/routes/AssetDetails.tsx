import { Button, Drawer } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams, useNavigate } from "react-router-dom";

import { BasicMachineInfo } from "../components/BasicMachineInfo";
import { MetricsBar } from "../components/MetricsBar";
import { MobileActions } from "../components/MobileActions";
import { useDrawerContext } from "../contexts/DrawerContext";
import { useGeneralContext } from "../contexts/GeneralContext";
import { useAssetById } from "../hooks/useReactQuery";

export function AssetDetails() {
  const { id } = useParams();
  const { data, isLoading, isRefetching } = useAssetById(Number(id));
  const {
    isBasicInfoDrawerOpen,
    isMetricsDrawerOpen,
    handleCloseBasicInfoDrawer,
    handleCloseMetricsDrawer,
  } = useDrawerContext();
  const { selectedUnit } = useGeneralContext();
  const isMobile = useMediaQuery({ maxWidth: 378 });

  const timeStamp =
    !isLoading &&
    data.healthHistory.map((item: any) => ({
      timestamp: item.timestamp,
    }));

  const getOptions = (type: string) => ({
    chart: {
      type,
      width: 500,
      height: 300,
    },
    title: {
      text: "",
    },

    series: [
      {
        data: timeStamp,
      },
    ],
  });
  
  return (
    <div>
      {isLoading || isRefetching ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row">
          <div className="max-[910px]:hidden">
            <BasicMachineInfo
              image={data.image}
              model={data.model}
              name={data.name}
              sensors={data.sensors}
              specifications={data.specifications}
              assignedUserIds={data.assignedUserIds}
            />
          </div>
          <div className="ml-4 w-full max-[910px]:ml-0">
            <MobileActions />

            <div className="max-[768px]:hidden">
              <MetricsBar
                metrics={data.metrics}
                healthScore={data.healthscore}
                status={data.status}
              />
            </div>

            <Drawer
              title="Métricas do Ativo"
              open={isMetricsDrawerOpen}
              onClose={handleCloseMetricsDrawer}
              placement="left"
              width={isMobile ? 320 : 378}
            >
              <MetricsBar
                metrics={data.metrics}
                healthScore={data.healthscore}
                status={data.status}
              />
            </Drawer>

            <Drawer
              title="Informações do Ativo"
              open={isBasicInfoDrawerOpen}
              onClose={handleCloseBasicInfoDrawer}
              placement="right"
              width={isMobile ? 320 : 378}
            >
              <BasicMachineInfo
                image={data.image}
                model={data.model}
                name={data.name}
                sensors={data.sensors}
                specifications={data.specifications}
                assignedUserIds={data.assignedUserIds}
              />
            </Drawer>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <HighchartsReact
              highcharts={Highcharts}
              options={getOptions("spline")}
            /> */
}
