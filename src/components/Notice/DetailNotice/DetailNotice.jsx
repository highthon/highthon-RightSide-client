import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import noticeRepository from "../../../repository/notice/notice.repository.js";
import * as S from "./DetailNotice.style.js";
import { noticePostId } from "../../../store/reducer";
import customAxios from "../../../lib/axios/customAxios.js";

const DetailNotice = () => {
  const [userData, setUserData] = useState();
  return (
    <S.Background>
      <S.DetailNoticeModal>
        <S.ModalHeader>
          <S.ItemContent>
            <S.Item>작성자: </S.Item>
            <S.Item>작성일: {userData && userData.date}</S.Item>
          </S.ItemContent>
          <S.Item>동참자 수: {userData && userData.participants}</S.Item>
        </S.ModalHeader>
        <S.Title>{userData && userData.title}</S.Title>
        <S.ContentBox>{userData && userData.content}</S.ContentBox>
        <S.SubmitBtn>불매 동참하기</S.SubmitBtn>
      </S.DetailNoticeModal>
    </S.Background>
  );
};

export default DetailNotice;
