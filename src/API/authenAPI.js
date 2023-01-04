import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  Authorization: "Bearer " + cookies.get("accessToken"),
};

export const login = async (username, password) => {
  try {
    const resp = await axios.post("http://localhost:8090/login", {
      username: username,
      password: password,
    });
    return resp;
  } catch (error) {
    return null;
  }
};
export const auth = async () => {
  try {
    const user = await axios.post(
      "http://localhost:8090/api/user/get-by-token?token=" +
        cookies.get("accessToken")
    );
    const role = await axios.get(
      "http://localhost:8090/api/role/" + user.data.roleId
    );
    return { user: user.data, role: role.data };
  } catch (error) {
    return { user: null, role: null };
  }
};
export const register = async (username, password, fullName, email) => {
  try {
    const resp = await axios.post(
      "http://localhost:8090/api/user/register",
      {
        username: username,
        password: password,
        fullName: fullName,
        email: email,
      },
      {
        headers: headers,
      }
    );
    return resp;
  } catch (error) {
    return null;
  }
};
