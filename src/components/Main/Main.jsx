import * as S from "./Main.style.js";
import Header from "../Header";
import xSvg from "../../assets/img/x.svg";
import searchSvg from "../../assets/img/search.svg";

const Main = () => {
  return (
    <>
      <Header />
      <S.Main>
        {/* main */}
        <S.SearchFrame>
          <S.SearchBox />
          <S.Icon src={xSvg} />
          <S.Icon src={searchSvg} />
        </S.SearchFrame>
      </S.Main>
    </>
  );
};

export default Main;
