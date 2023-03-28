import { GetAssetByIdPromise, GetAssetsPromise } from "../types/useApiPromises";
import { GetAssetByIdProps, GetAssetsProps } from "../types/useApiProps";
import { ENDPOINTS } from "../utils/endpoints";

export async function getAssetsApi({
  client,
}: GetAssetsProps): Promise<GetAssetsPromise> {
  const response = await client.get(ENDPOINTS.ASSETS);

  return response.data;
}

export async function getAssetByIdApi({
  client,
  id,
}: GetAssetByIdProps): Promise<GetAssetByIdPromise> {
  const response = await client.get(`${ENDPOINTS.ASSETS}/${id}`);

  return response.data;
}
