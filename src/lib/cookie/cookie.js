import cookie from "js-cookie";

class Cookie {
  getCookie(key) {
    let item = undefined;
    if (cookie.get(key) !== undefined) {
      item = cookie.get(key);
    }
    return item;
  }

  setCookie(key, value) {
    cookie.set(key, value);
  }

  removeCookie(key) {
    cookie.remove(key);
  }
}

export default new Cookie();
