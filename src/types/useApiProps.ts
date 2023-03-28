import { Axios } from "axios";

export type GetAssetsProps = {
  client: Axios;
}

export type GetAssetByIdProps = {
  client: Axios;
  id: number;
}

export type GetUsersProps = {
  client: Axios;
}

export type GetUserByIdProps = {
  client: Axios;
  id: number;
}