import axios from "axios";

export const getAllRole = async () => {
  try {
    const resp = await axios.get("/api/role/list");
    return resp.data;
  } catch (error) {
    return [];
  }
};
