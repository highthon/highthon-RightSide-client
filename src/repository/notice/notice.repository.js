import customAxios from "../../lib/axios/customAxios";

class noticeRepository {
  PostWriteNotice(postData) {
    const { data } = customAxios.post("/post", postData);
    return data;
  }

  PostEditNotice(postData, postId) {
    const { data } = customAxios.patch(`/post/${postId}`, postData);
  }

  GetNotice(tag) {
    const { data } = customAxios.get(`/post/tag?tag=${tag}`);
    return data;
  }
}

export default new noticeRepository();
