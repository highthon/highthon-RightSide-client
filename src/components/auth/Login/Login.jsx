import { useState } from "react";
import authRepository from "../../../repository/auth/auth.repository";
import * as LoginStyle from "./Login.style";

const Login = () => {
  const [userData, setUserData] = useState({
    account_id: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const postLogin = () => {
    try {
      if (userData.id === "" || userData.name === "" || userData.pw === "") {
        window.alert("정보를 입력해주시기 바랍니다.");
        return;
      }
      const { data } = authRepository.PostLogin(userData);
    } catch (error) {
      window.alert("로그인 오류 다시 시도 해 주세요.");
    }
  };
  return (
    <LoginStyle.LoginContainer>
      <LoginStyle.UserDataInput
        type="text"
        name="account_id"
        onChange={onChange}
      />
      <LoginStyle.UserDataInput
        type="password"
        name="password"
        onChange={onChange}
      />
      <LoginStyle.UserLoginSubmitBtn onClick={postLogin}>
        회원가입
      </LoginStyle.UserLoginSubmitBtn>
    </LoginStyle.LoginContainer>
  );
};

export default Login;
