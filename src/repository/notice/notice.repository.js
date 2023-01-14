import customAxios from "../../lib/axios/customAxios";

class noticeRepository {
  PostWriteNotice(postData) {
    const { data } = customAxios.post("/post", postData);
    return data;
  }

  PostEditNotice(postData, postId) {
    const { data } = customAxios.patch(`/post/${postId}`, postData);
  }
}

export default new noticeRepository();
