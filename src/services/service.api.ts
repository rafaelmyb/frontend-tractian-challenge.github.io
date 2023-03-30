import axios, { Axios } from "axios";
import {
  getAssetByIdApi,
  getAssetsApi,
  getUnitsApi,
  getUserByIdApi,
  getUsersApi,
  getWorkOrderByIdApi,
  getWorkOrdersApi,
} from "../hooks/useApi";
import { BASE_URL } from "../utils/consts";

export default class ApiService {
  private baseUrl!: string;
  private client!: Axios;

  constructor() {
    this.baseUrl = BASE_URL;
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async getAssets() {
    const data = await getAssetsApi({
      client: this.client,
    });

    return data;
  }

  async getAssetById(assetId: number) {
    const data = await getAssetByIdApi({
      client: this.client,
      assetId,
    });

    return data;
  }

  async getUsers() {
    const data = await getUsersApi({
      client: this.client,
    });

    return data;
  }

  async getUserById(userId: number) {
    const data = await getUserByIdApi({
      client: this.client,
      userId,
    });

    return data;
  }

  async getUnits() {
    const data = await getUnitsApi({
      client: this.client,
    });

    return data;
  }

  async getWorkOrders() {
    const data = await getWorkOrdersApi({
      client: this.client,
    });

    return data;
  }

  async getWorkOrderById(orderId: number) {
    const data = await getWorkOrderByIdApi({
      client: this.client,
      orderId: orderId,
    });

    return data;
  }
}

export const apiService = new ApiService();
