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

export const Logo = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  color: #000;
`;

export const Login = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #000;
  outline: none;
`;
