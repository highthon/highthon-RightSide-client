/* your css code */
import styled from "styled-components";
import * as P from "../../shared/styles/palette.style";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  border-bottom: 2px solid ${P.palette.hr};
`;

export const Inner = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Contents = styled.div`
  display: flex;
  gap: 20px;
`;

export const MyPage = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #000;
`;

export const Logo = styled.img`
  width: 150px;
  font-weight: 700;
  line-height: 64px;
  color: #000;
  cursor: pointer;
`;

export const Login = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #000;
  padding: 10px 20px;
  background-color: ${P.palette.primaryLight};
  color: #fff;
  border-radius: 30px;
  outline: none;
`;
