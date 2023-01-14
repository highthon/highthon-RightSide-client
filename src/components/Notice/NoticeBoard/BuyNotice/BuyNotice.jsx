import * as S from "./BuyNotice.style.js";
import { Link, useLocation } from "react-router-dom";
import NoticeList from "../../NoticeList/NoticeList.jsx";
import { useState } from "react";
import customAxios from "../../../../lib/axios/customAxios.js";

const BuyNotice = () => {
  const [noticeData, setNoticeData] = useState();
  const { pathname } = useLocation();
  (async () => {
    const { data } = await customAxios.get(
      `/post/tag?tag=${pathname === "/" ? "BOYCOTT" : "BUY"}`
    );
    setNoticeData(data.post_list);
  })();
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
        {noticeData &&
          noticeData.map((item, idx) => {
            return (
              <NoticeList
                key={idx}
                onClick={() => window.open(`${item.link}`)}
                title={item.title}
                writer={item.user.user_name}
                participant={item.join_count}
              />
            );
          })}
      </S.NoticeFrame>
    </>
  );
};

export default BuyNotice;
