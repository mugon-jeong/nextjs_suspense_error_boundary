import { Todo } from "../todo/TodoType";
import axiosClient from "../../util/axiosClient";
import { LoginRequest, Token } from "./AuthType";
import { AxiosError, AxiosResponse } from "axios";

export const login = (data: any): Promise<AxiosResponse<Token, AxiosError>> => {
  const token = `point-client:point-secret`;
  const encodedToken = Buffer.from(token).toString("base64");
  return axiosClient.post<Token>(`https://jadoogive.co.kr:8000/login`, data, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: "Basic " + encodedToken,
    },
  });
};
