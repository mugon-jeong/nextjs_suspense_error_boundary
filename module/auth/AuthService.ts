import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Todo } from "../todo/TodoType";
import axios, { AxiosError, AxiosResponse } from "axios";
import { getAllTodos } from "../todo/TodoRepository";
import { LoginRequest, Token } from "./AuthType";
import { apiLogin, apiUserInfo } from "./AuthRepository";
import Cookies from "js-cookie";
import { Router } from "next/router";

// export const AuthService = () => {
//   return {
//     useLoginUser: (autoLogin: boolean) =>
//       useMutation({
//         mutationKey: "login",
//         mutationFn: (data: any) => login(data),
//         onSuccess: (response) => {
//           console.log("start set cookie");
//           const token = response.data;
//           Cookies.set("access_token", token.access_token, {
//             expires: undefined, // 브라우저 종료시 삭제
//           });
//
//           // 리프레시 토큰
//           // TODO 토큰만료일 확인해서 교체할 것
//           if (autoLogin) {
//             const expires = new Date();
//             expires.setDate(expires.getDate() + 100);
//             Cookies.set("refresh_token", token.refresh_token, {
//               expires: expires, // 만료일 까지 유지
//             });
//           } else {
//             Cookies.set("refresh_token", token.refresh_token);
//           }
//           console.log("end set cookie");
//         },
//       }),
//   };
// };

export interface ServerResponse<T> {
  status: number;
  message?: string;
  data: T;
}
// export type UseTypedMutationResult = UseMutationResult<
//     T["returnType"],
//     T["errorType"],
//     T["paramsType"],
//     unknown
//     >;
export const useFetchLogin = (
  options: UseMutationOptions<ServerResponse<Token>, AxiosError, FormData> = {
    useErrorBoundary: (error) => {
      return error.response!.status >= 500;
    },
  }
): UseMutationResult<ServerResponse<Token>, AxiosError, FormData> =>
  useMutation("loginUser", (data: any) => apiLogin(data), {
    ...options,
  });

export const useFetchUserInfo = (
  options: UseQueryOptions<
    ServerResponse<any>,
    AxiosError,
    ServerResponse<any>,
    "fetchUserInfo"
  >
): UseQueryResult<ServerResponse<any>, AxiosError> =>
  useQuery("fetchUserInfo", () => apiUserInfo(), { ...options });
