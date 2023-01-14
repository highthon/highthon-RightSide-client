import { useState } from "react";
import * as S from "./NoticeWrite.style.js";
import noticeRepository from "../../../repository/notice/notice.repository";

const NoticeWrite = () => {
  const [noticeData, setNoticeData] = useState({
    title: "",
    tags: "",
    content: "",
    link: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setNoticeData({ ...noticeData, [name]: value });
  };

  const postSubmit = () => {
    try {
      if (
        noticeData.title === "" ||
        noticeData.tags === "" ||
        noticeData.content === "" ||
        noticeData.link === ""
      ) {
        window.alert("입력안한 정보를 입력해주시기 바랍니다.");
        return;
      }
      const { data } = noticeRepository.PostWriteNotice(noticeData);
    } catch (error) {
      window.alert("오류");
    }
  };

  return (
    <S.NoticeWrite>
      <S.Input
        name="title"
        onChange={onChange}
        placeholder="제목을 입력해주세요"
      />
      <S.Input
        name="tags"
        onChange={onChange}
        placeholder="내용을 입력해주세요"
      />
      <S.Input
        name="content"
        onChange={onChange}
        placeholder="BOYCOTT, BUY 둘중하나"
      />
      <S.Input
        name="link"
        onChange={onChange}
        placeholder="링크를 입력해주세요"
      />
      <S.SubmitBtn onClick={postSubmit}>전송하기</S.SubmitBtn>
    </S.NoticeWrite>
  );
};

export default NoticeWrite;
