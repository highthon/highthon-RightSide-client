import * as S from "./NoticeBoard.style.js";
import NoticeList from "../NoticeList/NoticeList.jsx";
import { Link } from "react-router-dom";
const NoticeBoard = () => {
  return (
    <>
      {/* 게시판 */}
      <S.MiddleFrame>
        <S.Title>불매 운동에 참여해 보세요!</S.Title>
        <Link to="/write">
          <S.AddBtn>글쓰기</S.AddBtn>
        </Link>
      </S.MiddleFrame>
      <S.NoticeHeader>
        <S.NoticeItem>제목</S.NoticeItem>
        <S.NoticeInner>
          <S.NoticeItem>작성자</S.NoticeItem>
          <S.NoticeItem>작성일</S.NoticeItem>
          <S.NoticeItem>동참자 수</S.NoticeItem>
        </S.NoticeInner>
      </S.NoticeHeader>
      {/* 게시판 프레임 */}
      <S.NoticeFrame>
        <NoticeList
          title="제목 제목 제목 제목"
          writer="김석진"
          date="2023-01-14"
          participant="1,643,248"
        />
        <NoticeList
          title="제목 제목 제목 제목"
          writer="김석진"
          date="2023-01-14"
          participant="1,643,248"
        />
        <NoticeList
          title="제목 제목 제목 제목"
          writer="김석진"
          date="2023-01-14"
          participant="1,643,248"
        />
      </S.NoticeFrame>
    </>
  );
};

export default NoticeBoard;
