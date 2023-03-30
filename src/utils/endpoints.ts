export const ENDPOINTS = {
  ASSETS: "/assets",
  ASSET_BY_ID: (assetId: number) => `/assets/${assetId}`,
  COMPANIES: "/companies",
  UNITS: "/units",
  UNIT_BY_ID: (unitId: number) => `/units/${unitId}`,
  USERS: "/users",
  USER_BY_ID: (userId: number) => `/users/${userId}`,
  WORK_ORDERS: "/workorders",
  WORK_ORDER_BY_ID: (orderId: number) => `/workorders/${orderId}`,
}