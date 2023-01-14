import { useQuery } from "react-query";
import { useLocation } from "react-router";
import noticeRepository from "../../repository/notice/notice.repository";

export const useGetNoticeList = () => {
  const { pathname } = useLocation();
  useQuery("noticeList/useGetNoticeList", () =>
    noticeRepository.GetNotice(pathname === "/" ? "BOYCOTT" : "BUY")
  );
};
