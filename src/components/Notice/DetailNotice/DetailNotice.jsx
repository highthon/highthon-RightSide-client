import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import noticeRepository from "../../../repository/notice/notice.repository.js";
import * as S from "./DetailNotice.style.js";
import { noticePostId } from "../../../store/reducer";
import customAxios from "../../../lib/axios/customAxios.js";
import Header from "../../Header/Header.jsx";

const DetailNotice = () => {
  const [userData, setUserData] = useState(0);
  return (
    <>
      <Header />
      <S.Background>
        <S.DetailNoticeModal>
          <S.ModalHeader>
            <S.ItemContent>
              <S.Item>작성자: 김밥좋아좋아좋아</S.Item>
              <S.Item>작성일: 2022-01-15</S.Item>
            </S.ItemContent>
            <S.Item>동참자 수: {userData}</S.Item>
          </S.ModalHeader>
          <S.Title>2022년 SPC 상품 불매운동</S.Title>
          <S.ContentBox>
            2022년 1월 경에는 부당노동행위에 항의한 민주노총 측에서 53일 간 단식
            투쟁을 진행하였으며, 동년 7월 27일에는 국가인권위원회에서 이벤트
            경품으로 SPC 상품권을 내걸었다가 파리바게뜨 노동자들의 항의에 의해
            수정되는 일이 벌어지기도 했다.
          </S.ContentBox>
          <S.SubmitBtn
            onClick={() => {
              setUserData(userData + 1);
              alert("불매 동참 참여가 완료되었습니다");
            }}
          >
            불매 동참하기
          </S.SubmitBtn>
        </S.DetailNoticeModal>
      </S.Background>
    </>
  );
};

export default DetailNotice;
