import customAxios from "../../lib/axios/customAxios";

class joinRepository {
  PostJoinData(userData) {
    const { data } = customAxios.post("/user", userData);
    return data;
  }

  PostLogin(userData) {
    const { data } = customAxios.post("/user/auth", userData);
  }
}

export default new joinRepository();
