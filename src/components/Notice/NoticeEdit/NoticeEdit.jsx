import * as S from "./NoticeEdit.style.js";
import React, { useState } from "react";
import noticeRepository from "../../../repository/notice/notice.repository.js";
import { usePostEdit } from "../../../query/notice/postEdit.query";
const NoticeEdit = ({ postId }) => {
  const { usePostEditMutation } = usePostEdit();

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
    usePostEditMutation.mutateAsync(noticeData, {
      onSuccess: () => {
        window.alert("게시물 수정 성공");
      },
      onError: () => {
        window.alert("게시물 수정 오류 다시 시도 해 주세요.");
      },
    });
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
