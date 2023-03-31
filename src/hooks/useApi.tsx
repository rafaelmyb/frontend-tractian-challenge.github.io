import { api } from "../services/api";
import { ENDPOINTS } from "../utils/endpoints";
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

export async function getAssets(): Promise<GetAssetsPromise> {
  const response = await api.get(ENDPOINTS.ASSETS);

  return response.data;
}

export async function getAssetById(
  assetId: number
): Promise<GetAssetByIdPromise> {
  const response = await api.get(ENDPOINTS.ASSET_BY_ID(assetId));

  return response.data;
}

export async function getUsers(): Promise<GetUsersPromise> {
  const response = await api.get(ENDPOINTS.USERS);

  return response.data;
}

export async function getUserById(userId: number): Promise<GetUserByIdPromise> {
  const response = await api.get(ENDPOINTS.USER_BY_ID(userId));

  return response.data;
}

export async function getUnits(): Promise<GetUnitsPromise> {
  const response = await api.get(ENDPOINTS.UNITS);

  return response.data;
}

export async function getUnitById(unitId: number): Promise<GetUnitByIdPromise> {
  const response = await api.get(ENDPOINTS.UNIT_BY_ID(unitId));

  return response.data;
}

export async function getCompanies(): Promise<GetCompaniesPromise> {
  const response = await api.get(ENDPOINTS.COMPANIES);

  return response.data;
}

export async function getWorkOrders(): Promise<GetWorkOrdersPromise> {
  const response = await api.get(ENDPOINTS.WORK_ORDERS);

  return response.data;
}

export async function getWorkOrderById(
  orderId: number
): Promise<GetWorkOrderByIdPromise> {
  const response = await api.get(ENDPOINTS.WORK_ORDER_BY_ID(orderId));

  return response.data;
}
