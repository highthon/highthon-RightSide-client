import { useState } from "react";
import * as S from "./NoticeWrite.style.js";
import noticeRepository from "../../../repository/notice/notice.repository";
import { usePostWrite } from "../../../query/notice/postWrite.query";
import { useNavigate } from "react-router-dom";

const NoticeWrite = () => {
  const { usePostWriteMutation } = usePostWrite();
  const navigate = useNavigate();
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
    usePostWriteMutation.mutateAsync(noticeData, {
      onSuccess: () => {
        window.alert("게시물 생성 성공");
        navigate("/");
      },
      onError: () => {
        window.alert("게시물 생성 오류 다시 시도 해 주세요.");
      },
    });
  };

  return (
    <S.NoticeWrite>
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
            <S.Title>내용</S.Title>
            <S.ContentInput
              name="content"
              height="250px"
              onChange={onChange}
              placeholder="내용을 입력해주세요."
            />
          </S.InputFrame>
          <S.SubmitButton onClick={postSubmit}>글 쓰기</S.SubmitButton>
        </S.ModalContent>
      </S.NoticeModal>
    </S.NoticeWrite>
  );
};

export default NoticeWrite;
