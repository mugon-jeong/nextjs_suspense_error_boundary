import { useFetchUserInfo } from "../AuthService";
import axios from "axios";

const UserInfo = () => {
  const { data } = useFetchUserInfo({
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
    retry: false,
    suspense: true,
  });
  return (
    <>
      <div>
        <h4>{JSON.stringify(data)}</h4>
      </div>
    </>
  );
};
export default UserInfo;
