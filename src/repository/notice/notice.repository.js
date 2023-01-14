import axios from "axios";

class noticeRepository {
  PostWriteNotice(postData) {
    const { data } = axios.post("/post", postData);
  }

  PostEditNotice(postData, postId) {
    const { data } = axios.patch(`/post/${postId}`, postData);
  }
}

export default new noticeRepository();
