import { ReactChild } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

type TestRendererProps = {
  children: ReactChild | ReactChild[];
  queryClient?: QueryClient;
};
function TestBoundary({
  queryClient = new QueryClient({}),
  children,
}: TestRendererProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TestBoundary;
