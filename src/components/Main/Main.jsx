import * as S from "./Main.style.js";
import Header from "../Header";

import xSvg from "../../assets/img/x.svg";
import searchSvg from "../../assets/img/search.svg";
import { useState } from "react";
import * as P from "../../shared/styles/palette.style";
import { Link, Routes, Route } from "react-router-dom";
import NotBuyNotice from "../Notice/NoticeBoard/NotBuyNotice";
import BuyNotice from "../Notice/NoticeBoard/BuyNotice";

import NoticeWrite from "../Notice/NoticeWrite";
import { useGetNoticeList } from "../../query/notice/getNoticeList.query.js";

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
          <Link to="/">
            <S.TabBtn
              backGroundColor={tabClick ? P.palette.primaryLight : "#fff"}
              borderRadius="0px 0px 30px 0px"
              onClick={() => setTabClick(true)}
            >
              불매
            </S.TabBtn>
          </Link>
          <Link to="/buy">
            <S.TabBtn
              backGroundColor={!tabClick ? P.palette.primaryLight : "#fff"}
              borderRadius="0px 0px 0px 30px"
              onClick={() => setTabClick(false)}
            >
              구매
            </S.TabBtn>
          </Link>
        </S.TabBar>
        <Routes>
          <Route path="/" element={<NotBuyNotice />} />
          <Route path="/buy" element={<BuyNotice />} />
          <Route path="/write" element={<NoticeWrite />} />
        </Routes>
      </S.Main>
    </>
  );
};

export default Main;
