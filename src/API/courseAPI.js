import { courses } from "../TestData/data";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

export const create = async (body) => {
  return 200;
};

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  Authorization: "Bearer " + cookies.get("accessToken"),
};

export const getAllUsers = async () => {
  try {
    const resp = await axios.get("http://localhost:8090/api/course/list", {
      headers: headers,
    });

    return resp.data;
  } catch (error) {
    return [];
  }
};

export const filter = async (body) => {
  const { language, framework, position, page } = body;

  // let data = getAllUsers();
  let data = courses;

  if (language.length) {
    data = data.filter((e) => language.includes(e.language));
  }
  if (framework.length) {
    data = data.filter((e) => framework.includes(e.framework));
  }
  if (position.length) {
    data = data.filter((e) => position.includes(e.position));
  }
  const resp = {
    list: data.slice(
      (page - 1 > 0 ? page - 1 : 0) * 4,
      (page - 1 > 0 ? page - 1 : 0) * 4 + 4
    ),
    pages: Math.round(data.length / 4),
  };
  return resp;
};
