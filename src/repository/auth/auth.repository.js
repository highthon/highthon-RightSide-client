import axios from "axios";

class joinRepository {
  PostJoinData(userData) {
    const { data } = axios.post("/user", userData);
    return data;
  }
}

export default new joinRepository();
