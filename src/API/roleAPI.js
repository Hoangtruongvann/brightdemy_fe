import axios from "axios";

//Get all role
export const getAllRole = async () => {
  try {
    const resp = await axios.get("/api/role/list");
    return resp.data;
  } catch (error) {
    return [];
  }
};
//Create new role
export const createRole = async (name, description) => {
  try {
    const resp = await axios.post("/api/role/create", {
      name: name,
      description: description,
    });
    return resp;
  } catch (error) {
    return null;
  }
};
