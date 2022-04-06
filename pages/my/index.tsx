import { NextPage } from "next";
import { useFetchUserInfo } from "../../module/auth/AuthService";
import React, { Suspense } from "react";
import SSRSafeSuspense from "../../components/SSRSafeSuspense";
import UserInfo from "../../module/auth/ui/UserInfo";
import AsyncBoundaryWithQuery from "../../util/error/boundries/AsyncBoundaryWithQuery";
import ErrorBoundary from "../../util/error/boundries/ErrorBoundary";

const MyPage: NextPage = () => {
  return (
    <>
      <ErrorBoundary
        renderFallback={(params) => <div>error</div>}
        reset={() => {}}
      >
        <SSRSafeSuspense fallback={<div>Loading</div>}>
          <UserInfo />
        </SSRSafeSuspense>
      </ErrorBoundary>

      {/*<UserInfo />*/}
    </>
  );
};
export default MyPage;
