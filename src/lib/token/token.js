import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.contants";
import cookie from "../cookie/cookie";

class Token {
  getToken(key) {
    return cookie.getCookie(key);
  }

  setToken(key, token) {
    cookie.setCookie(key, token);
  }

  clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
