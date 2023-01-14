/* your css code */
import styled from "styled-components";
import * as P from "../../shared/styles/palette.style";

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const TabBar = styled.div`
  width: 1180px;
  height: 60px;
`;

export const TabButton = styled.button`
  width: 50%;
  height: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: ${(props) => props.color};
  border-bottom: 2px solid ${(props) => props.border};
  outline: none;
`;

export const NoticeHeader = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1180px;
  height: 60px;
  border-radius: 16px 16px 0px 0px;
  background-color: ${P.palette.secondaryBtnBg};
  border: 1px solid ${P.palette.hr};
  padding: 0px 55px;
`;

export const NoticeInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 525px;
`;

export const NoticeItem = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: ${P.palette.subTitleText};
`;

export const NoticeFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
