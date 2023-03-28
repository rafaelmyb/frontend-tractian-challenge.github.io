import axios, { Axios } from "axios";
import { getAssetByIdApi, getAssetsApi, getUserByIdApi, getUsersApi } from "../hooks/useApi";
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

  async getAssetById(id: number) {
    const data = await getAssetByIdApi({
      client: this.client,
      id,
    });

    return data;
  }

  async getUsers() {
    const data = await getUsersApi({
      client: this.client,
    });

    return data;
  }

  async getUserById(id: number) {
    const data = await getUserByIdApi({
      client: this.client,
      id
    });

    return data;
  }
}

export const apiService = new ApiService();