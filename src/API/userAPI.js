import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  authorization: "Bearer " + cookies.get("accessToken"),
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
export const blockUser = async (id) => {
  try {
    const resp = await axios.post("http://localhost:8090/api/block/" + id, {
      headers: headers,
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};
