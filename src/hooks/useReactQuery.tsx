import { useEffect } from "react";
import { useQuery } from "react-query";
import { useGeneralContext } from "../contexts/GeneralContext";

import { apiService } from "../services/service.api";
import { Asset } from "../types/commonTypes";

export function useAssets() {
  const { data: assets, isLoading } = useQuery(
    "getAssets",
    async () => await apiService.getAssets()
  );

  return { assets, isLoading };
}

export function useAssetById(id: number) {
  const {
    data: asset,
    isLoading,
    isRefetching,
  } = useQuery(["asset", id], async () => await apiService.getAssetById(id));

  return { asset, isLoading, isRefetching };
}

export function useAssetByUnitId(unitId: number) {
  const { assets, isLoading } = useAssets();
  const { selectedUnit, oldUnit, setSelectedAssetId } = useGeneralContext();

  const assetsByUnit =
    !isLoading && assets?.filter((asset: Asset) => asset.unitId === unitId);

  useEffect(() => {
    if (oldUnit !== selectedUnit && !isLoading) {
      // @ts-ignore acusa false mas por estar dentro do if de !isLoading, nunca vai dar false
      setSelectedAssetId(assetsByUnit[0].id);
    }
  }, [selectedUnit]);

  return { assetsByUnit, isLoading };
}

export function useUsers() {
  const { data: users, isLoading } = useQuery(
    "getUsers",
    async () => await apiService.getUsers()
  );

  return { users, isLoading };
}

export function useUserById(id: number) {
  const {
    data: user,
    isLoading,
    isRefetching,
  } = useQuery(["user", id], async () => await apiService.getUserById(id));

  return { user, isLoading, isRefetching };
}

export function useUnits() {
  const { data: units, isLoading } = useQuery(
    "getUnits",
    async () => await apiService.getUnits()
  );

  return { units, isLoading };
}

export function useUnitById(id: number) {
  const { data: unit, isLoading } = useQuery(
    ["unit", id],
    async () => await apiService.getUnitById(id)
  );

  return { unit, isLoading };
}

export function useCompanies() {
  const { data: companies, isLoading } = useQuery(
    "getCompanies",
    async () => await apiService.getCompanies()
  );

  return { companies, isLoading };
}

export function useWorkOrders() {
  const { data: workOrders, isLoading } = useQuery(
    "getWorkOrders",
    async () => await apiService.getWorkOrders()
  );

  return { workOrders, isLoading };
}

export function useWorkOrderById(id: number) {
  const {
    data: workOrder,
    isLoading,
    isRefetching,
  } = useQuery(
    ["workOrder", id],
    async () => await apiService.getWorkOrderById(id)
  );

  return { workOrder, isLoading, isRefetching };
}
