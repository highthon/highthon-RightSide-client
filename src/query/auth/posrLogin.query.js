import { useMutation } from "react-query";
import authRepository from "../../repository/auth/auth.repository";

export const usePostLogin = () => {
  const usePostLoginMutation = useMutation((userData) =>
    authRepository.PostLogin(userData)
  );

  return { usePostLoginMutation };
};
