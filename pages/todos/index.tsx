import { NextPage } from "next";

import TodosComp from "../../module/todo/ui/TodoList";
import AsyncBoundaryWithQuery from "../../util/error/boundries/AsyncBoundaryWithQuery";

const Todos: NextPage = () => {
  return (
    <>
      <div>
        <AsyncBoundaryWithQuery pendingFallback={<h4>test</h4>}>
          <TodosComp />
        </AsyncBoundaryWithQuery>
      </div>
    </>
  );
};
export default Todos;
