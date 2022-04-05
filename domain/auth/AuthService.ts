import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import { Todo } from "../todo/TodoType";
import { AxiosError, AxiosResponse } from "axios";
import { getAllTodos } from "../todo/TodoRepository";
import { LoginRequest, Token } from "./AuthType";
import { login } from "./AuthRepository";
import Cookies from "js-cookie";

const useAuthService = () => {
  return {
    useLoginUser: (autoLogin: boolean) =>
      useMutation({
        mutationFn: (data: any) => login(data),
        onSuccess: (response) => {
          const token = response.data;
          Cookies.set("access_token", token.access_token, {
            expires: undefined, // 브라우저 종료시 삭제
          });

          // 리프레시 토큰
          // TODO 토큰만료일 확인해서 교체할 것
          if (autoLogin) {
            const expires = new Date();
            expires.setDate(expires.getDate() + 100);
            Cookies.set("refresh_token", token.refresh_token, {
              expires: expires, // 만료일 까지 유지
            });
          } else {
            Cookies.set("refresh_token", token.refresh_token);
          }
        },
      }),
  };
};
export default useAuthService;
