import { courses } from "../TestData/data";
export const create = async (body) => {
  //console.log(body);
  return 200;
};
export const filter = async (body) => {
  const { language, framework, position, page } = body;

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
