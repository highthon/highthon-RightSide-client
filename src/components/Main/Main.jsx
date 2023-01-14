import * as S from "./Main.style.js";
import Header from "../Header";
import NoticeList from "../Notice/NoticeList";

import xSvg from "../../assets/img/x.svg";
import searchSvg from "../../assets/img/search.svg";
import { useState } from "react";
import * as P from "../../shared/styles/palette.style";

const Main = () => {
  const [tabClick, setTabClick] = useState(true);

  return (
    <>
      <Header />
      <S.Main>
        {/* 검색창 */}
        <S.SearchFrame>
          <S.SearchBox>
            <S.Input />
            <S.Icon src={xSvg} />
            <S.Icon src={searchSvg} />
          </S.SearchBox>
        </S.SearchFrame>
        {/* 탭 바 */}
        <S.TabBar>
          <S.TabBtn
            backGroundColor={tabClick ? P.palette.primaryLight : "#fff"}
            borderRadius="0px 0px 30px 0px"
            onClick={() => setTabClick(true)}
          >
            불매
          </S.TabBtn>
          <S.TabBtn
            backGroundColor={!tabClick ? P.palette.primaryLight : "#fff"}
            borderRadius="0px 0px 0px 30px"
            onClick={() => setTabClick(false)}
          >
            구매
          </S.TabBtn>
        </S.TabBar>
        {/* 게시판 */}
        <S.MiddleFrame>
          <S.Title>불매 운동에 참여해 보세요!</S.Title>
          <S.AddBtn>글쓰기</S.AddBtn>
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
      </S.Main>
    </>
  );
};

export default Main;
