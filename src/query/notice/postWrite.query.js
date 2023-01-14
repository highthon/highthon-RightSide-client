import { useMutation } from "react-query";
import noticeRepository from "../../repository/notice/notice.repository";

export const usePostWrite = () => {
  const usePostWriteMutation = useMutation((noticeData) =>
    noticeRepository.PostWriteNotice(noticeData)
  );

  return { usePostWriteMutation };
};
