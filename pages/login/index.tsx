import { NextPage } from "next";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useFetchLogin } from "../../module/auth/AuthService";
import Cookies from "js-cookie";
import axiosClient from "../../util/axiosClient";

const Login: NextPage = () => {
  const [email, setEmail] = useState("lee@apple.com");
  const [password, setPassword] = useState("Asd123@@");
  const [autoLogin, setAutoLogin] = useState(false);
  const { mutate: login, isSuccess } = useFetchLogin({
    onSuccess(response) {
      console.log(response.data);
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
    onError(res) {
      alert("로그인 실패");
      console.log(res.response);
    },
  });
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess]);
  async function onSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    // axios
    const formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("scope", "member");
    formData.append("username", email);
    formData.append("password", password);
    login(formData);
  }
  return (
    <>
      <div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button onClick={async () => await onSubmit({ email, password })}>
          submit
        </button>
        <h4>{`${autoLogin}`}</h4>
        <button onClick={async () => setAutoLogin(!autoLogin)}>
          autoLogin
        </button>
      </div>
    </>
  );
};
export default Login;
