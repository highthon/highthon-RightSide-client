import { useState } from "react";
import authRepository from "../../../repository/auth/auth.repository";
import * as LoginStyle from "./Login.style";

const Login = () => {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
    name: "",
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
      <LoginStyle.UserDataInput type="text" name="id" onChange={onChange} />
      <LoginStyle.UserDataInput type="text" name="pw" onChange={onChange} />
      <LoginStyle.UserDataInput
        type="password"
        name="name"
        onChange={onChange}
      />
      <LoginStyle.UserJoinSubmitBtn onClick={postLogin}>
        회원가입
      </LoginStyle.UserJoinSubmitBtn>
    </LoginStyle.LoginContainer>
  );
};

export default Login;
