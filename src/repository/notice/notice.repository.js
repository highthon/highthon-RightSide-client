import { useLocation } from "react-router-dom";
import customAxios from "../../lib/axios/customAxios";

class noticeRepository {
  PostWriteNotice(postData) {
    const { data } = customAxios.post("/post", postData);
    return data;
  }

  PostEditNotice(postData, postId) {
    const { data } = customAxios.patch(`/post/${postId}`, postData);
  }

  async GetNotice(tag) {
    const data = await customAxios.get(
      `/post/tag?tag=${tag === "/" ? "BOYCOTT" : "BUY"}`
    );
    return data;
  }
}

export default new noticeRepository();
