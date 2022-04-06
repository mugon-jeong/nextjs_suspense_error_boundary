import axios from "axios";
import Cookies from "js-cookie";

class CustomAxios {
  instance = () => {
    const accessToken = Cookies.get("access_token");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    return axios.create({
      headers,
    });
  };
}
export default new CustomAxios();
