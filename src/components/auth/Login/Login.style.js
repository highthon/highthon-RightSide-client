import styled from "styled-components";
import { palette } from "../../../shared/styles/palette.style";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginModal = styled.div`
  width: 580px;
  height: 591px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
`;

export const MoveLink = styled.div`
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: 550;
  font-size: 1.1rem;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 35px 45px;
  color: #686868;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: 700;
  font-size: 21px;
  line-height: 36px;
  display: flex;
  align-items: center;
  padding: 45px;
  color: ${palette.primaryHover};
`;

export const InputContainer = styled.div`
  margin-top: 40px;
`;

export const InputTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #2e2e2e;
`;

export const UserDataInput = styled.input`
  height: 60px;
  width: 484px;
  left: 0px;
  top: 40px;
  border-radius: 12px;
  border: none;
  background-color: #f6f6f6;
  padding-left: 20px;
  margin-top: 10px;
`;

export const UserLoginSubmitBtn = styled.button`
  background-color: ${palette.primaryHover};
  color: #fff;
  border-radius: 15px;
  padding: 15px 25px;
  font-weight: 600;
  font-size: 14px;
`;

export const UserLoginSubmitBtnContainer = styled.div`
  width: 100%;
  padding: 35px;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e6e6e6;
`;
