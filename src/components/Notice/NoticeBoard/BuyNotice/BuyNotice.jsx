import * as S from "./BuyNotice.style.js";
import { Link } from "react-router-dom";
import NoticeList from "../../NoticeList/NoticeList.jsx";

const BuyNotice = () => {
  return (
    <>
      {/* 게시판 */}
      <S.MiddleFrame>
        <S.Title>가치 있는 소비 같이 해요!</S.Title>
        <Link to="/write">
          <S.AddBtn>글쓰기</S.AddBtn>
        </Link>
      </S.MiddleFrame>
      <S.NoticeHeader>
        <S.NoticeItem>제목</S.NoticeItem>
        <S.NoticeInner>
          <S.NoticeItem>작성자</S.NoticeItem>
          <S.NoticeItem>작성일</S.NoticeItem>
          <S.NoticeItem>구매자 분</S.NoticeItem>
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

export default BuyNotice;
