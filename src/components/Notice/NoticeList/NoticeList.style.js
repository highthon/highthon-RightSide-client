/* your css code */
import styled from "styled-components";
import * as P from "../../../shared/styles/palette.style";

export const NoticeList = styled.div`
  padding: 0px 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1180px;
  border-bottom: 1px solid ${P.palette.hr};
  height: 72px;
  &:hover {
    background-color: #e2e2e2;
    cursor: pointer;
  }
`;

export const NoticeInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 525px;
`;

export const NoticeItem = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${P.palette.bodyText};
`;
