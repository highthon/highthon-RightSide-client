import { useNavigate } from "react-router";
import * as S from "./Header.style.js";
import img from "../../assets/img/RightSide_logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.Inner>
        <S.Logo src={img}></S.Logo>
        <S.Login onClick={() => navigate("/login")}>로그인</S.Login>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
