import axios from "axios";

class noticeRepository {
  PostWriteNotice(postData) {
    const { data } = axios.post("/post", postData);
  }
}

export default new noticeRepository();
