import { AxiosResponse } from "axios";
import { Todo } from "./TodoType";
import axiosClient from "../../util/axiosClient";

export const getAllTodos = (activePage: number): Promise<{ data: Todo[] }> =>
  axiosClient.get(
    `https://jsonplaceholder.typicode.com/todo?_page=${activePage}_limit=2`
  );

export const getTodo = (idx: number): Promise<Todo> =>
  axiosClient.get(`https://jsonplaceholder.typicode.com/todos/${idx}`);
