import * as S from "./NoticeList.style.js";

const NoticeList = ({ title, writer, date, participant }) => {
  return (
    <S.NoticeList>
      <S.NoticeItem>{title}</S.NoticeItem>
      <S.NoticeInner>
        <S.NoticeItem>{writer}</S.NoticeItem>
        <S.NoticeItem>{date}</S.NoticeItem>
        <S.NoticeItem>{participant} 명</S.NoticeItem>
      </S.NoticeInner>
    </S.NoticeList>
  );
};

export default NoticeList;
