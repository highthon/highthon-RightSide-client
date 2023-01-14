/* your css code */
import styled from "styled-components";
import * as P from "../../shared/styles/palette.style";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// search

export const SearchFrame = styled.div`
  display: flex;
  justify-content: center;
  height: 119px;
  background-color: ${P.palette.primaryLight};
  width: 100%;
`;

export const SearchBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1180px;
  height: 48px;
  border-radius: 24px;
  padding-right: 24px;

  margin-top: 36px;
  background-color: #fff;
`;

export const Input = styled.input`
  border-radius: 24px 0px 0px 24px;
  height: 100%;
  width: 90%;
  padding-left: 20px;
  border: none;
  outline: none;
`;

export const Icon = styled.img`
  cursor: pointer;
`;

// tab bar

export const TabBar = styled.div`
  width: 100%;
`;

export const TabBtn = styled.button`
  text-align: center;

  width: 50%;
  height: 60.5px;

  font-weight: 700;
  font-size: 20px;
  line-height: 36px;

  background: ${(props) => props.backGroundColor};
  border-radius: ${(props) => props.borderRadius};
  outline: none;
`;

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
