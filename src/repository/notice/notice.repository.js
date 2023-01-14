import axios from "axios";
import customAxios from "../../lib/axios/customAxios";

class noticeRepository {
  PostWriteNotice(postData) {
    const { data } = axios.post("/post", postData);
  }

  PostEditNotice(postData, postId) {
    const { data } = axios.patch(`/post/${postId}`, postData);
  }

  GetNotice(tag) {
    const { data } = customAxios.get(`/post/tag?tag=${tag}`);
    return data;
  }
}

export default new noticeRepository();
