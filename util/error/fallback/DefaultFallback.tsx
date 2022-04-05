import { RenderFallbackParams } from "../boundries/ErrorBoundary";

function DefaultFallback({ error, reset }: RenderFallbackParams) {
  const resetError = () => {
    if (reset !== undefined) {
      reset();
    }
  };
  return (
    <>
      <div>{error.response.status}</div>
      <button onClick={resetError}>재시도</button>
    </>
  );
}
export default DefaultFallback;
