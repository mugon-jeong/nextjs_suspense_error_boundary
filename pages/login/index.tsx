import { NextPage } from "next";
import AsyncBoundaryWithQuery from "../../util/error/boundries/AsyncBoundaryWithQuery";
import TodosComp from "../../components/todos/TodoList";
import { useState } from "react";
import useAuthService from "../../domain/auth/AuthService";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

const Todos: NextPage = () => {
  const [email, setEmail] = useState("lee@apple.com");
  const [password, setPassword] = useState("Asd123@@");
  const [autoLogin, setAutoLogin] = useState(false);
  const { mutate: login, isSuccess } = useAuthService().useLoginUser(autoLogin);
  const router = useRouter();
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
    if (isSuccess) {
      await router.push("/");
    }
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
      </div>
    </>
  );
};
export default Todos;
