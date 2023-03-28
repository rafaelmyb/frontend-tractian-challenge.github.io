import {
  GetAssetByIdPromise,
  GetAssetsPromise,
  GetUserByIdPromise,
  GetUsersPromise,
} from "../types/useApiPromises";
import {
  GetAssetByIdProps,
  GetAssetsProps,
  GetUserByIdProps,
  GetUsersProps,
} from "../types/useApiProps";
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
  const response = await client.get(ENDPOINTS.ASSET_BY_ID(id));

  return response.data;
}

export async function getUsersApi({
  client,
}: GetUsersProps): Promise<GetUsersPromise> {
  const response = await client.get(ENDPOINTS.USERS);

  return response.data;
}

export async function getUserByIdApi({
  client,
  id,
}: GetUserByIdProps): Promise<GetUserByIdPromise> {
  const response = await client.get(ENDPOINTS.USER_BY_ID(id));

  return response.data;
}