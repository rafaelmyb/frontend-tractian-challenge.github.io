import { Axios } from "axios";

export type GetAssetsProps = {
  client: Axios;
}

export type GetAssetByIdProps = {
  client: Axios;
  id: number;
}