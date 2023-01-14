/* your css code */
import styled from "styled-components";
import * as P from "../../../shared/styles/palette.style";

export const NoticeEdit = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoticeModal = styled.div`
  position: absolute;
  top: 100px;
  width: 1180px;
  height: 1008px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid ${P.palette.hr};
  border-radius: 16px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid ${P.palette.hr};
  border-radius: 16px 16px 0px 0px;
  padding: 0px 48px;
`;

export const Title = styled.div`
  margin-top: 48px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000;
`;

export const ModalContent = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputFrame = styled.div``;

export const TitleInput = styled.input`
  margin-top: 16px;
  padding: 0px 16px;
  width: 1080px;
  height: 54px;
  border: 1px solid ${P.palette.hr};
  outline: none;
`;

export const ContentInput = styled.textarea`
  margin-top: 16px;
  padding: 16px;
  min-width: 1080px;
  min-height: 250px;
  resize: none;
  border: 1px solid ${P.palette.hr};
  outline: none;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 40px;
  background-color: ${P.palette.primaryLight};
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin: 64px 0px 34px 0px;
`;
