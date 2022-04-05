import DefaultFallback from "../fallback/DefaultFallback";
import { useQueryErrorResetBoundary } from "react-query";
import AsyncBoundary from "./AsyncBoundary";
import { ReactChild, ReactNode } from "react";
import { ErrorBoundaryProps } from "./ErrorBoundary";
export interface QueryBoundaryProps
  extends Omit<ErrorBoundaryProps, "renderFallback" | "reset"> {
  children: ReactNode;
  pendingFallback?: ReactChild | null;
  rejectedFallback?: ErrorBoundaryProps["renderFallback"];
}
function AsyncBoundaryWithQuery({
  children,
  pendingFallback = <div>로딩</div>,
  rejectedFallback = ({ error, reset }) => (
    <DefaultFallback error={error} reset={reset} />
  ),
}: QueryBoundaryProps) {
  // 해당 쿼리 재실행
  const { reset } = useQueryErrorResetBoundary();

  return (
    <AsyncBoundary
      reset={reset}
      pendingFallback={pendingFallback}
      rejectedFallback={rejectedFallback}
    >
      {children}
    </AsyncBoundary>
  );
}

export default AsyncBoundaryWithQuery;
