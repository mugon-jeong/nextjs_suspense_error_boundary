import ErrorBoundary, { ErrorBoundaryProps } from "./ErrorBoundary";
import { ReactChild, ReactNode, Suspense } from "react";
import SSRSafeSuspense from "../../../components/SSRSafeSuspense";

export interface AsyncBoundaryProps
  extends Omit<ErrorBoundaryProps, "renderFallback"> {
  children: ReactNode;
  pendingFallback: ReactChild | null;
  rejectedFallback: ErrorBoundaryProps["renderFallback"];
}

function AsyncBoundary({
  pendingFallback,
  rejectedFallback,
  children,
  ...errorBoundaryProps
}: AsyncBoundaryProps) {
  return (
    <>
      <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
        <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
      </ErrorBoundary>
    </>
  );
}
export default AsyncBoundary;
