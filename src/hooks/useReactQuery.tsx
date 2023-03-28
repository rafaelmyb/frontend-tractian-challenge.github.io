import { useQuery } from "react-query";

import { apiService } from "../services/service.api";
import { UseAssets } from "../types/useReactQueryProps";

export function useAssets({ id }: UseAssets) {
  if (id) {
    const { data, isLoading, isRefetching } = useQuery(
      "getAssetById",
      async () => await apiService.getAssetById(id)
    );

    return { data, isLoading, isRefetching };
  }

  const { data, isLoading } = useQuery(
    "getAssets",
    async () => await apiService.getAssets()
  );

  return { data, isLoading };
}
