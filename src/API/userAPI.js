import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
  "accessToken"
)}`;
//Header for request
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
};
export const getAllUsers = async () => {
  try {
    const resp = await axios.get("/api/user/list", {
      headers: headers,
    });

    return resp.data;
  } catch (error) {
    return [];
  }
};
// Block user
export const blockUser = async (id) => {
  try {
    const resp = await axios.post("/api/block/" + id, {
      headers: { Authorization: `Bearer ${cookies.get("accessToken")}` },
    });

    return resp.status;
  } catch (error) {
    return 400;
  }
};
// Active user
export const activeUser = async (id) => {
  try {
    const resp = await axios.post("/api/active/" + id, {
      headers: { Authorization: `Bearer ${cookies.get("accessToken")}` },
    });

    return resp.status;
  } catch (error) {
    return 400;
  }
};
//Create user
export const createUser = async (username, password, fullName, email, role) => {
  try {
    const resp = await axios.post("/api/admin/create", {
      username: username,
      password: password,
      fullName: fullName,
      email: email,
      role: role,
    });

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};
//update user
export const updateUser = async (username, password, fullName, email, role) => {
  try {
    const resp = await axios.put("/api/user/update", {
      username: username,
      password: password,
      fullName: fullName,
      email: email,
      role: role,
    });

    return resp;
  } catch (error) {
    return null;
  }
};
