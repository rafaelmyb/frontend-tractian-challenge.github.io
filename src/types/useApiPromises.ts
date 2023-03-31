import { Asset, Company, Unit, User, WorkOrder } from "./commonTypes";

export type GetAssetsPromise = Asset[];

export type GetAssetByIdPromise = Asset;

export type GetUsersPromise = User[];

export type GetUserByIdPromise = User;

export type GetUnitsPromise = Unit[];

export type GetUnitByIdPromise = Unit;

export type GetCompaniesPromise = Company[];

export type GetWorkOrdersPromise = WorkOrder[];

export type GetWorkOrderByIdPromise = WorkOrder;
