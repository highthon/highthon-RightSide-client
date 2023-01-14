import * as JoinStyle from "./Join.style";
import { useState } from "react";
import authRepository from "../../../repository/auth/auth.repository";
import { toast } from "react-toastify";

const Join = () => {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
    name: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const postJoin = () => {
    try {
      if (userData.id === "" || userData.name === "" || userData.pw === "") {
        window.alert("정보를 입력해주시기 바랍니다.");
        return;
      }
      const { data } = authRepository.PostJoinData(userData);
    } catch (error) {
      window.alert("로그인 오류 다시 시도 해 주세요.");
    }
  };
  return (
    <JoinStyle.JoinContainer>
      <JoinStyle.UserDataInput type="text" name="id" onChange={onChange} />
      <JoinStyle.UserDataInput type="text" name="pw" onChange={onChange} />
      <JoinStyle.UserDataInput
        type="password"
        name="name"
        onChange={onChange}
      />
      <JoinStyle.UserJoinSubmitBtn onClick={postJoin}>
        로그인
      </JoinStyle.UserJoinSubmitBtn>
    </JoinStyle.JoinContainer>
  );
};

export default Join;
