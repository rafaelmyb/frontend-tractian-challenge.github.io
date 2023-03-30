import { Axios } from "axios";

export type GetAssetsProps = {
  client: Axios;
}

export type GetAssetByIdProps = {
  client: Axios;
  assetId: number;
}

export type GetUsersProps = {
  client: Axios;
}

export type GetUserByIdProps = {
  client: Axios;
  userId: number;
}

export type GetUnitsProps = {
  client: Axios;
}

export type GetUnitByIdProps = {
  client: Axios;
  unitId: number;
}

export type GetCompaniesProps = {
  client: Axios;
}

export type GetWorkOrdersProps = {
  client: Axios;
}

export type GetWorkOrderByIdProps = {
  client: Axios;
  orderId: number;
}
