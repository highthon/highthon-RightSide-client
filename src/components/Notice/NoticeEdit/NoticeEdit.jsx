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
      <S.NoticeModal>
        {/* 모달 헤더 */}
        <S.ModalHeader>
          <S.Title>제목 및 내용 입력</S.Title>
        </S.ModalHeader>
        {/* 모달 컨텐트 */}
        <S.ModalContent>
          <S.InputFrame>
            <S.Title>제목</S.Title>
            <S.TitleInput
              name="title"
              height="54px"
              onChange={onChange}
              placeholder="제목을 입력해주세요."
            />
          </S.InputFrame>
          <S.InputFrame>
            <S.Title>태그</S.Title>
            <S.TitleInput
              name="tag"
              height="54px"
              onChange={onChange}
              placeholder="BOYCOTT, BUY를 입력해주세요."
            />
          </S.InputFrame>
          <S.InputFrame>
            <S.Title>링크</S.Title>
            <S.TitleInput
              name="link"
              height="54px"
              onChange={onChange}
              placeholder="링크를 입력해주세요."
            />
          </S.InputFrame>
          <S.InputFrame>
            <S.Title>내용</S.Title>
            <S.ContentInput
              name="content"
              height="250px"
              onChange={onChange}
              placeholder="내용을 입력해주세요."
            />
          </S.InputFrame>
          <S.SubmitButton onClick={postSubmit}>글 수정</S.SubmitButton>
        </S.ModalContent>
      </S.NoticeModal>
    </S.NoticeEdit>
  );
};

export default NoticeEdit;
