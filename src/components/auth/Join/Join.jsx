import * as JoinStyle from "./Join.style";
import { useState } from "react";
import authRepository from "../../../repository/auth/auth.repository";
import { usePostJoin } from "../../../query/auth/postJoin.query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Join = () => {
  const { usePostJoinMutation } = usePostJoin();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    account_id: "",
    password: "",
    name: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const postJoin = () => {
    if (userData.id === "" || userData.name === "" || userData.pw === "") {
      window.alert("정보를 입력해주시기 바랍니다.");
      return;
    }

    usePostJoinMutation.mutateAsync(userData, {
      onSuccess: () => {
        window.alert("회원가입 성공");
        console.log(1);
      },
      onError: () => {
        window.alert("회원가입 오류 다시 시도 해 주세요.");
      },
    });
  };
  return (
    <JoinStyle.JoinContainer>
      <JoinStyle.JoinModal>
        <JoinStyle.ModalTitle>
          슬로건 슬로건 슬로건, Right Side
        </JoinStyle.ModalTitle>
        <JoinStyle.MoveLink onClick={() => navigate("/login")}>
          이미 회원이라면 로그인 하러 가기
        </JoinStyle.MoveLink>
        <JoinStyle.InputContainer>
          <JoinStyle.InputTitle>아이디</JoinStyle.InputTitle>
          <JoinStyle.UserDataInput
            placeholder="아이디를 입력해 주세요."
            type="text"
            name="account_id"
            onChange={onChange}
          />
        </JoinStyle.InputContainer>
        <JoinStyle.InputContainer>
          <JoinStyle.InputTitle>이름</JoinStyle.InputTitle>

          <JoinStyle.UserDataInput
            placeholder="이름을 입력해 주세요."
            type="text"
            name="name"
            onChange={onChange}
          />
        </JoinStyle.InputContainer>
        <JoinStyle.InputContainer>
          <JoinStyle.InputTitle>비밀번호</JoinStyle.InputTitle>

          <JoinStyle.UserDataInput
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            name="password"
            onChange={onChange}
          />
        </JoinStyle.InputContainer>
        <JoinStyle.UserLoginSubmitBtnContainer>
          <JoinStyle.UserJoinSubmitBtn onClick={postJoin}>
            회원가입
          </JoinStyle.UserJoinSubmitBtn>
        </JoinStyle.UserLoginSubmitBtnContainer>
      </JoinStyle.JoinModal>
    </JoinStyle.JoinContainer>
  );
};

export default Join;
