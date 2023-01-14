import { useState } from "react";
import { useNavigate } from "react-router";
import cookie from "../../../lib/cookie/cookie";
import { usePostLogin } from "../../../query/auth/posrLogin.query";
import * as LoginStyle from "./Login.style";

const Login = () => {
  const [userData, setUserData] = useState({
    account_id: "",
    password: "",
  });
  const navigate = useNavigate();
  const { usePostLoginMutation } = usePostLogin();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const postLogin = () => {
    if (userData.account_id === "" || userData.password === "") {
      window.alert("정보를 입력해주시기 바랍니다.");
      return;
    }

    usePostLoginMutation.mutate(userData, {
      onSuccess: ({ data }) => {
        window.alert("로그인 성공");
        cookie.setCookie("access-token", data.access_token);
        navigate("/");
      },
      onError: () => {
        window.alert("로그인 오류 다시 시도 해 주세요.");
      },
    });
  };
  return (
    <LoginStyle.LoginContainer>
      <LoginStyle.LoginModal>
        <LoginStyle.ModalTitle>
          슬로건 슬로건 슬로건, Right Side
        </LoginStyle.ModalTitle>
        <LoginStyle.MoveLink onClick={() => navigate("/join")}>
          회원 가입 하러 가기
        </LoginStyle.MoveLink>
        <LoginStyle.InputContainer>
          <LoginStyle.InputTitle>아이디</LoginStyle.InputTitle>
          <LoginStyle.UserDataInput
            placeholder="아이디를 입력해 주세요."
            type="text"
            name="account_id"
            onChange={onChange}
          />
        </LoginStyle.InputContainer>
        <LoginStyle.InputContainer>
          <LoginStyle.InputTitle>비밀번호</LoginStyle.InputTitle>

          <LoginStyle.UserDataInput
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            name="password"
            onChange={onChange}
          />
        </LoginStyle.InputContainer>
        <LoginStyle.UserLoginSubmitBtnContainer>
          <LoginStyle.UserLoginSubmitBtn onClick={postLogin}>
            로그인
          </LoginStyle.UserLoginSubmitBtn>
        </LoginStyle.UserLoginSubmitBtnContainer>
      </LoginStyle.LoginModal>
    </LoginStyle.LoginContainer>
  );
};

export default Login;
