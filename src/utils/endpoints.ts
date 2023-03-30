export const ENDPOINTS = {
  ASSETS: "/assets",
  ASSET_BY_ID: (asset_id: number) => `/assets/${asset_id}`,
  COMPANIES: "/companies",
  UNITS: "/units",
  USERS: "/users",
  USER_BY_ID: (user_id: number) => `/users/${user_id}`,
  WORK_ORDERS: "/workorders",
  WORK_ORDER_BY_ID: (order_id: number) => `/workorders/${order_id}`,
}