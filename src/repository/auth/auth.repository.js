import axios from "axios";

class joinRepository {
  PostJoinData(userData) {
    const { data } = axios.post("/user", userData);
    return data;
  }

  PostLogin(userData) {
    const { data } = axios.post("/user/auth", userData);
  }
}

export default new joinRepository();
