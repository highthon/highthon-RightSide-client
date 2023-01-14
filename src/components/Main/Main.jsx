import * as S from "./Main.style.js";
import Header from "../Header";
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
            backGroundColor={tabClick ? P.palette.primaryDim : "#fff"}
            borderRadius="30px 0px"
            onClick={() => setTabClick(true)}
          >
            불매
          </S.TabBtn>
          <S.TabBtn
            backGroundColor={!tabClick ? P.palette.primaryDim : "#fff"}
            borderRadius="0px 30px"
            onClick={() => setTabClick(false)}
          >
            구매
          </S.TabBtn>
        </S.TabBar>
      </S.Main>
    </>
  );
};

export default Main;
