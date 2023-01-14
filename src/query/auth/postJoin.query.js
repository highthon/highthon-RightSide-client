import { useMutation } from "react-query";
import authRepository from "../../repository/auth/auth.repository";

export const usePostJoin = () => {
  const usePostJoinMutation = useMutation((userData) =>
    authRepository.PostJoinData(userData)
  );

  return { usePostJoinMutation };
};
