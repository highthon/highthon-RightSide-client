import * as S from "./NoticeBoard.style.js";
import NoticeList from "../../NoticeList";
import { Link } from "react-router-dom";
import { useGetNoticeList } from "../../../../query/notice/getNoticeList.query.js";
const NotBuyNotice = () => {
  const data = useGetNoticeList();
  console.log(data);
  return (
    <>
      {/* 게시판 */}
      <S.MiddleFrame>
        <S.Title>불매 운동에 참여해 보세요!</S.Title>
        <Link to="/write">
          <S.AddBtn>글쓰기</S.AddBtn>
        </Link>
      </S.MiddleFrame>
      <S.NoticeHeader>
        <S.NoticeItem>제목</S.NoticeItem>
        <S.NoticeInner>
          <S.NoticeItem>작성자</S.NoticeItem>
          <S.NoticeItem>작성일</S.NoticeItem>
          <S.NoticeItem>동참자 수</S.NoticeItem>
        </S.NoticeInner>
      </S.NoticeHeader>
      {/* 게시판 프레임 */}
      <S.NoticeFrame>
        {/* {data &&
          data.map((item) => {
            console.log(item);
            return (
              <NoticeList
              onClick={()=> window.open(`${link}`)}
                title={item.title}
                writer={item.user.user_name}
                participant={item.join_count}
              />
            );
          })} */}
      </S.NoticeFrame>
    </>
  );
};

export default NotBuyNotice;
