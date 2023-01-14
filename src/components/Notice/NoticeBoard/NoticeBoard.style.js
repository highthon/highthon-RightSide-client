/* your css code */
import styled from "styled-components";
import * as P from "../../../shared/styles/palette.style";

// notice board

export const MiddleFrame = styled.div`
  display: flex;
  align-items: center;
  width: 1180px;
`;

export const AddBtn = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 24px;
  background-color: ${P.palette.primaryLight};
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;

export const Title = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  padding: 45px 0px;
`;

export const NoticeHeader = styled.div`
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
