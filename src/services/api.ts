import axios from "axios";

import { BASE_URL } from "../utils/consts";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
