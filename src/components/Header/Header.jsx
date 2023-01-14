import { useNavigate } from "react-router";
import * as S from "./Header.style.js";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.Inner>
        <S.Logo>LOGO</S.Logo>
        <S.Login onClick={() => navigate("/login")}>로그인</S.Login>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
