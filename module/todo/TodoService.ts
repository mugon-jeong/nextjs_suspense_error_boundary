import { Todo } from "./TodoType";
import { useQuery, UseQueryResult } from "react-query";
import { getAllTodos } from "./TodoRepository";
import { AxiosError } from "axios";

// export const useTodoService = () => {
//   return {
//     useTodoQuery: (activePage: number): UseQueryResult<Todo[], AxiosError> => {
//       let count = 0;
//       return useQuery(
//         ["getAllTodos", activePage],
//         async () => {
//           const { data } = await getAllTodos(activePage);
//           return data;
//         },
//         { keepPreviousData: true, retry: 0 }
//       );
//     },
//   };
// };

class TodoClass {
  getTodo = (activePage: number): UseQueryResult<Todo[], AxiosError> =>
    useQuery(
      ["getAllTodos", activePage],
      async () => {
        const { data } = await getAllTodos(activePage);
        return data;
      },
      { keepPreviousData: true, retry: 0 }
    );
}
export default new TodoClass();
