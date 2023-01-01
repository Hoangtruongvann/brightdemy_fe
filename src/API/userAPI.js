import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  Authorization: "Bearer " + cookies.get("accessToken"),
};
export const getAllUsers = async () => {
  try {
    const resp = await axios.get("http://localhost:8090/api/user/list", {
      headers: headers,
    });

    return resp.data;
  } catch (error) {
    return [];
  }
};
