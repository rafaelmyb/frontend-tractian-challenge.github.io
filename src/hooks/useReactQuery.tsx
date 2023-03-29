import { useQuery } from "react-query";

import { apiService } from "../services/service.api";

export function useAssets() {
  const { data: assets, isLoading } = useQuery(
    "getAssets",
    async () => await apiService.getAssets()
  );

  return { assets, isLoading };
}

export function useAssetById(id: number) {
  const { data, isLoading, isRefetching } = useQuery(
    ["asset", id],
    async () => await apiService.getAssetById(id)
  );

  return { data, isLoading, isRefetching };
}

export function useAssetByUnitId(unitId: number) {
  const { assets, isLoading } = useAssets();

  const assetsByUnit =
    !isLoading && assets.filter((asset: any) => asset.unitId === unitId);

  return { assetsByUnit, isLoading };
}

export function useUsers() {
  const { data, isLoading } = useQuery(
    "getUsers",
    async () => await apiService.getUsers()
  );

  return { data, isLoading };
}

export function useUserById(id: number) {
  const { data, isLoading, isRefetching } = useQuery(
    ["user", id],
    async () => await apiService.getUserById(id)
  );

  return { data, isLoading, isRefetching };
}

export function useUnits() {
  const { data, isLoading } = useQuery(
    "getUnits",
    async () => await apiService.getUnits()
  );

  return { data, isLoading };
}
