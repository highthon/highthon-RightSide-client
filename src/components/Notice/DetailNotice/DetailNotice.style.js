/* your css code */
import styled from "styled-components";
import * as P from "../../../shared/styles/palette.style";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const DetailNoticeModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1180px;
  height: 708px;
  background-color: #fff;
  border: 1px solid ${P.palette.hr};
  border-radius: 16px;
`;

export const ModalHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${P.palette.hr};
  padding: 0px 48px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  color: #000;
`;

export const ItemContent = styled.div`
  width: 300px;
  justify-content: space-between;
  display: flex;
`;

export const Item = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000;
`;

export const ContentBox = styled.div`
  margin-top: 54px;
  width: 1082px;
  max-height: 85%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #686868;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  bottom: 40px;
  background: #9ed66a;
  border-radius: 20px;
  width: 130px;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
`;
