import * as S from "./NoticeEdit.style.js";
import React, { useState } from "react";
import noticeRepository from "../../../repository/notice/notice.repository.js";

const NoticeEdit = ({ postId }) => {
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

  const postSubmit = (postId) => {
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
      const { data } = noticeRepository.PostEditNotice(noticeData, postId);
    } catch (error) {
      window.alert("오류");
    }
  };
  return (
    <S.NoticeEdit>
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
      <S.SubmitBtn onClick={() => postSubmit(postId)}>수정하기</S.SubmitBtn>
    </S.NoticeEdit>
  );
};

export default NoticeEdit;
