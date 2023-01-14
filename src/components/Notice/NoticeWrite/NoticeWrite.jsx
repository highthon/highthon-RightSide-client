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
