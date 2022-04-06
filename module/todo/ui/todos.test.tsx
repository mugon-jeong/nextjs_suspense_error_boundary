import MockAdapter from "axios-mock-adapter";
import axiosClient from "../../../util/axiosClient";
import { fireEvent, render, screen } from "@testing-library/react";
import AsyncBoundaryWithQuery from "../../../util/error/boundries/AsyncBoundaryWithQuery";
import TodosComp from "./TodoList";
import TestBoundary from "../../../util/error/boundries/TestBoundary";

describe("데이터 가져오기", () => {
  const mock = new MockAdapter(axiosClient);
  mock.onGet("/todos?_page=1_limit=2").reply(400, "error");
  render(
    <TestBoundary>
      <AsyncBoundaryWithQuery>
        <TodosComp />
      </AsyncBoundaryWithQuery>
    </TestBoundary>
  );
});
