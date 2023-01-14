import customAxios from "../../lib/axios/customAxios";

class joinRepository {
  PostJoinData(userData) {
    const { data } = customAxios.post("/user", userData);
    return data;
  }

  PostLogin(userData) {
    const data = customAxios.post("/user/auth", userData);
    return data;
  }
}

export default new joinRepository();
