import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  Authorization: "Bearer " + cookies.get("accessToken"),
};

export const create = async (body) => {
  const {
    name,
    startDate,
    descriptions,
    language,
    framework,
    position,
    userId,
  } = body;
  try {
    const resp = await axios.post(
      "http://localhost:8090/api/course/create",
      {
        name: name,
        description: descriptions,
        status: 1,
        ownerId: userId,
        openTime: new Date(startDate),
        language: language[0],
        framework: framework[0],
        position: position[0],
        createdDate: new Date(),
        modifiedDate: new Date(),
      },
      {
        headers: headers,
      }
    );
    return 201;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllCourses = async () => {
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

  let data = await getAllCourses();
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
      (page - 1 > 0 ? page - 1 : 0) * 10,
      (page - 1 > 0 ? page - 1 : 0) * 10 + 10
    ),
    pages: Math.round(data.length / 10),
  };
  return resp;
};
