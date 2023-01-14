import axios from "axios";
import config from "../../config/config.json";
import { REQUEST_TOKEN_KEY } from "../../constants/token/token.contants";
import cookie from "../cookie/cookie";

const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie("access-token")}`,
  },
});

export default customAxios;
