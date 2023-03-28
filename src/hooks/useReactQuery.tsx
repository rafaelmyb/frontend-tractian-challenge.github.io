import { useQuery } from "react-query";

import { apiService } from "../services/service.api";

export function useAssets() {
  const { data, isLoading } = useQuery(
    "getAssets",
    async () => await apiService.getAssets()
  );

  return { data, isLoading };
}

export function useAssetById(id: number) {
  const { data, isLoading, isRefetching } = useQuery(
    "getAssetById",
    async () => await apiService.getAssetById(id)
  );

  return { data, isLoading, isRefetching };
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
