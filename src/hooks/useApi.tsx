import {
  GetAssetByIdPromise,
  GetAssetsPromise,
  GetCompaniesPromise,
  GetUnitByIdPromise,
  GetUnitsPromise,
  GetUserByIdPromise,
  GetUsersPromise,
  GetWorkOrderByIdPromise,
  GetWorkOrdersPromise,
} from "../types/useApiPromises";
import {
  GetAssetByIdProps,
  GetAssetsProps,
  GetCompaniesProps,
  GetUnitByIdProps,
  GetUnitsProps,
  GetUserByIdProps,
  GetUsersProps,
  GetWorkOrderByIdProps,
  GetWorkOrdersProps,
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
  assetId,
}: GetAssetByIdProps): Promise<GetAssetByIdPromise> {
  const response = await client.get(ENDPOINTS.ASSET_BY_ID(assetId));

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
  userId,
}: GetUserByIdProps): Promise<GetUserByIdPromise> {
  const response = await client.get(ENDPOINTS.USER_BY_ID(userId));

  return response.data;
}

export async function getUnitsApi({
  client,
}: GetUnitsProps): Promise<GetUnitsPromise> {
  const response = await client.get(ENDPOINTS.UNITS);

  return response.data;
}

export async function getUnitByIdApi({
  client,
  unitId,
}: GetUnitByIdProps): Promise<GetUnitByIdPromise> {
  const response = await client.get(ENDPOINTS.UNIT_BY_ID(unitId));

  return response.data;
}

export async function getCompaniesApi({
  client,
}: GetCompaniesProps): Promise<GetCompaniesPromise> {
  const response = await client.get(ENDPOINTS.COMPANIES);

  return response.data;
}

export async function getWorkOrdersApi({
  client,
}: GetWorkOrdersProps): Promise<GetWorkOrdersPromise> {
  const response = await client.get(ENDPOINTS.WORK_ORDERS);

  return response.data;
}

export async function getWorkOrderByIdApi({
  client,
  orderId,
}: GetWorkOrderByIdProps): Promise<GetWorkOrderByIdPromise> {
  const response = await client.get(ENDPOINTS.WORK_ORDER_BY_ID(orderId));

  return response.data;
}
