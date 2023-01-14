import { useMutation } from "react-query";
import noticeRepository from "../../repository/notice/notice.repository";

export const usePostEdit = () => {
  const usePostEditrMutation = useMutation((noticeData) =>
    noticeRepository.PostEditNotice(noticeData)
  );

  return { usePostEditrMutation };
};
