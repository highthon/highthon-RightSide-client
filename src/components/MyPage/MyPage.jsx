import { useState } from "react";
import * as S from "./MyPage.style.js";
import NoticeList from "../Notice/NoticeList/NoticeList.jsx";
import MyWriteData from "./MyWriteData.json";
import MyJoinData from "./MyJoinData.json";
import Header from "../Header/Header.jsx";

const MyPage = () => {
  const [clickEvent, setClickEvent] = useState(true);
  let data = clickEvent ? MyJoinData : MyWriteData;

  return (
    <>
      <Header />
      <S.MyPage>
        <S.TabBar>
          <S.TabButton
            onClick={() => setClickEvent(true)}
            color={clickEvent ? "#9ED66A" : "#9e9e9e"}
            border={clickEvent ? "#9ED66A" : "none"}
          >
            내가 동참한 글
          </S.TabButton>
          <S.TabButton
            onClick={() => setClickEvent(false)}
            color={clickEvent ? "#9e9e9e" : "#9ED66A"}
            border={clickEvent ? "none" : "#9ED66A"}
          >
            내가 작성한 글
          </S.TabButton>
        </S.TabBar>
        {/* 게시판 */}
        <S.NoticeHeader>
          <S.NoticeItem>제목</S.NoticeItem>
          <S.NoticeInner>
            <S.NoticeItem>작성자</S.NoticeItem>
            <S.NoticeItem>작성일</S.NoticeItem>
            <S.NoticeItem>함께 구매한 분</S.NoticeItem>
          </S.NoticeInner>
        </S.NoticeHeader>
        {/* 게시판 프레임 */}
        <S.NoticeFrame>
          {data &&
            data.map((item) => {
              return (
                <NoticeList
                  title={item.title}
                  writer={item.user_name}
                  date={item.date}
                  participant={item.participant}
                />
              );
            })}
        </S.NoticeFrame>
      </S.MyPage>
    </>
  );
};

export default MyPage;
