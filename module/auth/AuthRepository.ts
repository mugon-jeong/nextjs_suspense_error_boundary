import { Todo } from "../todo/TodoType";
import axiosClient from "../../util/axiosClient";
import { LoginRequest, Token } from "./AuthType";
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import config from "jest-validate/build/exampleConfig";
import CustomAxios from "../../util/CustomAxios";

export const apiLogin = (
  data: any
): Promise<AxiosResponse<Token, AxiosError>> => {
  const token = `point-client:point-secret`;
  const encodedToken = Buffer.from(token).toString("base64");
  return axiosClient.post<Token>(`https://jadoogive.co.kr:8000/login`, data, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: "Basic " + encodedToken,
    },
  });
};

export const apiUserInfo = (): Promise<AxiosResponse<any, AxiosError>> => {
  const token = Cookies.get("access_token");
  console.log(token);
  return axiosClient.get<any>(
    `https://jadoogive.co.kr:8000/member-service/v1/commonInfo`,
    {
      headers: {
        Authorization: "Bearer " + "token",
      },
    }
  );
};
