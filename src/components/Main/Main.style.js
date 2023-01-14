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
  background-color: ${P.palette.primaryDim};
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

  border: 1px solid black;

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
  width: 50%;
  height: 60.5px;

  font-weight: 700;
  font-size: 20px;
  line-height: 36px;

  background-color: ${(props) => props.backGroundColor};
  border-radius: ${(props) => props.borderRadius};
`;
