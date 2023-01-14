import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { noticePostId } from "../../../store/reducer.js";
import * as S from "./NoticeList.style.js";

const NoticeList = ({ post_id, title, writer, date, participant }) => {
  const navigate = useNavigate();
  const [noticeId, setNoticePostId] = useRecoilState(noticePostId);
  return (
    <S.NoticeList
      onClick={() => {
        navigate("/detail");
        setNoticePostId({ id: post_id });
      }}
    >
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
