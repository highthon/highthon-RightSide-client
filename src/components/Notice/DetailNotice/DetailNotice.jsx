import * as S from "./DetailNotice.style.js";

const DetailNotice = ({ name, date, title, content, participants }) => {
  return (
    <S.Background>
      <S.DetailNoticeModal>
        <S.ModalHeader>
          <S.ItemContent>
            <S.Item>작성자: {name}</S.Item>
            <S.Item>작성일: {date}</S.Item>
          </S.ItemContent>
          <S.Item>동참자 수: {participants}</S.Item>
        </S.ModalHeader>
        <S.Title>{title}</S.Title>
        <S.ContentBox>{content}</S.ContentBox>
        <S.SubmitBtn>불매 동참하기</S.SubmitBtn>
      </S.DetailNoticeModal>
    </S.Background>
  );
};

export default DetailNotice;
